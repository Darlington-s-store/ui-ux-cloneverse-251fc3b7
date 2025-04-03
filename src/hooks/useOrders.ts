
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Json } from '@/integrations/supabase/types';

export interface OrderItem {
  product_id: string;
  quantity: number;
  price: number;
  selected_size?: string;
  selected_color?: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  order_number: string;
  user_id: string;
  status: string;
  payment_status: string;
  payment_method: string;
  total: number;
  shipping_address: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface OrderWithItems extends Order {
  items: Array<{
    id: string;
    product_id: string;
    quantity: number;
    price: number;
    selected_size?: string;
    selected_color?: string;
    product: any;
  }>;
}

export const useOrders = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<OrderWithItems | null>(null);

  const fetchUserOrders = async () => {
    if (!user) {
      toast.error('You must be logged in to view orders');
      return [];
    }

    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      // Transform the data to match our Order interface
      const transformedOrders: Order[] = (data || []).map(order => ({
        ...order,
        shipping_address: order.shipping_address as Record<string, any>
      }));
      
      setOrders(transformedOrders);
      return transformedOrders;
    } catch (error: any) {
      console.error('Error fetching orders:', error);
      toast.error(error.message || 'Failed to load orders');
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const fetchOrderDetails = async (orderId: string) => {
    if (!user) {
      toast.error('You must be logged in to view order details');
      return null;
    }

    try {
      setIsLoading(true);
      
      // Fetch the order
      const { data: order, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .eq('user_id', user.id)
        .single();
        
      if (error) throw error;
      
      if (!order) {
        throw new Error('Order not found');
      }
      
      // Fetch the order items with product details
      const { data: orderItems, error: itemsError } = await supabase
        .from('order_items')
        .select(`
          *,
          products (*)
        `)
        .eq('order_id', orderId);
        
      if (itemsError) throw itemsError;
      
      // Transform the items to match our interface
      const transformedItems = (orderItems || []).map(item => ({
        id: item.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
        selected_size: item.selected_size,
        selected_color: item.selected_color,
        product: item.products // Rename products to product
      }));
      
      // Create the full order object with items
      const orderWithItems: OrderWithItems = {
        ...order,
        shipping_address: order.shipping_address as Record<string, any>,
        items: transformedItems
      };
      
      setCurrentOrder(orderWithItems);
      return orderWithItems;
    } catch (error: any) {
      console.error('Error fetching order details:', error);
      toast.error(error.message || 'Failed to load order details');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchOrderItems = async (orderId: string) => {
    try {
      const { data, error } = await supabase
        .from('order_items')
        .select(`
          *,
          products (*)
        `)
        .eq('order_id', orderId);
        
      if (error) throw error;
      
      // Transform to match our expected format
      return (data || []).map(item => ({
        id: item.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
        selected_size: item.selected_size,
        selected_color: item.selected_color,
        product: item.products // Rename products to product
      }));
    } catch (error: any) {
      console.error('Error fetching order items:', error);
      toast.error(error.message || 'Failed to load order items');
      return [];
    }
  };

  const cancelOrder = async (orderId: string) => {
    if (!user) {
      toast.error('You must be logged in to cancel an order');
      return false;
    }

    try {
      setIsLoading(true);
      
      // Check if the order exists and belongs to the user
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .eq('user_id', user.id)
        .single();
        
      if (orderError) throw orderError;
      
      if (!order) {
        throw new Error('Order not found');
      }
      
      // Check if the order can be cancelled (only processing orders can be cancelled)
      if (order.status !== 'processing') {
        throw new Error(`Cannot cancel order with status: ${order.status}`);
      }
      
      // Update the order status
      const { error } = await supabase
        .from('orders')
        .update({ status: 'cancelled' })
        .eq('id', orderId)
        .eq('user_id', user.id);
        
      if (error) throw error;
      
      // Refresh orders list
      await fetchUserOrders();
      
      toast.success('Order cancelled successfully');
      return true;
    } catch (error: any) {
      console.error('Error cancelling order:', error);
      toast.error(error.message || 'Failed to cancel order');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const placeOrder = async (
    orderItems: OrderItem[],
    shippingAddress: ShippingAddress,
    total: number,
    paymentMethod: string,
    paymentStatus: 'paid' | 'pending' = 'pending'
  ) => {
    if (!user) {
      toast.error('You must be logged in to place an order');
      return null;
    }

    try {
      setIsLoading(true);
      
      // Generate order number
      const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      
      // Convert ShippingAddress to a JSON object that matches the Json type
      const shippingAddressJson: Record<string, Json> = {
        firstName: shippingAddress.firstName,
        lastName: shippingAddress.lastName,
        email: shippingAddress.email,
        phoneNumber: shippingAddress.phoneNumber || null,
        streetAddress: shippingAddress.streetAddress,
        city: shippingAddress.city,
        state: shippingAddress.state,
        zipCode: shippingAddress.zipCode,
        country: shippingAddress.country
      };
      
      // Create the order
      const { data: order, error } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          order_number: orderNumber,
          status: 'processing',
          total,
          payment_method: paymentMethod,
          payment_status: paymentStatus,
          shipping_address: shippingAddressJson
        })
        .select()
        .single();
        
      if (error) throw error;
      
      if (!order) throw new Error('Failed to create order');
      
      // Insert order items
      const mappedOrderItems = orderItems.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
        selected_size: item.selected_size,
        selected_color: item.selected_color
      }));
      
      const { error: orderItemsError } = await supabase
        .from('order_items')
        .insert(mappedOrderItems);
        
      if (orderItemsError) throw orderItemsError;
      
      toast.success('Order placed successfully!');
      return {
        ...order,
        shipping_address: order.shipping_address as Record<string, any>
      };
    } catch (error: any) {
      console.error('Error placing order:', error);
      toast.error(error.message || 'Failed to place order');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const trackOrderStatus = async (orderNumber: string) => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('order_number', orderNumber)
        .single();
        
      if (error) {
        if (error.code === 'PGRST116') {
          throw new Error('Order not found');
        }
        throw error;
      }
      
      return data;
    } catch (error: any) {
      console.error('Error tracking order:', error);
      toast.error(error.message || 'Failed to find order');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    orders,
    currentOrder,
    isLoading,
    fetchUserOrders,
    fetchOrderItems,
    fetchOrderDetails,
    placeOrder,
    cancelOrder,
    trackOrderStatus
  };
};


import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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

export const useOrders = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);

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
      
      setOrders(data || []);
      return data;
    } catch (error: any) {
      console.error('Error fetching orders:', error);
      toast.error(error.message || 'Failed to load orders');
      return [];
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
      
      return data;
    } catch (error: any) {
      console.error('Error fetching order items:', error);
      toast.error(error.message || 'Failed to load order items');
      return [];
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
          shipping_address: shippingAddress
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
      return order;
    } catch (error: any) {
      console.error('Error placing order:', error);
      toast.error(error.message || 'Failed to place order');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    orders,
    isLoading,
    fetchUserOrders,
    fetchOrderItems,
    placeOrder
  };
};

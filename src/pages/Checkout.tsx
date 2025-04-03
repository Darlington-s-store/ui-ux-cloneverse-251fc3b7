
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { useAuth } from '../context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useOrders } from '@/hooks/useOrders';

const Checkout = () => {
  const { user, profile, isLoading } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const { placeOrder } = useOrders();
  
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error('Please login to checkout');
      navigate('/login');
    } else if (user) {
      fetchCart();
    }
  }, [user, isLoading, navigate]);
  
  const fetchCart = async () => {
    try {
      setIsCartLoading(true);
      
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          id,
          quantity,
          selected_color,
          selected_size,
          products (
            id,
            name,
            price,
            image
          )
        `)
        .eq('user_id', user?.id);
        
      if (error) throw error;
      
      setCartItems(data || []);
    } catch (error: any) {
      console.error('Error fetching cart:', error);
      toast.error(error.message || 'Failed to load cart');
    } finally {
      setIsCartLoading(false);
    }
  };
  
  const clearCart = async () => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user?.id);
        
      if (error) throw error;
      
      setCartItems([]);
    } catch (error: any) {
      console.error('Error clearing cart:', error);
      toast.error(error.message || 'Failed to clear cart');
    }
  };
  
  const handlePlaceOrder = async (formData: any, paymentMethod: string) => {
    if (!user) {
      toast.error('Please login to checkout');
      navigate('/login');
      return;
    }
    
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulate payment processing based on method
      const processingTime = paymentMethod === 'cash' ? 1000 : 2000;
      
      setTimeout(async () => {
        try {
          // Prepare order items for the order
          const orderItems = cartItems.map(item => ({
            product_id: item.products.id,
            quantity: item.quantity,
            price: item.products.price,
            selected_size: item.selected_size,
            selected_color: item.selected_color
          }));
          
          // Place the order
          const order = await placeOrder(
            orderItems,
            formData,
            getCartTotal(),
            paymentMethod,
            paymentMethod === 'credit' || paymentMethod === 'paypal' ? 'paid' : 'pending'
          );
          
          if (!order) {
            throw new Error('Failed to create order');
          }
          
          // Clear cart
          await clearCart();
          
          // Redirect to success page
          navigate(`/order-success/${order.id}`);
        } catch (error: any) {
          console.error('Error placing order:', error);
          toast.error(error.message || 'Failed to place order. Please try again.');
        } finally {
          setIsProcessing(false);
        }
      }, processingTime);
      
    } catch (error: any) {
      console.error('Error placing order:', error);
      toast.error(error.message || 'Failed to place order. Please try again.');
      setIsProcessing(false);
    }
  };
  
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.products.price * item.quantity);
    }, 0);
  };
  
  const cartSubtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const cartTotal = cartSubtotal + shipping;
  
  // Convert cart items to the expected format for CheckoutForm
  const mappedCartItems = cartItems.map(item => ({
    id: item.products.id,
    name: item.products.name,
    price: item.products.price,
    quantity: item.quantity,
    image: item.products.image,
    color: item.selected_color,
    size: item.selected_size
  }));
  
  // Pre-populate form with user profile data if available
  const initialFormData = profile ? {
    firstName: profile.first_name || '',
    lastName: profile.last_name || '',
    email: user?.email || '',
    phoneNumber: profile.phone || '',
    streetAddress: profile.address || '',
    city: profile.city || '',
    state: profile.state || '',
    zipCode: profile.zip_code || '',
    country: profile.country || 'United States'
  } : undefined;
  
  if (isLoading || isCartLoading) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          Loading...
        </div>
      </Layout>
    );
  }
  
  if (!user) {
    return null; // Will redirect in useEffect
  }
  
  if (cartItems.length === 0 && !isCartLoading) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="mb-6">Add some items to your cart before checking out.</p>
          <button 
            onClick={() => navigate('/shop')}
            className="btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Cart', path: '/cart' },
          { label: 'Checkout', path: '/checkout' }
        ]} 
      />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <CheckoutForm 
          cartItems={mappedCartItems}
          subtotal={cartSubtotal}
          shipping={shipping}
          total={cartTotal}
          isProcessing={isProcessing}
          onPlaceOrder={handlePlaceOrder}
          initialFormData={initialFormData}
        />
      </div>
    </Layout>
  );
};

export default Checkout;


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { useProducts } from '../context/ProductsContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useProducts();
  const { user, profile, isLoading } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error('Please login to checkout');
      navigate('/login');
    }
  }, [user, isLoading, navigate]);
  
  const handlePlaceOrder = async (formData: any, paymentMethod: string) => {
    if (!user) {
      toast.error('Please login to checkout');
      navigate('/login');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulate payment processing based on method
      const processingTime = paymentMethod === 'cash' ? 1000 : 2000;
      
      setTimeout(async () => {
        try {
          // Generate order number
          const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
          
          // Place the order in Supabase
          const { data: order, error } = await supabase
            .from('orders')
            .insert({
              user_id: user.id,
              order_number: orderNumber,
              status: 'processing',
              total: getCartTotal(),
              payment_method: paymentMethod,
              payment_status: paymentMethod === 'credit' || paymentMethod === 'paypal' ? 'paid' : 'pending',
              shipping_address: formData
            })
            .select()
            .single();
            
          if (error) throw error;
          
          // Insert order items
          const orderItems = cartItems.map(item => ({
            order_id: order.id,
            product_id: item.product.id,
            quantity: item.quantity,
            price: item.selectedSize?.price || item.product.price,
            selected_size: item.selectedSize?.name,
            selected_color: item.selectedColor
          }));
          
          const { error: orderItemsError } = await supabase
            .from('order_items')
            .insert(orderItems);
            
          if (orderItemsError) throw orderItemsError;
          
          // Clear cart
          clearCart();
          
          // Show success message
          toast.success('Order placed successfully!');
          
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
  
  const cartSubtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const cartTotal = cartSubtotal + shipping;
  
  // Convert cart items to the expected format for CheckoutForm
  const mappedCartItems = cartItems.map(item => ({
    id: item.product.id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
    image: item.product.image,
    color: item.selectedColor,
    size: item.selectedSize?.name
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
  
  if (isLoading) {
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

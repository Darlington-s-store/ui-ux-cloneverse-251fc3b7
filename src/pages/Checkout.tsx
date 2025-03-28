
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { useProducts } from '../context/ProductsContext';
import { toast } from 'sonner';

const Checkout = () => {
  const { cartItems, getCartTotal } = useProducts();
  const [shippingCost] = useState<number | 'Free'>('Free'); // Can be updated based on shipping method selection
  const navigate = useNavigate();
  const subtotal = getCartTotal();
  
  useEffect(() => {
    // Redirect to cart if cart is empty
    if (cartItems.length === 0) {
      navigate('/cart');
      toast.error('Your cart is empty!');
    }
  }, [cartItems, navigate]);
  
  const handlePlaceOrder = (shippingInfo: any, paymentMethod: string, paymentStatus: 'pending' | 'paid') => {
    try {
      const { placeOrder } = useProducts();
      const orderId = placeOrder(shippingInfo, paymentMethod, paymentStatus);
      
      // Redirect to success page with the order ID
      navigate(`/order-success?orderId=${orderId}`);
      toast.success('Order placed successfully!');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
      console.error('Order placement error:', error);
    }
  };
  
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
          cartItems={cartItems}
          subtotal={subtotal}
          shipping={shippingCost}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </Layout>
  );
};

export default Checkout;

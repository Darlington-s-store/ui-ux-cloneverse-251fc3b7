
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { useProducts } from '../context/ProductsContext';
import { toast } from 'sonner';

const Checkout = () => {
  const { cartItems, getCartTotal } = useProducts();
  const navigate = useNavigate();
  const subtotal = getCartTotal();
  
  // If cart is empty, redirect to cart page
  useEffect(() => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty. Please add items before checkout.');
      navigate('/cart');
    }
  }, [cartItems, navigate]);
  
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
        <h1 className="text-3xl font-bold mb-8">Billing Details</h1>
        
        <CheckoutForm
          cartItems={cartItems}
          subtotal={subtotal}
          shipping="Free"
        />
      </div>
    </Layout>
  );
};

export default Checkout;

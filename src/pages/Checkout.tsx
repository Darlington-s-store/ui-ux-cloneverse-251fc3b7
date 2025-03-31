
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { useProducts } from '../context/ProductsContext';
import { toast } from 'sonner';

const Checkout = () => {
  const { cartItems, getCartTotal, placeOrder } = useProducts();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePlaceOrder = (formData: any, paymentMethod: string) => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing based on method
      const processingTime = paymentMethod === 'cash' ? 1000 : 2000;
      
      setTimeout(() => {
        // Place the order
        const orderId = placeOrder(
          formData, 
          paymentMethod, 
          paymentMethod === 'credit' || paymentMethod === 'paypal' ? 'paid' : 'pending'
        );
        
        // Show success message
        toast.success('Payment processed successfully!');
        
        // Short delay before redirecting to success page
        setTimeout(() => {
          // Redirect to success page
          navigate(`/order-success/${orderId}`);
          setIsProcessing(false);
        }, 500);
      }, processingTime);
      
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to process payment. Please try again.');
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
        />
      </div>
    </Layout>
  );
};

export default Checkout;


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random order number
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Cart', path: '/cart' },
          { label: 'Checkout', path: '/checkout' },
          { label: 'Success', path: '/order-success' }
        ]} 
      />
      
      <div className="container-custom py-12">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Thank You For Your Order!</h1>
          <p className="text-gray-600 mb-4">
            Your order #{orderNumber} has been placed successfully.
          </p>
          <p className="text-gray-600 mb-8">
            We've sent you an email with your order details and tracking information.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-2">What happens next?</h3>
            <p className="text-sm text-gray-600">
              We'll process your order within 24 hours and notify you when it ships.
              You can track your order status in your account dashboard.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/')} variant="outline">
              Continue Shopping
            </Button>
            <Button onClick={() => navigate('/account')} variant="default">
              View Order Status
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;


import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import { Button } from '@/components/ui/button';
import { CheckCircle2, CreditCard, Wallet } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orders } = useProducts();
  
  // Try to get order ID from URL params
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');
  
  // Get the latest order if no order ID is provided
  const order = orderId 
    ? orders.find(o => o.id === orderId) 
    : orders.length > 0 ? orders[0] : null;
  
  const orderNumber = order?.id || Math.floor(100000 + Math.random() * 900000).toString();
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);
  
  // Helper to render payment method icon
  const renderPaymentMethodIcon = (method: string) => {
    switch(method) {
      case 'credit':
        return <CreditCard className="h-5 w-5 text-green-500 mr-1" />;
      case 'paypal':
        return <img src="https://images.unsplash.com/photo-1634403665481-74029226fa95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBheXBhbHxlbnwwfHwwfHx8MA%3D%3D" alt="PayPal" className="h-5 w-5 mr-1" />;
      case 'cash':
      default:
        return <Wallet className="h-5 w-5 text-green-500 mr-1" />;
    }
  };
  
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
          
          {order && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Order Date:</span>
                  <span>{new Date(order.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Items:</span>
                  <span>{order.items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span className="flex items-center">
                    {renderPaymentMethodIcon(order.paymentMethod)}
                    {order.paymentMethod === 'credit' ? 'Credit Card' : 
                     order.paymentMethod === 'paypal' ? 'PayPal' : 'Cash on Delivery'}
                  </span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
          
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

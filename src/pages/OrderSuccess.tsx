
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useAuth } from '../context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const OrderSuccess = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { user } = useAuth();
  const [order, setOrder] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);
  
  const fetchOrderDetails = async () => {
    try {
      setIsLoading(true);
      
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .single();
        
      if (orderError) throw orderError;
      
      // Fetch order items
      const { data: orderItems, error: itemsError } = await supabase
        .from('order_items')
        .select(`
          id,
          quantity,
          price,
          selected_color,
          selected_size,
          products (
            id,
            name,
            image
          )
        `)
        .eq('order_id', orderId);
        
      if (itemsError) throw itemsError;
      
      setOrder({
        ...orderData,
        items: orderItems
      });
    } catch (error: any) {
      console.error('Error fetching order:', error);
      toast.error(error.message || 'Failed to load order details');
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          Loading order details...
        </div>
      </Layout>
    );
  }
  
  if (!order) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the order you're looking for.</p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </Layout>
    );
  }
  
  const formattedDate = order.created_at ? new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(order.created_at)) : 'N/A';
  
  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-50 py-6 px-6 text-center border-b">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Order Successful!</h1>
            <p className="text-gray-600 mt-2">
              Thank you for your purchase. Your order has been received.
            </p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">Order Information</h2>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Order Number:</span> {order.order_number}</p>
                  <p><span className="font-medium">Date:</span> {formattedDate}</p>
                  <p>
                    <span className="font-medium">Status:</span> 
                    <span className={`ml-1 ${
                      order.status === 'delivered' 
                        ? 'text-green-600' 
                        : 'text-orange-500'
                    }`}>
                      {order.status}
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">Payment Information</h2>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Method:</span> {order.payment_method}</p>
                  <p>
                    <span className="font-medium">Status:</span> 
                    <span className={`ml-1 ${
                      order.payment_status === 'paid' 
                        ? 'text-green-600' 
                        : 'text-orange-500'
                    }`}>
                      {order.payment_status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {order.items.map((item: any) => (
                  <div key={item.id} className="flex items-center pb-2 border-b border-gray-100">
                    <div className="w-16 h-16 flex-shrink-0 mr-4 bg-gray-100 rounded">
                      <img src={item.products.image} alt={item.products.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.products.name}</h3>
                      <div className="text-sm text-gray-500">
                        <div className="flex flex-wrap gap-4">
                          <span>Qty: {item.quantity}</span>
                          {item.selected_color && (
                            <span>
                              Color: <span className="inline-block w-3 h-3 rounded-full ml-1" style={{ backgroundColor: item.selected_color }}></span>
                            </span>
                          )}
                          {item.selected_size && (
                            <span>Size: {item.selected_size}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2 mt-2">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
              <div className="text-sm">
                <p>{order.shipping_address.firstName} {order.shipping_address.lastName}</p>
                <p>{order.shipping_address.streetAddress}</p>
                <p>{order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.zipCode}</p>
                <p>{order.shipping_address.country}</p>
                {order.shipping_address.phoneNumber && <p>Phone: {order.shipping_address.phoneNumber}</p>}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/shop" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;

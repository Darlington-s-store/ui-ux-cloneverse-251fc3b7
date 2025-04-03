
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOrders } from '@/hooks/useOrders';
import { formatDate } from '@/lib/utils';

const OrderHistory = () => {
  const { isLoading, fetchUserOrders } = useOrders();
  const [orders, setOrders] = useState<any[]>([]);
  
  useEffect(() => {
    loadOrders();
  }, []);
  
  const loadOrders = async () => {
    const data = await fetchUserOrders();
    setOrders(data || []);
  };
  
  if (isLoading) {
    return <div className="py-4 text-center">Loading your orders...</div>;
  }
  
  if (orders.length === 0) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-xl font-medium mb-4">No Orders Yet</h2>
        <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
        <Link to="/shop" className="btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center flex-wrap gap-4">
              <div>
                <div className="text-sm text-gray-500">Order #{order.order_number}</div>
                <div className="text-sm">{formatDate(order.created_at)}</div>
              </div>
              
              <div className="space-x-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  order.status === 'delivered' 
                    ? 'bg-green-100 text-green-800' 
                    : order.status === 'shipped' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
                
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  order.payment_status === 'paid' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <div className="font-medium">Total Amount</div>
                  <div className="text-2xl font-bold">${parseFloat(order.total).toFixed(2)}</div>
                </div>
                
                <div className="text-right">
                  <div className="font-medium">Payment Method</div>
                  <div className="text-gray-700">{order.payment_method}</div>
                </div>
              </div>
              
              <Link 
                to={`/order-success/${order.id}`} 
                className="btn-primary w-full text-center"
              >
                View Order Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;

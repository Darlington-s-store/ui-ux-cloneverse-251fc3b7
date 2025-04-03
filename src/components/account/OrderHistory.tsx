import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOrders } from '@/hooks/useOrders';
import { formatDate, formatPrice, getOrderStatusColor, getPaymentStatusColor } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AlertCircle, ShoppingBag, TruckIcon, CheckCircle, XCircle } from 'lucide-react';

const OrderHistory = () => {
  const { isLoading, fetchUserOrders, cancelOrder } = useOrders();
  const [orders, setOrders] = useState<any[]>([]);
  const [cancellingOrderId, setCancellingOrderId] = useState<string | null>(null);
  
  useEffect(() => {
    loadOrders();
  }, []);
  
  const loadOrders = async () => {
    const data = await fetchUserOrders();
    setOrders(data || []);
  };
  
  const handleCancelOrder = async (orderId: string) => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      setCancellingOrderId(orderId);
      const success = await cancelOrder(orderId);
      if (success) {
        loadOrders();
      }
      setCancellingOrderId(null);
    }
  };
  
  const getOrderStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'shipped':
        return <TruckIcon className="w-4 h-4 text-blue-600" />;
      case 'processing':
        return <ShoppingBag className="w-4 h-4 text-yellow-600" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
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
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getOrderStatusColor(order.status)}`}>
                  {getOrderStatusIcon(order.status)}
                  <span className="ml-1">
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </span>
                
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPaymentStatusColor(order.payment_status)}`}>
                  {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <div className="font-medium">Total Amount</div>
                  <div className="text-2xl font-bold">{formatPrice(order.total)}</div>
                </div>
                
                <div className="text-right">
                  <div className="font-medium">Payment Method</div>
                  <div className="text-gray-700">{order.payment_method}</div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-2">
                <Link 
                  to={`/order-success/${order.id}`} 
                  className="btn-primary w-full text-center"
                >
                  View Order Details
                </Link>
                
                {order.status === 'processing' && (
                  <Button 
                    variant="outline"
                    onClick={() => handleCancelOrder(order.id)}
                    disabled={cancellingOrderId === order.id}
                    className="w-full"
                  >
                    {cancellingOrderId === order.id ? 'Cancelling...' : 'Cancel Order'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;

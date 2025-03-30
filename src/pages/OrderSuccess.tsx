
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useProducts, Order } from '../context/ProductsContext';

const OrderSuccess = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { orders } = useProducts();
  const [order, setOrder] = useState<Order | null>(null);
  
  useEffect(() => {
    const foundOrder = orders.find(o => o.id === orderId);
    if (foundOrder) {
      setOrder(foundOrder);
    }
  }, [orderId, orders]);
  
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
  
  const orderDate = order.orderDate || order.date;
  const formattedDate = orderDate ? new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(orderDate)) : 'N/A';
  
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
                  <p><span className="font-medium">Order Number:</span> {order.id}</p>
                  <p><span className="font-medium">Date:</span> {formattedDate}</p>
                  <p>
                    <span className="font-medium">Status:</span> 
                    <span className={`ml-1 ${
                      (order.orderStatus || order.status) === 'delivered' 
                        ? 'text-green-600' 
                        : 'text-orange-500'
                    }`}>
                      {order.orderStatus || order.status}
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">Payment Information</h2>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Method:</span> {order.paymentMethod}</p>
                  <p>
                    <span className="font-medium">Status:</span> 
                    <span className={`ml-1 ${
                      order.paymentStatus === 'paid' 
                        ? 'text-green-600' 
                        : 'text-orange-500'
                    }`}>
                      {order.paymentStatus}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id || item.product.id} className={`flex items-center ${item.color || item.selectedColor || item.size || item.selectedSize ? 'pb-2 border-b border-gray-100' : ''}`}>
                    <div className="w-16 h-16 flex-shrink-0 mr-4 bg-gray-100 rounded">
                      <img src={item.image || item.product.image} alt={item.name || item.product.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name || item.product.name}</h3>
                      <div className="text-sm text-gray-500">
                        <div className="flex flex-wrap gap-4">
                          <span>Qty: {item.quantity}</span>
                          {(item.color || item.selectedColor) && (
                            <span>
                              Color: <span className="inline-block w-3 h-3 rounded-full ml-1" style={{ backgroundColor: item.color || item.selectedColor }}></span>
                            </span>
                          )}
                          {(item.size || item.selectedSize?.name) && (
                            <span>Size: {item.size || item.selectedSize?.name}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      ${((item.price || item.product.price) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${(order.totalAmount || order.total || 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2 mt-2">
                  <span>Total:</span>
                  <span>${(order.totalAmount || order.total || 0).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
              <div className="text-sm">
                <p>{order.shippingInfo?.name || order.shippingAddress?.name}</p>
                <p>{order.shippingInfo?.street || order.shippingAddress?.street}</p>
                <p>{order.shippingInfo?.city || order.shippingAddress?.city}, {order.shippingInfo?.state || order.shippingAddress?.state} {order.shippingInfo?.zip || order.shippingAddress?.zip}</p>
                <p>{order.shippingInfo?.country || order.shippingAddress?.country}</p>
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

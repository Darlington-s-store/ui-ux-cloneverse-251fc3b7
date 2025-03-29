
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useProducts } from '../context/ProductsContext';
import { ChevronRight, CheckCircle, PackageCheck, Truck, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Order } from '../context/ProductsContext';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const { getOrderById } = useProducts();
  
  useEffect(() => {
    // Extract order ID from query params
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('orderId');
    
    if (id) {
      setOrderId(id);
      const foundOrder = getOrderById(id);
      
      if (foundOrder) {
        setOrder(foundOrder);
      } else {
        // Order not found, redirect to home
        navigate('/');
      }
    } else {
      // No order ID, redirect to home
      navigate('/');
    }
  }, [location, navigate, getOrderById]);
  
  if (!order) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Thank You For Your Order!</h1>
            <p className="text-gray-600">Your order #{orderId} has been placed successfully</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 className="font-semibold">Order Information</h3>
                <p className="text-gray-600">Order ID: #{orderId}</p>
                <p className="text-gray-600">Date: {new Date(order.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="font-semibold">Payment Status</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  order.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                </span>
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="font-semibold">Order Status</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 pb-4">
              <h3 className="font-semibold mb-4">Order Items</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.size}`} className="flex items-center">
                    <div className="w-16 h-16 flex-shrink-0 mr-4 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      {item.quantity > 1 && (
                        <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {item.quantity}
                        </span>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{item.name}</h4>
                      {(item.color || item.size) && (
                        <p className="text-sm text-gray-500">
                          {item.color && `Color: ${item.color}`}
                          {item.color && item.size && ' | '}
                          {item.size && `Size: ${item.size}`}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0 ml-4 text-right">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h3 className="font-semibold mb-4">Shipping Address</h3>
            <p className="mb-1">{order.shippingAddress.name}</p>
            <p className="mb-1">{order.shippingAddress.address}</p>
            <p className="mb-1">{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
            <p>{order.shippingAddress.country}</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto order-2 md:order-1">
              <Link to="/" className="flex items-center text-exclusive hover:underline">
                <Home size={16} className="mr-1" /> Return to Home
              </Link>
            </div>
            <Button asChild className="w-full md:w-auto order-1 md:order-2">
              <Link to="/shop">
                Continue Shopping <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;

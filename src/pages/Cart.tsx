
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useProducts } from '../context/ProductsContext';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity, getCartTotal } = useProducts();
  const [shippingCost, setShippingCost] = useState<number | 'Free'>(0);
  const navigate = useNavigate();
  
  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
  };
  
  const handleRemoveItem = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      removeFromCart(id);
      toast.success(`${item.name} removed from cart`);
    }
  };
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };
  
  const subtotal = getCartTotal();
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Cart', path: '/cart' }
        ]} 
      />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6 flex justify-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-gray-500" />
              </div>
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button onClick={() => navigate('/shop')} className="btn-primary">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-12 border-b border-gray-200 p-4 bg-gray-50 text-sm font-medium text-gray-600">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>
                
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <CartSummary 
                subtotal={subtotal} 
                shipping={shippingCost} 
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;

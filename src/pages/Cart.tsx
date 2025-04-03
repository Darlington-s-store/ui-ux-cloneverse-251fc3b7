
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, AlertCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useProducts } from '../context/ProductsContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Cart = () => {
  const { user, isLoading: authLoading } = useAuth();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      fetchCart();
    } else if (!authLoading && !user) {
      // Check from localStorage if not logged in
      // This is a fallback for guest users
      const savedCart = localStorage.getItem('cartItems');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
      setIsCartLoading(false);
    }
  }, [user, authLoading]);
  
  const fetchCart = async () => {
    try {
      setIsCartLoading(true);
      
      // Fetch cart items with product details
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          id,
          quantity,
          selected_color,
          selected_size,
          products (
            id,
            name,
            price,
            image
          )
        `)
        .eq('user_id', user?.id);
        
      if (error) throw error;
      
      setCartItems(data || []);
    } catch (error: any) {
      console.error('Error fetching cart:', error);
      toast.error(error.message || 'Failed to load cart');
    } finally {
      setIsCartLoading(false);
    }
  };
  
  const handleRemoveItem = async (productId: string) => {
    try {
      const item = cartItems.find(item => item.products.id === productId);
      if (!item) return;
      
      if (user) {
        // Remove from database if logged in
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('id', item.id);
          
        if (error) throw error;
      } else {
        // Remove from localStorage if not logged in
        const updatedCart = cartItems.filter(i => i.products.id !== productId);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      }
      
      setCartItems(prev => prev.filter(i => i.products.id !== productId));
      toast.success(`${item.products.name} removed from cart`);
    } catch (error: any) {
      console.error('Error removing from cart:', error);
      toast.error(error.message || 'Failed to remove from cart');
    }
  };
  
  const handleUpdateQuantity = async (productId: string, quantity: number) => {
    try {
      const itemIndex = cartItems.findIndex(item => item.products.id === productId);
      if (itemIndex === -1) return;
      
      if (user) {
        // Update in database if logged in
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity })
          .eq('id', cartItems[itemIndex].id);
          
        if (error) throw error;
      }
      
      // Update local state
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity = quantity;
      setCartItems(updatedCartItems);
      
      // Update localStorage if not logged in
      if (!user) {
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      }
    } catch (error: any) {
      console.error('Error updating cart quantity:', error);
      toast.error(error.message || 'Failed to update quantity');
    }
  };
  
  const handleCheckout = () => {
    if (!user) {
      // Redirect to login if not logged in
      toast.error('Please login to checkout');
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };
  
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.products.price * item.quantity);
    }, 0);
  };
  
  const cartSubtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const cartTotal = cartSubtotal + shipping;
  
  if (authLoading || isCartLoading) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          Loading...
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Cart', path: '/cart' }
        ]} 
      />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.products.id}
                      id={item.products.id}
                      name={item.products.name}
                      price={item.products.price}
                      image={item.products.image}
                      quantity={item.quantity}
                      onRemove={handleRemoveItem}
                      onUpdateQuantity={handleUpdateQuantity}
                      color={item.selected_color}
                      size={item.selected_size}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Link to="/shop" className="text-exclusive hover:underline inline-flex items-center">
                  <span className="mr-2">←</span>
                  Continue Shopping
                </Link>
                
                <div className="flex items-center text-sm text-gray-500">
                  <AlertCircle size={16} className="mr-2" />
                  Prices may change depending on shipping method and taxes
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary
                subtotal={cartSubtotal}
                shipping={shipping}
                total={cartTotal}
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

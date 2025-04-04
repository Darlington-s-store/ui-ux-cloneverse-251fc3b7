
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
  const { getProductById } = useProducts();
  
  useEffect(() => {
    if (authLoading) return; // Don't do anything while auth is loading
    
    const loadCart = async () => {
      setIsCartLoading(true);
      
      try {
        if (user) {
          // If user is logged in, fetch from Supabase
          await fetchCart();
        } else {
          // If not logged in, use localStorage
          const savedCart = localStorage.getItem('cartItems');
          if (savedCart) {
            try {
              const parsedCart = JSON.parse(savedCart);
              // Ensure we have valid cart items with product data
              const validCartItems = Array.isArray(parsedCart) ? parsedCart.filter(item => {
                return item && item.product && item.product.id && typeof item.product.price === 'number';
              }) : [];
              
              setCartItems(validCartItems);
            } catch (error) {
              console.error("Error parsing cart from localStorage:", error);
              setCartItems([]);
            }
          } else {
            setCartItems([]); // Empty cart if nothing in localStorage
          }
        }
      } catch (error) {
        console.error("Error loading cart:", error);
        toast.error("Failed to load your cart. Please try refreshing the page.");
      } finally {
        setIsCartLoading(false);
      }
    };
    
    loadCart();
  }, [user, authLoading]);
  
  const fetchCart = async () => {
    if (!user) return;
    
    try {
      // Fetch cart items with product details
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          id,
          quantity,
          selected_color,
          selected_size,
          product_id,
          products (
            id,
            name,
            price,
            image
          )
        `)
        .eq('user_id', user.id);
        
      if (error) {
        throw error;
      }
      
      // Process cart items to ensure they have the structure expected by CartItem component
      const processedCartItems = (data || []).map(item => {
        // Make sure we have product information
        if (!item.products || typeof item.products.price !== 'number') {
          const product = getProductById(item.product_id);
          if (!product) return null; // Skip if no product found
          
          return {
            id: item.id,
            products: {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image
            },
            quantity: item.quantity || 1,
            selected_color: item.selected_color,
            selected_size: item.selected_size
          };
        }
        
        return item;
      }).filter(Boolean); // Remove any nulls
      
      setCartItems(processedCartItems);
    } catch (error: any) {
      console.error('Error fetching cart:', error);
      toast.error(error.message || 'Failed to load cart');
    }
  };
  
  const handleRemoveItem = async (productId: string) => {
    try {
      const item = cartItems.find(item => (item.products?.id === productId) || (item.product?.id === productId));
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
        const updatedCart = cartItems.filter(i => 
          (i.products?.id !== productId) && (i.product?.id !== productId)
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      }
      
      setCartItems(prev => prev.filter(i => 
        (i.products?.id !== productId) && (i.product?.id !== productId)
      ));
      
      const productName = item.products?.name || item.product?.name || 'Item';
      toast.success(`${productName} removed from cart`);
    } catch (error: any) {
      console.error('Error removing from cart:', error);
      toast.error(error.message || 'Failed to remove from cart');
    }
  };
  
  const handleUpdateQuantity = async (productId: string, quantity: number) => {
    try {
      const itemIndex = cartItems.findIndex(item => 
        (item.products?.id === productId) || (item.product?.id === productId)
      );
      
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
    if (!cartItems || cartItems.length === 0) return 0;
    
    return cartItems.reduce((total, item) => {
      // Support both data structures (from localStorage and Supabase)
      if (item && item.products && typeof item.products.price === 'number' && typeof item.quantity === 'number') {
        return total + (item.products.price * item.quantity);
      } 
      
      if (item && item.product && typeof item.product.price === 'number' && typeof item.quantity === 'number') {
        return total + (item.product.price * item.quantity);
      }
      
      return total;
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
                  {cartItems.map((item) => {
                    // Handle both data structures: from localStorage (item.product) or Supabase (item.products)
                    const productData = item.products || item.product;
                    if (!productData || !productData.id) return null;
                    
                    return (
                      <CartItem
                        key={productData.id}
                        id={productData.id}
                        name={productData.name || 'Product Name Unavailable'}
                        price={typeof productData.price === 'number' ? productData.price : 0}
                        image={productData.image || ''}
                        quantity={item.quantity || 1}
                        onRemove={handleRemoveItem}
                        onUpdateQuantity={handleUpdateQuantity}
                        color={item.selected_color || item.selectedColor}
                        size={item.selected_size || (item.selectedSize?.name)}
                      />
                    );
                  })}
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
                shipping={'Free'}
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

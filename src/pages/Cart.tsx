
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, AlertCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useProducts } from '../context/ProductsContext';
import { toast } from 'sonner';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity, getCartTotal } = useProducts();
  const navigate = useNavigate();
  
  const handleRemoveItem = (productId: string) => {
    const item = cartItems.find(item => item.product.id === productId);
    if (item) {
      removeFromCart(productId);
      toast.success(`${item.product.name} removed from cart`);
    }
  };
  
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    updateCartQuantity(productId, quantity);
  };
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  const cartSubtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const cartTotal = cartSubtotal + shipping;
  
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
                      key={item.product.id}
                      id={item.product.id}
                      name={item.product.name}
                      price={item.product.price}
                      image={item.product.image}
                      quantity={item.quantity}
                      onRemove={handleRemoveItem}
                      onUpdateQuantity={handleUpdateQuantity}
                      color={item.selectedColor}
                      size={item.selectedSize?.name}
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


import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useProducts } from '../context/ProductsContext';

const Cart = () => {
  const { cartItems, updateCartQuantity, removeFromCart, getCartTotal } = useProducts();
  const [couponCode, setCouponCode] = useState('');
  
  // Calculate subtotal
  const subtotal = getCartTotal();
  
  // Apply coupon code
  const handleApplyCoupon = () => {
    // Coupon logic would go here
    toast.info("Coupon feature coming soon!");
  };
  
  // Update cart
  const handleUpdateCart = () => {
    toast.success("Cart updated successfully!");
  };
  
  return (
    <Layout>
      <Breadcrumb items={[{ label: 'Cart', path: '/cart' }]} />
      
      <div className="container-custom py-10">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                <div className="grid grid-cols-4 gap-6 pb-4 border-b border-gray-200">
                  <div className="col-span-1">Product</div>
                  <div className="col-span-1">Price</div>
                  <div className="col-span-1">Quantity</div>
                  <div className="col-span-1 text-right">Subtotal</div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      quantity={item.quantity}
                      onUpdateQuantity={updateCartQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">
              <div className="md:w-1/2 lg:w-1/3">
                <div className="flex space-x-4">
                  <Link to="/" className="btn-secondary flex-1">
                    Return To Shop
                  </Link>
                  <button onClick={handleUpdateCart} className="btn-secondary flex-1">
                    Update Cart
                  </button>
                </div>
                
                <div className="mt-6">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="input-primary flex-grow"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="bg-exclusive hover:bg-exclusive-dark text-white py-2 px-6 rounded-md transition-colors"
                    >
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 lg:w-1/3">
                <CartSummary subtotal={subtotal} shipping="Free" />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;

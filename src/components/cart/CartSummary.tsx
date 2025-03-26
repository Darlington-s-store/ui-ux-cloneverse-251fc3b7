
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CartSummaryProps {
  subtotal: number;
  shipping: number | 'Free';
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, shipping }) => {
  const total = typeof shipping === 'number' ? subtotal + shipping : subtotal;
  
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-6">Cart Total</h3>
      
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between mb-3">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium">
            {shipping === 'Free' ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between mb-6">
        <span className="text-gray-800 font-medium">Total:</span>
        <span className="text-gray-800 font-semibold">${total.toFixed(2)}</span>
      </div>
      
      <Link 
        to="/checkout"
        className="block text-center bg-exclusive text-white py-3 px-4 rounded-md hover:bg-exclusive-dark transition-colors w-full"
      >
        Proceed to checkout
      </Link>
    </div>
  );
};

export default CartSummary;

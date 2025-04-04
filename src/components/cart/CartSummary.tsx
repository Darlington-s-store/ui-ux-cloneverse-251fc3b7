
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X } from 'lucide-react';
import { toast } from 'sonner';

interface CartSummaryProps {
  subtotal: number;
  shipping: number | 'Free';
  total: number;
  onCheckout?: () => void; 
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, shipping, total, onCheckout }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [showCouponInput, setShowCouponInput] = useState(false);
  
  // Calculate total with discount - ensure we have valid numbers
  const safeSubtotal = typeof subtotal === 'number' ? subtotal : 0;
  const safeDiscount = typeof discount === 'number' ? discount : 0;
  const discountedSubtotal = safeSubtotal - safeDiscount;
  
  // Calculate final total
  const calculatedTotal = typeof shipping === 'number' 
    ? discountedSubtotal + shipping 
    : discountedSubtotal;
  
  // Use the calculated total as a fallback if provided total is invalid
  const displayTotal = typeof total === 'number' && !isNaN(total) ? total : calculatedTotal;
  
  const handleCouponApply = () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }
    
    // Example coupon validation (in a real app, this would be server-side)
    const validCoupons = {
      'SAVE10': 10,
      'SAVE20': 20,
      'SAVE30': 30
    };
    
    const couponKey = couponCode.toUpperCase();
    
    if (validCoupons[couponKey as keyof typeof validCoupons]) {
      const discountPercentage = validCoupons[couponKey as keyof typeof validCoupons];
      const discountAmount = (safeSubtotal * discountPercentage) / 100;
      
      setDiscount(discountAmount);
      setAppliedCoupon(couponCode);
      setShowCouponInput(false);
      toast.success(`Coupon applied: ${discountPercentage}% off`);
      setCouponCode('');
    } else {
      toast.error('Invalid coupon code');
    }
  };
  
  const removeCoupon = () => {
    setDiscount(0);
    setAppliedCoupon('');
    toast.success('Coupon removed');
  };

  // Use the onCheckout prop if provided, otherwise use default Link behavior
  const handleCheckoutClick = () => {
    if (onCheckout) {
      onCheckout();
    }
  };
  
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-6">Cart Total</h3>
      
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between mb-3">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">${safeSubtotal.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between mb-3 text-green-600">
            <span className="flex items-center">
              <CheckCircle size={16} className="mr-1" />
              Discount ({appliedCoupon}):
            </span>
            <span className="font-medium">-${safeDiscount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-medium">
            {shipping === 'Free' ? 'Free' : `$${typeof shipping === 'number' ? shipping.toFixed(2) : '0.00'}`}
          </span>
        </div>
      </div>
      
      <div className="mb-6">
        {!appliedCoupon && !showCouponInput && (
          <button 
            onClick={() => setShowCouponInput(true)}
            className="text-exclusive hover:underline text-sm mb-4"
          >
            Add coupon code
          </button>
        )}
        
        {showCouponInput && (
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-grow p-2 border border-gray-300 rounded-l-md"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button 
              onClick={handleCouponApply}
              className="bg-exclusive text-white px-3 rounded-r-md hover:bg-exclusive-dark"
            >
              Apply
            </button>
          </div>
        )}
        
        {appliedCoupon && (
          <div className="flex items-center justify-between bg-green-50 p-2 rounded mb-4">
            <div className="flex items-center text-green-600 text-sm">
              <CheckCircle size={16} className="mr-1" />
              Coupon <span className="font-semibold mx-1">{appliedCoupon}</span> applied
            </div>
            <button 
              onClick={removeCoupon}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>
      
      <div className="flex justify-between mb-6">
        <span className="text-gray-800 font-medium">Total:</span>
        <span className="text-gray-800 font-semibold">${displayTotal.toFixed(2)}</span>
      </div>
      
      {onCheckout ? (
        <button 
          onClick={handleCheckoutClick}
          className="block text-center bg-exclusive text-white py-3 px-4 rounded-md hover:bg-exclusive-dark transition-colors w-full"
        >
          Proceed to checkout
        </button>
      ) : (
        <Link 
          to="/checkout"
          className="block text-center bg-exclusive text-white py-3 px-4 rounded-md hover:bg-exclusive-dark transition-colors w-full"
        >
          Proceed to checkout
        </Link>
      )}
    </div>
  );
};

export default CartSummary;

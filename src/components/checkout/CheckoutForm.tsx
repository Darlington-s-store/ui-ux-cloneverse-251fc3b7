
import { useState } from 'react';
import { toast } from 'sonner';

interface CheckoutFormProps {
  cartItems: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  subtotal: number;
  shipping: number | 'Free';
  onPlaceOrder: (shippingInfo: any) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ cartItems, subtotal, shipping, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phoneNumber: '',
    email: '',
    saveInfo: false,
    paymentMethod: 'cash', // 'cash' or 'bank'
    couponCode: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: e.target.value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.streetAddress || !formData.city || !formData.phoneNumber || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Prepare shipping info for order
    const shippingInfo = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      address: formData.streetAddress,
      apartment: formData.apartment,
      city: formData.city,
      state: formData.state || 'CA',
      zipCode: formData.zipCode,
      country: formData.country
    };
    
    // Process order
    onPlaceOrder(shippingInfo);
  };
  
  const handleApplyCoupon = () => {
    if (!formData.couponCode) {
      toast.error('Please enter a coupon code');
      return;
    }
    
    // Process coupon
    toast.success('Coupon applied successfully!');
  };
  
  const total = typeof shipping === 'number' ? subtotal + shipping : subtotal;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Billing Details */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input-primary w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input-primary w-full"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="input-primary w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Street Address*</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="input-primary w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              className="input-primary w-full"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Town/City*</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="input-primary w-full"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="input-primary w-full"
                placeholder="CA"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="input-primary w-full"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="input-primary w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="input-primary w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-primary w-full"
              required
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="saveInfo"
              id="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="h-4 w-4 text-exclusive border-gray-300 rounded focus:ring-exclusive"
            />
            <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>
      
      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          
          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center">
                <div className="w-16 h-16 flex-shrink-0 mr-4 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  {item.quantity > 1 && (
                    <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  )}
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Subtotal, Shipping, Total */}
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>{shipping === 'Free' ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Payment Method */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Payment Method</h4>
            <div className="flex items-center mb-3">
              <input
                type="radio"
                name="paymentMethod"
                id="bank"
                value="bank"
                checked={formData.paymentMethod === 'bank'}
                onChange={handleRadioChange}
                className="h-4 w-4 text-exclusive border-gray-300 focus:ring-exclusive"
              />
              <label htmlFor="bank" className="ml-2 block text-sm text-gray-700">
                Bank
              </label>
              
              <div className="ml-auto flex space-x-2">
                <img src="https://via.placeholder.com/40x25" alt="Bkash" className="h-6" />
                <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
                <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
                <img src="https://via.placeholder.com/40x25" alt="Nagad" className="h-6" />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                id="cash"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleRadioChange}
                className="h-4 w-4 text-exclusive border-gray-300 focus:ring-exclusive"
              />
              <label htmlFor="cash" className="ml-2 block text-sm text-gray-700">
                Cash on delivery
              </label>
            </div>
          </div>
          
          {/* Coupon Code */}
          <div className="mb-6">
            <div className="flex space-x-2">
              <input
                type="text"
                name="couponCode"
                placeholder="Coupon Code"
                value={formData.couponCode}
                onChange={handleChange}
                className="input-primary flex-grow"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="bg-exclusive hover:bg-exclusive-dark text-white py-2 px-4 rounded-md transition-colors whitespace-nowrap"
              >
                Apply
              </button>
            </div>
          </div>
          
          {/* Place Order Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-exclusive hover:bg-exclusive-dark text-white py-3 rounded-md transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

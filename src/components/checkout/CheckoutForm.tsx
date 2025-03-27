
import { useState } from 'react';
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet } from "lucide-react";

interface CheckoutFormProps {
  cartItems: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    color?: string;
    size?: string;
  }[];
  subtotal: number;
  shipping: number | 'Free';
  onPlaceOrder: (shippingInfo: any, paymentMethod: string) => void;
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
    paymentMethod: 'cash', // 'cash', 'credit', or 'paypal'
    couponCode: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: value
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
    onPlaceOrder(shippingInfo, formData.paymentMethod);
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
                  {item.color && <span className="text-xs text-gray-500">Color: {item.color}</span>}
                  {item.size && <span className="text-xs text-gray-500 ml-2">Size: {item.size}</span>}
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
            <h4 className="font-medium mb-3">Payment Method</h4>
            <RadioGroup
              value={formData.paymentMethod}
              onValueChange={handleRadioChange}
              className="space-y-3"
            >
              <div className="flex items-center justify-between space-x-2 p-3 border rounded-md">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit" id="credit" />
                  <Label htmlFor="credit" className="flex items-center gap-2">
                    <CreditCard size={18} /> Credit Card
                  </Label>
                </div>
                <div className="flex space-x-1">
                  <img src="https://images.unsplash.com/photo-1542309170-05c06d1703f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JlZGl0JTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D" alt="Visa" className="h-6 w-auto" />
                  <img src="https://images.unsplash.com/photo-1588250894213-88a5c6ffd615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyZWRpdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D" alt="Mastercard" className="h-6 w-auto" />
                </div>
              </div>
              
              <div className="flex items-center justify-between space-x-2 p-3 border rounded-md">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
                <img src="https://images.unsplash.com/photo-1634403665481-74029226fa95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBheXBhbHxlbnwwfHwwfHx8MA%3D%3D" alt="PayPal" className="h-6 w-auto" />
              </div>
              
              <div className="flex items-center justify-between space-x-2 p-3 border rounded-md">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex items-center gap-2">
                    <Wallet size={18} /> Cash on delivery
                  </Label>
                </div>
              </div>
            </RadioGroup>
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

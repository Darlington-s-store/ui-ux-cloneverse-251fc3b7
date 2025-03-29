
import { useState } from 'react';
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  onPlaceOrder: (shippingInfo: any, paymentMethod: string, paymentStatus: 'pending' | 'paid') => void;
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
  
  const [step, setStep] = useState(1); // 1: Shipping Info, 2: Payment, 3: Confirmation
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  
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
  
  const validateShippingInfo = () => {
    if (!formData.firstName || !formData.streetAddress || !formData.city || !formData.phoneNumber || !formData.email) {
      toast.error('Please fill in all required fields');
      return false;
    }
    return true;
  };
  
  const handleNextStep = () => {
    if (step === 1 && validateShippingInfo()) {
      setStep(2);
      window.scrollTo(0, 0);
    } else if (step === 2) {
      setStep(3);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleApplyCoupon = () => {
    if (!formData.couponCode) {
      toast.error('Please enter a coupon code');
      return;
    }
    
    // Process coupon
    toast.success('Coupon applied successfully!');
  };
  
  const processPayment = () => {
    setPaymentProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      
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
      const paymentStatus = formData.paymentMethod === 'cash' ? 'pending' : 'paid';
      onPlaceOrder(shippingInfo, formData.paymentMethod, paymentStatus);
    }, 2000);
  };
  
  const total = typeof shipping === 'number' ? subtotal + shipping : subtotal;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Form Steps */}
      <div className="lg:col-span-2">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-exclusive text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="text-sm mt-1">Shipping</span>
            </div>
            <div className="h-1 flex-1 mx-2 bg-gray-200">
              <div className={`h-full ${step >= 2 ? 'bg-exclusive' : 'bg-gray-200'}`} style={{ width: step >= 2 ? '100%' : '0%' }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-exclusive text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="text-sm mt-1">Payment</span>
            </div>
            <div className="h-1 flex-1 mx-2 bg-gray-200">
              <div className={`h-full ${step >= 3 ? 'bg-exclusive' : 'bg-gray-200'}`} style={{ width: step >= 3 ? '100%' : '0%' }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-exclusive text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="text-sm mt-1">Confirm</span>
            </div>
          </div>
        </div>

        {/* Step 1: Shipping Info */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>
            <div className="space-y-6">
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
              
              <div className="pt-4">
                <Button 
                  onClick={handleNextStep}
                  className="w-full md:w-auto bg-exclusive hover:bg-exclusive-dark text-white py-3 px-8 rounded-md transition-colors"
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          </>
        )}
        
        {/* Step 2: Payment Method */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
            <div className="mb-8">
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={handleRadioChange}
                className="space-y-4"
              >
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-md hover:border-exclusive transition-colors">
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
                
                {formData.paymentMethod === 'credit' && (
                  <div className="p-4 border rounded-md border-exclusive">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number*</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="input-primary w-full"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date*</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="input-primary w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV*</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="input-primary w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card*</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="input-primary w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-md hover:border-exclusive transition-colors">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <img src="https://images.unsplash.com/photo-1634403665481-74029226fa95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBheXBhbHxlbnwwfHwwfHx8MA%3D%3D" alt="PayPal" className="h-6 w-auto" />
                </div>
                
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-md hover:border-exclusive transition-colors">
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
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2">Have a coupon?</h3>
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
            
            <div className="flex gap-4 pt-4">
              <Button 
                onClick={handlePreviousStep}
                variant="outline"
                className="w-1/2 md:w-auto py-3 px-8 rounded-md transition-colors"
              >
                Back to Shipping
              </Button>
              
              <Button 
                onClick={handleNextStep}
                className="w-1/2 md:w-auto bg-exclusive hover:bg-exclusive-dark text-white py-3 px-8 rounded-md transition-colors"
              >
                Review Order
              </Button>
            </div>
          </>
        )}
        
        {/* Step 3: Order Confirmation */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Order Confirmation</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-3">Shipping Information</h3>
                <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Address:</strong> {formData.streetAddress} {formData.apartment ? `, ${formData.apartment}` : ''}</p>
                <p><strong>City:</strong> {formData.city}, {formData.state} {formData.zipCode}</p>
                <p><strong>Country:</strong> {formData.country}</p>
                <p><strong>Phone:</strong> {formData.phoneNumber}</p>
                <p><strong>Email:</strong> {formData.email}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-3">Payment Method</h3>
                <p className="flex items-center">
                  {formData.paymentMethod === 'credit' && <><CreditCard size={18} className="mr-2" /> Credit Card</>}
                  {formData.paymentMethod === 'paypal' && <>PayPal</>}
                  {formData.paymentMethod === 'cash' && <><Wallet size={18} className="mr-2" /> Cash on Delivery</>}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md border">
                <h3 className="text-lg font-medium mb-3">Order Items</h3>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain mr-3" />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md border">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>{shipping === 'Free' ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={handlePreviousStep}
                  variant="outline"
                  className="w-1/2 md:w-auto py-3 px-8 rounded-md transition-colors"
                  disabled={paymentProcessing}
                >
                  Back to Payment
                </Button>
                
                <Button 
                  onClick={processPayment}
                  className="w-1/2 md:w-auto bg-exclusive hover:bg-exclusive-dark text-white py-3 px-8 rounded-md transition-colors"
                  disabled={paymentProcessing}
                >
                  {paymentProcessing ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">⏳</span> Processing...
                    </span>
                  ) : (
                    'Place Order'
                  )}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Right Column - Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
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
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;


import { useState } from 'react';
import { CreditCard, Wallet, CheckCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PaymentFormProps {
  total: number;
  onPaymentMethodSelect: (method: string) => void;
  onProcessPayment: (cardDetails?: any) => void;
  isProcessing: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  total,
  onPaymentMethodSelect,
  onProcessPayment,
  isProcessing
}) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
    onPaymentMethodSelect(value);
  };

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateCardDetails = () => {
    if (paymentMethod !== 'credit') return true;
    
    if (!cardDetails.cardNumber.trim()) {
      toast.error('Please enter card number');
      return false;
    }
    if (!cardDetails.expiryDate.trim()) {
      toast.error('Please enter expiry date');
      return false;
    }
    if (!cardDetails.cvv.trim()) {
      toast.error('Please enter CVV');
      return false;
    }
    if (!cardDetails.cardholderName.trim()) {
      toast.error('Please enter cardholder name');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateCardDetails()) return;
    onProcessPayment(paymentMethod === 'credit' ? cardDetails : undefined);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
      
      <RadioGroup
        value={paymentMethod}
        onValueChange={handlePaymentMethodChange}
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
            <img src="https://ae01.alicdn.com/kf/S2e8b621bc4514aa1a4c9d80e20b2ed74d/ALLDOCUBE-C27-Smart-Monitor-IPS-LCD-Computer-Monitor-Portable-Monitor-with-Type-C-100-sRGB-Monitor.jpg_220x220.jpg" alt="Visa" className="h-6 w-auto" />
            <img src="https://ae01.alicdn.com/kf/Se3e82e43dfde40fb8dc60adcb4ec6fc9i/ALLDOCUBE-15-6-inch-Portable-Gaming-Monitor-1920-1080-Full-HD-IPS-LCD-Display-Type-C-HDMI.jpg_220x220.jpg" alt="Mastercard" className="h-6 w-auto" />
          </div>
        </div>
        
        {paymentMethod === 'credit' && (
          <div className="p-4 border rounded-md border-exclusive">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number*</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="input-primary w-full"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date*</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    className="input-primary w-full"
                    value={cardDetails.expiryDate}
                    onChange={handleCardDetailsChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV*</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    className="input-primary w-full"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card*</label>
                <input
                  type="text"
                  name="cardholderName"
                  placeholder="John Doe"
                  className="input-primary w-full"
                  value={cardDetails.cardholderName}
                  onChange={handleCardDetailsChange}
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
          <img src="https://ae01.alicdn.com/kf/S1f3eb5e51a3e4d249bd40a6b1eef0d7aR/ALLDOCUBE-C27-27-Inch-Monitor-Smart-Computer-Monitors-1920-1080-Resolution-100-sRGB-250-nits-Type.jpg_220x220.jpg" alt="PayPal" className="h-6 w-auto" />
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

      <div className="bg-gray-50 p-4 rounded-md border mt-6">
        <div className="flex justify-between mb-2">
          <span>Total Payment:</span>
          <span className="font-semibold text-lg">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button 
        onClick={handleSubmit}
        className="w-full bg-exclusive hover:bg-exclusive-dark text-white py-3 px-8 rounded-md transition-colors mt-4"
        disabled={isProcessing}
      >
        {isProcessing ? (
          <span className="flex items-center">
            <span className="animate-spin mr-2">⏳</span> Processing...
          </span>
        ) : (
          'Proceed to Payment'
        )}
      </Button>
    </div>
  );
};

export default PaymentForm;

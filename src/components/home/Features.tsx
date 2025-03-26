
import { Truck, Headphones, ArrowLeftRight } from 'lucide-react';

const Features = () => {
  return (
    <div className="container-custom mt-16 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Truck size={24} />
          </div>
          <h3 className="font-semibold text-lg mb-2">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600 text-center text-sm">Free delivery for all orders over $140</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Headphones size={24} />
          </div>
          <h3 className="font-semibold text-lg mb-2">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600 text-center text-sm">Friendly 24/7 customer support</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <ArrowLeftRight size={24} />
          </div>
          <h3 className="font-semibold text-lg mb-2">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600 text-center text-sm">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

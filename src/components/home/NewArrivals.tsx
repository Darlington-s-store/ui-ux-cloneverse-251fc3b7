
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  return (
    <div className="container-custom my-16">
      <h2 className="section-heading mb-6">New Arrival</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-gray-900 h-96 rounded-lg overflow-hidden flex items-end">
          <img src="/lovable-uploads/f0fc7d28-7a79-4904-87d7-6e5b7080d280.png" alt="PlayStation 5" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="relative p-6 text-white">
            <h3 className="text-2xl font-bold">PlayStation 5</h3>
            <p className="mb-2">Black and White version of the PS5 coming out on sale.</p>
            <Link to="/products/playstation" className="text-sm font-medium underline">Shop Now</Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative bg-gray-200 h-44 md:h-auto rounded-lg overflow-hidden flex items-end">
            <img src="/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png" alt="Women's Collections" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-4 text-black">
              <h3 className="text-xl font-bold">Women's Collections</h3>
              <p className="text-sm mb-2">Featured woman collections that give you another vibe.</p>
              <Link to="/products/women" className="text-sm font-medium underline">Shop Now</Link>
            </div>
          </div>
          
          <div className="relative bg-gray-200 h-44 md:h-auto rounded-lg overflow-hidden flex items-end">
            <img src="/lovable-uploads/4eff34ef-0f14-4e40-9696-f75daac30877.png" alt="Speakers" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-4 text-black">
              <h3 className="text-xl font-bold">Speakers</h3>
              <p className="text-sm mb-2">Amazon wireless speakers for premium sound.</p>
              <Link to="/products/speakers" className="text-sm font-medium underline">Shop Now</Link>
            </div>
          </div>
          
          <div className="relative bg-gray-200 h-44 md:h-auto rounded-lg overflow-hidden flex items-end md:col-span-2">
            <img src="/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png" alt="Perfume" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-4 text-black">
              <h3 className="text-xl font-bold">Perfume</h3>
              <p className="text-sm mb-2">GUCCI INTENSE OUD EDP for an unforgettable impression.</p>
              <Link to="/products/perfume" className="text-sm font-medium underline">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;

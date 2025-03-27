
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  return (
    <div className="container-custom my-16">
      <h2 className="section-heading mb-6">New Arrival</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-gray-900 h-96 rounded-lg overflow-hidden flex items-end">
          <img src="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="PlayStation 5" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="relative p-6 text-white">
            <h3 className="text-2xl font-bold">PlayStation 5</h3>
            <p className="mb-2">Black and White version of the PS5 coming out on sale.</p>
            <Link to="/products/playstation" className="text-sm font-medium underline">Shop Now</Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative bg-gray-200 h-44 md:h-auto rounded-lg overflow-hidden flex items-end">
            <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="Women's Collections" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-4 text-black">
              <h3 className="text-xl font-bold">Women's Collections</h3>
              <p className="text-sm mb-2">Featured woman collections that give you another vibe.</p>
              <Link to="/products/women" className="text-sm font-medium underline">Shop Now</Link>
            </div>
          </div>
          
          <div className="relative bg-gray-200 h-44 md:h-auto rounded-lg overflow-hidden flex items-end">
            <img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="Speakers" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-4 text-black">
              <h3 className="text-xl font-bold">Speakers</h3>
              <p className="text-sm mb-2">Amazon wireless speakers for premium sound.</p>
              <Link to="/products/speakers" className="text-sm font-medium underline">Shop Now</Link>
            </div>
          </div>
          
          <div className="relative bg-gray-200 h-44 md:h-auto rounded-lg overflow-hidden flex items-end md:col-span-2">
            <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Perfume" className="absolute inset-0 w-full h-full object-cover" />
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


import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="container-custom my-8 md:my-16 w-full">
      <div className="bg-black text-white rounded-lg overflow-hidden relative w-full">
        <img src="https://images.unsplash.com/photo-1626771652942-93d94462a249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
             alt="Audio Equipment" 
             className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="py-12 px-8 md:px-16 max-w-2xl relative z-10">
          <span className="text-sm font-medium mb-2 inline-block">Featured Category</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Music Experience</h2>
          
          <div className="flex gap-4 mb-6">
            {['JBL', 'Sony', 'Bose', 'Marshall'].map((brand, index) => (
              <div key={index} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">{brand}</span>
              </div>
            ))}
          </div>
          
          <Link to="/category/headphones" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
            Shop Headphones
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

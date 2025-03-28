
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <div className="container-custom my-8 md:my-16 w-full">
      <div className="bg-black text-white rounded-lg overflow-hidden relative w-full">
        <img 
          src="https://images.unsplash.com/photo-1626771652942-93d94462a249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Audio Equipment" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
        />
        
        <div className="py-16 px-8 md:px-16 max-w-2xl relative z-10">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full inline-block mb-4">
            <span className="text-sm font-medium">Featured Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Enhance Your Music Experience</h2>
          
          <p className="text-white/80 mb-8 max-w-md">
            Discover our premium selection of headphones from top brands like JBL, Sony, Bose, and Marshall. Immerse yourself in superior sound quality and unmatched comfort.
          </p>
          
          <div className="flex gap-4 mb-8">
            {['JBL', 'Sony', 'Bose', 'Marshall'].map((brand, index) => (
              <div key={index} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <span className="text-xs font-medium">{brand}</span>
              </div>
            ))}
          </div>
          
          <Link 
            to="/shop" 
            className="group inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Shop Headphones
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

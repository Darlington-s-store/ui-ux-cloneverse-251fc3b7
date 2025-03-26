
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="container-custom my-16">
      <div className="bg-black text-white rounded-lg overflow-hidden">
        <div className="py-10 px-8 md:px-12 max-w-2xl">
          <span className="text-sm font-medium mb-2 inline-block">Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Music Experience</h2>
          
          <div className="flex gap-4 mb-6">
            {['JBL', 'Sony', 'Bose', 'Marshall'].map((brand, index) => (
              <div key={index} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">{brand}</span>
              </div>
            ))}
          </div>
          
          <Link to="/category/audio" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

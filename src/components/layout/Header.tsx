
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="py-4 border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-2xl font-bold text-black">
              Exclusive
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isActive('/') ? 'font-semibold' : ''}`}>Home</Link>
              <Link to="/contact" className={`${isActive('/contact') ? 'font-semibold' : ''}`}>Contact</Link>
              <Link to="/about" className={`${isActive('/about') ? 'font-semibold' : ''}`}>About</Link>
              <Link to="/signup" className={`${isActive('/signup') ? 'font-semibold' : ''}`}>Sign Up</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="py-2 pl-4 pr-10 bg-gray-100 rounded-md w-64 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={18} className="text-gray-500" />
              </button>
            </div>
            
            <Link to="/wishlist" className="relative">
              <Heart size={22} />
              <span className="absolute -top-2 -right-2 bg-exclusive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
            </Link>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-exclusive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </Link>
            
            <Link to="/account" className="relative">
              <User size={22} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

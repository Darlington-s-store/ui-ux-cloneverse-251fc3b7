
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, Heart, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProducts } from '../../context/ProductsContext';
import { useIsMobile } from '../../hooks/use-mobile';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Categories', path: '#categories' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getCartCount, getWishlistCount } = useProducts();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-exclusive">Exclusive</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm hover:text-exclusive transition-colors ${
                  location.pathname === item.path ? 'font-medium text-exclusive' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/search">
              <Search size={20} className="text-gray-700 hover:text-exclusive transition-colors" />
            </Link>
            
            <Link to="/wishlist" className="relative">
              <Heart size={20} className="text-gray-700 hover:text-exclusive transition-colors" />
              {getWishlistCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center">
                  {getWishlistCount()}
                </Badge>
              )}
            </Link>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={20} className="text-gray-700 hover:text-exclusive transition-colors" />
              {getCartCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-[1.5rem] min-h-[1.5rem] flex items-center justify-center">
                  {getCartCount()}
                </Badge>
              )}
            </Link>
            
            <Link to="/account">
              <User size={20} className="text-gray-700 hover:text-exclusive transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 inset-x-0 z-50 shadow-lg">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm py-2 hover:text-exclusive transition-colors ${
                    location.pathname === item.path ? 'font-medium text-exclusive' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-100">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/login" className="flex items-center">
                    <User size={16} className="mr-2" />
                    Sign In / Register
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

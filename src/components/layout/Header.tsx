
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, Heart, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProducts } from '../../context/ProductsContext';
import { useIsMobile } from '../../hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { getCategories } from '../../utils/categories';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Categories', path: '/categories' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartCount, getWishlistCount } = useProducts();
  const isMobile = useIsMobile();
  const categories = getCategories();
  
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

  const handleCategoryClick = (slug: string) => {
    navigate(`/category/${slug}`);
    setIsMenuOpen(false);
  };
  
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
            <h1 className="text-xl font-bold text-elite">Elite Mall</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => {
              // Special handling for Categories
              if (item.name === 'Categories') {
                return (
                  <NavigationMenu key={item.path}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger 
                          className={`text-sm hover:text-exclusive transition-colors focus:bg-transparent ${
                            location.pathname === item.path ? 'font-medium text-exclusive' : ''
                          }`}
                        >
                          Categories
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 w-[400px] md:w-[600px]">
                            {categories.map((category) => (
                              <div 
                                key={category.id} 
                                className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleCategoryClick(category.slug)}
                              >
                                <img 
                                  src={category.image} 
                                  alt={category.name} 
                                  className="w-8 h-8 object-contain mr-2" 
                                />
                                <div>
                                  <div className="font-medium">{category.name}</div>
                                  <div className="text-xs text-gray-500">{category.count} products</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                );
              }
              
              // Regular nav items
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm hover:text-exclusive transition-colors ${
                    location.pathname === item.path ? 'font-medium text-exclusive' : ''
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
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
              {navItems.map((item) => {
                if (item.name === 'Categories') {
                  return (
                    <div key={item.path} className="space-y-2">
                      <div className="font-medium text-sm py-2">Categories</div>
                      <div className="pl-4 space-y-2">
                        {categories.map((category) => (
                          <div 
                            key={category.id}
                            className="flex items-center py-1 cursor-pointer"
                            onClick={() => handleCategoryClick(category.slug)}
                          >
                            <img 
                              src={category.image} 
                              alt={category.name} 
                              className="w-6 h-6 object-contain mr-2" 
                            />
                            <span className="text-sm">{category.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm py-2 hover:text-exclusive transition-colors ${
                      location.pathname === item.path ? 'font-medium text-exclusive' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
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

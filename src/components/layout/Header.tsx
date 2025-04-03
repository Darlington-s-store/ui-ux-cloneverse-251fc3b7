import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search, User, Menu } from 'lucide-react';
import { useProducts } from '../../context/ProductsContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const { getCartCount, getWishlistCount } = useProducts();
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-exclusive">
          Exclusive
        </Link>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <Menu size={24} onClick={() => setShowMobileMenu(!showMobileMenu)} className="cursor-pointer" />
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-8">
          <Link to="/" className="hover:text-exclusive transition-colors">
            Home
          </Link>
          <Link to="/shop" className="hover:text-exclusive transition-colors">
            Shop
          </Link>
          <Link to="/categories" className="hover:text-exclusive transition-colors">
            Categories
          </Link>
          <Link to="/about" className="hover:text-exclusive transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-exclusive transition-colors">
            Contact
          </Link>
        </nav>

        {/* User actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div
            className="relative cursor-pointer hover:opacity-80"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={24} />
          </div>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative hidden sm:block hover:opacity-80">
            <Heart size={24} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-exclusive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative hover:opacity-80">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-exclusive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Account */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowAccountMenu(!showAccountMenu)}
                className="hover:opacity-80 flex items-center"
              >
                <User size={24} />
              </button>
              
              {showAccountMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10">
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setShowAccountMenu(false)}
                  >
                    My Account
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setShowAccountMenu(false)}
                  >
                    My Orders
                  </Link>
                  <Link
                    to="/wishlist"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 sm:hidden"
                    onClick={() => setShowAccountMenu(false)}
                  >
                    Wishlist
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setShowAccountMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="hover:opacity-80">
              <User size={24} />
            </Link>
          )}
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="bg-exclusive py-2">
          <div className="container-custom">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="bg-gray-100 py-4 sm:hidden">
          <div className="container-custom flex flex-col gap-4">
            <Link to="/" className="hover:text-exclusive transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-exclusive transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="hover:text-exclusive transition-colors">
              Categories
            </Link>
            <Link to="/about" className="hover:text-exclusive transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-exclusive transition-colors">
              Contact
            </Link>
             {user ? (
              <>
                <Link to="/account" className="hover:text-exclusive transition-colors">
                  My Account
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setShowMobileMenu(false);
                  }}
                  className="hover:text-exclusive transition-colors text-left"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-exclusive transition-colors">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1 */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6">Exclusive</h3>
            <p className="mb-6">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:border-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <ArrowRight size={20} className="text-white" />
              </button>
            </form>
          </div>
          
          {/* Column 2 */}
          <div className="col-span-1">
            <h4 className="footer-heading">Support</h4>
            <address className="not-italic mb-4 text-gray-400">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </address>
            <p className="mb-2 text-gray-400">exclusive@gmail.com</p>
            <p className="text-gray-400">+88015-88888-9999</p>
          </div>
          
          {/* Column 3 */}
          <div className="col-span-1">
            <h4 className="footer-heading">Account</h4>
            <Link to="/account" className="footer-link">My Account</Link>
            <Link to="/login" className="footer-link">Login / Register</Link>
            <Link to="/cart" className="footer-link">Cart</Link>
            <Link to="/wishlist" className="footer-link">Wishlist</Link>
            <Link to="/shop" className="footer-link">Shop</Link>
          </div>
          
          {/* Column 4 */}
          <div className="col-span-1">
            <h4 className="footer-heading">Quick Link</h4>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms Of Use</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          
          {/* Column 5 */}
          <div className="col-span-1">
            <h4 className="footer-heading">Download App</h4>
            <p className="text-xs text-gray-400 mb-4">Save $3 with App New User Only</p>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://exclusive.com" alt="QR Code" className="qr-code w-24 h-24" />
                <div className="ml-4">
                  <a href="#" className="block mb-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="app-store-badge h-8" />
                  </a>
                  <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="app-store-badge h-8" />
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="social-icon">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-black text-white py-3 relative">
      <div className="container-custom text-center">
        <span className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </span>
        <Link to="/shop" className="text-sm font-semibold ml-2">ShopNow</Link>
      </div>
    </div>
  );
};

export default TopBanner;

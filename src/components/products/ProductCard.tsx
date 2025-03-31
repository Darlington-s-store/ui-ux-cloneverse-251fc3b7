
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { useProducts } from '../../context/ProductsContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discountPercentage?: number;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  oldPrice,
  image,
  rating,
  reviewCount,
  discountPercentage,
  isNew,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { addToCart, addToWishlist, getProductById } = useProducts();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const product = getProductById(id);
    if (product) {
      addToCart(product);
      toast.success(`${name} added to cart`);
    }
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const product = getProductById(id);
    if (product) {
      addToWishlist(product);
      toast.success(`${name} added to wishlist`);
    }
  };
  
  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Quick view logic could be implemented here
  };

  const handleImageError = () => {
    setImgError(true);
  };
  
  // Improved fallback image handling
  const fallbackImage = "https://ae01.alicdn.com/kf/S7de15e8536664332b478d953ea4e444dN/Global-Version-Xiaomi-Redmi-Note-13-Pro-5G-Smartphone-120Hz-AMOLED-200MP-Camera-67W-Fast-Charging.jpg_220x220.jpg";
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative bg-gray-100 rounded-lg aspect-square overflow-hidden">
          {discountPercentage && (
            <span className="discount-badge">-{discountPercentage}%</span>
          )}
          {isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded absolute top-2 left-2">NEW</span>
          )}
          <img 
            src={imgError ? fallbackImage : image} 
            alt={name} 
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
          />
          
          <div className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={handleAddToWishlist}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <Heart size={18} />
            </button>
            <button 
              onClick={handleQuickView}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <Eye size={18} />
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="font-medium text-sm line-clamp-1">{name}</h3>
          <div className="flex items-center mt-1">
            <span className="price-current">${price.toFixed(2)}</span>
            {oldPrice && <span className="price-old">${oldPrice.toFixed(2)}</span>}
          </div>
          
          <div className="flex items-center mt-1">
            <div className="star-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>
      </Link>
      
      <div className={`mt-3 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

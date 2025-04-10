
import { Trash } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

interface WishlistItemProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  discountPercentage?: number;
  onRemove: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  id,
  name,
  price,
  oldPrice,
  image,
  discountPercentage,
  onRemove,
  onAddToCart
}) => {
  const [imgError, setImgError] = useState(false);
  
  const handleRemove = () => {
    onRemove(id);
    toast.success(`${name} removed from wishlist`);
  };
  
  const handleAddToCart = () => {
    onAddToCart(id);
    toast.success(`${name} added to cart`);
  };
  
  const handleImageError = () => {
    setImgError(true);
  };
  
  // Updated fallback image for consistency
  const fallbackImage = "https://ae01.alicdn.com/kf/S7de15e8536664332b478d953ea4e444dN/Global-Version-Xiaomi-Redmi-Note-13-Pro-5G-Smartphone-120Hz-AMOLED-200MP-Camera-67W-Fast-Charging.jpg_220x220.jpg";
  
  return (
    <div className="group bg-white rounded-lg p-4 border border-gray-200 relative">
      {discountPercentage && (
        <span className="absolute top-2 left-2 bg-exclusive text-white text-xs px-2 py-1 rounded">
          -{discountPercentage}%
        </span>
      )}
      
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-exclusive"
      >
        <Trash size={18} />
      </button>
      
      <div className="flex justify-center h-40 mb-4">
        <img
          src={imgError ? fallbackImage : image}
          alt={name}
          className="h-full object-contain"
          onError={handleImageError}
        />
      </div>
      
      <h3 className="font-medium text-gray-800 mb-2">{name}</h3>
      
      <div className="flex items-center mb-4">
        <span className="text-exclusive font-semibold">${price.toFixed(2)}</span>
        {oldPrice && (
          <span className="ml-2 text-gray-500 line-through text-sm">${oldPrice.toFixed(2)}</span>
        )}
      </div>
      
      <button
        onClick={handleAddToCart}
        className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default WishlistItem;

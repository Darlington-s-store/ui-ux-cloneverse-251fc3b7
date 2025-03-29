
import { useState } from 'react';
import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { useProducts, Product } from '../../context/ProductsContext';
import ProductImages from './ProductImages';
import { Button } from '@/components/ui/button';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart, addToWishlist } = useProducts();
  
  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    toast.success(`${product.name} added to cart`);
  };
  
  const handleBuyNow = () => {
    addToCart(product, selectedColor, selectedSize);
    toast.success(`${product.name} added to cart`);
    // Navigate to checkout directly
    window.location.href = '/checkout';
  };
  
  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success(`${product.name} added to wishlist`);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Product Images */}
      <ProductImages 
        images={product.images || []} 
        defaultImage={product.image} 
        name={product.name}
      />
      
      {/* Product Info */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
            ))}
          </div>
          <span className="text-gray-500">({product.reviewCount} Reviews)</span>
          
          {product.inStock ? (
            <span className="ml-4 text-green-500 text-sm">In Stock</span>
          ) : (
            <span className="ml-4 text-red-500 text-sm">Out of Stock</span>
          )}
        </div>
        
        <div className="mb-6">
          <span className="text-2xl font-semibold text-exclusive">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="ml-2 text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        
        <p className="text-gray-700 mb-6">
          {product.description}
        </p>
        
        <div className="border-t border-gray-200 py-6">
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Colours:</span>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full ${
                        selectedColor === color
                          ? 'ring-2 ring-offset-1 ring-gray-400'
                          : ''
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Size:</span>
                <div className="flex space-x-2">
                  {product.sizes.map((sizeObj) => (
                    <button
                      key={sizeObj.name}
                      className={`min-w-[40px] h-10 flex items-center justify-center px-3 text-sm ${
                        selectedSize === sizeObj.name
                          ? 'bg-exclusive text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      } rounded-md transition-colors`}
                      onClick={() => setSelectedSize(sizeObj.name)}
                    >
                      {sizeObj.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={handleDecreaseQuantity}
                className="w-10 h-10 flex items-center justify-center border-r border-gray-300"
              >
                <Minus size={16} />
              </button>
              <div className="w-12 h-10 flex items-center justify-center">
                {quantity}
              </div>
              <button
                onClick={handleIncreaseQuantity}
                className="w-10 h-10 flex items-center justify-center border-l border-gray-300"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center justify-center gap-2 py-2 px-6 rounded-md ${
                product.inStock
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors`}
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>
            
            <Button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className={`flex items-center justify-center gap-2 py-2 px-6 ${
                product.inStock
                  ? 'bg-exclusive text-white hover:bg-exclusive-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>Buy Now</span>
            </Button>
            
            <button
              onClick={handleAddToWishlist}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="mb-2">
            <span className="font-medium text-gray-700">Free Delivery</span>
            <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
          </div>
          
          <div className="mb-6">
            <span className="font-medium text-gray-700">Return Delivery</span>
            <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

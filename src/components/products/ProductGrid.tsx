
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

interface ProductGridProps {
  title: string;
  products: any[];
  showViewAll?: boolean;
  viewAllLink?: string;
  maxDisplay?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title, 
  products, 
  showViewAll = true, 
  viewAllLink = "/shop",
  maxDisplay = 6
}) => {
  const displayProducts = products.slice(0, maxDisplay);
  
  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-heading">{title}</h2>
        
        <div className="flex items-center">
          {showViewAll && products.length > maxDisplay && (
            <Link to={viewAllLink} className="text-sm text-exclusive font-medium hover:underline mr-4">
              See All
            </Link>
          )}
          
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="product-grid">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
            rating={product.rating}
            reviewCount={product.reviewCount}
            discountPercentage={product.discountPercentage}
            isNew={product.isNew}
          />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No products found</p>
        </div>
      )}
      
      {products.length > maxDisplay && !showViewAll && (
        <div className="text-center mt-8">
          <Link to={viewAllLink} className="btn-primary px-8">
            View All Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

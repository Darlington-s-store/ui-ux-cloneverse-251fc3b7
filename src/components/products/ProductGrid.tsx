
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  title: string;
  products: any[];
  showViewAll?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products, showViewAll = true }) => {
  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-heading">{title}</h2>
        
        <div className="flex items-center">
          {showViewAll && (
            <a href="#" className="text-sm text-exclusive font-medium hover:underline mr-4">
              See All
            </a>
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
        {products.map((product) => (
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
      
      {products.length > 0 && !showViewAll && (
        <div className="text-center mt-8">
          <button className="btn-primary px-8">
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductCard from '../components/products/ProductCard';
import { useProducts } from '../context/ProductsContext';
import { Product } from '../context/ProductsContext';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useProducts();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    if (slug) {
      // Convert slug to display name
      const displayName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      setCategoryName(displayName);
      
      // Filter products by category
      const filtered = products.filter(product => 
        product.category.toLowerCase() === slug.toLowerCase()
      );
      
      setCategoryProducts(filtered);
    }
  }, [slug, products]);
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: categoryName, path: `/category/${slug}` }
        ]} 
      />
      
      <div className="container-custom py-8 md:py-12 min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
          <h1 className="text-3xl font-bold">{categoryName}</h1>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-600 mr-2 hidden md:inline">
              {categoryProducts.length} products
            </span>
            
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} />
              Filters
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2 ml-2"
            >
              <SlidersHorizontal size={16} />
              Sort
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {showFilters && (
            <div className="w-full md:w-64 bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-4">Filter Products</h3>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="price-1" className="mr-2" />
                    <label htmlFor="price-1">Under $500</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="price-2" className="mr-2" />
                    <label htmlFor="price-2">$500 - $1000</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="price-3" className="mr-2" />
                    <label htmlFor="price-3">$1000 - $2000</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="price-4" className="mr-2" />
                    <label htmlFor="price-4">Over $2000</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Rating</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="rating-1" className="mr-2" />
                    <label htmlFor="rating-1">4 Stars & Above</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="rating-2" className="mr-2" />
                    <label htmlFor="rating-2">3 Stars & Above</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex-1">
            {categoryProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No products found in this category.</p>
              </div>
            ) : (
              <div className="product-grid">
                {categoryProducts.map(product => (
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
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;

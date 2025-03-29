
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductCard from '../components/products/ProductCard';
import { useProducts } from '../context/ProductsContext';
import { getCategories } from '../utils/categories';
import { Filter, ChevronDown, Grid, List } from 'lucide-react';

const Shop = () => {
  const { products, getProductImage } = useProducts();
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState<string>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory 
      ? product.category === selectedCategory 
      : true;
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesCategory && matchesPrice;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  
  const handleCategoryChange = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const idx = e.target.name === 'min' ? 0 : 1;
    
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[idx] = value;
      return newRange;
    });
  };
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Shop', path: '/shop' }
        ]} 
      />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Shop</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter size={18} className="mr-2" />
                Categories
              </h3>
              
              <ul className="space-y-2">
                <li>
                  <button 
                    className={`w-full text-left py-1 px-2 rounded hover:bg-gray-100 ${!selectedCategory ? 'bg-gray-100 font-medium' : ''}`}
                    onClick={() => handleCategoryChange(null)}
                  >
                    All Categories
                  </button>
                </li>
                
                {categories.map(category => (
                  <li key={category.id}>
                    <button 
                      className={`w-full text-left py-1 px-2 rounded hover:bg-gray-100 ${selectedCategory === category.slug ? 'bg-gray-100 font-medium' : ''}`}
                      onClick={() => handleCategoryChange(category.slug)}
                    >
                      {category.name} ({category.count})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Price Range</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Minimum</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="2000" 
                    step="10"
                    name="min"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${2000}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Maximum</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="2000" 
                    step="10"
                    name="max"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${0}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="bg-gray-100 p-2 rounded text-center">
                    Price: ${priceRange[0]} - ${priceRange[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <select 
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <button 
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </button>
                <button 
                  className={`p-2 rounded ml-2 ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
            
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'product-grid' : 'space-y-4'}>
                {sortedProducts.map(product => (
                  <div key={product.id} className={viewMode === 'list' ? 'border border-gray-200 rounded-lg p-4' : ''}>
                    {viewMode === 'grid' ? (
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        oldPrice={product.oldPrice}
                        image={getProductImage(product)}
                        rating={product.rating}
                        reviewCount={product.reviewCount}
                        discountPercentage={product.discountPercentage}
                        isNew={product.isNew}
                      />
                    ) : (
                      <div className="flex">
                        <div className="w-1/4">
                          <img src={getProductImage(product)} alt={product.name} className="w-full h-auto object-contain" />
                        </div>
                        <div className="w-3/4 pl-6">
                          <h3 className="text-lg font-medium">{product.name}</h3>
                          <div className="flex items-center mt-2">
                            <div className="star-rating">
                              {[...Array(5)].map((_, idx) => (
                                <span key={idx} className={idx < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 ml-2">({product.reviewCount} reviews)</span>
                          </div>
                          <div className="mt-2">
                            {product.oldPrice && (
                              <span className="text-gray-500 line-through mr-2">${product.oldPrice.toFixed(2)}</span>
                            )}
                            <span className="text-exclusive font-semibold">${product.price.toFixed(2)}</span>
                          </div>
                          <p className="text-gray-600 mt-2 mb-4">
                            {product.description || 'No description available.'}
                          </p>
                          <div className="flex gap-2">
                            <button className="btn-primary">Add to Cart</button>
                            <button className="btn-secondary">View Product</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;

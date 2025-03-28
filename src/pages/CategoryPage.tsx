
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductCard from '../components/products/ProductCard';
import { useProducts } from '../context/ProductsContext';
import { Product } from '../context/ProductsContext';
import { Filter, SlidersHorizontal, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Price Range options
const priceRanges = [
  { id: 'price-1', label: 'Under $500', min: 0, max: 499 },
  { id: 'price-2', label: '$500 - $1000', min: 500, max: 1000 },
  { id: 'price-3', label: '$1000 - $2000', min: 1001, max: 2000 },
  { id: 'price-4', label: 'Over $2000', min: 2001, max: 100000 }
];

// Rating options
const ratingOptions = [
  { id: 'rating-4', label: '4 Stars & Above', value: 4 },
  { id: 'rating-3', label: '3 Stars & Above', value: 3 }
];

// Sort options
const sortOptions = [
  { id: 'price-low-high', label: 'Price: Low to High' },
  { id: 'price-high-low', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest First' },
  { id: 'rating', label: 'Best Rating' }
];

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  
  // Filter states
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>('');
  
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
      setFilteredProducts(filtered);
    }
  }, [slug, products]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...categoryProducts];
    
    // Apply price filter
    if (selectedPriceRanges.length > 0) {
      result = result.filter(product => {
        return selectedPriceRanges.some(rangeId => {
          const range = priceRanges.find(r => r.id === rangeId);
          if (range) {
            return product.price >= range.min && product.price <= range.max;
          }
          return false;
        });
      });
    }
    
    // Apply rating filter
    if (selectedRating) {
      result = result.filter(product => product.rating >= selectedRating);
    }
    
    // Apply sorting
    if (sortOption) {
      switch (sortOption) {
        case 'price-low-high':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-low':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // In a real app, we would use a date field
          // Here we'll just use the product ID as a proxy for "newest"
          result.sort((a, b) => b.id.localeCompare(a.id));
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    }
    
    setFilteredProducts(result);
  }, [categoryProducts, selectedPriceRanges, selectedRating, sortOption]);
  
  // Handle price range selection
  const handlePriceRangeChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedPriceRanges(prev => [...prev, id]);
    } else {
      setSelectedPriceRanges(prev => prev.filter(item => item !== id));
    }
  };
  
  // Handle rating selection
  const handleRatingChange = (value: string) => {
    setSelectedRating(parseInt(value));
  };
  
  // Handle sort selection
  const handleSortChange = (value: string) => {
    setSortOption(value);
    setShowSort(false);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedPriceRanges([]);
    setSelectedRating(null);
    setSortOption('');
  };
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: categoryName, path: `/category/${slug}` }
        ]} 
      />
      
      <div className="container-custom py-8 md:py-12 min-h-screen w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
          <h1 className="text-3xl font-bold">{categoryName}</h1>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-600 mr-2 hidden md:inline">
              {filteredProducts.length} products
            </span>
            
            <Button 
              variant="outline" 
              size="sm"
              className={`flex items-center gap-2 ${showFilters ? 'bg-gray-100' : ''}`}
              onClick={() => {
                setShowFilters(!showFilters);
                setShowSort(false);
              }}
            >
              <Filter size={16} />
              Filters
              {selectedPriceRanges.length > 0 || selectedRating !== null ? (
                <span className="bg-exclusive text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {selectedPriceRanges.length + (selectedRating !== null ? 1 : 0)}
                </span>
              ) : null}
            </Button>
            
            <div className="relative ml-2">
              <Button 
                variant="outline" 
                size="sm"
                className={`flex items-center gap-2 ${showSort ? 'bg-gray-100' : ''}`}
                onClick={() => {
                  setShowSort(!showSort);
                  setShowFilters(false);
                }}
              >
                <SlidersHorizontal size={16} />
                {sortOption ? sortOptions.find(option => option.id === sortOption)?.label : 'Sort'}
              </Button>
              
              {showSort && (
                <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 z-10 w-60">
                  <RadioGroup 
                    value={sortOption} 
                    onValueChange={handleSortChange}
                    className="space-y-2"
                  >
                    {sortOptions.map(option => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label htmlFor={option.id}>{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {showFilters && (
            <div className="w-full md:w-64 bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Filters</h3>
                {(selectedPriceRanges.length > 0 || selectedRating !== null) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="text-sm text-gray-500 hover:text-exclusive"
                  >
                    Reset
                  </Button>
                )}
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <div key={range.id} className="flex items-center">
                      <Checkbox 
                        id={range.id} 
                        checked={selectedPriceRanges.includes(range.id)}
                        onCheckedChange={(checked) => handlePriceRangeChange(range.id, checked === true)}
                        className="mr-2"
                      />
                      <Label htmlFor={range.id} className="text-sm cursor-pointer">
                        {range.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Rating</h4>
                <RadioGroup 
                  value={selectedRating ? selectedRating.toString() : ''} 
                  onValueChange={handleRatingChange}
                  className="space-y-2"
                >
                  {ratingOptions.map(option => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value.toString()} id={option.id} />
                      <Label htmlFor={option.id} className="text-sm cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          )}
          
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No products found in this category.</p>
                {(selectedPriceRanges.length > 0 || selectedRating !== null) && (
                  <Button 
                    variant="outline" 
                    onClick={resetFilters}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
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

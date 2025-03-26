
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getCategories, getFeaturedCategories } from '../../utils/categories';

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const categories = getFeaturedCategories();
  
  const handleCategoryClick = (categoryId: string, slug: string) => {
    setActiveCategory(categoryId);
    navigate(`/category/${slug}`);
  };
  
  return (
    <div className="container-custom my-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-heading">Browse By Category</h2>
        
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id, category.slug)}
            className={`flex flex-col items-center justify-center py-6 px-4 border rounded-lg hover:border-exclusive transition-colors cursor-pointer ${
              activeCategory === category.id ? 'bg-red-50 border-exclusive' : ''
            }`}
          >
            <img src={category.image} alt={category.name} className="h-10 w-10 object-contain mb-3" />
            <span className="text-sm font-medium">{category.name}</span>
            <span className="text-xs text-gray-500 mt-1">{category.count} items</span>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link to="/shop" className="text-exclusive hover:underline font-medium">
          View All Categories
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;

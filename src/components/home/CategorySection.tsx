
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Phones',
    icon: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    slug: 'phones'
  },
  {
    id: '2',
    name: 'Computers',
    icon: '/lovable-uploads/45ebd75e-e25e-46e1-96b5-9daae391609b.png',
    slug: 'computers'
  },
  {
    id: '3',
    name: 'Smart Watches',
    icon: '/lovable-uploads/332148fd-4cee-4cba-a628-e67fc706771e.png',
    slug: 'smart-watches'
  },
  {
    id: '4',
    name: 'Headphones',
    icon: '/lovable-uploads/4eff34ef-0f14-4e40-9696-f75daac30877.png',
    slug: 'headphones'
  },
  {
    id: '5',
    name: 'Gaming',
    icon: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    slug: 'gaming'
  },
  {
    id: '6',
    name: 'Smart Home',
    icon: '/lovable-uploads/ea1f1c80-c58d-43c5-966e-322a915ba87e.png',
    slug: 'smart-home'
  }
];

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category.id);
    navigate(`/category/${category.slug}`);
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
            onClick={() => handleCategoryClick(category)}
            className={`flex flex-col items-center justify-center py-6 px-4 border rounded-lg hover:border-exclusive transition-colors cursor-pointer ${
              activeCategory === category.id ? 'bg-red-50 border-exclusive' : ''
            }`}
          >
            <img src={category.icon} alt={category.name} className="h-10 w-10 object-contain mb-3" />
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

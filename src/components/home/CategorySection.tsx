
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    icon: '/lovable-uploads/fe6267c2-6163-4c26-a210-f1a176c9a42b.png',
    slug: 'phones'
  },
  {
    id: '2',
    name: 'Computers',
    icon: '/lovable-uploads/f0fc7d28-7a79-4904-87d7-6e5b7080d280.png',
    slug: 'computers'
  },
  {
    id: '3',
    name: 'Cameras',
    icon: '/lovable-uploads/da4cc5ef-1e82-468b-a0b2-af39f932c9ee.png',
    slug: 'cameras'
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
    icon: '/lovable-uploads/e7724172-bea3-44f6-8c03-3676808ee472.png',
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
          <Link
            key={category.id}
            to={`/category/${category.slug}`}
            className={`flex flex-col items-center justify-center py-6 px-4 border rounded-lg hover:border-exclusive transition-colors ${
              activeCategory === category.id ? 'bg-red-50 border-exclusive' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory(category.id);
            }}
          >
            <img src={category.icon} alt={category.name} className="h-10 w-10 object-contain mb-3" />
            <span className="text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

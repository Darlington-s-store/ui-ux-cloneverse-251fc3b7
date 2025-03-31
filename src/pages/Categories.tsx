
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getCategories } from '../utils/categories';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import category subcategories from CategoryPage since we need the same data
const categorySubcategories = {
  'phones': [
    { id: 'smartphones', name: 'Smartphones', count: 30 },
    { id: 'flagship-phones', name: 'Flagship Phones', count: 10 },
    { id: 'budget-phones', name: 'Budget Phones', count: 15 },
    { id: 'foldable-phones', name: 'Foldable Phones', count: 5 },
    { id: 'android-phones', name: 'Android Phones', count: 25 },
    { id: 'ios-phones', name: 'iOS Phones', count: 15 }
  ],
  'computers': [
    { id: 'laptops', name: 'Laptops', count: 20 },
    { id: 'gaming-laptops', name: 'Gaming Laptops', count: 10 },
    { id: 'macbooks', name: 'MacBooks', count: 5 },
    { id: 'desktops', name: 'Desktop PCs', count: 8 },
    { id: 'all-in-one', name: 'All-in-One PCs', count: 7 }
  ],
  'gaming': [
    { id: 'consoles', name: 'Gaming Consoles', count: 5 },
    { id: 'controllers', name: 'Controllers', count: 15 },
    { id: 'gaming-headsets', name: 'Gaming Headsets', count: 12 },
    { id: 'gaming-mice', name: 'Gaming Mice', count: 20 },
    { id: 'gaming-keyboards', name: 'Gaming Keyboards', count: 18 }
  ],
  'headphones': [
    { id: 'wireless-headphones', name: 'Wireless Headphones', count: 25 },
    { id: 'earbuds', name: 'Earbuds', count: 20 },
    { id: 'over-ear', name: 'Over-Ear Headphones', count: 15 },
    { id: 'noise-cancelling', name: 'Noise Cancelling', count: 10 }
  ],
  'monitors': [
    { id: 'gaming-monitors', name: 'Gaming Monitors', count: 15 },
    { id: 'ultrawide', name: 'Ultrawide Monitors', count: 8 },
    { id: '4k-monitors', name: '4K Monitors', count: 12 },
    { id: 'curved-monitors', name: 'Curved Monitors', count: 5 }
  ],
  'accessories': [
    { id: 'phone-cases', name: 'Phone Cases', count: 30 },
    { id: 'screen-protectors', name: 'Screen Protectors', count: 15 },
    { id: 'chargers', name: 'Chargers & Cables', count: 25 },
    { id: 'power-banks', name: 'Power Banks', count: 10 },
    { id: 'storage', name: 'Storage Solutions', count: 8 }
  ],
  'smart-home': [
    { id: 'smart-speakers', name: 'Smart Speakers', count: 10 },
    { id: 'smart-lighting', name: 'Smart Lighting', count: 15 },
    { id: 'smart-security', name: 'Security Cameras', count: 8 },
    { id: 'smart-thermostats', name: 'Smart Thermostats', count: 5 }
  ],
  'wearables': [
    { id: 'smartwatches', name: 'Smartwatches', count: 20 },
    { id: 'fitness-trackers', name: 'Fitness Trackers', count: 15 },
    { id: 'vr-headsets', name: 'VR Headsets', count: 5 }
  ],
  'cameras': [
    { id: 'dslr', name: 'DSLR Cameras', count: 10 },
    { id: 'mirrorless', name: 'Mirrorless Cameras', count: 12 },
    { id: 'action-cameras', name: 'Action Cameras', count: 5 }
  ],
  'tablets': [
    { id: 'ipads', name: 'iPads', count: 8 },
    { id: 'android-tablets', name: 'Android Tablets', count: 12 },
    { id: 'windows-tablets', name: 'Windows Tablets', count: 5 }
  ]
};

const Categories = () => {
  const navigate = useNavigate();
  const categories = getCategories();

  const handleCategoryClick = (slug: string) => {
    navigate(`/category/${slug}`);
  };

  const handleSubcategoryClick = (categorySlug: string, subcategoryId: string) => {
    navigate(`/category/${categorySlug}?subcategory=${subcategoryId}`);
  };

  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Categories', path: '/categories' }
        ]} 
      />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">All Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const subcategories = categorySubcategories[category.slug as keyof typeof categorySubcategories] || [];
            
            return (
              <div 
                key={category.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div 
                  className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-12 h-12 object-contain mr-4" 
                  />
                  <div>
                    <h3 className="font-medium text-lg">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} products</p>
                  </div>
                </div>
                
                {subcategories.length > 0 && (
                  <Accordion type="single" collapsible className="border-t border-gray-200">
                    <AccordionItem value={`subcategories-${category.id}`} className="border-b-0">
                      <AccordionTrigger className="px-4 py-2 text-sm">
                        View Subcategories
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {subcategories.map((subcategory) => (
                            <div 
                              key={subcategory.id}
                              className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleSubcategoryClick(category.slug, subcategory.id)}
                            >
                              <span className="text-sm">{subcategory.name}</span>
                              <span className="text-xs text-gray-500 ml-2">({subcategory.count})</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;

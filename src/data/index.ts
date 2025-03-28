
import { Product } from '../context/ProductsContext';
import { phoneProducts } from './phones';
import { computerProducts } from './computers';
import { headphoneProducts } from './headphones';
import { gamingProducts } from './gaming';
import { tabletProducts } from './tablets';
import { cameraProducts } from './cameras';
import { monitorProducts } from './monitors';

// Combine all products into a single array
export const allProducts: Product[] = [
  ...phoneProducts,
  ...computerProducts,
  ...headphoneProducts,
  ...gamingProducts,
  ...tabletProducts,
  ...cameraProducts,
  ...monitorProducts
];

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.featured);
};

export const getBestSellingProducts = (): Product[] => {
  return allProducts.filter(product => product.bestSeller);
};

export const getNewArrivals = (): Product[] => {
  // Get latest 8 products (could be based on date in a real application)
  return allProducts.slice(0, 8);
};

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getRelatedProducts = (id: string, limit: number = 4): Product[] => {
  const product = getProductById(id);
  if (!product) return [];
  
  // Get products from the same category, excluding the current product
  const categoryProducts = allProducts.filter(p => 
    p.category === product.category && p.id !== id
  );
  
  // Return a limited number of products
  return categoryProducts.slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};

// New utility functions

export const getDiscountedProducts = (limit: number = 8): Product[] => {
  return allProducts
    .filter(product => product.discountPercentage && product.discountPercentage > 0)
    .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
    .slice(0, limit);
};

export const getTopRatedProducts = (limit: number = 8): Product[] => {
  return [...allProducts]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getPriceSortedProducts = (category: string, ascending: boolean = true): Product[] => {
  const categoryProducts = getProductsByCategory(category);
  return [...categoryProducts].sort((a, b) => 
    ascending ? a.price - b.price : b.price - a.price
  );
};

export const filterProductsByPriceRange = (minPrice: number, maxPrice: number): Product[] => {
  return allProducts.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

export const getCategoryCounts = (): { [key: string]: number } => {
  const counts: { [key: string]: number } = {};
  
  allProducts.forEach(product => {
    if (counts[product.category]) {
      counts[product.category]++;
    } else {
      counts[product.category] = 1;
    }
  });
  
  return counts;
};

export const getRandomProducts = (limit: number = 4): Product[] => {
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};


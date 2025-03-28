
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

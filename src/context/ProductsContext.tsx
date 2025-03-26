
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Product Types
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discountPercentage?: number;
  isNew?: boolean;
  category: string;
  description?: string;
  inStock?: boolean;
  colors?: string[];
  sizes?: string[];
}

// Cart Types
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Wishlist Types
export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  discountPercentage?: number;
}

interface ProductsContextType {
  products: Product[];
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getWishlistCount: () => number;
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

// Product data
const initialProducts: Product[] = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    image: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    rating: 4.7,
    reviewCount: 88,
    discountPercentage: 40,
    category: 'gaming',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive, easy install & mess free removal.',
    inStock: true,
    colors: ['#ffffff', '#ff4d4f', '#000000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'AK-900 Wired Keyboard',
    price: 900,
    oldPrice: 1160,
    image: '/lovable-uploads/cc66bec0-3b2a-46e0-86fc-6c5dda98c02b.png',
    rating: 4.5,
    reviewCount: 75,
    discountPercentage: 35,
    category: 'accessories',
    description: 'Professional gaming mechanical keyboard with RGB backlight, programmable keys and anti-ghosting technology for a seamless gaming experience.',
    inStock: true,
    colors: ['#000000', '#ffffff']
  },
  {
    id: '3',
    name: 'IPS LCD Gaming Monitor',
    price: 370, 
    oldPrice: 400,
    image: '/lovable-uploads/d28aea47-1734-4856-91f0-32ddbf86a52d.png',
    rating: 4.8,
    reviewCount: 99,
    discountPercentage: 30,
    category: 'monitors',
    description: 'High-performance gaming monitor with 144Hz refresh rate, 1ms response time, and FreeSync technology for smooth gameplay.',
    inStock: true,
    colors: ['#000000']
  },
  {
    id: '4',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    image: '/lovable-uploads/06242eff-edaf-4101-aff1-9f5cef6a3a40.png',
    rating: 4.6,
    reviewCount: 65,
    category: 'accessories',
    description: 'Advanced liquid cooling system with RGB lighting effects, quiet operation, and efficient heat dissipation.',
    inStock: true
  },
  {
    id: '5',
    name: 'Smartphone X Pro',
    price: 899,
    oldPrice: 999,
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    rating: 4.9,
    reviewCount: 120,
    discountPercentage: 10,
    category: 'phones',
    isNew: true,
    description: 'Latest flagship smartphone with advanced camera system, powerful processor, and all-day battery life.',
    inStock: true,
    colors: ['#000000', '#ffffff', '#ff4d4f']
  },
  {
    id: '6',
    name: 'Professional Laptop',
    price: 1299,
    oldPrice: 1499,
    image: '/lovable-uploads/45ebd75e-e25e-46e1-96b5-9daae391609b.png',
    rating: 4.7,
    reviewCount: 85,
    discountPercentage: 15,
    category: 'computers',
    description: 'High-performance laptop for work and entertainment with the latest processors and stunning display.',
    inStock: true,
    colors: ['#000000', '#c0c0c0']
  },
  {
    id: '7',
    name: 'Wireless Earbuds Pro',
    price: 159,
    oldPrice: 199,
    image: '/lovable-uploads/4eff34ef-0f14-4e40-9696-f75daac30877.png',
    rating: 4.6,
    reviewCount: 92,
    discountPercentage: 20,
    category: 'headphones',
    isNew: true,
    description: 'True wireless earbuds with active noise cancellation, water resistance, and long battery life.',
    inStock: true,
    colors: ['#ffffff', '#000000', '#ff4d4f']
  },
  {
    id: '8',
    name: 'Smart Home Hub',
    price: 129,
    oldPrice: 159,
    image: '/lovable-uploads/ea1f1c80-c58d-43c5-966e-322a915ba87e.png',
    rating: 4.5,
    reviewCount: 60,
    discountPercentage: 20,
    category: 'smart-home',
    description: 'Central smart home controller compatible with all major smart devices and voice assistants.',
    inStock: true
  }
];

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Load cart and wishlist from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prev, { 
          id: product.id, 
          name: product.name, 
          price: product.price, 
          image: product.image, 
          quantity: 1 
        }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const addToWishlist = (product: Product) => {
    // Check if product is already in wishlist
    if (!wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems(prev => [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.price,
        oldPrice: product.oldPrice,
        image: product.image,
        discountPercentage: product.discountPercentage
      }]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return (
    <ProductsContext.Provider value={{
      products,
      cartItems,
      wishlistItems,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      addToWishlist,
      removeFromWishlist,
      clearCart,
      getCartTotal,
      getCartCount,
      getWishlistCount,
      getProductById,
      getProductsByCategory
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

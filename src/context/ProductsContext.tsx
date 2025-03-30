import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { expandedProducts } from '../data/products';
import { allProducts } from '../data';

// Product type definition
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  discountPercentage?: number;
  category: string;
  description: string;
  inStock: boolean;
  colors: string[];
  sizes: { name: string; price: number }[];
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
}

// Cart item type
export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: { name: string; price: number };
  selectedColor?: string;
}

// Wishlist item
export interface WishlistItem {
  product: Product;
  dateAdded: Date;
}

// Order type
export interface Order {
  id: string;
  items: CartItem[];
  shippingInfo: any;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid';
  orderStatus: 'processing' | 'shipped' | 'delivered';
  orderDate: Date;
  totalAmount: number;
}

// State interface
interface ProductsState {
  products: Product[];
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  orders: Order[];
}

// Action types
type ProductsAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity?: number; selectedSize?: { name: string; price: number }; selectedColor?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'PLACE_ORDER'; payload: Order };

// Initial state
const initialState: ProductsState = {
  products: allProducts || expandedProducts,
  cartItems: [],
  wishlistItems: [],
  orders: []
};

// Reducer function
const productsReducer = (state: ProductsState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity = 1, selectedSize, selectedColor } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex !== -1) {
        // Update quantity if item already exists
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // Add new item to cart
        return { 
          ...state, 
          cartItems: [...state.cartItems, { product, quantity, selectedSize, selectedColor }] 
        };
      }
    }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.product.id !== action.payload)
      };
    
    case 'UPDATE_CART_QUANTITY': {
      const { productId, quantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map(item => 
          item.product.id === productId ? { ...item, quantity } : item
        )
      };
    }
    
    case 'CLEAR_CART':
      return { ...state, cartItems: [] };
    
    case 'ADD_TO_WISHLIST': {
      const existingItem = state.wishlistItems.find(item => item.product.id === action.payload.id);
      
      if (existingItem) {
        return state; // Item already exists in wishlist
      }
      
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, { product: action.payload, dateAdded: new Date() }]
      };
    }
    
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(item => item.product.id !== action.payload)
      };
    
    case 'PLACE_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload],
        cartItems: [] // Clear cart after order placement
      };
    
    default:
      return state;
  }
};

// Create context
interface ProductsContextProps {
  products: Product[];
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  orders: Order[];
  addToCart: (product: Product, quantity?: number, selectedSize?: { name: string; price: number }, selectedColor?: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  getCartTotal: () => number;
  placeOrder: (shippingInfo: any, paymentMethod: string, paymentStatus: 'pending' | 'paid') => string;
  getFeaturedProducts: () => Product[];
  getBestSellingProducts: () => Product[];
  getNewArrivals: () => Product[];
  getRelatedProducts: (productId: string) => Product[];
  getProductById: (id: string) => Product | undefined;
  getDiscountedProducts: (limit?: number) => Product[];
  getProductImage: (product: Product) => string;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

// Provider component
export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  
  // Load state from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    const savedWishlist = localStorage.getItem('wishlistItems');
    const savedOrders = localStorage.getItem('orders');
    
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      parsedCart.forEach((item: CartItem) => {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            product: item.product,
            quantity: item.quantity,
            selectedSize: item.selectedSize,
            selectedColor: item.selectedColor
          }
        });
      });
    }
    
    if (savedWishlist) {
      const parsedWishlist = JSON.parse(savedWishlist);
      parsedWishlist.forEach((item: WishlistItem) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: item.product });
      });
    }
    
    if (savedOrders) {
      const parsedOrders = JSON.parse(savedOrders);
      parsedOrders.forEach((order: Order) => {
        dispatch({ type: 'PLACE_ORDER', payload: order });
      });
    }
  }, []);
  
  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
    localStorage.setItem('orders', JSON.stringify(state.orders));
  }, [state.cartItems, state.wishlistItems, state.orders]);
  
  // Actions
  const addToCart = (
    product: Product, 
    quantity = 1, 
    selectedSize?: { name: string; price: number }, 
    selectedColor?: string
  ) => {
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { product, quantity, selectedSize, selectedColor } 
    });
  };
  
  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
  
  const updateCartQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { productId, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };
  
  const removeFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };
  
  const getCartTotal = (): number => {
    return state.cartItems.reduce((total, item) => {
      const itemPrice = item.selectedSize?.price || item.product.price;
      return total + (itemPrice * item.quantity);
    }, 0);
  };
  
  const placeOrder = (shippingInfo: any, paymentMethod: string, paymentStatus: 'pending' | 'paid'): string => {
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    const order: Order = {
      id: orderId,
      items: [...state.cartItems],
      shippingInfo,
      paymentMethod,
      paymentStatus,
      orderStatus: 'processing',
      orderDate: new Date(),
      totalAmount: getCartTotal()
    };
    
    dispatch({ type: 'PLACE_ORDER', payload: order });
    return orderId;
  };
  
  const getFeaturedProducts = (): Product[] => {
    return state.products.filter(product => product.featured);
  };
  
  const getBestSellingProducts = (): Product[] => {
    return state.products.filter(product => product.bestSeller);
  };
  
  const getNewArrivals = (): Product[] => {
    return state.products.slice(0, 8);
  };
  
  const getRelatedProducts = (productId: string): Product[] => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return [];
    
    return state.products
      .filter(p => p.category === product.category && p.id !== productId)
      .slice(0, 4);
  };
  
  const getProductById = (id: string): Product | undefined => {
    return state.products.find(product => product.id === id);
  };
  
  const getDiscountedProducts = (limit = 8): Product[] => {
    return state.products
      .filter(product => product.discountPercentage && product.discountPercentage > 0)
      .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
      .slice(0, limit);
  };
  
  const getProductImage = (product: Product): string => {
    // If product has specific images, use them
    if (product.images && product.images.length > 0) {
      return product.images[0];
    }
    
    // Otherwise, if it has a valid image, use that
    if (product.image && !product.image.includes('undefined')) {
      return product.image;
    }
    
    // If not, generate specific image based on product category and name
    const categoryImageMap: Record<string, string[]> = {
      "phones": [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500",
        "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500"
      ],
      "computers": [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
        "https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=500"
      ],
      "headphones": [
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
        "https://images.unsplash.com/photo-1618329340733-5b27c70ba442?w=500",
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500"
      ],
      "gaming": [
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500",
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500",
        "https://images.unsplash.com/photo-1652989360948-3f32356a50b5?w=500",
        "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=500"
      ],
      "tablets": [
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500",
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        "https://images.unsplash.com/photo-1623126908029-58c1502a88d3?w=500",
        "https://images.unsplash.com/photo-1623934103730-095532963ac7?w=500"
      ],
      "cameras": [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=500",
        "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500",
        "https://images.unsplash.com/photo-1617464653658-e0b64c6ce780?w=500"
      ],
      "monitors": [
        "https://images.unsplash.com/photo-1586152985844-5f392d4e7ce3?w=500",
        "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500",
        "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
      ]
    };
    
    // Get images for the product's category or use general electronics images
    const categoryImages = categoryImageMap[product.category] || [
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=500",
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500",
      "https://images.unsplash.com/photo-1595941056519-d7e28121adc4?w=500"
    ];
    
    // Use name-based hashing to consistently pick the same image for the same product
    const nameHash = product.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = nameHash % categoryImages.length;
    
    return categoryImages[index];
  };
  
  return (
    <ProductsContext.Provider value={{
      products: state.products,
      cartItems: state.cartItems,
      wishlistItems: state.wishlistItems,
      orders: state.orders,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      addToWishlist,
      removeFromWishlist,
      getCartTotal,
      placeOrder,
      getFeaturedProducts,
      getBestSellingProducts,
      getNewArrivals,
      getRelatedProducts,
      getProductById,
      getDiscountedProducts,
      getProductImage
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook
export const useProducts = (): ProductsContextProps => {
  const context = useContext(ProductsContext);
  
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  
  return context;
};

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
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  color?: string;
  size?: string;
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
  shippingAddress?: any;
  status?: string;
  date?: Date;
  total?: number;
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
          cartItems: [...state.cartItems, { 
            product, 
            quantity, 
            selectedSize, 
            selectedColor,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: selectedColor,
            size: selectedSize?.name
          }] 
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
    
    case 'PLACE_ORDER': {
      const order = {
        ...action.payload,
        status: action.payload.orderStatus,
        date: action.payload.orderDate,
        total: action.payload.totalAmount,
        shippingAddress: action.payload.shippingInfo
      };
      
      return {
        ...state,
        orders: [...state.orders, order],
        cartItems: [] // Clear cart after order placement
      };
    }
    
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
  getCartCount: () => number;
  getWishlistCount: () => number;
  placeOrder: (shippingInfo: any, paymentMethod: string, paymentStatus: 'pending' | 'paid') => string;
  getFeaturedProducts: () => Product[];
  getBestSellingProducts: () => Product[];
  getNewArrivals: () => Product[];
  getRelatedProducts: (productId: string) => Product[];
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
  getDiscountedProducts: (limit?: number) => Product[];
  getProductImage: (product: Product) => string;
  getOrderById: (id: string) => Order | undefined;
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
  
  const getCartCount = (): number => {
    return state.cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  
  const getWishlistCount = (): number => {
    return state.wishlistItems.length;
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
      totalAmount: getCartTotal(),
      status: 'processing',
      date: new Date(),
      total: getCartTotal(),
      shippingAddress: shippingInfo
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

  const getProductsByCategory = (category: string): Product[] => {
    return state.products.filter(product => product.category === category);
  };
  
  const getDiscountedProducts = (limit = 8): Product[] => {
    return state.products
      .filter(product => product.discountPercentage && product.discountPercentage > 0)
      .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
      .slice(0, limit);
  };

  const getOrderById = (id: string): Order | undefined => {
    return state.orders.find(order => order.id === id);
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
    
    // Updated images for phones and computers
    const categoryImageMap: Record<string, string[]> = {
      "phones": [
        "https://s.alicdn.com/@sc04/kf/H69b6f97cd1ba42f1925ef35ad9f98289j.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H08e179ac0b374174b5e6418cbb87429b7.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H5c09b038d3ba4d18b3de20a0b1a3ff28P.png_300x300.png",
        "https://s.alicdn.com/@sc04/kf/H689c56e92dfb4133a71b4fb61d1b3ce7C.jpg_300x300.jpg"
      ],
      "computers": [
        "https://s.alicdn.com/@sc04/kf/Hf8ba3dfa25be41baa62f8fcf471d0d4eJ.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/Hf0b2ea9dc12547c9b3e14ea9a5fb7cf8Y.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H07a7bca1e0d24a79b1e21a2b091ab96cg.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/Hecae9747d43e45b2b38318b033c0637dR.jpg_300x300.jpg"
      ],
      "headphones": [
        "https://s.alicdn.com/@sc04/kf/H8dd0a3b5c1ce468c9e14b89cf35f9ee0b.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H48d39a7f49cd486cb3d7b404b3d55ad9q.png_300x300.png",
        "https://s.alicdn.com/@sc04/kf/H3392e0f62c3641a9b4f7f03c33fff81dE.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H9d1cc7e5f3d445a3bae9448e671f9d72R.jpg_300x300.jpg"
      ],
      "gaming": [
        "https://s.alicdn.com/@sc04/kf/H5e995fe2ab274c139e67aed24d8d33b8j.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H2dc5a8fe80014b3d97fb60fc2eb5e092h.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/Hbcc8acd8c29b42f5967ab11fea5c4aaaC.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H63a76cc1a6214ae28a9f5354dfb7f842C.jpg_300x300.jpg"
      ],
      "tablets": [
        "https://s.alicdn.com/@sc04/kf/Hec909899d6e94b35b20582f96be03d7aF.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H7c2aeb14ac2a4ca5a12592aba20f7f9dR.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/Hba97bf7e1ffc4c7584cfbfc9fc3ba7e8L.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/Hfb69e6e3b6764143beb18e3d17d4f31cw.jpg_300x300.jpg"
      ],
      "cameras": [
        "https://s.alicdn.com/@sc04/kf/Heb3f9ab38ef24639b7d4d3dac9a1e0c6r.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H08a3322324fb4175a62ed434c0d46f01h.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H0d5d4ec6d6564235886065fde2f9e7adF.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/Ha5af64ac2b254c17a57cc8164c33de01K.jpg_300x300.jpg"
      ],
      "monitors": [
        "https://s.alicdn.com/@sc04/kf/H4af87e0f7e704a93b5c3c19991122e74a.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H6e0b9eedbc3b4a60b61abb4cec97c56fV.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/Hd90f7bfe5bfc4df29e85b4de01eac75fE.jpg_300x300.jpg",
        "https://s.alicdn.com/@sc04/kf/H6ca6eec2deb14dde9a56d5c06f374d9cL.jpg_300x300.jpg"
      ]
    };
    
    // Get images for the product's category or use general electronics images
    const categoryImages = categoryImageMap[product.category] || [
      "https://s.alicdn.com/@sc04/kf/H40a7f4a3dc6f41aea2d0b0cdd1eecc0aM.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H8a1b95ada147487180a3dafedf45c8acs.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H51af5abbc3de41c2ad37fecd1f7b3b83y.jpg_300x300.jpg"
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
      getCartCount,
      getWishlistCount,
      placeOrder,
      getFeaturedProducts,
      getBestSellingProducts,
      getNewArrivals,
      getRelatedProducts,
      getProductById,
      getProductsByCategory,
      getDiscountedProducts,
      getProductImage,
      getOrderById
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

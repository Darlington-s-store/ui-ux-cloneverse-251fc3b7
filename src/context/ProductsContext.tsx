import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { allProducts, getProductsByCategory, getFeaturedProducts, getBestSellingProducts } from '../data';

// Product Types
export interface ProductSize {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  discountPercentage?: number;
  isNew?: boolean;
  category: string;
  description: string;
  inStock: boolean;
  colors: string[];
  sizes: ProductSize[];
  featured?: boolean;
  bestSeller?: boolean;
}

// Cart Types
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
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

// Order Types
export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'processing' | 'shipped' | 'delivered' | 'pending';
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  paymentStatus?: 'pending' | 'paid';
}

interface ProductsContextType {
  products: Product[];
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  orders: Order[];
  addToCart: (product: Product, color?: string, size?: string) => void;
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
  getFeaturedProducts: () => Product[];
  getBestSellingProducts: () => Product[];
  getDiscountedProducts: (limit?: number) => Product[];
  placeOrder: (shippingInfo: Order['shippingAddress'], paymentMethod: string, paymentStatus?: 'pending' | 'paid') => string;
  getOrderById: (id: string) => Order | undefined;
  getProductImage: (product: Product) => string;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

// Array of placeholder image URLs based on categories
const placeholderImagesByCategory: Record<string, string[]> = {
  phones: [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500",
    "https://images.unsplash.com/photo-1604671371836-9e8ca46a12b0?w=500"
  ],
  computers: [
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500"
  ],
  headphones: [
    "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500"
  ],
  gaming: [
    "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500",
    "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500",
    "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500"
  ],
  tablets: [
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=500",
    "https://images.unsplash.com/photo-1585790050230-5dd28404cbd9?w=500"
  ],
  cameras: [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=500",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500"
  ],
  monitors: [
    "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?w=500",
    "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500",
    "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?w=500"
  ]
};

// General fallback images for any category
const genericPlaceholders = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
];

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(allProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedOrders = localStorage.getItem('orders');
    
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product: Product, color?: string, size?: string) => {
    setCartItems(prev => {
      let itemPrice = product.price;
      if (size) {
        const sizeObj = product.sizes.find(s => s.name === size);
        if (sizeObj) {
          itemPrice = sizeObj.price;
        }
      }
      
      const itemId = `${product.id}${color ? `-${color}` : ''}${size ? `-${size}` : ''}`;
      
      const existingItem = prev.find(item => 
        item.id === product.id && 
        item.color === color && 
        item.size === size
      );
      
      if (existingItem) {
        return prev.map(item => 
          (item.id === product.id && item.color === color && item.size === size) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prev, { 
          id: product.id, 
          name: product.name, 
          price: itemPrice, 
          image: product.image, 
          quantity: 1,
          color,
          size
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

  const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
  };

  const getFeaturedProducts = (): Product[] => {
    return products.filter(product => product.featured);
  };

  const getBestSellingProducts = (): Product[] => {
    return products.filter(product => product.bestSeller);
  };

  const getDiscountedProducts = (limit: number = 8): Product[] => {
    return products
      .filter(product => product.discountPercentage && product.discountPercentage > 0)
      .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
      .slice(0, limit);
  };

  const placeOrder = (shippingInfo: Order['shippingAddress'], paymentMethod: string, paymentStatus: 'pending' | 'paid' = 'pending') => {
    const orderId = `ORD-${Date.now().toString().slice(-6)}`;
    
    const newOrder: Order = {
      id: orderId,
      date: new Date().toISOString(),
      items: [...cartItems],
      total: getCartTotal(),
      status: paymentStatus === 'paid' ? 'processing' : 'pending',
      shippingAddress: shippingInfo,
      paymentMethod,
      paymentStatus
    };
    
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    
    return orderId;
  };

  const getOrderById = (id: string): Order | undefined => {
    return orders.find(order => order.id === id);
  };

  const getProductImage = (product: Product): string => {
    if (product.image && product.image !== '') {
      return product.image;
    }
    
    const nameHash = product.name
      .split('')
      .reduce((hash, char) => char.charCodeAt(0) + hash, 0);
    
    const categoryImages = placeholderImagesByCategory[product.category];
    if (categoryImages && categoryImages.length > 0) {
      const index = nameHash % categoryImages.length;
      return categoryImages[index];
    }
    
    const fallbackIndex = nameHash % genericPlaceholders.length;
    return genericPlaceholders[fallbackIndex];
  };

  return (
    <ProductsContext.Provider value={{
      products,
      cartItems,
      wishlistItems,
      orders,
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
      getProductsByCategory,
      getFeaturedProducts,
      getBestSellingProducts,
      getDiscountedProducts,
      placeOrder,
      getOrderById,
      getProductImage
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

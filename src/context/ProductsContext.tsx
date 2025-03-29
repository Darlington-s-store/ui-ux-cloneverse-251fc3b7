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
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

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
      getOrderById
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

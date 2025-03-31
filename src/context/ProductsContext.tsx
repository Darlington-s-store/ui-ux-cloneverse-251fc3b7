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
    // Priority 1: Check if product has valid images array
    if (product.images && product.images.length > 0) {
      const validImage = product.images.find(img => 
        img && !img.includes('undefined') && !img.includes('null')
      );
      if (validImage) return validImage;
    }
    
    // Priority 2: Check if product has a valid main image
    if (product.image && !product.image.includes('undefined') && !product.image.includes('null')) {
      return product.image;
    }
    
    // Priority 3: Use category-specific images with better AliExpress sources
    const categoryImageMap: Record<string, string[]> = {
      "phones": [
        "https://ae01.alicdn.com/kf/S7de15e8536664332b478d953ea4e444dN/Global-Version-Xiaomi-Redmi-Note-13-Pro-5G-Smartphone-120Hz-AMOLED-200MP-Camera-67W-Fast-Charging.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S552726afd580451fa58bde9bb4bad3d84/Global-Version-Xiaomi-Redmi-Note-13-Pro-5G-Smartphone-120Hz-AMOLED-200MP-Camera-67W-Fast-Charging.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S21c32a4e89334742b765e077fa9efd02X/Xiaomi-13T-Pro-5G-Phone-Global-Version-512GB-12GB-Dimensity-9200-200MP-Triple-AI-Camera-5000mAh.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S0fecb147b4074048a2af4619ffbbcdcdX/IPhone-15-Pro-Max-Phone-Global-Version-A17-Pro-Chip-48MP-Camera-6-7-Super-Retina.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S21c32a4e89334742b765e077fa9efd02X/Xiaomi-13T-Pro-5G-Phone-Global-Version-512GB-12GB-Dimensity-9200-200MP-Triple-AI-Camera-5000mAh.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S5d6fbf9f76614abda24a00d8d8ba2e0dI/Global-Version-Xiaomi-Redmi-Note-13-Smartphone-108MP-Camera-120Hz-AMOLED-5000mAh-Dual-Sim-Card-Google.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S0a0686d8c7fb4b43a25c9cf14a830c1dp/Global-Version-OnePlus-12-5G-Smartphone-24GB-1TB-Snapdragon-8-Gen-3-6-82-2K-120Hz.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/Sb1b1dc8bd09d4c63b7234fdae2bdc7af1/Original-HONOR-90-GT-5G-Smart-Phone-Snapdragon-8-Gen-2-120W-SuperCharge-NFC-50MP-Camera.jpg_220x220.jpg"
      ],
      "computers": [
        "https://ae01.alicdn.com/kf/S9e7bcd0d6eee4b5593e69a1400c21a0ev/T-Book-X11-Pro-16GB-RAM-512GB-SSD-Laptop-Computers-i7-6500U-15-6-inch-IPS.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/Sd9d4e82013944d8faef6ea9e28d4d54eH/New-Arrivals-15-6-inch-FHD-IPS-Display-Intel-Core-i7-1165G7-Quad-Core-16GB-RAM.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S20d6e43a2d0e4d0c9f19c1a05a70b0aaI/KUU-K1-Pro-Intel-N5100-Laptops-15-6-inch-IPS-1920-1080-Windows-11-Student-Office.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S6acc0e4ab85a4beda9ac95f3ae7b273eH/2023-Cheapest-Gaming-Laptop-Ultrabook-I7-15-6-Intel-Core-i3-i5-i7-16GB-RAM-DIY.jpg_220x220.jpg"
      ],
      "headphones": [
        "https://ae01.alicdn.com/kf/S07c2c5266a03496da6e6940d347855e7r/Quies-S36-Bluetooth-Headphones-Over-Ear-Wireless-Headphones-with-Mic-Hi-Fi-Sound-Headsets-50H-Playtime.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S5a88a0c32f5349acb2e8f52c3b4fda05Y/Head-Mounted-Wired-Gaming-Headset-With-Microphone-Headphones-Surround-Sound-USB-3-5-mm-Earphone-RGB.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/Sbe7e5c3e5ba0436bbe99d5e2b6b1d31es/ANC-Headphones-Active-Noise-Cancelling-Bluetooth-5-0-Headset-Over-Ear-Wireless-Earphones-with-Microphone-for.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/Sf4e2c94b071647db8cb3cb60ecc3d8c3H/Bluetooth-5-3-Headphones-Stereo-Over-Ear-Wireless-Headset-with-Microphone-Ear-Cushions-Replaceable-Hi-Fi.jpg_220x220.jpg"
      ],
      "gaming": [
        "https://ae01.alicdn.com/kf/S6fa81c62c78c452d9e3ccbba0d10e1d7Q/Gaming-Keyboard-Mechanical-Keyboard-RGB-Rainbow-Backlit-Computer-Keyboard-Mechanical-Feeling-104-Keys-Wired-Keyboard-Mouse.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S31881d9b6d524f0885b6d8e823c4cc07X/ABKONCORE-One-Handed-Gaming-Keyboard-RGB-Light-39-Keys-Membrane-Mini-Gaming-Keypad-with-Wrist-Rest.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S0de45c8b9f0b48639d9e6d3c00f35d63v/Wireless-Controller-for-PS5-Controller-Bluetooth-Gamepad-for-Playstation-5-Joystick-Console-Game-Joypad-with-Programmable.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/Sff75cf9b113c4049b7b06be6a49b3583a/New-Wireless-Gamepad-for-PS4-Controller-Bluetooth-USB-Wired-for-Playstation-4-Joystick-Console-Game-Joypad.jpg_220x220.jpg"
      ],
      "tablets": [
        "https://ae01.alicdn.com/kf/S1ae6e5c0b04046afa23f2d5ec2bcfd3bu/ALLDOCUBE-iPlay-50-Mini-Pro-Tablet-8-4-inch-Android-13-T616-Octa-Core-6GB-RAM.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S1f6c49fe5fbd4c0a8ce4d7e3d4bbcfebU/ALLDOCUBE-iPlay-50-Pro-2023-Tablet-PC-12GB-RAM-256GB-ROM-10-36-inch-2K-Screen.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S3d0f5a6a41e94b8ea6f9b1ebee5d7c0ct/Android-13-Tablet-PC-10-1-inch-IPS-HD-Screen-Octa-Core-4G-RAM-128G-ROM.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S34aeab00e7a7459593ae8f28ef8b4cc0G/Xiaomi-Pad-6-Pro-8-8GB-RAM-128GB-ROM-Tablet-PC-Mediatek-Dimensity-9000-Octa-Core.jpg_220x220.jpg"
      ],
      "cameras": [
        "https://ae01.alicdn.com/kf/S59d0c1a20d79447196e1d2f06eb3c8aav/Digital-Video-Camera-Handheld-Digital-Camcorder-HD-1080P-Vlogging-Camera-Video-Camera-16X-Digital-Zoom-with.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S0d93e4c5c52f4eb6aad3fdcfb3e8b894d/New-Professional-Digital-Camera-Camcorder-4K-Ultra-HD-WiFi-Video-Camcorder-3-0-Inch-Flip-Screen.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S2a0fabc3b35b4df7a5aacc16cf72c4a3F/Professional-4K-HD-camera-48MP-16X-Digital-camera-Travel-Vlog-camera-SLR-flip-screen-camera-External.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/Sf98aed89b51147f39f3b12f3e0b02266k/4K-HD-Camera-Professional-Photography-32MP-16X-Digital-Camera-Zoom-VLOG-WiFi-Cameras-for-YouTube-Flip.jpg_220x220.jpg"
      ],
      "monitors": [
        "https://ae01.alicdn.com/kf/S2e8b621bc4514aa1a4c9d80e20b2ed74d/ALLDOCUBE-C27-Smart-Monitor-IPS-LCD-Computer-Monitor-Portable-Monitor-with-Type-C-100-sRGB-Monitor.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/Se3e82e43dfde40fb8dc60adcb4ec6fc9i/ALLDOCUBE-15-6-inch-Portable-Gaming-Monitor-1920-1080-Full-HD-IPS-LCD-Display-Type-C-HDMI.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S1f3eb5e51a3e4d249bd40a6b1eef0d7aR/ALLDOCUBE-C27-27-Inch-Monitor-Smart-Computer-Monitors-1920-1080-Resolution-100-sRGB-250-nits-Type.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S7a61b45d9dcb4d5fb5b37df65eb7f87fs/ALLDOCUBE-GT-27-27-inch-165Hz-Gaming-PC-Monitor-2K-1440P-Resolution-Computer-LCD-with-HDR.jpg_220x220.jpg"
      ],
      "accessories": [
        "https://ae01.alicdn.com/kf/S343a3c1fa7c14f04a2a88bbce1f0a87eC/Waterproof-Shockproof-Laptop-Bag-Case-For-Dell-Hp-Huawei-Xiaomi-14-15-15-6-inch-Computer.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S7fdf02885dde45bca7cd5918af16a3c7g/Gaming-Mouse-Pad-Computer-Mousepad-Large-Mouse-Pad-Gamer-XXL-Mouse-Carpet-PC-Desk-Mat-keyboard.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/Sc39cb6b5e8a74a898bcfdaed1bbd5bc6I/GKK-Transparent-Original-Liquid-Silicone-Case-For-iPhone-15-Plus-Case-13-11-12-14-Pro.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S6599e2b5cb6e4bd596d3d9ca4fef1804j/For-iPhone-15-14-13-12-11-Pro-Max-Plus-Case-Camera-Lens-Protection-Cover-Luxury.jpg_220x220.jpg"
      ],
      "smart-home": [
        "https://ae01.alicdn.com/kf/S09909fa0ca934066a38c55a9195638f1R/Smart-Home-PIR-Motion-Sensor-Wireless-Infrared-Detector-Security-Burglar-Alarm-Sensor-Tuya-APP-Control-Compatible.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S20e8f5bf07934ccc95f73bc9057f9c59e/Smart-Wifi-Light-Switch-Glass-Panel-Wireless-Wall-Touch-Switch-Voice-Control-Home-Automation-Work-with.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S69dca97f4cde45c3914fc7acdf12af0bA/SONOFF-MINIR4M-Smart-Switch-WIFI-Mini-Two-Way-DIY-Switch-Smart-Home-Automation-Modules-Work-with.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S8ad6bab18cb941e9b8c8c5c0e7abaaa1H/ESP32-H2-RGB-Light-Zigbee-Smart-Gateway-Hub-Home-Assistant-with-Bluetooth-Battery-Color-LED-Matter.jpg_220x220.jpg"
      ],
      "wearables": [
        "https://ae01.alicdn.com/kf/Se45ca7ae42724b7b9d4e47c3c7fc11e04/Smart-Watch-Men-Women-IP68-Waterproof-Full-Touch-Fitness-Tracker-Heart-Rate-Sleep-Monitor-Smartwatch-Sport.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S2e7a5bbb49bc43618b7d30e5a4ab5ed68/SOYES-F950-Smart-Watch-Men-Bluetooth-Call-AMOLED-Screen-Wireless-Charging-Sport-Watch-Woman-Men-Smartwatch.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S2cd8f2f72747445ebabea1fb3b8c1fc0H/Smart-Watch-for-Men-with-Bluetooth-Call-Full-Touch-Fitness-Tracker-IP68-Waterproof-Blood-Pressure-Oxygen.jpg_220x220.jpg",
        "https://ae01.alicdn.com/kf/S6878fb39be3f492cb0c6b7b6a94c79b8n/Smart-Watch-Men-With-Bluetooth-Call-Blood-Pressure-Monitoring-Heart-Rate-Health-Tracker-Sport-Waterproof-Smartwatch.jpg_220x220.jpg"
      ]
    };
    
    // Get images for the product's category or use general electronics images
    const categoryImages = categoryImageMap[product.category] || [
      "https://ae01.alicdn.com/kf/Sc39cb6b5e8a74a898bcfdaed1bbd5bc6I/GKK-Transparent-Original-Liquid-Silicone-Case-For-iPhone-15-Plus-Case-13-11-12-14-Pro.jpg_220x220.jpg",
      "https://ae01.alicdn.com/kf/S08f4794a5ae24142937492187ca71b92Q/LED-Desk-Lamp-Table-Lamp-Adjustable-3-Lighting-Modes-Light-Reading-Light-With-Rechargeable-Battery-Reading.jpg_220x220.jpg",
      "https://ae01.alicdn.com/kf/Sf2f0e052f4ce495786d1fe6a24d9b848L/Picun-H12-Headsets-Bluetooth-Wireless-Headphones-Gaming-Bass-Noise-Reduction-Foldable-Wireless-Wired-Headset-with-Microphone.jpg_220x220.jpg"
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

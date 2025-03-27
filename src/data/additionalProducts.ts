
import { Product } from '../context/ProductsContext';

export const additionalProducts: Product[] = [
  // PHONES CATEGORY - Additional Products
  {
    id: "phone-06",
    name: "iPhone 14",
    price: 849,
    oldPrice: 949,
    image: "https://images.unsplash.com/photo-1678911870812-1939c1657cf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1678911870812-1939c1657cf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1678911870812-1939c1657cf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lfGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 187,
    discountPercentage: 10,
    category: "phones",
    description: "The iPhone 14 features an advanced camera system, all-day battery life, and a powerful A15 Bionic chip.",
    inStock: true,
    colors: ["#000000", "#FF0000", "#1E90FF"],
    sizes: [
      { name: "128GB", price: 849 },
      { name: "256GB", price: 949 },
      { name: "512GB", price: 1149 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "phone-07",
    name: "Samsung Galaxy Z Fold 4",
    price: 1799,
    oldPrice: 1899,
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIweiUyMGZvbGR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIweiUyMGZvbGR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1667344325474-f1e8913dd6cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FsYXh5JTIweiUyMGZvbGR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1652962530292-83185001c1da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbGF4eSUyMHolMjBmb2xkfGVufDB8fDB8fHww"
    ],
    rating: 4.6,
    reviewCount: 156,
    discountPercentage: 5,
    category: "phones",
    description: "The Galaxy Z Fold 4 transforms from a phone to a tablet-like experience with its folding display technology and advanced multitasking features.",
    inStock: true,
    colors: ["#000000", "#808080", "#F5F5DC"],
    sizes: [
      { name: "256GB", price: 1799 },
      { name: "512GB", price: 1919 },
      { name: "1TB", price: 2159 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "phone-08",
    name: "Nothing Phone 1",
    price: 599,
    oldPrice: 699,
    image: "https://images.unsplash.com/photo-1680516089803-7be3b1d71dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm90aGluZyUyMHBob25lfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1680516089803-7be3b1d71dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm90aGluZyUyMHBob25lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1658680278414-3134181d3a14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90aGluZyUyMHBob25lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1658680278771-88ec2b284401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm90aGluZyUyMHBob25lfGVufDB8fDB8fHww"
    ],
    rating: 4.5,
    reviewCount: 143,
    discountPercentage: 14,
    category: "phones",
    description: "The Nothing Phone 1 features a unique transparent design with LED Glyph Interface, clean software, and solid performance at an affordable price.",
    inStock: true,
    colors: ["#FFFFFF", "#000000"],
    sizes: [
      { name: "128GB", price: 599 },
      { name: "256GB", price: 699 }
    ],
    featured: false,
    bestSeller: false
  },
  // COMPUTERS CATEGORY - Additional Products
  {
    id: "comp-06",
    name: "Surface Laptop 4",
    price: 1299,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1622286346003-c5c7e63b5772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZmFjZSUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1622286346003-c5c7e63b5772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZmFjZSUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1616232508966-c1e5cee05062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZmFjZSUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1617125287877-b22ced63d8a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VyZmFjZSUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 204,
    discountPercentage: 7,
    category: "computers",
    description: "The Microsoft Surface Laptop 4 combines style and performance with its sleek design, vibrant PixelSense touchscreen, and all-day battery life.",
    inStock: true,
    colors: ["#C0C0C0", "#000000", "#87CEEB"],
    sizes: [
      { name: "i5 8GB 256GB", price: 1299 },
      { name: "i7 16GB 512GB", price: 1699 },
      { name: "i7 16GB 1TB", price: 1999 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-07",
    name: "Razer Blade 15",
    price: 2499,
    oldPrice: 2699,
    image: "https://images.unsplash.com/photo-1603574670812-d24560880210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmF6ZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1603574670812-d24560880210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmF6ZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmF6ZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmF6ZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 178,
    discountPercentage: 7,
    category: "computers",
    description: "The Razer Blade 15 gaming laptop features a powerful NVIDIA RTX GPU, 144Hz display, and premium CNC aluminum chassis in a compact design.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "RTX 3070 512GB", price: 2499 },
      { name: "RTX 3080 1TB", price: 2899 },
      { name: "RTX 3080Ti 1TB", price: 3299 }
    ],
    featured: true,
    bestSeller: true
  },
  // GAMING CATEGORY - Additional Products
  {
    id: "gaming-06",
    name: "SteelSeries Arctis Pro",
    price: 279,
    oldPrice: 329,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 215,
    discountPercentage: 15,
    category: "gaming",
    description: "The SteelSeries Arctis Pro delivers high-resolution audio, premium comfort with the ski goggle suspension headband, and durable aluminum construction.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Wired", price: 279 },
      { name: "Wireless", price: 329 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "gaming-07",
    name: "HyperX Alloy Elite 2",
    price: 129,
    oldPrice: 149,
    image: "https://images.unsplash.com/photo-1595044426077-d36d9236d44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1595044426077-d36d9236d44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 187,
    discountPercentage: 13,
    category: "gaming",
    description: "The HyperX Alloy Elite 2 mechanical gaming keyboard features vibrant RGB lighting, durable steel frame, and dedicated media controls for gamers.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Red Switches", price: 129 },
      { name: "Blue Switches", price: 129 },
      { name: "Brown Switches", price: 129 }
    ],
    featured: false,
    bestSeller: false
  },
  // HEADPHONES CATEGORY - Additional Products
  {
    id: "headphone-06",
    name: "Audio-Technica ATH-M50x",
    price: 149,
    oldPrice: 169,
    image: "https://images.unsplash.com/photo-1558756520-22cfe5d4bbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaW8lMjB0ZWNobmljYXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1558756520-22cfe5d4bbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaW8lMjB0ZWNobmljYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaW8lMjB0ZWNobmljYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXVkaW8lMjB0ZWNobmljYXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 354,
    discountPercentage: 12,
    category: "headphones",
    description: "The Audio-Technica ATH-M50x professional studio headphones deliver accurate audio with exceptional clarity, comfort, and durability for professionals and enthusiasts.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Standard", price: 149 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "headphone-07",
    name: "Beyerdynamic DT 990 Pro",
    price: 179,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmV5ZXJkeW5hbWljfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmV5ZXJkeW5hbWljfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1606145762596-1b63c68f0a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 223,
    discountPercentage: 10,
    category: "headphones",
    description: "The Beyerdynamic DT 990 Pro open-back headphones deliver spacious sound with detailed bass and treble response, ideal for mixing and mastering.",
    inStock: true,
    colors: ["#808080", "#000000"],
    sizes: [
      { name: "250 Ohm", price: 179 },
      { name: "80 Ohm", price: 179 }
    ],
    featured: false,
    bestSeller: false
  },
  // MONITORS CATEGORY - Additional Products
  {
    id: "monitor-06",
    name: "BenQ EX2780Q",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVucSUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 167,
    discountPercentage: 9,
    category: "monitors",
    description: "The BenQ EX2780Q 27-inch gaming monitor features 2K QHD resolution, 144Hz refresh rate, HDRi technology, and built-in 2.1 channel speakers for immersive gaming.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "27-inch", price: 499 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "monitor-07",
    name: "LG UltraFine 5K",
    price: 1299,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1527443060795-0402a218799f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1527443060795-0402a218799f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1620210536266-daa7a8d6f0fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1614624532864-4eaae651601e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDVrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 113,
    discountPercentage: 7,
    category: "monitors",
    description: "The LG UltraFine 5K display delivers stunning 5120 x 2880 resolution with P3 wide color gamut, built-in camera, and Thunderbolt 3 connectivity for Mac users.",
    inStock: true,
    colors: ["#000000", "#808080"],
    sizes: [
      { name: "27-inch", price: 1299 }
    ],
    featured: true,
    bestSeller: false
  },
  // ACCESSORIES CATEGORY - Additional Products
  {
    id: "acc-06",
    name: "Elgato Stream Deck",
    price: 149,
    oldPrice: 179,
    image: "https://images.unsplash.com/photo-1589954755689-80591487db7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWFtJTIwZGVja3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1589954755689-80591487db7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWFtJTIwZGVja3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589954755690-bb7cad143dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWFtJTIwZGVja3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1661436203710-35321aaa7ef1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxnYXRvfGVufDB8fDB8fHww"
    ],
    rating: 4.8,
    reviewCount: 289,
    discountPercentage: 17,
    category: "accessories",
    description: "The Elgato Stream Deck puts 15 customizable LCD keys at your fingertips for one-touch control of your streaming, content creation, or productivity workflow.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "15-Key", price: 149 },
      { name: "Mini 6-Key", price: 99 },
      { name: "XL 32-Key", price: 249 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "acc-07",
    name: "CalDigit TS3 Plus",
    price: 249,
    oldPrice: 279,
    image: "https://images.unsplash.com/photo-1656530292949-c01826feb689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwY3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1656530292949-c01826feb689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwY3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1592899435936-9ac5cd3593be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzYiUyMGNvbm5lY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMHNldHVwfGVufDB8fDB8fHww"
    ],
    rating: 4.9,
    reviewCount: 215,
    discountPercentage: 11,
    category: "accessories",
    description: "The CalDigit TS3 Plus Thunderbolt 3 dock provides 15 ports including USB-A/C, DisplayPort, Ethernet, and SD card reader for a complete desktop setup.",
    inStock: true,
    colors: ["#808080"],
    sizes: [
      { name: "Standard", price: 249 }
    ],
    featured: false,
    bestSeller: true
  },
  // SMART HOME CATEGORY - Additional Products
  {
    id: "smart-06",
    name: "TP-Link Kasa Smart Plug",
    price: 39,
    oldPrice: 49,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjBwbHVnfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjBwbHVnfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbGlwcyUyMGh1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544428571-affe1eccfe10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0JTIwcGx1Z3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 534,
    discountPercentage: 20,
    category: "smart-home",
    description: "The TP-Link Kasa Smart Plug lets you control your devices remotely, set schedules, and use voice commands with Alexa or Google Assistant.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "Single Pack", price: 39 },
      { name: "4-Pack", price: 99 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "smart-07",
    name: "Arlo Pro 4 Camera",
    price: 199,
    oldPrice: 249,
    image: "https://images.unsplash.com/photo-1602526432604-029a709e76f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1602526432604-029a709e76f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1619555241737-9c364cf1fbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1580982327559-c1202864eb05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 324,
    discountPercentage: 20,
    category: "smart-home",
    description: "The Arlo Pro 4 Spotlight Camera features 2K HDR video, color night vision, and wire-free installation with direct Wi-Fi connection for home security.",
    inStock: true,
    colors: ["#FFFFFF", "#000000"],
    sizes: [
      { name: "1-Camera System", price: 199 },
      { name: "2-Camera System", price: 349 },
      { name: "4-Camera System", price: 649 }
    ],
    featured: true,
    bestSeller: false
  }
];

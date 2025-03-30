
import { Product } from '../context/ProductsContext';

export const computerProducts: Product[] = [
  {
    id: "comp-01",
    name: "MacBook Pro 16-inch",
    price: 2499,
    oldPrice: 2699,
    image: "https://s.alicdn.com/@sc04/kf/Hf8ba3dfa25be41baa62f8fcf471d0d4eJ.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/Hf8ba3dfa25be41baa62f8fcf471d0d4eJ.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Hf0b2ea9dc12547c9b3e14ea9a5fb7cf8Y.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H07a7bca1e0d24a79b1e21a2b091ab96cg.jpg_300x300.jpg"
    ],
    rating: 4.9,
    reviewCount: 325,
    discountPercentage: 7,
    category: "computers",
    description: "The ultimate pro notebook features M1 Pro or M1 Max chip for groundbreaking performance and amazing battery life.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "M1 Pro 512GB", price: 2499 },
      { name: "M1 Pro 1TB", price: 2699 },
      { name: "M1 Max 1TB", price: 3499 },
      { name: "M1 Max 2TB", price: 3999 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "comp-02",
    name: "Dell XPS 15",
    price: 1799,
    oldPrice: 1999,
    image: "https://s.alicdn.com/@sc04/kf/Hecae9747d43e45b2b38318b033c0637dR.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/Hecae9747d43e45b2b38318b033c0637dR.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Ha59ac2a5cf374ae887df7d0d7a187a79U.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H24a06ff2d04149c4ac0d74e6f71e5fdb2.jpg_300x300.jpg"
    ],
    rating: 4.7,
    reviewCount: 265,
    discountPercentage: 10,
    category: "computers",
    description: "Experience ultimate performance with the Dell XPS 15 featuring an InfinityEdge display, 11th Gen Intel processors, and RTX graphics.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "i7 512GB SSD", price: 1799 },
      { name: "i7 1TB SSD", price: 1999 },
      { name: "i9 1TB SSD", price: 2299 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "comp-03",
    name: "HP Spectre x360",
    price: 1299,
    oldPrice: 1499,
    image: "https://s.alicdn.com/@sc04/kf/H52c27d2af161426eb1dbc5fec29c81e9E.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/H52c27d2af161426eb1dbc5fec29c81e9E.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Hc3d22b70a8f2462db5a0d8c16ed29b74V.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H7aea98b9afb246fcab2dc96ae5d3fbeaR.jpg_300x300.jpg"
    ],
    rating: 4.6,
    reviewCount: 189,
    discountPercentage: 13,
    category: "computers",
    description: "The convertible HP Spectre x360 offers versatility with a 360° hinge, vibrant 4K display, and the latest Intel Core processors.",
    inStock: true,
    colors: ["#C0C0C0", "#4B0082", "#000000"],
    sizes: [
      { name: "i5 256GB SSD", price: 1299 },
      { name: "i7 512GB SSD", price: 1499 },
      { name: "i7 1TB SSD", price: 1699 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "comp-04",
    name: "ASUS ROG Zephyrus G14",
    price: 1499,
    oldPrice: 1699,
    image: "https://s.alicdn.com/@sc04/kf/H1b9c7cc77de64c9195c5ec827cd4cd0fJ.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/H1b9c7cc77de64c9195c5ec827cd4cd0fJ.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Hd73430c3fe3545a5abbd6307e0f5f8d6p.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H91eef78d9bc24a0bb4abd74a2e28f7a7C.jpg_300x300.jpg"
    ],
    rating: 4.5,
    reviewCount: 98,
    discountPercentage: 12,
    category: "computers",
    description: "The ASUS ROG Zephyrus G14 combines powerful AMD Ryzen processors with NVIDIA RTX graphics in a compact, portable design for gamers on the go.",
    inStock: true,
    colors: ["#000000", "#FFFFFF", "#808080"],
    sizes: [
      { name: "Ryzen 7 512GB", price: 1499 },
      { name: "Ryzen 9 1TB", price: 1799 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "comp-05",
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1699,
    oldPrice: 1899,
    image: "https://s.alicdn.com/@sc04/kf/H022f9f9a2f654a64a06d2083c2227be7V.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/H022f9f9a2f654a64a06d2083c2227be7V.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H9f2b25b8dc7f4e2aa5c11ead4aed9ebcy.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Hc4f13ae5cd744eec92bec2aa5ea9c550d.jpg_300x300.jpg"
    ],
    rating: 4.8,
    reviewCount: 198,
    discountPercentage: 10,
    category: "computers",
    description: "The Lenovo ThinkPad X1 Carbon combines premium materials, powerful performance, and legendary ThinkPad reliability in an ultralight package.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "i5 256GB", price: 1699 },
      { name: "i7 512GB", price: 1899 },
      { name: "i7 1TB", price: 2099 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "comp-06",
    name: "Microsoft Surface Laptop 5",
    price: 1299,
    oldPrice: 1399,
    image: "https://s.alicdn.com/@sc04/kf/H5a9d10d4c4a04a5995eb9f07c5c5f95eX.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/H5a9d10d4c4a04a5995eb9f07c5c5f95eX.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H11fda69fb68442c899cdbdf6c0c97908H.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Ha3d32e9343654e42b75d9dcddc06d4a6C.jpg_300x300.jpg"
    ],
    rating: 4.6,
    reviewCount: 145,
    discountPercentage: 7,
    category: "computers",
    description: "The Surface Laptop 5 offers clean design, all-day battery life, and performance for demanding multitasking workloads.",
    inStock: true,
    colors: ["#000000", "#D3D3D3", "#4169E1", "#800000"],
    sizes: [
      { name: "i5 256GB", price: 1299 },
      { name: "i7 512GB", price: 1599 },
      { name: "i7 1TB", price: 1799 }
    ],
    featured: true,
    bestSeller: false
  }
];

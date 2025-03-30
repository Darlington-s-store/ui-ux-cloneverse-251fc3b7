import { Product } from '../context/ProductsContext';

export const phoneProducts: Product[] = [
  {
    id: "phone-01",
    name: "iPhone 13 Pro Max",
    price: 1099,
    oldPrice: 1299,
    image: "https://s.alicdn.com/@sc04/kf/H69b6f97cd1ba42f1925ef35ad9f98289j.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/H69b6f97cd1ba42f1925ef35ad9f98289j.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H08e179ac0b374174b5e6418cbb87429b7.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Hf23f94e5a78b40c196c5be0d50c69b95r.jpg_300x300.jpg"
    ],
    rating: 4.9,
    reviewCount: 245,
    discountPercentage: 15,
    category: "phones",
    description: "The latest iPhone with a stunning Super Retina XDR display, professional camera system, and exceptional battery life.",
    inStock: true,
    colors: ["#000000", "#E5E4E2", "#CFB53B"],
    sizes: [
      { name: "128GB", price: 1099 },
      { name: "256GB", price: 1199 },
      { name: "512GB", price: 1399 },
      { name: "1TB", price: 1599 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "phone-02",
    name: "Samsung Galaxy S22 Ultra",
    price: 1199,
    oldPrice: 1299,
    image: "https://s.alicdn.com/@sc04/kf/H8c57b3deae5a46a89d8f55220e9ff303Z.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/H8c57b3deae5a46a89d8f55220e9ff303Z.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Hd14f8195a06545cca81a1dedd2a0c089k.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H97a336190e8346dfaecbdb54d4ad7f10n.jpg_300x300.jpg"
    ],
    rating: 4.8,
    reviewCount: 189,
    discountPercentage: 8,
    category: "phones",
    description: "Experience next-level power with the Galaxy S22 Ultra featuring an embedded S Pen, Nightography camera, and long-lasting battery.",
    inStock: true,
    colors: ["#000000", "#810d0d", "#274e13", "#FFFFFF"],
    sizes: [
      { name: "128GB", price: 1199 },
      { name: "256GB", price: 1299 },
      { name: "512GB", price: 1399 },
      { name: "1TB", price: 1599 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "phone-03",
    name: "Google Pixel 7 Pro",
    price: 899,
    oldPrice: 999,
    image: "https://s.alicdn.com/@sc04/kf/Hb3b39ca818b649ecb3e5b8af9b110bcd0.jpg_300x300.jpg",
    images: [
      "https://s.alicdn.com/@sc04/kf/Hb3b39ca818b649ecb3e5b8af9b110bcd0.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/H27fcccca89f3450ca29af58ed2df5b14V.jpg_300x300.jpg",
      "https://s.alicdn.com/@sc04/kf/Hf3b9c9a8063d4c82bb12dca033bfe3b7U.jpg_300x300.jpg"
    ],
    rating: 4.7,
    reviewCount: 156,
    discountPercentage: 10,
    category: "phones",
    description: "The Google Pixel 7 Pro brings amazing photo and video quality with groundbreaking AI features and the most advanced Pixel camera yet.",
    inStock: true,
    colors: ["#FFFFFF", "#000000", "#5f6368"],
    sizes: [
      { name: "128GB", price: 899 },
      { name: "256GB", price: 999 },
      { name: "512GB", price: 1099 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "phone-04",
    name: "OnePlus 10 Pro",
    price: 799,
    oldPrice: 899,
    image: "https://images.unsplash.com/photo-1638761946897-83cffaa3dce4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25lcGx1cyUyMDEwfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1638761946897-83cffaa3dce4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25lcGx1cyUyMDEwfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25lcGx1c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 132,
    discountPercentage: 11,
    category: "phones",
    description: "The OnePlus 10 Pro delivers lightning-fast performance with Snapdragon 8 Gen 1 and Hasselblad Camera for Mobile 2.0.",
    inStock: true,
    colors: ["#000000", "#728d3e", "#485574"],
    sizes: [
      { name: "128GB", price: 799 },
      { name: "256GB", price: 899 },
      { name: "512GB", price: 999 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "phone-05",
    name: "Xiaomi Mi 12",
    price: 749,
    oldPrice: 849,
    image: "https://images.unsplash.com/photo-1612543827278-399642d6a845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eGlhb21pfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1612543827278-399642d6a845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eGlhb21pfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1598327105854-c8674faddf79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHhpYW9taXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eGlhb21pfGVufDB8fDB8fHww"
    ],
    rating: 4.5,
    reviewCount: 98,
    discountPercentage: 12,
    category: "phones",
    description: "Xiaomi Mi 12 features a cutting-edge design, powerful Snapdragon processor, and an advanced camera system for exceptional photography.",
    inStock: true,
    colors: ["#000000", "#FFFFFF", "#1E90FF"],
    sizes: [
      { name: "128GB", price: 749 },
      { name: "256GB", price: 849 }
    ],
    featured: false,
    bestSeller: false
  },
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
  {
    id: "phone-09",
    name: "iPhone 15 Pro",
    price: 1199,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1695048134495-8f586e2d74c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1695048134495-8f586e2d74c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1678893534867-49e36994c115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1695647010228-700191dd57fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 178,
    discountPercentage: 8,
    category: "phones",
    description: "The iPhone 15 Pro features a titanium design, A17 Pro chip, and advanced camera system with 48MP main camera and improved telephoto capabilities.",
    inStock: true,
    colors: ["#000000", "#5c5543", "#394c5c", "#f5f5f0"],
    sizes: [
      { name: "128GB", price: 1199 },
      { name: "256GB", price: 1299 },
      { name: "512GB", price: 1499 },
      { name: "1TB", price: 1699 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "phone-10",
    name: "Google Pixel 8",
    price: 799,
    oldPrice: 899,
    image: "https://images.unsplash.com/photo-1697653489201-83d4456cb3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvb2dsZSUyMHBpeGVsJTIwOHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1697653489201-83d4456cb3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvb2dsZSUyMHBpeGVsJTIwOHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1698394170778-aa35c7286c29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZ2xlJTIwcGl4ZWwlMjA4fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1697235827911-dba490e7fa6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29vZ2xlJTIwcGl4ZWwlMjA4fGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 156,
    discountPercentage: 11,
    category: "phones",
    description: "The Google Pixel 8 features Google's most powerful smartphone chip, a beautiful display, and advanced AI capabilities for photography and everyday tasks.",
    inStock: true,
    colors: ["#000000", "#e8d6c5", "#c2d7d9"],
    sizes: [
      { name: "128GB", price: 799 },
      { name: "256GB", price: 899 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "phone-11",
    name: "Samsung Galaxy S23",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1678911188320-3b6b040ca8d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwczIzfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1678911188320-3b6b040ca8d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwczIzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1677187128124-d9d9f883c936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsYXh5JTIwczIzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1677187123426-d948dda8ccd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FsYXh5JTIwczIzfGVufDB8fDB8fHww"
    ],
    rating: 4.8,
    reviewCount: 195,
    discountPercentage: 10,
    category: "phones",
    description: "The Samsung Galaxy S23 features a Snapdragon 8 Gen 2 processor, a professional-grade camera, and long-lasting battery life in a sleek design.",
    inStock: true,
    colors: ["#000000", "#f9f4ef", "#cbd3d7", "#e2d5e0"],
    sizes: [
      { name: "128GB", price: 899 },
      { name: "256GB", price: 999 },
      { name: "512GB", price: 1099 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "phone-12",
    name: "Xiaomi 13 Pro",
    price: 949,
    oldPrice: 1049,
    image: "https://images.unsplash.com/photo-1670825372656-af3897455432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eGlhb21pJTIwMTMlMjBwcm98ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1670825372656-af3897455432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eGlhb21pJTIwMTMlMjBwcm98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHhpYW9taSUyMHBob25lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613746203812-717e6e5b8f44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eGlhb21pfGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 143,
    discountPercentage: 10,
    category: "phones",
    description: "The Xiaomi 13 Pro features a Leica-engineered camera system, Snapdragon 8 Gen 2 processor, and lightning-fast charging in a premium design.",
    inStock: true,
    colors: ["#000000", "#FFFFFF", "#384c5d"],
    sizes: [
      { name: "256GB", price: 949 },
      { name: "512GB", price: 1049 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "phone-13",
    name: "OnePlus 11",
    price: 699,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1678831884412-4bc4d777c068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25lcGx1cyUyMDExfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1678831884412-4bc4d777c068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25lcGx1cyUyMDExfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1676909761626-0798bdb864cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25lcGx1cyUyMDExfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1676909706299-8a97f72d9a50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lcGx1cyUyMDExfGVufDB8fDB8fHww"
    ],
    rating: 4.6,
    reviewCount: 178,
    discountPercentage: 13,
    category: "phones",
    description: "The OnePlus 11 features Hasselblad cameras, Snapdragon 8 Gen 2, and incredibly fast charging in a sleek, premium design.",
    inStock: true,
    colors: ["#000000", "#30502a"],
    sizes: [
      { name: "128GB", price: 699 },
      { name: "256GB", price: 799 },
      { name: "512GB", price: 899 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "phone-14",
    name: "Samsung Galaxy Z Flip 5",
    price: 999,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1691144559806-5782a500bc85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsYXh5JTIweiUyMGZsaXAlMjA1fGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1691144559806-5782a500bc85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsYXh5JTIweiUyMGZsaXAlMjA1fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1691144560584-77edd19e7c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsYXh5JTIweiUyMGZsaXAlMjA1fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1688822863426-8c5685fbb418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FsYXh5JTIweiUyMGZsaXB8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.5,
    reviewCount: 168,
    discountPercentage: 9,
    category: "phones",
    description: "The Samsung Galaxy Z Flip 5 features a foldable design with a larger cover screen, Snapdragon 8 Gen 2 processor, and improved camera capabilities.",
    inStock: true,
    colors: ["#000000", "#f1d999", "#c7dbd5", "#f4c0c0"],
    sizes: [
      { name: "256GB", price: 999 },
      { name: "512GB", price: 1099 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "phone-15",
    name: "Sony Xperia 1 V",
    price: 1299,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1661626851254-0e634acb1ffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29ueSUyMHhwZXJpYXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1661626851254-0e634acb1ffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29ueSUyMHhwZXJpYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1679860633937-37da9a2a6cc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHhwZXJpYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1506170206789-5d2adce0e7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbnklMjB4cGVyaWF8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.5,
    reviewCount: 89,
    discountPercentage: 7,
    category: "phones",
    description: "The Sony Xperia 1 V features a professional-grade camera system, 4K OLED 120Hz display, and powerful performance in a sleek design for content creators.",
    inStock: true,
    colors: ["#000000", "#11141b"],
    sizes: [
      { name: "256GB", price: 1299 },
      { name: "512GB", price: 1399 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "phone-16",
    name: "Motorola Edge 40 Pro",
    price: 799,
    oldPrice: 899,
    image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JvbGF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JvbGF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1679397571581-b79c0743080a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdG9yb2xhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1679397571572-02d9b6e2a640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdG9yb2xhfGVufDB8fDB8fHww"
    ],
    rating: 4.4,
    reviewCount: 102,
    discountPercentage: 11,
    category: "phones",
    description: "The Motorola Edge 40 Pro features a curved OLED display, Snapdragon 8 Gen 2 processor, and rapid charging capabilities in a premium, water-resistant design.",
    inStock: true,
    colors: ["#000000", "#3b465a"],
    sizes: [
      { name: "128GB", price: 799 },
      { name: "256GB", price: 899 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "phone-17",
    name: "ASUS ROG Phone 7",
    price: 1099,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1591882696082-b445c2e01dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1591882696082-b445c2e01dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1622286346003-c5c7e63b5772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXN1c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1625741333769-e7acab938e63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 78,
    discountPercentage: 8,
    category: "phones",
    description: "The ASUS ROG Phone 7 is the ultimate gaming smartphone with Snapdragon 8 Gen 2 processor, 165Hz AMOLED display, and advanced cooling for maximum performance.",
    inStock: true,
    colors: ["#000000", "#2d344a"],
    sizes: [
      { name: "256GB", price: 1099 },
      { name: "512GB", price: 1199 },
      { name: "1TB", price: 1399 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "phone-18",
    name: "Oppo Find X6 Pro",
    price: 999,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1584006682522-dc17d6c0272a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3Bwb3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1584006682522-dc17d6c0272a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3Bwb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9wcG98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1584006682522-dc17d6c0272a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3Bwb3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 112,
    discountPercentage: 9,
    category: "phones",
    description: "The Oppo Find X6 Pro features a Hasselblad camera system, powerful Snapdragon processor, and beautiful display in a premium design.",
    inStock: true,
    colors: ["#000000", "#FFFFFF", "#524b43"],
    sizes: [
      { name: "256GB", price: 999 },
      { name: "512GB", price: 1099 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "phone-19",
    name: "Vivo X90 Pro",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1680422959918-69bb6585ae2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dml2byUyMHBob25lfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1680422959918-69bb6585ae2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dml2byUyMHBob25lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1680423091363-5f718e528331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dml2byUyMHBob25lfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1599150093396-29897c36d0b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dml2byUyMHBob25lfGVufDB8fDB8fHww"
    ],
    rating: 4.5,
    reviewCount: 86,
    discountPercentage: 10,
    category: "phones",
    description: "The Vivo X90 Pro features a ZEISS camera system, Dimensity 9200 processor, and fast charging in a premium design.",
    inStock: true,
    colors: ["#000000", "#2d313d"],
    sizes: [
      { name: "256GB", price: 899 },
      { name: "512GB", price: 999 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "phone-20",
    name: "iPhone SE (2022)",
    price: 429,
    oldPrice: 479,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwc2V8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwc2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwc2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1600237390740-11430d7a2ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXBob25lJTIwc2V8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.4,
    reviewCount: 156,
    discountPercentage: 10,
    category: "phones",
    description: "The iPhone SE (2022) features Apple's A15 Bionic chip, 5G connectivity, and the familiar Home button design at an affordable price.",
    inStock: true,
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    sizes: [
      { name: "64GB", price: 429 },
      { name: "128GB", price: 479 },
      { name: "256GB", price: 579 }
    ],
    featured: false,
    bestSeller: true
  }
];

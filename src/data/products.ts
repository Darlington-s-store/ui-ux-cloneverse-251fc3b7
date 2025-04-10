import { Product } from '../context/ProductsContext';

export const expandedProducts: Product[] = [
  // PHONES CATEGORY
  {
    id: "phone-01",
    name: "iPhone 13 Pro Max",
    price: 1099,
    oldPrice: 1299,
    image: "https://ae01.alicdn.com/kf/S0fecb147b4074048a2af4619ffbbcdcdX/IPhone-15-Pro-Max-Phone-Global-Version-A17-Pro-Chip-48MP-Camera-6-7-Super-Retina.jpg_220x220.jpg",
    images: [
      "https://ae01.alicdn.com/kf/S0fecb147b4074048a2af4619ffbbcdcdX/IPhone-15-Pro-Max-Phone-Global-Version-A17-Pro-Chip-48MP-Camera-6-7-Super-Retina.jpg_220x220.jpg",
      "https://ae01.alicdn.com/kf/S552726afd580451fa58bde9bb4bad3d84/Global-Version-Xiaomi-Redmi-Note-13-Pro-5G-Smartphone-120Hz-AMOLED-200MP-Camera-67W-Fast-Charging.jpg_220x220.jpg",
      "https://ae01.alicdn.com/kf/Sc39cb6b5e8a74a898bcfdaed1bbd5bc6I/GKK-Transparent-Original-Liquid-Silicone-Case-For-iPhone-15-Plus-Case-13-11-12-14-Pro.jpg_220x220.jpg"
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
    image: "https://ae01.alicdn.com/kf/S77c842e761a544e7b9f607fa4a04d7daB/Samsung-Galaxy-S23-Ultra-5G-Smart-Phone-12GB-256GB-Snapdragon-8-Gen-2-6-8-Inch.jpg_220x220.jpg",
    images: [
      "https://ae01.alicdn.com/kf/S77c842e761a544e7b9f607fa4a04d7daB/Samsung-Galaxy-S23-Ultra-5G-Smart-Phone-12GB-256GB-Snapdragon-8-Gen-2-6-8-Inch.jpg_220x220.jpg",
      "https://ae01.alicdn.com/kf/Se00e3db2c5ca476e8c27e2b949d8ede19/Samsung-Galaxy-S23-Ultra-5G-Smart-Phone-12GB-256GB-Snapdragon-8-Gen-2-6-8-Inch.jpg_220x220.jpg",
      "https://ae01.alicdn.com/kf/Sb32f44df1dc84c60986f2b9231edd1f62/Samsung-Galaxy-S23-Ultra-5G-Smart-Phone-12GB-256GB-Snapdragon-8-Gen-2-6-8-Inch.jpg_220x220.jpg"
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
    image: "https://ae01.alicdn.com/kf/S7ec7dfb9f98d40c0a6a555db3ef63e7cJ/Original-Google-Pixel-7-Pro-5G-Mobile-Phone-6-7-120Hz-LTPO-OLED-Display-Tensor-G2.jpg_220x220.jpg",
    images: [
      "https://ae01.alicdn.com/kf/S7ec7dfb9f98d40c0a6a555db3ef63e7cJ/Original-Google-Pixel-7-Pro-5G-Mobile-Phone-6-7-120Hz-LTPO-OLED-Display-Tensor-G2.jpg_220x220.jpg",
      "https://ae01.alicdn.com/kf/S1b29efb4222f41c6a31ff35f4a52fe21w/Original-Google-Pixel-7-Pro-5G-Mobile-Phone-6-7-120Hz-LTPO-OLED-Display-Tensor-G2.jpg_220x220.jpg",
      "https://ae01.alicdn.com/kf/Sc5eea29ec935428a8f2ba89dd3d8ef70X/Original-Google-Pixel-7-Pro-5G-Mobile-Phone-6-7-120Hz-LTPO-OLED-Display-Tensor-G2.jpg_220x220.jpg"
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
  
  // COMPUTERS CATEGORY
  {
    id: "comp-01",
    name: "MacBook Pro 16-inch",
    price: 2499,
    oldPrice: 2699,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D"
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
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww"
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
    image: "https://images.unsplash.com/photo-1527434082571-c41e9108e481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhwJTIwbGFwdG9wfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1527434082571-c41e9108e481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhwJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhwJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1595675024853-0f3ec9357796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHAlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
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
    image: "https://images.unsplash.com/photo-1627126322606-e0271102d33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXN1cyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1627126322606-e0271102d33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXN1cyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1614030424754-24d0eebd46b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXN1cyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eGlhb21pfGVufDB8fDB8fHww"
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
  }
];

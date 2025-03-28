
import { Product } from '../context/ProductsContext';

export const tabletProducts: Product[] = [
  {
    id: "tablet-01",
    name: "iPad Pro 12.9-inch",
    price: 1099,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.9,
    reviewCount: 324,
    discountPercentage: 8,
    category: "tablets",
    description: "The 12.9-inch iPad Pro features the powerful M2 chip, Liquid Retina XDR display, ProMotion technology, and advanced cameras for the ultimate iPad experience.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "128GB WiFi", price: 1099 },
      { name: "256GB WiFi", price: 1299 },
      { name: "512GB WiFi", price: 1499 },
      { name: "1TB WiFi", price: 1899 },
      { name: "1TB WiFi+Cellular", price: 2099 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "tablet-02",
    name: "Samsung Galaxy Tab S9 Ultra",
    price: 1199,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9068ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9068ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1647483398803-6716dd03461a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 246,
    discountPercentage: 8,
    category: "tablets",
    description: "The Samsung Galaxy Tab S9 Ultra features a stunning 14.6-inch AMOLED display, Snapdragon 8 Gen 2 for Galaxy, and includes an S Pen for creative professionals.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "256GB WiFi", price: 1199 },
      { name: "512GB WiFi", price: 1399 },
      { name: "1TB WiFi", price: 1599 },
      { name: "1TB WiFi+5G", price: 1799 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "tablet-03",
    name: "iPad Air",
    price: 599,
    oldPrice: 649,
    image: "https://images.unsplash.com/photo-1660979376625-927fd5294e40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGlwYWQlMjBhaXJ8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1660979376625-927fd5294e40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGlwYWQlMjBhaXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1570126618731-5a1f426d2a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwYWQlMjBhaXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1588287055468-283a4103c40c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBhZCUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 356,
    discountPercentage: 8,
    category: "tablets",
    description: "The iPad Air features the Apple M1 chip, a 10.9-inch Liquid Retina display, and compatibility with Apple Pencil and Magic Keyboard for versatile use.",
    inStock: true,
    colors: ["#C0C0C0", "#000000", "#6495ED", "#FF69B4", "#9ACD32"],
    sizes: [
      { name: "64GB WiFi", price: 599 },
      { name: "256GB WiFi", price: 749 },
      { name: "64GB WiFi+Cellular", price: 749 },
      { name: "256GB WiFi+Cellular", price: 899 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "tablet-04",
    name: "Microsoft Surface Pro 9",
    price: 999,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1560253867-fa2fbaeba5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1560253867-fa2fbaeba5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1563043535043-578c27162c21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 220,
    discountPercentage: 9,
    category: "tablets",
    description: "The Microsoft Surface Pro 9 offers laptop power and tablet flexibility with 12th Gen Intel processors, a 13-inch PixelSense Flow display, and all-day battery life.",
    inStock: true,
    colors: ["#C0C0C0", "#000000", "#808080", "#00008B"],
    sizes: [
      { name: "i5 8GB 256GB", price: 999 },
      { name: "i7 16GB 256GB", price: 1299 },
      { name: "i7 16GB 512GB", price: 1499 },
      { name: "i7 32GB 1TB", price: 1999 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "tablet-05",
    name: "iPad Mini",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1632456960235-4b7b0431fd5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBhZCUyMG1pbml8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1632456960235-4b7b0431fd5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBhZCUyMG1pbml8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 267,
    discountPercentage: 9,
    category: "tablets",
    description: "The iPad mini features an 8.3-inch Liquid Retina display, A15 Bionic chip, Apple Pencil support, and USB-C connectivity in a portable design.",
    inStock: true,
    colors: ["#C0C0C0", "#000000", "#6495ED", "#FF69B4"],
    sizes: [
      { name: "64GB WiFi", price: 499 },
      { name: "256GB WiFi", price: 649 },
      { name: "64GB WiFi+Cellular", price: 649 },
      { name: "256GB WiFi+Cellular", price: 799 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "tablet-06",
    name: "Samsung Galaxy Tab S9+",
    price: 999,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1655722724002-f020e5705ac4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1655722724002-f020e5705ac4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9068ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1647483398803-6716dd03461a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww"
    ],
    rating: 4.6,
    reviewCount: 189,
    discountPercentage: 9,
    category: "tablets",
    description: "The Samsung Galaxy Tab S9+ features a 12.4-inch AMOLED display, Snapdragon 8 Gen 2 processor, and an included S Pen for productivity and creativity.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "256GB WiFi", price: 999 },
      { name: "512GB WiFi", price: 1199 },
      { name: "256GB WiFi+5G", price: 1149 },
      { name: "512GB WiFi+5G", price: 1349 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-07",
    name: "Lenovo Tab P12 Pro",
    price: 699,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlbm92byUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlbm92byUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544821505-c637d5de2a66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxlbm92byUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1573739022854-abceaeb585dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlbm92byUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.5,
    reviewCount: 167,
    discountPercentage: 13,
    category: "tablets",
    description: "The Lenovo Tab P12 Pro features a 12.6-inch AMOLED display, Snapdragon 870 processor, quad JBL speakers, and comes with a Precision Pen 3 for creative tasks.",
    inStock: true,
    colors: ["#808080"],
    sizes: [
      { name: "6GB 128GB", price: 699 },
      { name: "8GB 256GB", price: 799 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-08",
    name: "Amazon Fire HD 10",
    price: 149,
    oldPrice: 179,
    image: "https://images.unsplash.com/photo-1585790050230-5ab112f5b18e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwZmlyZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1585790050230-5ab112f5b18e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwZmlyZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9068ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1544371751-bd7c516b41e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFibGV0fGVufDB8fDB8fHww"
    ],
    rating: 4.3,
    reviewCount: 432,
    discountPercentage: 17,
    category: "tablets",
    description: "The Amazon Fire HD 10 tablet features a 10.1-inch 1080p display, octa-core processor, 3GB RAM, and up to 12 hours of battery life for entertainment and productivity.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "32GB", price: 149 },
      { name: "64GB", price: 189 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "tablet-09",
    name: "Huawei MatePad Pro",
    price: 649,
    oldPrice: 749,
    image: "https://images.unsplash.com/photo-1584359849834-6251343c17b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVhd2VpJTIwdGFibGV0fGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1584359849834-6251343c17b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVhd2VpJTIwdGFibGV0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1584624203157-47a2e21a541b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVhd2VpJTIwdGFibGV0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1584359887798-9983362848d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVhd2VpJTIwdGFibGV0fGVufDB8fDB8fHww"
    ],
    rating: 4.4,
    reviewCount: 132,
    discountPercentage: 13,
    category: "tablets",
    description: "The Huawei MatePad Pro features a 12.6-inch OLED display, Kirin 9000E processor, Huawei M-Pencil support, and multi-screen collaboration with Huawei devices.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "8GB 128GB", price: 649 },
      { name: "8GB 256GB", price: 749 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-10",
    name: "iPad 10th Generation",
    price: 449,
    oldPrice: 499,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 276,
    discountPercentage: 10,
    category: "tablets",
    description: "The iPad (10th generation) features a 10.9-inch Liquid Retina display, A14 Bionic chip, USB-C connectivity, and support for Apple Pencil (1st generation).",
    inStock: true,
    colors: ["#6495ED", "#FF69B4", "#9ACD32", "#C0C0C0"],
    sizes: [
      { name: "64GB WiFi", price: 449 },
      { name: "256GB WiFi", price: 599 },
      { name: "64GB WiFi+Cellular", price: 599 },
      { name: "256GB WiFi+Cellular", price: 749 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "tablet-11",
    name: "Microsoft Surface Go 3",
    price: 399,
    oldPrice: 449,
    image: "https://images.unsplash.com/photo-1622533950470-b43aae1b9483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hyb21lYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1622533950470-b43aae1b9483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hyb21lYm9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1563043525-1f97f86e0a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cmZhY2UlMjBwcm98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1618170102451-34cc4fd73eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.3,
    reviewCount: 167,
    discountPercentage: 11,
    category: "tablets",
    description: "The Microsoft Surface Go 3 is a versatile 2-in-1 device featuring a 10.5-inch PixelSense display, Intel processors, and Windows 11 for productivity on the go.",
    inStock: true,
    colors: ["#C0C0C0"],
    sizes: [
      { name: "Pentium 4GB 64GB", price: 399 },
      { name: "i3 8GB 128GB", price: 629 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-12",
    name: "Samsung Galaxy Tab A8",
    price: 229,
    oldPrice: 279,
    image: "https://images.unsplash.com/photo-1587813369290-091c9d432daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1587813369290-091c9d432daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1598387183137-55ee409240a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5kcm9pZCUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9068ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww"
    ],
    rating: 4.4,
    reviewCount: 298,
    discountPercentage: 18,
    category: "tablets",
    description: "The Samsung Galaxy Tab A8 features a 10.5-inch display, quad speakers with Dolby Atmos, and long-lasting battery for entertainment and everyday tasks at an affordable price.",
    inStock: true,
    colors: ["#C0C0C0", "#000000", "#808080"],
    sizes: [
      { name: "32GB", price: 229 },
      { name: "64GB", price: 279 },
      { name: "128GB", price: 329 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "tablet-13",
    name: "Xiaomi Pad 6",
    price: 349,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544321570-abfb67a12fd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eGlhb21pfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.5,
    reviewCount: 156,
    discountPercentage: 13,
    category: "tablets",
    description: "The Xiaomi Pad 6 features an 11-inch 144Hz display, Snapdragon 870 processor, quad speakers, and fast charging for entertainment and productivity at a competitive price.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "6GB 128GB", price: 349 },
      { name: "8GB 256GB", price: 429 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-14",
    name: "Samsung Galaxy Tab A7 Lite",
    price: 159,
    oldPrice: 179,
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9068ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1587813369290-091c9d432daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbGF4eSUyMHRhYnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.2,
    reviewCount: 243,
    discountPercentage: 11,
    category: "tablets",
    description: "The Samsung Galaxy Tab A7 Lite features an 8.7-inch display, dual speakers with Dolby Atmos, and a compact, portable design perfect for entertainment on the go.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "32GB", price: 159 },
      { name: "64GB", price: 199 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "tablet-15",
    name: "Lenovo Yoga Tab 13",
    price: 679,
    oldPrice: 749,
    image: "https://images.unsplash.com/photo-1630356221783-425daab18ac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlbm92byUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1630356221783-425daab18ac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlbm92byUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlbm92byUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9068ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5JTIwdGFifGVufDB8fDB8fHww"
    ],
    rating: 4.5,
    reviewCount: 118,
    discountPercentage: 9,
    category: "tablets",
    description: "The Lenovo Yoga Tab 13 features a unique built-in kickstand, 13-inch 2K display, quad JBL speakers, and can double as a secondary display for your laptop or PC.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "8GB 128GB", price: 679 },
      { name: "8GB 256GB", price: 779 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-16",
    name: "Microsoft Surface Pro X",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1560253867-fa2fbaeba5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmFjZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1563043525-1f97f86e0a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1cmZhY2UlMjBwcm98ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 143,
    discountPercentage: 10,
    category: "tablets",
    description: "The Microsoft Surface Pro X features a custom Microsoft SQ2 processor, ultra-thin design, 13-inch PixelSense display, and all-day battery life with Windows on ARM.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "8GB 128GB", price: 899 },
      { name: "8GB 256GB", price: 1099 },
      { name: "16GB 256GB", price: 1299 },
      { name: "16GB 512GB", price: 1499 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "tablet-17",
    name: "Wacom Cintiq 16",
    price: 649,
    oldPrice: 699,
    image: "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Fjb20lMjB0YWJsZXR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Fjb20lMjB0YWJsZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1561816242-5dd521599db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Fjb20lMjB0YWJsZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1591487537500-a5099e893cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Fjb20lMjB0YWJsZXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 176,
    discountPercentage: 7,
    category: "tablets",
    description: "The Wacom Cintiq 16 is a creative pen display with a 15.6-inch HD screen, Pro Pen 2 technology, and natural drawing experience for digital artists and designers.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 649 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-18",
    name: "ReMarkable 2",
    price: 399,
    oldPrice: 449,
    image: "https://images.unsplash.com/photo-1589739934847-8203de603dcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVtYXJrYWJsZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1589739934847-8203de603dcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVtYXJrYWJsZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589740986246-e67e14ebcf72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVtYXJrYWJsZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589740986246-e67e14ebcf72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVtYXJrYWJsZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 143,
    discountPercentage: 11,
    category: "tablets",
    description: "The reMarkable 2 is an ultra-thin paper tablet for reading, writing, and sketching with a paper-like experience and weeks of battery life.",
    inStock: true,
    colors: ["#C0C0C0"],
    sizes: [
      { name: "8GB", price: 399 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-19",
    name: "Onyx Boox Note Air 2",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1544821575-61035c094474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGlua3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1544821575-61035c094474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGlua3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589739934847-8203de603dcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVtYXJrYWJsZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589740986246-e67e14ebcf72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVtYXJrYWJsZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.5,
    reviewCount: 112,
    discountPercentage: 9,
    category: "tablets",
    description: "The Onyx Boox Note Air 2 is an E Ink tablet with a 10.3-inch screen, Android 11, stylus support, and frontlight for reading, note-taking, and light productivity.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "64GB", price: 499 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "tablet-20",
    name: "Kobo Sage",
    price: 259,
    oldPrice: 289,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29ib3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29ib3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1577538928305-3807c3993047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29ib3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1589740986246-e67e14ebcf72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVtYXJrYWJsZSUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.4,
    reviewCount: 143,
    discountPercentage: 10,
    category: "tablets",
    description: "The Kobo Sage is an 8-inch E Ink e-reader with stylus support for note-taking, waterproofing, ComfortLight PRO front lighting, and Bluetooth for audiobooks.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "32GB", price: 259 }
    ],
    featured: false,
    bestSeller: false
  }
];

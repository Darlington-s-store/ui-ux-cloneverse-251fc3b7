
import { Product } from '../context/ProductsContext';

export const computerProducts: Product[] = [
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
  },
  {
    id: "comp-05",
    name: "MacBook Air M2",
    price: 1199,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 215,
    discountPercentage: 8,
    category: "computers",
    description: "The redesigned MacBook Air with M2 chip features all-day battery life, a stunning Liquid Retina display, and MagSafe charging in an incredibly thin design.",
    inStock: true,
    colors: ["#C0C0C0", "#737373", "#e1c19e", "#303952"],
    sizes: [
      { name: "8GB / 256GB", price: 1199 },
      { name: "8GB / 512GB", price: 1399 },
      { name: "16GB / 512GB", price: 1599 },
      { name: "16GB / 1TB", price: 1799 }
    ],
    featured: true,
    bestSeller: true
  },
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
  {
    id: "comp-08",
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1499,
    oldPrice: 1699,
    image: "https://images.unsplash.com/photo-1593642702821-c8e775828368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlbm92byUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8e775828368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlbm92byUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1593642702909-dec73df255d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVub3ZvJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1544099858-75feeb57f01b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlbm92byUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 189,
    discountPercentage: 12,
    category: "computers",
    description: "The Lenovo ThinkPad X1 Carbon is a premium business laptop featuring military-grade durability, exceptional keyboard, and enterprise-level security features.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "i5 16GB 256GB", price: 1499 },
      { name: "i7 16GB 512GB", price: 1699 },
      { name: "i7 16GB 1TB", price: 1999 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-09",
    name: "Acer Predator Helios 300",
    price: 1299,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNlciUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1622286350415-a5ba63edb7cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.5,
    reviewCount: 167,
    discountPercentage: 13,
    category: "computers",
    description: "The Acer Predator Helios 300 gaming laptop offers powerful performance with an Intel Core i7 processor, RTX graphics, and high refresh rate display at a competitive price.",
    inStock: true,
    colors: ["#000000", "#1a1a1a"],
    sizes: [
      { name: "i7 RTX 3060 512GB", price: 1299 },
      { name: "i7 RTX 3070 1TB", price: 1599 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "comp-10",
    name: "MSI GS66 Stealth",
    price: 1899,
    oldPrice: 2099,
    image: "https://images.unsplash.com/photo-1629429407673-58ba8f6d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXNpJTIwbGFwdG9wfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1629429407673-58ba8f6d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXNpJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1629429402021-9e9c34c4c6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXNpJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1629429402256-04774e34fc00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXNpJTIwbGFwdG9wfGVufDB8fDB8fHww"
    ],
    rating: 4.6,
    reviewCount: 142,
    discountPercentage: 10,
    category: "computers",
    description: "The MSI GS66 Stealth combines powerful gaming performance with a sleek, professional design featuring a high refresh rate display and customizable RGB keyboard.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "i7 RTX 3070 1TB", price: 1899 },
      { name: "i9 RTX 3080 1TB", price: 2299 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-11",
    name: "LG Gram 17",
    price: 1499,
    oldPrice: 1699,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 132,
    discountPercentage: 12,
    category: "computers",
    description: "The LG Gram 17 features an incredibly lightweight design, long battery life, and a beautiful 17-inch display in a package weighing less than most 13-inch laptops.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "i5 16GB 512GB", price: 1499 },
      { name: "i7 16GB 1TB", price: 1799 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-12",
    name: "Alienware m15 R7",
    price: 2299,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1639246969753-cc1a8c900cdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxpZW53YXJlfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1639246969753-cc1a8c900cdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxpZW53YXJlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1639246969816-41a93cb95ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxpZW53YXJlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1639247061698-ad6f979a33f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsaWVud2FyZXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 113,
    discountPercentage: 8,
    category: "computers",
    description: "The Alienware m15 R7 gaming laptop features powerful RTX graphics, advanced cooling technology, and customizable AlienFX lighting in a premium design.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "i7 RTX 3070Ti 1TB", price: 2299 },
      { name: "i9 RTX 3080 1TB", price: 2699 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "comp-13",
    name: "Framework Laptop",
    price: 999,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.5,
    reviewCount: 98,
    discountPercentage: 9,
    category: "computers",
    description: "The Framework Laptop features a modular, repairable design that allows users to upgrade components over time while reducing electronic waste.",
    inStock: true,
    colors: ["#C0C0C0"],
    sizes: [
      { name: "i5 8GB 256GB", price: 999 },
      { name: "i7 16GB 512GB", price: 1399 },
      { name: "i7 32GB 1TB", price: 1799 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-14",
    name: "Huawei MateBook X Pro",
    price: 1499,
    oldPrice: 1699,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVhd2VpJTIwbGFwdG9wfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVhd2VpJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVhd2VpJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1YXdlaSUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 124,
    discountPercentage: 12,
    category: "computers",
    description: "The Huawei MateBook X Pro features a stunning 3K touchscreen with ultra-thin bezels, premium build quality, and excellent performance in a sleek design.",
    inStock: true,
    colors: ["#808080", "#C0C0C0"],
    sizes: [
      { name: "i5 16GB 512GB", price: 1499 },
      { name: "i7 16GB 1TB", price: 1799 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-15",
    name: "Apple iMac 24-inch",
    price: 1299,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hY3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hY3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hY3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1527443060795-0402a218799f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww"
    ],
    rating: 4.8,
    reviewCount: 187,
    discountPercentage: 13,
    category: "computers",
    description: "The 24-inch iMac features a stunning 4.5K Retina display, M1 chip, and comes in a range of vibrant colors with a remarkably thin design.",
    inStock: true,
    colors: ["#5EB7DA", "#E1D2C4", "#F87254", "#9FE759", "#C195F6", "#F9D14A"],
    sizes: [
      { name: "8GB / 256GB", price: 1299 },
      { name: "8GB / 512GB", price: 1499 },
      { name: "16GB / 512GB", price: 1699 },
      { name: "16GB / 1TB", price: 1899 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "comp-16",
    name: "Mac Mini M2",
    price: 599,
    oldPrice: 699,
    image: "https://images.unsplash.com/photo-1638196344690-0c7717d8ce71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwbWluaXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1638196344690-0c7717d8ce71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwbWluaXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1638196344233-3d8f0e875551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjJTIwbWluaXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjJTIwbWluaXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 156,
    discountPercentage: 14,
    category: "computers",
    description: "The Mac mini with M2 chip delivers powerful performance in a compact design, perfect for everyday tasks, creative work, and home entertainment.",
    inStock: true,
    colors: ["#C0C0C0"],
    sizes: [
      { name: "8GB / 256GB", price: 599 },
      { name: "8GB / 512GB", price: 799 },
      { name: "16GB / 512GB", price: 999 },
      { name: "16GB / 1TB", price: 1199 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-17",
    name: "Custom Gaming PC",
    price: 1999,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwcGN8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwcGN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwcGN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1587971051803-70bf6d4ae977?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwcGN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 132,
    discountPercentage: 20,
    category: "computers",
    description: "A custom-built gaming PC featuring the latest RTX graphics, Intel Core i7 processor, liquid cooling, and RGB lighting for ultimate gaming performance.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "RTX 3060 / i5", price: 1999 },
      { name: "RTX 3070 / i7", price: 2499 },
      { name: "RTX 3080 / i9", price: 2999 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "comp-18",
    name: "ASUS ProArt StudioBook 16",
    price: 1999,
    oldPrice: 2199,
    image: "https://images.unsplash.com/photo-1614624532864-4eaae651601e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDVrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1614624532864-4eaae651601e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDVrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1614625501449-31207704bf6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDVrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1625672508547-7e42af9d7428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzdXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 98,
    discountPercentage: 9,
    category: "computers",
    description: "The ASUS ProArt StudioBook 16 is designed for creators with a color-accurate OLED display, powerful RTX graphics, and innovative ASUS Dial for precise control.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "i7 / RTX 3070 / 32GB / 1TB", price: 1999 },
      { name: "i9 / RTX 3080 / 64GB / 2TB", price: 2599 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-19",
    name: "HP Omen 16",
    price: 1299,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1675578034176-abe36afd1cb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1675578034176-abe36afd1cb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1627825945880-db73486cea8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1636208937977-3934f6d25566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww"
    ],
    rating: 4.5,
    reviewCount: 142,
    discountPercentage: 13,
    category: "computers",
    description: "The HP Omen 16 gaming laptop features a fast 165Hz display, powerful RTX graphics, and advanced cooling for sustained gaming performance.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "i5 / RTX 3050 / 16GB / 512GB", price: 1299 },
      { name: "i7 / RTX 3060 / 16GB / 1TB", price: 1599 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-20",
    name: "Chromebook Pixel Go",
    price: 649,
    oldPrice: 749,
    image: "https://images.unsplash.com/photo-1622533950470-b43aae1b9483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hyb21lYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1622533950470-b43aae1b9483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hyb21lYm9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1622533950317-a0e2e5a86b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyb21lYm9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hyb21lYm9va3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.4,
    reviewCount: 122,
    discountPercentage: 13,
    category: "computers",
    description: "The Google Pixelbook Go features a lightweight design, excellent keyboard, long battery life, and speedy performance for productivity on the go.",
    inStock: true,
    colors: ["#000000", "#F5F5F5"],
    sizes: [
      { name: "i5 / 8GB / 128GB", price: 649 },
      { name: "i5 / 16GB / 256GB", price: 849 }
    ],
    featured: false,
    bestSeller: false
  }
];

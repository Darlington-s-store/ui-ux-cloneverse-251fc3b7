
import { Product } from '../context/ProductsContext';

export const expandedProducts: Product[] = [
  // PHONES CATEGORY
  {
    id: "phone-01",
    name: "iPhone 13 Pro Max",
    price: 1099,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTMlMjBwcm98ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTMlMjBwcm98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
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
    image: "https://images.unsplash.com/photo-1644501625713-92a2908df9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsYXh5JTIwczIyfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1644501625713-92a2908df9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsYXh5JTIwczIyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1659030524412-e9b1d258fea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FsYXh5JTIwczIyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1643133277733-66a476f7f20e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbXN1bmclMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
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
    image: "https://images.unsplash.com/photo-1666202452280-3b50723538e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZSUyMHBpeGVsfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1666202452280-3b50723538e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZSUyMHBpeGVsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1635870664257-430f094c25e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvb2dsZSUyMHBpeGVsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvb2dsZSUyMHBpeGVsfGVufDB8fDB8fHww"
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
      "https://images.unsplash.com/photo-1614030424754-24d0eebd46b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1621570074947-3d93dca15b26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 220,
    discountPercentage: 12,
    category: "computers",
    description: "The ASUS ROG Zephyrus G14 gaming laptop delivers desktop-class performance with AMD Ryzen 9 and NVIDIA RTX graphics in an ultraportable design.",
    inStock: true,
    colors: ["#FFFFFF", "#000000"],
    sizes: [
      { name: "RTX 3060 512GB", price: 1499 },
      { name: "RTX 3070 1TB", price: 1799 },
      { name: "RTX 3080 1TB", price: 2099 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "comp-05",
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1399,
    oldPrice: 1599,
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVub3ZvJTIwbGFwdG9wfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVub3ZvJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxlbm92byUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1609240873441-5c9018531d49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlbm92byUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 195,
    discountPercentage: 12,
    category: "computers",
    description: "The legendary ThinkPad X1 Carbon offers uncompromising performance in a lightweight, slim design built for business professionals.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "i5 256GB SSD", price: 1399 },
      { name: "i7 512GB SSD", price: 1599 },
      { name: "i7 1TB SSD", price: 1799 }
    ],
    featured: false,
    bestSeller: false
  },
  
  // GAMING CATEGORY
  {
    id: "gaming-01",
    name: "PlayStation 5",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1623688000801-d3e1783c4c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1623688000801-d3e1783c4c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1626433396596-d5ff639af589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww"
    ],
    rating: 4.9,
    reviewCount: 485,
    discountPercentage: 9,
    category: "gaming",
    description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, and breathtaking games on the PlayStation 5.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "Digital Edition", price: 399 },
      { name: "Disc Edition", price: 499 },
      { name: "Disc Edition + Extra Controller", price: 559 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "gaming-02",
    name: "Xbox Series X",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eGJveCUyMHNlcmllcyUyMHh8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eGJveCUyMHNlcmllcyUyMHh8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eGJveCUyMHNlcmllcyUyMHh8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1613448777039-9ca92168805b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eGJveCUyMHNlcmllcyUyMHh8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 435,
    discountPercentage: 9,
    category: "gaming",
    description: "The Xbox Series X is the fastest, most powerful Xbox ever, with 12 teraflops of processing power for amazing graphic quality and framerates.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Series X 1TB", price: 499 },
      { name: "Series X + Extra Controller", price: 559 },
      { name: "Series X + Game Pass", price: 559 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "gaming-03",
    name: "Nintendo Switch OLED",
    price: 349,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmludGVuZG8lMjBzd2l0Y2h8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmludGVuZG8lMjBzd2l0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmludGVuZG8lMjBzd2l0Y2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1498736297812-3a08021f206f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5pbnRlbmRvJTIwc3dpdGNofGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 356,
    discountPercentage: 12,
    category: "gaming",
    description: "The Nintendo Switch OLED model features a vibrant 7-inch OLED screen, adjustable stand, and enhanced audio for an immersive gaming experience.",
    inStock: true,
    colors: ["#FFFFFF", "#000000"],
    sizes: [
      { name: "Switch OLED White", price: 349 },
      { name: "Switch OLED Neon", price: 349 },
      { name: "Switch OLED + Game", price: 409 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "gaming-04",
    name: "Razer BlackShark V2 Pro",
    price: 179,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1591538025075-a31d22bd6115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1591538025075-a31d22bd6115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1621768216848-c91d9d07f8fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 235,
    discountPercentage: 10,
    category: "gaming",
    description: "The Razer BlackShark V2 Pro wireless gaming headset features Razer™ HyperSpeed Technology, Titanium-coated drivers, and THX Spatial Audio.",
    inStock: true,
    colors: ["#000000", "#006400"],
    sizes: [
      { name: "BlackShark V2 Pro", price: 179 },
      { name: "BlackShark V2 X", price: 129 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "gaming-05",
    name: "NVIDIA RTX 4080",
    price: 1199,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1627131590977-ce13c548fae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpY3MlMjBjYXJkfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1627131590977-ce13c548fae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpY3MlMjBjYXJkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1637336627990-b18593c867a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhcGhpY3MlMjBjYXJkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1627131497060-478aa15aef71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGhpY3MlMjBjYXJkfGVufDB8fDB8fHww"
    ],
    rating: 4.9,
    reviewCount: 187,
    discountPercentage: 8,
    category: "gaming",
    description: "The NVIDIA GeForce RTX 4080 delivers the ultra performance and features that gamers and creators demand with 16GB of high-speed memory.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "RTX 4080 16GB", price: 1199 },
      { name: "RTX 4080 OC Edition", price: 1299 }
    ],
    featured: false,
    bestSeller: false
  },
  
  // HEADPHONES CATEGORY
  {
    id: "headphone-01",
    name: "Apple AirPods Pro",
    price: 249,
    oldPrice: 279,
    image: "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1603351154351-5e2d0600ff5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1606127193309-d342315601e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 429,
    discountPercentage: 11,
    category: "headphones",
    description: "AirPods Pro feature Active Noise Cancellation, Transparency mode, Adaptive EQ, and spatial audio with dynamic head tracking.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "AirPods Pro", price: 249 },
      { name: "AirPods Pro + AppleCare", price: 299 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "headphone-02",
    name: "Sony WH-1000XM4",
    price: 349,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHdofGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHdofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHdofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1590658602586-e9d4ddb8399f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ueSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 385,
    discountPercentage: 12,
    category: "headphones",
    description: "Industry-leading noise cancellation, exceptional sound quality, and up to 30 hours of battery life with the Sony WH-1000XM4 wireless headphones.",
    inStock: true,
    colors: ["#000000", "#C0C0C0", "#4169E1"],
    sizes: [
      { name: "Standard", price: 349 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "headphone-03",
    name: "Bose QuietComfort 45",
    price: 329,
    oldPrice: 379,
    image: "https://images.unsplash.com/photo-1676159822047-7a849a12ef99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvc2UlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1676159822047-7a849a12ef99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvc2UlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 342,
    discountPercentage: 13,
    category: "headphones",
    description: "Experience world-class noise cancellation, all-day comfort, and up to 24 hours of battery life with the Bose QuietComfort 45 headphones.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Standard", price: 329 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "headphone-04",
    name: "Jabra Elite 85t",
    price: 229,
    oldPrice: 249,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.5,
    reviewCount: 285,
    discountPercentage: 8,
    category: "headphones",
    description: "The Jabra Elite 85t true wireless earbuds deliver powerful noise cancellation, superior sound quality, and comfortable design for all-day wear.",
    inStock: true,
    colors: ["#000000", "#696969", "#A9A9A9"],
    sizes: [
      { name: "Standard", price: 229 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-05",
    name: "Sennheiser HD 660 S",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1600013836667-e08bb6695250?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VubmhlaXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1600013836667-e08bb6695250?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VubmhlaXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1588117472013-59bb13edafec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VubmhlaXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.9,
    reviewCount: 165,
    discountPercentage: 9,
    category: "headphones",
    description: "The Sennheiser HD 660 S is an audiophile-grade open-back headphone that delivers exceptional detail and dynamics for the most demanding listeners.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 499 }
    ],
    featured: false,
    bestSeller: false
  },
  
  // MONITORS CATEGORY
  {
    id: "monitor-01",
    name: "LG UltraGear 27GP950",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1633113092754-3d5488740ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 235,
    discountPercentage: 10,
    category: "monitors",
    description: "The LG UltraGear 27GP950 4K UHD gaming monitor features a Nano IPS panel, 144Hz refresh rate, and NVIDIA G-SYNC compatibility for ultimate gaming performance.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "27-inch", price: 899 },
      { name: "32-inch", price: 1099 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "monitor-02",
    name: "Samsung Odyssey G7",
    price: 699,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1629429407759-01cd3d5f7f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 214,
    discountPercentage: 12,
    category: "monitors",
    description: "The Samsung Odyssey G7 curved gaming monitor offers a 240Hz refresh rate, 1ms response time, and QLED technology for immersive gaming.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "27-inch", price: 699 },
      { name: "32-inch", price: 799 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "monitor-03",
    name: "Dell UltraSharp U3219Q",
    price: 799,
    oldPrice: 899,
    image: "https://images.unsplash.com/photo-1646664352933-19efbb643fba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbGwlMjBtb25pdG9yfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1646664352933-19efbb643fba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbGwlMjBtb25pdG9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbGwlMjBtb25pdG9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1541632218990-8c3e199ea3db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsbHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 175,
    discountPercentage: 11,
    category: "monitors",
    description: "The Dell UltraSharp U3219Q 4K monitor delivers exceptional color accuracy and clarity with InfinityEdge design, perfect for professional content creation.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "32-inch", price: 799 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "monitor-04",
    name: "ASUS ProArt PA32UCX",
    price: 2999,
    oldPrice: 3299,
    image: "https://images.unsplash.com/photo-1603731976347-6592270178ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDRrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1603731976347-6592270178ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDRrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdXMlMjBtb25pdG9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1601025650242-3757191c8b13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcnN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 89,
    discountPercentage: 9,
    category: "monitors",
    description: "The ASUS ProArt PA32UCX Mini-LED monitor is designed for professional photographers and filmmakers with true 10-bit color, HDR1000, and Thunderbolt 3.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "32-inch", price: 2999 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "monitor-05",
    name: "Acer Predator X38",
    price: 1599,
    oldPrice: 1799,
    image: "https://images.unsplash.com/photo-1615672968447-ad6970be3dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1cnZlZCUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1615672968447-ad6970be3dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1cnZlZCUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1631219596449-08c47e938070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3VydmVkJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1602732125047-eed451b40321?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cnZlZCUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 124,
    discountPercentage: 11,
    category: "monitors",
    description: "The Acer Predator X38 is an ultrawide curved gaming monitor with a 37.5-inch UWQHD+ display, 175Hz refresh rate, and NVIDIA G-SYNC technology.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "38-inch", price: 1599 }
    ],
    featured: false,
    bestSeller: false
  },
  
  // ACCESSORIES CATEGORY
  {
    id: "acc-01",
    name: "Logitech MX Master 3",
    price: 99,
    oldPrice: 119,
    image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXglMjBtYXN0ZXJ8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXglMjBtYXN0ZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1588707627474-6f7cee70e41e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdXNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXglMjBtYXN0ZXJ8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 378,
    discountPercentage: 17,
    category: "accessories",
    description: "The Logitech MX Master 3 is an advanced wireless mouse with ultrafast scrolling, app-specific customizations, and ergonomic design for productivity.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "Standard", price: 99 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "acc-02",
    name: "Keychron K2 Mechanical Keyboard",
    price: 79,
    oldPrice: 95,
    image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Y2hyb258ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Y2hyb258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1617902213861-1445cce95239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2V5Y2hyb258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1586802990185-bf8230cb041d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 325,
    discountPercentage: 17,
    category: "accessories",
    description: "The Keychron K2 is a wireless mechanical keyboard with RGB backlight, Mac/Windows compatibility, and hot-swappable switches for customization.",
    inStock: true,
    colors: ["#000000", "#8B4513"],
    sizes: [
      { name: "Red Switch", price: 79 },
      { name: "Brown Switch", price: 79 },
      { name: "Blue Switch", price: 79 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "acc-03",
    name: "Samsung T7 Portable SSD",
    price: 129,
    oldPrice: 149,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRhYmxlJTIwc3NkfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRhYmxlJTIwc3NkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613742214863-5830ceab5c2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGFibGUlMjBzc2R8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1669899560088-5f1c4d10afaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydGFibGUlMjBzc2R8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 287,
    discountPercentage: 13,
    category: "accessories",
    description: "The Samsung T7 Portable SSD delivers blazing fast transfer speeds with its compact, durable design and reliable performance.",
    inStock: true,
    colors: ["#000000", "#1E90FF", "#FF0000"],
    sizes: [
      { name: "500GB", price: 129 },
      { name: "1TB", price: 189 },
      { name: "2TB", price: 329 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "acc-04",
    name: "Anker PowerCore 26800",
    price: 59,
    oldPrice: 69,
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG93ZXJiYW5rfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG93ZXJiYW5rfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1585364312168-3e5c9f5f4280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXJiYW5rfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-16164232233421-81022fad7a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvd2VyYmFua3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 423,
    discountPercentage: 14,
    category: "accessories",
    description: "The Anker PowerCore 26800 is a high-capacity power bank with 3 USB ports for simultaneous charging and enough power for multiple device charges.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "26800mAh", price: 59 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "acc-05",
    name: "Blue Yeti USB Microphone",
    price: 129,
    oldPrice: 149,
    image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMHlldGl8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMHlldGl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605464867832-a7dad21a8ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHlldGl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615162322182-4b9e864c22e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZSUyMHlldGl8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 326,
    discountPercentage: 13,
    category: "accessories",
    description: "The Blue Yeti USB microphone is perfect for podcasting, streaming, and professional recordings with four pickup patterns and studio-quality sound.",
    inStock: true,
    colors: ["#C0C0C0", "#000000", "#0000FF"],
    sizes: [
      { name: "Standard", price: 129 }
    ],
    featured: false,
    bestSeller: false
  },
  
  // SMART HOME CATEGORY
  {
    id: "smart-01",
    name: "Amazon Echo (4th Gen)",
    price: 99,
    oldPrice: 119,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwZWNob3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwZWNob3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1585399171091-9de6be311f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNtYXJ0JTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1558626298-2a85b9eeb542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 546,
    discountPercentage: 17,
    category: "smart-home",
    description: "The Amazon Echo (4th Gen) smart speaker brings Alexa to your home with premium sound, built-in smart home hub, and spherical design.",
    inStock: true,
    colors: ["#191970", "#FFFFFF", "#000000"],
    sizes: [
      { name: "Standard", price: 99 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "smart-02",
    name: "Google Nest Thermostat",
    price: 129,
    oldPrice: 149,
    image: "https://images.unsplash.com/photo-1531609494-6203bb243063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVzdCUyMHRoZXJtb3N0YXR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1531609494-6203bb243063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVzdCUyMHRoZXJtb3N0YXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1597227772909-a6d166b48b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVzdCUyMHRoZXJtb3N0YXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1591335491624-338290908abc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRoZXJtb3N0YXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 428,
    discountPercentage: 13,
    category: "smart-home",
    description: "The Google Nest Thermostat helps you save energy with programmable settings, remote control via app, and smart home integration.",
    inStock: true,
    colors: ["#C0C0C0", "#FFFFFF", "#000000"],
    sizes: [
      { name: "Standard", price: 129 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "smart-03",
    name: "Philips Hue Starter Kit",
    price: 199,
    oldPrice: 229,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbGlwcyUyMGh1ZXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbGlwcyUyMGh1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhpbGlwcyUyMGh1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1610191980283-46606d5910d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBoaWxpcHMlMjBodWV8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 385,
    discountPercentage: 13,
    category: "smart-home",
    description: "The Philips Hue Starter Kit includes a bridge and color-changing bulbs for customizable lighting that you can control with your voice or smartphone.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "3 Bulb Kit", price: 199 },
      { name: "4 Bulb Kit", price: 249 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "smart-04",
    name: "Ring Video Doorbell Pro",
    price: 169,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1621808752171-531c31a8a704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmRlbyUyMGRvb3JiZWxsfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1621808752171-531c31a8a704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmRlbyUyMGRvb3JiZWxsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9vcmJlbGx8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1559997643-99b5bbf53ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvb3JiZWxsfGVufDB8fDB8fHww"
    ],
    rating: 4.6,
    reviewCount: 412,
    discountPercentage: 15,
    category: "smart-home",
    description: "The Ring Video Doorbell Pro offers advanced motion detection, 1080p HD video, two-way talk, and customizable motion zones for home security.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "Standard", price: 169 },
      { name: "With Ring Protect Plan", price: 219 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "smart-05",
    name: "Ecobee SmartThermostat",
    price: 249,
    oldPrice: 279,
    image: "https://images.unsplash.com/photo-1582233479310-6538235b7c0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvYmVlfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1582233479310-6538235b7c0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvYmVlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535222639897-2e109bf074f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjB0aGVybW9zdGF0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1523437345168-d534d261bdc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRoZXJtb3N0YXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 298,
    discountPercentage: 11,
    category: "smart-home",
    description: "The Ecobee SmartThermostat with voice control features a built-in Amazon Alexa, smart sensor, and energy-saving technology.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 249 },
      { name: "With Extra Sensor", price: 299 }
    ],
    featured: false,
    bestSeller: false
  }
];

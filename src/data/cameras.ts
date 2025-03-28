
import { Product } from '../context/ProductsContext';

export const cameraProducts: Product[] = [
  {
    id: "camera-01",
    name: "Sony Alpha a7 IV",
    price: 2499,
    oldPrice: 2699,
    image: "https://images.unsplash.com/photo-1542438408-abb6f72d222c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1542438408-abb6f72d222c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww"
    ],
    rating: 4.9,
    reviewCount: 278,
    discountPercentage: 7,
    category: "cameras",
    description: "The Sony Alpha a7 IV features a 33MP full-frame sensor, 4K 60p video recording, and advanced autofocus with real-time tracking for professional-grade content creation.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 2499 },
      { name: "With 28-70mm Lens", price: 2699 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "camera-02",
    name: "Canon EOS R6",
    price: 2499,
    oldPrice: 2699,
    image: "https://images.unsplash.com/photo-1588372405219-e40d64efafcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1588372405219-e40d64efafcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 245,
    discountPercentage: 7,
    category: "cameras",
    description: "The Canon EOS R6 features a 20.1MP full-frame sensor, 4K 60p video, in-body image stabilization, and Dual Pixel CMOS AF II with animal detection for versatile shooting.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 2499 },
      { name: "With RF 24-105mm Lens", price: 2999 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "camera-03",
    name: "Nikon Z6 II",
    price: 1999,
    oldPrice: 2199,
    image: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 198,
    discountPercentage: 9,
    category: "cameras",
    description: "The Nikon Z6 II features a 24.5MP BSI sensor, dual processors, 4K 60p video, and improved autofocus performance for both photography and videography needs.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 1999 },
      { name: "With 24-70mm Lens", price: 2599 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "camera-04",
    name: "Fujifilm X-T4",
    price: 1699,
    oldPrice: 1899,
    image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1579404183380-e2c7ca576254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1552168324-d612d77725e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 156,
    discountPercentage: 11,
    category: "cameras",
    description: "The Fujifilm X-T4 features a 26.1MP X-Trans CMOS 4 sensor, in-body image stabilization, 4K 60p video, and a fully articulating touchscreen in a weather-resistant body.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "Body Only", price: 1699 },
      { name: "With 18-55mm Lens", price: 2099 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "camera-05",
    name: "Sony ZV-1",
    price: 749,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1627517471427-0f551fd996d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHp2MXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1627517471427-0f551fd996d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHp2MXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1599138900450-3d06e89ad221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZsb2clMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 278,
    discountPercentage: 6,
    category: "cameras",
    description: "The Sony ZV-1 is designed for vloggers and content creators, featuring a 20.1MP 1-inch sensor, 4K video, flip-out screen, and specialized features for video content creation.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 749 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "camera-06",
    name: "Panasonic Lumix GH6",
    price: 2199,
    oldPrice: 2399,
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtZXJhfGVufDB8fDB8fHww"
    ],
    rating: 4.8,
    reviewCount: 143,
    discountPercentage: 8,
    category: "cameras",
    description: "The Panasonic Lumix GH6 is designed for professional filmmakers with 5.7K video recording, 10-bit 4K 120p, and a high-resolution MFT sensor in a durable body.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 2199 },
      { name: "With 12-60mm Lens", price: 2599 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "camera-07",
    name: "DJI Pocket 2",
    price: 349,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1605959211643-483fd5a32467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ja2V0JTIwY2FtZXJhfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1605959211643-483fd5a32467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ja2V0JTIwY2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1599138900450-3d06e89ad221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZsb2clMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ja2V0JTIwY2FtZXJhfGVufDB8fDB8fHww"
    ],
    rating: 4.6,
    reviewCount: 213,
    discountPercentage: 13,
    category: "cameras",
    description: "The DJI Pocket 2 is a compact, stabilized camera featuring a 3-axis gimbal, 4K video recording, and intelligent shooting modes for on-the-go content creation.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 349 },
      { name: "Creator Combo", price: 499 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "camera-08",
    name: "GoPro HERO11 Black",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29wcm98ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29wcm98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29wcm98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1520483054261-30aa58c1a864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvcHJvfGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 378,
    discountPercentage: 9,
    category: "cameras",
    description: "The GoPro HERO11 Black features a new, larger image sensor for stunning 5.3K video, 27MP photos, and improved stabilization for capturing action-packed adventures.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 499 },
      { name: "Creator Edition", price: 699 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "camera-09",
    name: "Canon EOS 90D",
    price: 1199,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1588372405219-e40d64efafcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 211,
    discountPercentage: 8,
    category: "cameras",
    description: "The Canon EOS 90D DSLR features a 32.5MP APS-C sensor, 4K video recording, 45-point all cross-type AF system, and 10fps continuous shooting for versatile photography.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 1199 },
      { name: "With 18-135mm Lens", price: 1599 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "camera-10",
    name: "Ricoh GR III",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtZXJhfGVufDB8fDB8fHww"
    ],
    rating: 4.5,
    reviewCount: 156,
    discountPercentage: 10,
    category: "cameras",
    description: "The Ricoh GR III features a 24.2MP APS-C sensor, 28mm f/2.8 lens, and compact design, making it ideal for street photography and everyday carry.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 899 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "camera-11",
    name: "Sony RX100 VII",
    price: 1299,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1542438408-abb6f72d222c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1542438408-abb6f72d222c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 187,
    discountPercentage: 7,
    category: "cameras",
    description: "The Sony RX100 VII compact camera features a 20.1MP 1-inch sensor, 24-200mm zoom lens, real-time tracking AF, and 4K video in a pocket-sized design.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 1299 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "camera-12",
    name: "Olympus OM-D E-M1 Mark III",
    price: 1799,
    oldPrice: 1999,
    image: "https://images.unsplash.com/photo-1606986641281-7a01e7269d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9seW1wdXMlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1606986641281-7a01e7269d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9seW1wdXMlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1542438408-abb6f72d222c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 156,
    discountPercentage: 10,
    category: "cameras",
    description: "The Olympus OM-D E-M1 Mark III features a 20.4MP MFT sensor, advanced image stabilization, weather-sealing, and pro-level features in a compact, lightweight body.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 1799 },
      { name: "With 12-40mm Lens", price: 2399 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "camera-13",
    name: "Leica Q2",
    price: 5795,
    oldPrice: 5995,
    image: "https://images.unsplash.com/photo-1595155753929-3d1339812838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVpY2F8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1595155753929-3d1339812838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVpY2F8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1582993728648-1f29c748e82a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVpY2F8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1552168324-d612d77725e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 87,
    discountPercentage: 3,
    category: "cameras",
    description: "The Leica Q2 features a 47.3MP full-frame sensor, fixed Summilux 28mm f/1.7 lens, and exquisite build quality for discerning photographers seeking premium performance.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 5795 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "camera-14",
    name: "Canon EOS R5",
    price: 3899,
    oldPrice: 3999,
    image: "https://images.unsplash.com/photo-1588372405219-e40d64efafcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1588372405219-e40d64efafcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 156,
    discountPercentage: 3,
    category: "cameras",
    description: "The Canon EOS R5 features a 45MP full-frame sensor, 8K RAW video recording, in-body image stabilization, and advanced animal detection autofocus for professional content creation.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 3899 },
      { name: "With RF 24-105mm Lens", price: 4999 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "camera-15",
    name: "Insta360 ONE X2",
    price: 429,
    oldPrice: 479,
    image: "https://images.unsplash.com/photo-1590845947694-1646544d70d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MzYwJTIwY2FtZXJhfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1590845947694-1646544d70d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MzYwJTIwY2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1506947456191-9e9ce4648921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8MzYwJTIwY2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29wcm98ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 211,
    discountPercentage: 10,
    category: "cameras",
    description: "The Insta360 ONE X2 is a pocket-sized 360-degree camera featuring 5.7K video, waterproofing, and innovative FlowState stabilization for immersive content creation.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 429 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "camera-16",
    name: "DJI Action 2",
    price: 349,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29wcm98ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29wcm98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29wcm98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1520483054261-30aa58c1a864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvcHJvfGVufDB8fDB8fHww"
    ],
    rating: 4.5,
    reviewCount: 189,
    discountPercentage: 13,
    category: "cameras",
    description: "The DJI Action 2 features a compact, magnetic design with a modular approach, 4K/120fps video, and horizon leveling for versatile action photography and videography.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Power Combo", price: 349 },
      { name: "Dual-Screen Combo", price: 519 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "camera-17",
    name: "BlackMagic Pocket Cinema 6K",
    price: 2495,
    oldPrice: 2795,
    image: "https://images.unsplash.com/photo-1594568284297-7c64464062b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hJTIwY2FtZXJhfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1594568284297-7c64464062b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hJTIwY2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1633934542430-0644201a0aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2luZW1hJTIwY2FtZXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1653416877365-5a7316704597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2luZW1hJTIwY2FtZXJhfGVufDB8fDB8fHww"
    ],
    rating: 4.8,
    reviewCount: 112,
    discountPercentage: 11,
    category: "cameras",
    description: "The Blackmagic Pocket Cinema Camera 6K features a Super 35 sensor, EF lens mount, and cinema-quality recording capabilities in a portable form factor for filmmakers.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 2495 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "camera-18",
    name: "Nikon Z9",
    price: 5499,
    oldPrice: 5799,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlrb24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 87,
    discountPercentage: 5,
    category: "cameras",
    description: "The Nikon Z9 is a flagship mirrorless camera featuring a 45.7MP stacked CMOS sensor, 8K video, blackout-free viewing, and advanced AF for professional photographers and filmmakers.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 5499 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "camera-19",
    name: "Sony Alpha a6400",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1542438408-abb6f72d222c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1542438408-abb6f72d222c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29ueSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1599138900450-3d06e89ad221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZsb2clMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1627517471427-0f551fd996d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ueSUyMHp2MXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 224,
    discountPercentage: 10,
    category: "cameras",
    description: "The Sony Alpha a6400 features a 24.2MP APS-C sensor, real-time tracking and Eye AF, 4K video, and a 180-degree tiltable screen for content creators and enthusiasts.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Body Only", price: 899 },
      { name: "With 16-50mm Lens", price: 999 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "camera-20",
    name: "Fujifilm X100V",
    price: 1399,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1579404183380-e2c7ca576254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1579404183380-e2c7ca576254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1552168324-d612d77725e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVqaWZpbG18ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 176,
    discountPercentage: 7,
    category: "cameras",
    description: "The Fujifilm X100V features a redesigned 23mm f/2 lens, 26.1MP X-Trans CMOS 4 sensor, weather resistance, and classic rangefinder styling for street and everyday photography.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "Standard", price: 1399 }
    ],
    featured: true,
    bestSeller: true
  }
];

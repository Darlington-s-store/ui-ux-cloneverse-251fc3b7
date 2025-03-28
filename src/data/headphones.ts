
import { Product } from '../context/ProductsContext';

export const headphoneProducts: Product[] = [
  {
    id: "headphone-01",
    name: "Sony WH-1000XM5",
    price: 399,
    oldPrice: 449,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29ueSUyMHdofGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29ueSUyMHdofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ueSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.9,
    reviewCount: 324,
    discountPercentage: 11,
    category: "headphones",
    description: "The Sony WH-1000XM5 offers industry-leading noise cancellation, exceptional sound quality, and up to 30 hours of battery life.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "Standard", price: 399 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "headphone-02",
    name: "Bose QuietComfort 45",
    price: 329,
    oldPrice: 379,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvc2UlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvc2UlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 278,
    discountPercentage: 13,
    category: "headphones",
    description: "The Bose QuietComfort 45 headphones deliver signature noise cancellation technology with balanced audio performance and all-day comfort.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Standard", price: 329 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "headphone-03",
    name: "Apple AirPods Max",
    price: 549,
    oldPrice: 599,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kcyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kcyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1628209694088-42273bead002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kcyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1628209680246-a585c897c37c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kcyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 224,
    discountPercentage: 8,
    category: "headphones",
    description: "Apple AirPods Max combine high-fidelity audio with active noise cancellation, spatial audio, and a breathable knit mesh canopy for ultimate comfort.",
    inStock: true,
    colors: ["#C0C0C0", "#808080", "#1E90FF", "#FF69B4", "#90EE90"],
    sizes: [
      { name: "Standard", price: 549 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "headphone-04",
    name: "Sennheiser HD 660 S",
    price: 499,
    oldPrice: 599,
    image: "https://images.unsplash.com/photo-1560718078-bbf86d7d9b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlbm5oZWlzZXJ8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1560718078-bbf86d7d9b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlbm5oZWlzZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1626504152799-40c6f23c603d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlbm5oZWlzZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1533575349875-5f372f88e25e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VubmhlaXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 187,
    discountPercentage: 17,
    category: "headphones",
    description: "The Sennheiser HD 660 S is an audiophile-grade open-back headphone that delivers natural, detailed sound with exceptional clarity for critical listening.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 499 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-05",
    name: "Sony WF-1000XM4",
    price: 279,
    oldPrice: 329,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbnklMjBlYXJidWRzfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbnklMjBlYXJidWRzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1631176260097-e2e24a38b3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1606141042905-e3ca5f922003?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 243,
    discountPercentage: 15,
    category: "headphones",
    description: "The Sony WF-1000XM4 true wireless earbuds deliver industry-leading noise cancellation, exceptional sound quality, and long battery life in a compact design.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "Standard", price: 279 }
    ],
    featured: false,
    bestSeller: true
  },
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
  {
    id: "headphone-08",
    name: "AirPods Pro 2",
    price: 249,
    oldPrice: 279,
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600ff5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1603351154351-5e2d0600ff5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1610438235507-13df227c57c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 312,
    discountPercentage: 11,
    category: "headphones",
    description: "The AirPods Pro (2nd generation) feature improved active noise cancellation, adaptive transparency mode, and personalized spatial audio for an immersive listening experience.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "Standard", price: 249 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "headphone-09",
    name: "Jabra Elite 7 Pro",
    price: 199,
    oldPrice: 229,
    image: "https://images.unsplash.com/photo-1606142634425-e3c2db076754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFicmElMjBlYXJidWRzfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1606142634425-e3c2db076754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFicmElMjBlYXJidWRzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvc2UlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 178,
    discountPercentage: 13,
    category: "headphones",
    description: "The Jabra Elite 7 Pro true wireless earbuds feature excellent call quality with bone conduction technology, adjustable active noise cancellation, and a comfortable, secure fit.",
    inStock: true,
    colors: ["#000000", "#333333", "#778899"],
    sizes: [
      { name: "Standard", price: 199 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-10",
    name: "Samsung Galaxy Buds Pro",
    price: 169,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1618570364947-4d2c701c9d27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMGdhbGF4eSUyMGJ1ZHN8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1618570364947-4d2c701c9d27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMGdhbGF4eSUyMGJ1ZHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1638366807988-25305443b8da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZyUyMGdhbGF4eSUyMGJ1ZHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605464123927-12e1e014a502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMGdhbGF4eSUyMGJ1ZHN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.5,
    reviewCount: 201,
    discountPercentage: 15,
    category: "headphones",
    description: "The Samsung Galaxy Buds Pro feature intelligent active noise cancellation, immersive sound with deep bass, and seamless connectivity with Galaxy devices.",
    inStock: true,
    colors: ["#000000", "#4B0082", "#800000"],
    sizes: [
      { name: "Standard", price: 169 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-11",
    name: "Beats Studio Pro",
    price: 349,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdHMlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdHMlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvc2UlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1584254570465-a649004af949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYXRzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 187,
    discountPercentage: 13,
    category: "headphones",
    description: "The Beats Studio Pro headphones combine powerful sound with active noise cancellation, spatial audio, and up to 40 hours of battery life.",
    inStock: true,
    colors: ["#000000", "#FFFFFF", "#FF0000", "#0000FF"],
    sizes: [
      { name: "Standard", price: 349 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "headphone-12",
    name: "JBL Quantum 800",
    price: 199,
    oldPrice: 249,
    image: "https://images.unsplash.com/photo-1612248102586-89a3b0426f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdiJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1612248102586-89a3b0426f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdiJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1624006389438-c03488175975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amJsJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1629429407673-58ba8f6d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXNpJTIwbGFwdG9wfGVufDB8fDB8fHww"
    ],
    rating: 4.5,
    reviewCount: 156,
    discountPercentage: 20,
    category: "headphones",
    description: "The JBL Quantum 800 wireless gaming headset features JBL QuantumSURROUND, active noise cancellation, and RGB lighting for immersive gaming.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 199 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-13",
    name: "Bowers & Wilkins PX7 S2",
    price: 399,
    oldPrice: 449,
    image: "https://images.unsplash.com/photo-1481886756534-97af88ccb438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGx1eHVyeSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1481886756534-97af88ccb438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGx1eHVyeSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1549041050-386c1c99d655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGx1eHVyeSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 132,
    discountPercentage: 11,
    category: "headphones",
    description: "The Bowers & Wilkins PX7 S2 headphones feature premium sound quality, advanced noise cancellation, and luxurious materials for discerning listeners.",
    inStock: true,
    colors: ["#000000", "#708090"],
    sizes: [
      { name: "Standard", price: 399 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "headphone-14",
    name: "Shure SRH1540",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1593370062244-c464805dcbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1593370062244-c464805dcbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGlvJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1598391990443-5474f0ef72e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 78,
    discountPercentage: 9,
    category: "headphones",
    description: "The Shure SRH1540 premium closed-back headphones deliver wide soundstage, extended bass, and superior acoustic performance for professional audio applications.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 499 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-15",
    name: "Nothing Ear (2)",
    price: 149,
    oldPrice: 179,
    image: "https://images.unsplash.com/photo-1631176260097-e2e24a38b3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1631176260097-e2e24a38b3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1606141042905-e3ca5f922003?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.5,
    reviewCount: 198,
    discountPercentage: 17,
    category: "headphones",
    description: "The Nothing Ear (2) true wireless earbuds feature a transparent design, personalized active noise cancellation, and Hi-Res Audio certification for exceptional sound quality.",
    inStock: true,
    colors: ["#FFFFFF", "#000000"],
    sizes: [
      { name: "Standard", price: 149 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-16",
    name: "Master & Dynamic MW75",
    price: 599,
    oldPrice: 649,
    image: "https://images.unsplash.com/photo-1584254570465-a649004af949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYXRzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1584254570465-a649004af949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYXRzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29ueSUyMHdofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGx1eHVyeSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 87,
    discountPercentage: 8,
    category: "headphones",
    description: "The Master & Dynamic MW75 headphones combine premium materials like lambskin and anodized aluminum with exceptional sound quality and adaptive active noise cancellation.",
    inStock: true,
    colors: ["#000000", "#808080", "#8B4513"],
    sizes: [
      { name: "Standard", price: 599 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "headphone-17",
    name: "Focal Clear MG",
    price: 1499,
    oldPrice: 1599,
    image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdHMlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdHMlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kcyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1593370062244-c464805dcbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 45,
    discountPercentage: 6,
    category: "headphones",
    description: "The Focal Clear MG audiophile headphones feature exclusive 'M'-shaped magnesium dome full-range drivers for exceptional detail, dynamics, and balance.",
    inStock: true,
    colors: ["#808080"],
    sizes: [
      { name: "Standard", price: 1499 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-18",
    name: "Sennheiser Momentum 4",
    price: 349,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 156,
    discountPercentage: 13,
    category: "headphones",
    description: "The Sennheiser Momentum 4 Wireless headphones feature exceptional sound quality, up to 60 hours of battery life, and advanced adaptive noise cancellation.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Standard", price: 349 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "headphone-19",
    name: "Razer BlackShark V2 Pro",
    price: 179,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1591882696082-b445c2e01dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1612444531720-62418f140ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 189,
    discountPercentage: 10,
    category: "headphones",
    description: "The Razer BlackShark V2 Pro wireless gaming headset features THX Spatial Audio, TriForce Titanium 50mm drivers, and a detachable mic for immersive gaming.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 179 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "headphone-20",
    name: "Google Pixel Buds Pro",
    price: 199,
    oldPrice: 219,
    image: "https://images.unsplash.com/photo-1631176260097-e2e24a38b3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1631176260097-e2e24a38b3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1605464123927-12e1e014a502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMGdhbGF4eSUyMGJ1ZHN8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.5,
    reviewCount: 167,
    discountPercentage: 9,
    category: "headphones",
    description: "The Google Pixel Buds Pro true wireless earbuds feature active noise cancellation, 11mm drivers, and smart features like real-time translation for Google Pixel users.",
    inStock: true,
    colors: ["#000000", "#FFFFFF", "#add8e6", "#ffa500"],
    sizes: [
      { name: "Standard", price: 199 }
    ],
    featured: false,
    bestSeller: false
  }
];

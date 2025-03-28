
import { Product } from '../context/ProductsContext';

export const gamingProducts: Product[] = [
  {
    id: "gaming-01",
    name: "PlayStation 5",
    price: 499,
    oldPrice: 549,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww"
    ],
    rating: 4.9,
    reviewCount: 356,
    discountPercentage: 9,
    category: "gaming",
    description: "The PlayStation 5 offers lightning-fast loading, ultra-high speed SSD, haptic feedback, adaptive triggers, and stunning 4K gaming.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "Digital Edition", price: 399 },
      { name: "Disc Edition", price: 499 }
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
      "https://images.unsplash.com/photo-1627436209821-c43568967170?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eGJveCUyMHNlcmllcyUyMHh8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eGJveCUyMHNlcmllcyUyMHh8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 289,
    discountPercentage: 9,
    category: "gaming",
    description: "The Xbox Series X is the fastest, most powerful Xbox ever, featuring 12 teraflops of processing power, true 4K gaming, and up to 120 FPS.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 499 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "gaming-03",
    name: "Nintendo Switch OLED",
    price: 349,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1647941603479-8880628f12b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm90ZW5kbyUyMHN3aXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1647941603479-8880628f12b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm90ZW5kbyUyMHN3aXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1612036781871-25739982712e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZW5kbyUyMHN3aXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1616104435123-a0ad41e8484b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vdGVuZG8lMjBzd2l0Y2h8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 276,
    discountPercentage: 13,
    category: "gaming",
    description: "The Nintendo Switch OLED features a vibrant 7-inch OLED screen, adjustable stand, enhanced audio, and 64GB of internal storage.",
    inStock: true,
    colors: ["#FFFFFF", "#000000"],
    sizes: [
      { name: "OLED Model", price: 349 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "gaming-04",
    name: "PlayStation DualSense Controller",
    price: 69,
    oldPrice: 79,
    image: "https://images.unsplash.com/photo-1633424234673-6a700adbced2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjBjb250cm9sbGVyfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1633424234673-6a700adbced2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjBjb250cm9sbGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1635347861174-8857b5ebf686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb24lMjBjb250cm9sbGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYXlzdGF0aW9uJTIwY29udHJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 412,
    discountPercentage: 13,
    category: "gaming",
    description: "The PlayStation DualSense wireless controller features haptic feedback, adaptive triggers, built-in microphone, and enhanced comfort for PS5 gaming.",
    inStock: true,
    colors: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#800080"],
    sizes: [
      { name: "Standard", price: 69 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "gaming-05",
    name: "Logitech G Pro X Wireless",
    price: 199,
    oldPrice: 229,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 187,
    discountPercentage: 13,
    category: "gaming",
    description: "The Logitech G Pro X Wireless gaming headset features pro-grade wireless technology, BLUE VO!CE microphone technology, and premium comfort for extended gaming sessions.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 199 }
    ],
    featured: false,
    bestSeller: false
  },
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
  {
    id: "gaming-08",
    name: "Razer DeathAdder V3 Pro",
    price: 149,
    oldPrice: 169,
    image: "https://images.unsplash.com/photo-1629429414217-78a6e1326300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1629429414217-78a6e1326300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 201,
    discountPercentage: 12,
    category: "gaming",
    description: "The Razer DeathAdder V3 Pro wireless gaming mouse features an ergonomic design, ultra-lightweight construction, and high-precision optical sensor for competitive gaming.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Standard", price: 149 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "gaming-09",
    name: "Alienware 34 QD-OLED",
    price: 1099,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616587896695-d673df4d5b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 134,
    discountPercentage: 15,
    category: "gaming",
    description: "The Alienware 34 QD-OLED curved gaming monitor features Quantum Dot technology, 175Hz refresh rate, and 0.1ms response time for stunning, immersive gaming.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "34-inch", price: 1099 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "gaming-10",
    name: "Xbox Elite Controller Series 2",
    price: 179,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1591540441919-bb55235bcd6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eGJveCUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1591540441919-bb55235bcd6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eGJveCUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1621259182287-1bc8e7a30dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eGJveCUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605979399824-ea3f7c30323f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eGJveCUyMGNvbnRyb2xsZXJ8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 278,
    discountPercentage: 10,
    category: "gaming",
    description: "The Xbox Elite Wireless Controller Series 2 features adjustable-tension thumbsticks, wrap-around rubberized grip, and up to 40 hours of battery life.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Standard", price: 179 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "gaming-11",
    name: "NVIDIA GeForce RTX 4080",
    price: 1199,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1591489378430-ef2f4c42d394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3B1fGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1591489378430-ef2f4c42d394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3B1fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1592340163329-68f2630f0289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3B1fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1562400357-d0f23e61324d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3B1fGVufDB8fDB8fHww"
    ],
    rating: 4.9,
    reviewCount: 167,
    discountPercentage: 8,
    category: "gaming",
    description: "The NVIDIA GeForce RTX 4080 features 16GB GDDR6X memory, 4th Gen Tensor Cores, and DLSS 3 for unprecedented gaming performance and ray tracing capabilities.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "Standard", price: 1199 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "gaming-12",
    name: "Oculus Quest 2",
    price: 299,
    oldPrice: 349,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2N1bHVzJTIwcXVlc3R8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2N1bHVzJTIwcXVlc3R8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1647265329818-261ed0766671?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2N1bHVzJTIwcXVlc3R8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9jdWx1cyUyMHF1ZXN0fGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 345,
    discountPercentage: 14,
    category: "gaming",
    description: "The Meta Quest 2 (formerly Oculus Quest 2) is an all-in-one VR system with no wires, PC setup, or external sensors needed for immersive virtual reality gaming.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "128GB", price: 299 },
      { name: "256GB", price: 399 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "gaming-13",
    name: "Corsair K100 RGB",
    price: 229,
    oldPrice: 249,
    image: "https://images.unsplash.com/photo-1595044426112-765d5ac3e9ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGtleWJvYXJkfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1595044426112-765d5ac3e9ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGtleWJvYXJkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1595044426077-d36d9236d44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 156,
    discountPercentage: 8,
    category: "gaming",
    description: "The Corsair K100 RGB is a premium mechanical gaming keyboard featuring CORSAIR OPX optical-mechanical switches, per-key RGB backlighting, and a multi-function iCUE control wheel.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "OPX Switches", price: 229 },
      { name: "Cherry MX Switches", price: 249 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "gaming-14",
    name: "Logitech G Pro X Superlight",
    price: 149,
    oldPrice: 169,
    image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ2l0ZWNoJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ2l0ZWNoJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1629429414217-78a6e1326300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fHww"
    ],
    rating: 4.8,
    reviewCount: 201,
    discountPercentage: 12,
    category: "gaming",
    description: "The Logitech G Pro X Superlight wireless gaming mouse weighs less than 63 grams, featuring HERO 25K sensor technology and advanced LIGHTSPEED wireless for professional-level gaming.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Standard", price: 149 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "gaming-15",
    name: "Steam Deck",
    price: 399,
    oldPrice: 449,
    image: "https://images.unsplash.com/photo-1662219708508-d61d95708612?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYW0lMjBkZWNrfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1662219708508-d61d95708612?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYW0lMjBkZWNrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1653920360711-a3670f5fc3e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RlYW0lMjBkZWNrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1653996015498-7656f9ff240a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RlYW0lMjBkZWNrfGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 220,
    discountPercentage: 11,
    category: "gaming",
    description: "The Steam Deck is a handheld gaming PC that lets you take your Steam library on the go with powerful components and versatile control options.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "64GB", price: 399 },
      { name: "256GB", price: 529 },
      { name: "512GB", price: 649 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "gaming-16",
    name: "Razer Huntsman Mini",
    price: 119,
    oldPrice: 139,
    image: "https://images.unsplash.com/photo-1632679836889-24bd2eb943df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZyUyMGtleWJvYXJkfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1632679836889-24bd2eb943df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZyUyMGtleWJvYXJkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1595044426112-765d5ac3e9ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGtleWJvYXJkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1595044496408-5835ba4647e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 189,
    discountPercentage: 14,
    category: "gaming",
    description: "The Razer Huntsman Mini is a 60% gaming keyboard featuring optical switches, PBT keycaps, and customizable Chroma RGB lighting in a compact, portable design.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "Linear Optical", price: 119 },
      { name: "Clicky Optical", price: 119 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "gaming-17",
    name: "Astro A50 Wireless",
    price: 299,
    oldPrice: 329,
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 167,
    discountPercentage: 9,
    category: "gaming",
    description: "The ASTRO A50 Wireless gaming headset features Dolby Audio, ASTRO Audio V2, a flip-to-mute microphone, and a base station for easy charging and storage.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "PS5/PC", price: 299 },
      { name: "Xbox/PC", price: 299 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "gaming-18",
    name: "Samsung Odyssey G9",
    price: 1399,
    oldPrice: 1599,
    image: "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616587894289-86e80b563d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 132,
    discountPercentage: 13,
    category: "gaming",
    description: "The Samsung Odyssey G9 features a massive 49-inch 1000R curved screen, QLED technology, 240Hz refresh rate, and 1ms response time for the ultimate gaming experience.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "49-inch", price: 1399 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "gaming-19",
    name: "Secretlab Titan Evo",
    price: 549,
    oldPrice: 599,
    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1572376313139-8d36180f532b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtaW5nJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1598355851388-e9371a29672c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 245,
    discountPercentage: 8,
    category: "gaming",
    description: "The Secretlab Titan Evo gaming chair features a magnetic memory foam head pillow, 4-way L-ADAPT lumbar support, and premium materials for ultimate comfort during long gaming sessions.",
    inStock: true,
    colors: ["#000000", "#000080", "#8B0000"],
    sizes: [
      { name: "Small", price: 549 },
      { name: "Regular", price: 569 },
      { name: "XL", price: 599 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "gaming-20",
    name: "ASUS ROG Swift PG32UQX",
    price: 2999,
    oldPrice: 3299,
    image: "https://images.unsplash.com/photo-1616588589626-fb59cd5d1ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589626-fb59cd5d1ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.9,
    reviewCount: 89,
    discountPercentage: 9,
    category: "gaming",
    description: "The ASUS ROG Swift PG32UQX is a premium 32-inch 4K HDR gaming monitor with Mini LED backlighting, 144Hz refresh rate, and NVIDIA G-SYNC ULTIMATE certification.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "32-inch", price: 2999 }
    ],
    featured: true,
    bestSeller: false
  }
];


import { Product } from '../context/ProductsContext';

export const monitorProducts: Product[] = [
  {
    id: "monitor-01",
    name: "LG UltraGear 27GP950",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616587894289-86e80b563d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616587896695-d673df4d5b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.8,
    reviewCount: 245,
    discountPercentage: 10,
    category: "monitors",
    description: "The LG UltraGear 27GP950 gaming monitor features a 27-inch 4K Nano IPS display, 144Hz refresh rate, 1ms response time, and HDMI 2.1 for next-gen gaming.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "27-inch", price: 899 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "monitor-02",
    name: "Dell Ultrasharp U2720Q",
    price: 599,
    oldPrice: 699,
    image: "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvciUyMGRlbGx8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvciUyMGRlbGx8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1614624532864-4eaae651601e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDVrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 178,
    discountPercentage: 14,
    category: "monitors",
    description: "The Dell UltraSharp U2720Q features a 27-inch 4K IPS display, excellent color accuracy, USB-C connectivity with 90W power delivery for professionals and content creators.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "27-inch", price: 599 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "monitor-03",
    name: "Samsung Odyssey G7",
    price: 699,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 201,
    discountPercentage: 13,
    category: "monitors",
    description: "The Samsung Odyssey G7 features a 32-inch 1440p curved QLED display with 240Hz refresh rate, 1ms response time, and G-Sync compatibility for immersive gaming.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "27-inch", price: 699 },
      { name: "32-inch", price: 799 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "monitor-04",
    name: "ASUS ProArt PA32UCX",
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
    category: "monitors",
    description: "The ASUS ProArt PA32UCX is a professional 32-inch 4K HDR monitor with mini-LED backlighting, true 10-bit color, and extensive color space coverage for professional color work.",
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
    name: "LG 27UK850-W",
    price: 449,
    oldPrice: 499,
    image: "https://images.unsplash.com/photo-1527443060795-0402a218799f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1527443060795-0402a218799f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1620210536266-daa7a8d6f0fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1614624532864-4eaae651601e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDVrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.6,
    reviewCount: 356,
    discountPercentage: 10,
    category: "monitors",
    description: "The LG 27UK850-W is a versatile 27-inch 4K IPS monitor with USB-C connectivity, HDR10 support, and excellent color accuracy for work and entertainment.",
    inStock: true,
    colors: ["#FFFFFF", "#000000"],
    sizes: [
      { name: "27-inch", price: 449 }
    ],
    featured: false,
    bestSeller: true
  },
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
  {
    id: "monitor-08",
    name: "MSI Optix MAG342CQR",
    price: 499,
    oldPrice: 599,
    image: "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1629429407673-58ba8f6d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXNpJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.5,
    reviewCount: 178,
    discountPercentage: 17,
    category: "monitors",
    description: "The MSI Optix MAG342CQR features a 34-inch ultrawide curved VA panel, 144Hz refresh rate, and 1ms response time for immersive gaming and multitasking.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "34-inch", price: 499 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "monitor-09",
    name: "Acer Predator X34",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 156,
    discountPercentage: 10,
    category: "monitors",
    description: "The Acer Predator X34 features a 34-inch ultrawide curved IPS display, overclockable 120Hz refresh rate, and G-Sync technology for a premium gaming experience.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "34-inch", price: 899 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "monitor-10",
    name: "ViewSonic VP3268-4K",
    price: 799,
    oldPrice: 899,
    image: "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1527443060795-0402a218799f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvciUyMGRlbGx8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 132,
    discountPercentage: 11,
    category: "monitors",
    description: "The ViewSonic VP3268-4K PRO monitor features a 32-inch 4K IPS display, factory calibration, and extensive connectivity options for professional color-critical work.",
    inStock: true,
    colors: ["#000000", "#C0C0C0"],
    sizes: [
      { name: "32-inch", price: 799 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "monitor-11",
    name: "Philips 279P1",
    price: 399,
    oldPrice: 449,
    image: "https://images.unsplash.com/photo-1539683255143-73a6b838b106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1539683255143-73a6b838b106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvciUyMGRlbGx8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.5,
    reviewCount: 143,
    discountPercentage: 11,
    category: "monitors",
    description: "The Philips 279P1 is a sustainable 27-inch 4K monitor with USB-C docking, built-in speakers, and ergonomic features ideal for productivity and business use.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "27-inch", price: 399 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "monitor-12",
    name: "Alienware AW3423DW",
    price: 1299,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1616587894289-86e80b563d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.9,
    reviewCount: 123,
    discountPercentage: 7,
    category: "monitors",
    description: "The Alienware AW3423DW features a 34-inch QD-OLED curved ultrawide display with 175Hz refresh rate, 0.1ms response time, and G-Sync Ultimate for extraordinary gaming.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "34-inch", price: 1299 }
    ],
    featured: true,
    bestSeller: true
  },
  {
    id: "monitor-13",
    name: "ASUS ProArt PA278CV",
    price: 399,
    oldPrice: 449,
    image: "https://images.unsplash.com/photo-1539683255143-73a6b838b106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1539683255143-73a6b838b106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1615869923330-32ed90902c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 156,
    discountPercentage: 11,
    category: "monitors",
    description: "The ASUS ProArt PA278CV is a 27-inch 1440p monitor with Calman Verified factory calibration, USB-C connectivity, and ergonomic design for content creators.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "27-inch", price: 399 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "monitor-14",
    name: "Gigabyte M32U",
    price: 699,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1616587894289-86e80b563d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1616587894289-86e80b563d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 132,
    discountPercentage: 13,
    category: "monitors",
    description: "The Gigabyte M32U is a 32-inch 4K gaming monitor with 144Hz refresh rate, 1ms response time, and HDMI 2.1 for both PC and console gaming.",
    inStock: true,
    colors: ["#000000"],
    sizes: [
      { name: "32-inch", price: 699 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "monitor-15",
    name: "Samsung Odyssey Neo G9",
    price: 1999,
    oldPrice: 2299,
    image: "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.8,
    reviewCount: 98,
    discountPercentage: 13,
    category: "monitors",
    description: "The Samsung Odyssey Neo G9 is a massive 49-inch super ultrawide curved gaming monitor featuring Mini LED technology, 240Hz refresh rate, and 2000 nits peak brightness.",
    inStock: true,
    colors: ["#FFFFFF"],
    sizes: [
      { name: "49-inch", price: 1999 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "monitor-16",
    name: "Apple Studio Display",
    price: 1599,
    oldPrice: 1699,
    image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hY3xlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hY3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVhd2VpJTIwbGFwdG9wfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1527443060795-0402a218799f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGclMjBtb25pdG9yfGVufDB8fDB8fHww"
    ],
    rating: 4.7,
    reviewCount: 143,
    discountPercentage: 6,
    category: "monitors",
    description: "The Apple Studio Display features a 27-inch 5K Retina screen, 12MP Ultra Wide camera with Center Stage, studio-quality microphones, and six speakers with Spatial Audio.",
    inStock: true,
    colors: ["#C0C0C0"],
    sizes: [
      { name: "Standard Glass", price: 1599 },
      { name: "Nano-texture Glass", price: 1899 }
    ],
    featured: true,
    bestSeller: false
  },
  {
    id: "monitor-17",
    name: "Dell UltraSharp U3223QE",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvciUyMGRlbGx8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uaXRvciUyMGRlbGx8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1539683255143-73a6b838b106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.7,
    reviewCount: 167,
    discountPercentage: 10,
    category: "monitors",
    description: "The Dell UltraSharp U3223QE features a 32-inch 4K IPS Black display with exceptional contrast, USB-C hub functionality, and KVM capabilities for professional use.",
    inStock: true,
    colors: ["#C0C0C0", "#000000"],
    sizes: [
      { name: "32-inch", price: 899 }
    ],
    featured: false,
    bestSeller: true
  },
  {
    id: "monitor-18",
    name: "Huawei MateView",
    price: 699,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1586856635825-b7457a457517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1539683255143-73a6b838b106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615869923330-32ed90902c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D"
    ],
    rating: 4.6,
    reviewCount: 132,
    discountPercentage: 13,
    category: "monitors",
    description: "The Huawei MateView features a 28.2-inch 4K+ display with a unique 3:2 aspect ratio, wireless projection capabilities, and minimalist design for professionals.",
    inStock: true,
    colors: ["#C0C0C0"],
    sizes: [
      { name: "28.2-inch", price: 699 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "monitor-19",
    name: "Eve Spectrum ES07D03",
    price: 799,
    oldPrice: 899,
    image: "https://images.unsplash.com/photo-1616587896695-d673df4d5b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1616587896695-d673df4d5b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1616588589696-636d7e1f5ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
    ],
    rating: 4.7,
    reviewCount: 87,
    discountPercentage: 11,
    category: "monitors",
    description: "The Eve Spectrum ES07D03 is a crowd-developed 27-inch 4K 144Hz gaming monitor with HDMI 2.1, USB-C, and exceptional build quality for both gaming and creative work.",
    inStock: true,
    colors: ["#000000", "#FFFFFF"],
    sizes: [
      { name: "27-inch", price: 799 }
    ],
    featured: false,
    bestSeller: false
  },
  {
    id: "monitor-20",
    name: "Asus ROG Swift PG32UQX",
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
    category: "monitors",
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

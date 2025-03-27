
import ProductGrid from '../products/ProductGrid';

const featuredProducts = [
  {
    id: '9',
    name: 'PS5 Dual Sense',
    price: 89.99,
    oldPrice: 120,
    image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    rating: 4.8,
    reviewCount: 65,
    discountPercentage: 25
  },
  {
    id: '10',
    name: 'Sony ZV-1 Camera',
    price: 799.99,
    oldPrice: 999.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1638&q=80',
    rating: 4.7,
    reviewCount: 55,
    discountPercentage: 20
  },
  {
    id: '11',
    name: 'ASUS TUF Gaming Laptop',
    price: 1299.99,
    oldPrice: 1599.99,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    rating: 4.9,
    reviewCount: 85,
    discountPercentage: 19
  },
  {
    id: '12',
    name: 'Cerave Face Wash',
    price: 12.99,
    oldPrice: undefined,
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 4.6,
    reviewCount: 125
  },
  {
    id: '13',
    name: 'RC Kids Car Toy',
    price: 99.99,
    oldPrice: undefined,
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    rating: 4.7,
    reviewCount: 45,
    isNew: true
  },
  {
    id: '14',
    name: 'Nike Soccer Cleats',
    price: 129.99,
    oldPrice: undefined,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80',
    rating: 4.8,
    reviewCount: 75
  },
  {
    id: '15',
    name: 'NFL Quilted Jacket',
    price: 189.99,
    oldPrice: undefined,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    rating: 4.5,
    reviewCount: 35
  },
  {
    id: '16',
    name: 'Wireless Earbuds',
    price: 59.99,
    oldPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1606741965740-9a829123444f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 4.7,
    reviewCount: 95,
    discountPercentage: 25
  }
];

const FeaturedProducts = () => {
  return (
    <div className="container-custom">
      <ProductGrid title="Explore Our Products" products={featuredProducts} />
    </div>
  );
};

export default FeaturedProducts;

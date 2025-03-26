
import ProductGrid from '../products/ProductGrid';

const featuredProducts = [
  {
    id: '9',
    name: 'PS5 Dual Sense',
    price: 89.99,
    oldPrice: 120,
    image: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    rating: 4.8,
    reviewCount: 65,
    discountPercentage: 25
  },
  {
    id: '10',
    name: 'Sony ZV-1 Camera',
    price: 799.99,
    oldPrice: 999.99,
    image: '/lovable-uploads/da4cc5ef-1e82-468b-a0b2-af39f932c9ee.png',
    rating: 4.7,
    reviewCount: 55,
    discountPercentage: 20
  },
  {
    id: '11',
    name: 'ASUS TUF Gaming Laptop',
    price: 1299.99,
    oldPrice: 1599.99,
    image: '/lovable-uploads/f0fc7d28-7a79-4904-87d7-6e5b7080d280.png',
    rating: 4.9,
    reviewCount: 85,
    discountPercentage: 19
  },
  {
    id: '12',
    name: 'Cerave Face Wash',
    price: 12.99,
    oldPrice: undefined,
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    rating: 4.6,
    reviewCount: 125
  },
  {
    id: '13',
    name: 'RC Kids Car Toy',
    price: 99.99,
    oldPrice: undefined,
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    rating: 4.7,
    reviewCount: 45,
    isNew: true
  },
  {
    id: '14',
    name: 'Nike Soccer Cleats',
    price: 129.99,
    oldPrice: undefined,
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    rating: 4.8,
    reviewCount: 75
  },
  {
    id: '15',
    name: 'NFL Quilted Jacket',
    price: 189.99,
    oldPrice: undefined,
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    rating: 4.5,
    reviewCount: 35
  },
  {
    id: '16',
    name: 'Wireless Earbuds',
    price: 59.99,
    oldPrice: 79.99,
    image: '/lovable-uploads/4eff34ef-0f14-4e40-9696-f75daac30877.png',
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

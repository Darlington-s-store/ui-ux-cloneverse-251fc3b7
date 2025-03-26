
import ProductGrid from '../products/ProductGrid';

const bestSellingProducts = [
  {
    id: '5',
    name: 'Regular Fit Jacket',
    price: 175.99,
    oldPrice: 220,
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    rating: 4.8,
    reviewCount: 65,
    discountPercentage: 20
  },
  {
    id: '6',
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    image: '/lovable-uploads/a8c4deff-ede4-44da-98e8-d0446175b201.png',
    rating: 4.7,
    reviewCount: 55,
    discountPercentage: 35
  },
  {
    id: '7',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: undefined,
    image: '/lovable-uploads/06242eff-edaf-4101-aff1-9f5cef6a3a40.png',
    rating: 4.9,
    reviewCount: 65
  },
  {
    id: '8',
    name: 'Teak Wood Chair',
    price: 80,
    oldPrice: undefined,
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    rating: 4.7,
    reviewCount: 35
  }
];

const BestSelling = () => {
  return (
    <div className="container-custom">
      <ProductGrid title="Best Selling Products" products={bestSellingProducts} />
    </div>
  );
};

export default BestSelling;

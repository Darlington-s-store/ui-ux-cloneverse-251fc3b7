
import ProductGrid from '../products/ProductGrid';

const bestSellingProducts = [
  {
    id: '5',
    name: 'Regular Fit Jacket',
    price: 175.99,
    oldPrice: 220,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    rating: 4.8,
    reviewCount: 65,
    discountPercentage: 20
  },
  {
    id: '6',
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    rating: 4.7,
    reviewCount: 55,
    discountPercentage: 35
  },
  {
    id: '7',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: undefined,
    image: 'https://images.unsplash.com/photo-1625315716332-ba5d8b160ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    rating: 4.9,
    reviewCount: 65
  },
  {
    id: '8',
    name: 'Teak Wood Chair',
    price: 80,
    oldPrice: undefined,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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

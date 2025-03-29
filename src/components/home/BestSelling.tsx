
import { useProducts } from '../../context/ProductsContext';
import ProductGrid from '../products/ProductGrid';

const BestSelling = () => {
  const { getBestSellingProducts } = useProducts();
  const bestSellingProducts = getBestSellingProducts();
  
  return (
    <div className="container-custom">
      <ProductGrid title="Best Selling Products" products={bestSellingProducts} />
    </div>
  );
};

export default BestSelling;

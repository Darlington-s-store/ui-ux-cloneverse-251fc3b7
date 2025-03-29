
import { useProducts } from '../../context/ProductsContext';
import ProductGrid from '../products/ProductGrid';

const FeaturedProducts = () => {
  const { getFeaturedProducts } = useProducts();
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div className="container-custom">
      <ProductGrid title="Explore Our Products" products={featuredProducts} />
    </div>
  );
};

export default FeaturedProducts;

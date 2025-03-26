
import ProductGrid from '../products/ProductGrid';

interface RelatedProductsProps {
  products: any[];
  title?: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, title = 'Related Item' }) => {
  return (
    <div className="mt-16">
      <ProductGrid title={title} products={products} />
    </div>
  );
};

export default RelatedProducts;

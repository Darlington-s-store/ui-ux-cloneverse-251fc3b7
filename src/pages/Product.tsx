
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductDetail from '../components/product/ProductDetail';
import RelatedProducts from '../components/product/RelatedProducts';
import { useProducts } from '../context/ProductsContext';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById, getRelatedProducts } = useProducts();
  
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-12">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p>Sorry, we couldn't find the product you're looking for.</p>
        </div>
      </Layout>
    );
  }
  
  const relatedProducts = getRelatedProducts(product.id);
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Shop', path: '/shop' },
          { label: product.name, path: `/product/${product.id}` }
        ]} 
      />
      
      <div className="container-custom py-12">
        <ProductDetail product={product} />
        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="section-heading mb-6">Related Products</h2>
            <RelatedProducts products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Product;

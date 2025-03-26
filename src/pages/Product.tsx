
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductDetail from '../components/product/ProductDetail';
import RelatedProducts from '../components/product/RelatedProducts';
import { useProducts } from '../context/ProductsContext';
import { Product as ProductType } from '../context/ProductsContext';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById, products } = useProducts();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category)
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        
        setRelatedProducts(related);
      } else {
        // Product not found, redirect to 404
        navigate('/not-found');
      }
    }
  }, [id, getProductById, products, navigate]);
  
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), path: `/category/${product.category}` },
          { label: product.name, path: `/product/${product.id}` }
        ]} 
      />
      
      <div className="container-custom py-12">
        <ProductDetail product={product} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </Layout>
  );
};

export default Product;

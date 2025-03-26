
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductCard from '../components/products/ProductCard';
import { useProducts } from '../context/ProductsContext';
import { Product } from '../context/ProductsContext';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useProducts();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState('');
  
  useEffect(() => {
    if (slug) {
      // Convert slug to display name
      const displayName = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      setCategoryName(displayName);
      
      // Filter products by category
      const filtered = products.filter(product => 
        product.category.toLowerCase() === slug.toLowerCase()
      );
      
      setCategoryProducts(filtered);
    }
  }, [slug, products]);
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: categoryName, path: `/category/${slug}` }
        ]} 
      />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
        
        {categoryProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        ) : (
          <div className="product-grid">
            {categoryProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                discountPercentage={product.discountPercentage}
                isNew={product.isNew}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;

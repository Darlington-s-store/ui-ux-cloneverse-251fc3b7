
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductDetail from '../components/product/ProductDetail';
import RelatedProducts from '../components/product/RelatedProducts';

// Sample product data
const sampleProduct = {
  id: 'havic-hv-g92',
  name: 'Havic HV G-92 Gamepad',
  price: 192.00,
  description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive, easy install & mess free removal.',
  rating: 4.5,
  reviewCount: 150,
  inStock: true,
  colors: ['#ffffff', '#ff4d4f', '#000000'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png'
  ]
};

// Sample related products
const relatedProducts = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    image: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    rating: 4.7,
    reviewCount: 88,
    discountPercentage: 40
  },
  {
    id: '2',
    name: 'AK-900 Wired Keyboard',
    price: 900,
    oldPrice: 1160,
    image: '/lovable-uploads/cc66bec0-3b2a-46e0-86fc-6c5dda98c02b.png',
    rating: 4.5,
    reviewCount: 75,
    discountPercentage: 35
  },
  {
    id: '3',
    name: 'IPS LCD Gaming Monitor',
    price: 370, 
    oldPrice: 400,
    image: '/lovable-uploads/d28aea47-1734-4856-91f0-32ddbf86a52d.png',
    rating: 4.8,
    reviewCount: 99,
    discountPercentage: 30
  },
  {
    id: '4',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    image: '/lovable-uploads/06242eff-edaf-4101-aff1-9f5cef6a3a40.png',
    rating: 4.6,
    reviewCount: 65
  }
];

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(sampleProduct);
  
  useEffect(() => {
    // In a real app, you would fetch the product data here
    // For now, we'll just use the sample data
  }, [id]);
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Account', path: '/account' },
          { label: 'Gaming', path: '/category/gaming' },
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


import { useState } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import WishlistItem from '../components/wishlist/WishlistItem';
import ProductGrid from '../components/products/ProductGrid';

// Sample wishlist items
const initialWishlistItems = [
  {
    id: '1',
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    image: '/lovable-uploads/a8c4deff-ede4-44da-98e8-d0446175b201.png',
    discountPercentage: 35
  },
  {
    id: '2',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    image: '/lovable-uploads/06242eff-edaf-4101-aff1-9f5cef6a3a40.png'
  },
  {
    id: '3',
    name: 'GP11 Shooter USB Gamepad',
    price: 550,
    image: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png'
  },
  {
    id: '4',
    name: 'Quilted Satin Jacket',
    price: 750,
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png'
  }
];

// Sample suggested products
const suggestedProducts = [
  {
    id: '5',
    name: 'ASUS FHD Gaming Laptop',
    price: 960,
    oldPrice: 1160,
    image: '/lovable-uploads/f0fc7d28-7a79-4904-87d7-6e5b7080d280.png',
    rating: 4.9,
    reviewCount: 65,
    discountPercentage: 35
  },
  {
    id: '6',
    name: 'IPS LCD Gaming Monitor',
    price: 1160,
    image: '/lovable-uploads/d28aea47-1734-4856-91f0-32ddbf86a52d.png',
    rating: 4.7,
    reviewCount: 65
  },
  {
    id: '7',
    name: 'HAVIT HV-G92 Gamepad',
    price: 550,
    image: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    rating: 4.8,
    reviewCount: 65,
    isNew: true
  },
  {
    id: '8',
    name: 'AK-900 Wired Keyboard',
    price: 200,
    image: '/lovable-uploads/cc66bec0-3b2a-46e0-86fc-6c5dda98c02b.png',
    rating: 4.6,
    reviewCount: 65
  }
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  
  const handleRemoveFromWishlist = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };
  
  const handleAddToCart = (id: string) => {
    // Add to cart logic would go here
  };
  
  const handleMoveAllToBag = () => {
    // Move all to bag logic would go here
  };
  
  return (
    <Layout>
      <Breadcrumb items={[{ label: 'Wishlist', path: '/wishlist' }]} />
      
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Wishlist ({wishlistItems.length})</h1>
          
          <button
            onClick={handleMoveAllToBag}
            className="btn-secondary"
          >
            Move All To Bag
          </button>
        </div>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {wishlistItems.map(item => (
              <WishlistItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
                image={item.image}
                discountPercentage={item.discountPercentage}
                onRemove={handleRemoveFromWishlist}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
        
        <ProductGrid
          title="Just For You"
          products={suggestedProducts}
        />
      </div>
    </Layout>
  );
};

export default Wishlist;

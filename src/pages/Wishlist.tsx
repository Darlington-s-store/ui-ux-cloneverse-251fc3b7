
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import WishlistItem from '../components/wishlist/WishlistItem';
import { useProducts } from '../context/ProductsContext';
import { toast } from 'sonner';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useProducts();
  
  const handleAddToCart = (id: string) => {
    const item = wishlistItems.find(item => item.product.id === id);
    if (item) {
      addToCart(item.product);
      toast.success(`${item.product.name} added to cart`);
    }
  };
  
  const handleRemoveItem = (id: string) => {
    const item = wishlistItems.find(item => item.product.id === id);
    if (item) {
      removeFromWishlist(id);
      toast.success(`${item.product.name} removed from wishlist`);
    }
  };
  
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' },
          { label: 'Wishlist', path: '/wishlist' }
        ]} 
      />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">
              Items added to your wishlist will be saved here.
            </p>
            <a href="/" className="btn-primary">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <WishlistItem
                key={item.product.id}
                id={item.product.id}
                name={item.product.name}
                price={item.product.price}
                oldPrice={item.product.oldPrice}
                image={item.product.image}
                discountPercentage={item.product.discountPercentage}
                onRemove={handleRemoveItem}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;

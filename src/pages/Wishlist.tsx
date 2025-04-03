
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import WishlistItem from '../components/wishlist/WishlistItem';
import { useProducts } from '../context/ProductsContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Wishlist = () => {
  const { addToCart } = useProducts();
  const { user, isLoading } = useAuth();
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [isWishlistLoading, setIsWishlistLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error('Please login to view your wishlist');
      navigate('/login');
    } else if (user) {
      fetchWishlist();
    }
  }, [user, isLoading, navigate]);
  
  const fetchWishlist = async () => {
    try {
      setIsWishlistLoading(true);
      
      // Fetch wishlist items with product details
      const { data, error } = await supabase
        .from('wishlist_items')
        .select(`
          id,
          created_at,
          products (
            id,
            name,
            price,
            old_price,
            image,
            discount_percentage
          )
        `)
        .eq('user_id', user?.id);
        
      if (error) throw error;
      
      setWishlistItems(data || []);
    } catch (error: any) {
      console.error('Error fetching wishlist:', error);
      toast.error(error.message || 'Failed to load wishlist');
    } finally {
      setIsWishlistLoading(false);
    }
  };
  
  const handleAddToCart = async (id: string) => {
    const item = wishlistItems.find(item => item.products.id === id);
    if (item) {
      addToCart(item.products);
      toast.success(`${item.products.name} added to cart`);
    }
  };
  
  const handleRemoveItem = async (id: string) => {
    try {
      const item = wishlistItems.find(item => item.products.id === id);
      if (!item) return;
      
      const { error } = await supabase
        .from('wishlist_items')
        .delete()
        .eq('id', item.id);
        
      if (error) throw error;
      
      setWishlistItems(prev => prev.filter(i => i.products.id !== id));
      toast.success(`${item.products.name} removed from wishlist`);
    } catch (error: any) {
      console.error('Error removing from wishlist:', error);
      toast.error(error.message || 'Failed to remove from wishlist');
    }
  };
  
  if (isLoading || isWishlistLoading) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          Loading...
        </div>
      </Layout>
    );
  }
  
  if (!user) {
    return null; // Will redirect in useEffect
  }
  
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
                key={item.products.id}
                id={item.products.id}
                name={item.products.name}
                price={item.products.price}
                oldPrice={item.products.old_price}
                image={item.products.image}
                discountPercentage={item.products.discount_percentage}
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

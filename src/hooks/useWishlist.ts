
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useWishlist = () => {
  const { user } = useAuth();
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchWishlist();
    } else {
      setWishlistItems([]);
      setIsLoading(false);
    }
  }, [user]);

  const fetchWishlist = async () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      
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
        .eq('user_id', user.id);
        
      if (error) throw error;
      
      setWishlistItems(data || []);
    } catch (error: any) {
      console.error('Error fetching wishlist:', error);
      toast.error(error.message || 'Failed to load wishlist');
    } finally {
      setIsLoading(false);
    }
  };

  const addToWishlist = async (productId: string) => {
    if (!user) {
      toast.error('Please login to add items to your wishlist');
      return false;
    }
    
    try {
      setIsLoading(true);
      
      // Check if the item already exists in wishlist
      const { data: existingItems, error: checkError } = await supabase
        .from('wishlist_items')
        .select('id')
        .eq('user_id', user.id)
        .eq('product_id', productId);
        
      if (checkError) throw checkError;
      
      if (existingItems && existingItems.length > 0) {
        toast.info('This item is already in your wishlist');
        return false;
      }
      
      // Add item to wishlist
      const { error } = await supabase
        .from('wishlist_items')
        .insert({
          user_id: user.id,
          product_id: productId
        });
        
      if (error) throw error;
      
      fetchWishlist();
      toast.success('Item added to wishlist');
      return true;
    } catch (error: any) {
      console.error('Error adding to wishlist:', error);
      toast.error(error.message || 'Failed to add to wishlist');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromWishlist = async (itemId: string) => {
    if (!user) return false;
    
    try {
      setIsLoading(true);
      
      const { error } = await supabase
        .from('wishlist_items')
        .delete()
        .eq('id', itemId);
        
      if (error) throw error;
      
      setWishlistItems(prev => prev.filter(item => item.id !== itemId));
      toast.success('Item removed from wishlist');
      return true;
    } catch (error: any) {
      console.error('Error removing from wishlist:', error);
      toast.error(error.message || 'Failed to remove from wishlist');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  return {
    wishlistItems,
    isLoading,
    fetchWishlist,
    addToWishlist,
    removeFromWishlist,
    getWishlistCount
  };
};

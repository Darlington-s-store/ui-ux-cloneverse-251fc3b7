
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface ProfileData {
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
}

export const useAccount = () => {
  const { user, profile, updateProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const updateUserProfile = async (data: ProfileData) => {
    if (!user) {
      toast.error('You must be logged in to update your profile');
      return false;
    }

    try {
      setIsLoading(true);
      await updateProfile(data);
      return true;
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast.error(error.message || 'Failed to update profile');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const getUserOrders = async () => {
    if (!user) {
      toast.error('You must be logged in to view orders');
      return [];
    }

    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      return data || [];
    } catch (error: any) {
      console.error('Error fetching orders:', error);
      toast.error(error.message || 'Failed to load orders');
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {
    profile,
    isLoading,
    updateUserProfile,
    getUserOrders
  };
};


import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, ShoppingBag, Heart, MapPin, CreditCard, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const AccountSidebar = () => {
  const { signOut } = useAuth();
  
  const handleSignOut = async () => {
    await signOut();
  };
  
  return (
    <div className="bg-white shadow-sm rounded-lg border p-5">
      <h2 className="text-lg font-semibold mb-4">My Account</h2>
      
      <ul className="space-y-2">
        <li>
          <NavLink 
            to="/account/profile" 
            className={({ isActive }) => `flex items-center py-2 px-3 rounded-md ${isActive ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
          >
            <User size={18} className="mr-3" />
            <span>Profile</span>
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/account/orders" 
            className={({ isActive }) => `flex items-center py-2 px-3 rounded-md ${isActive ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
          >
            <ShoppingBag size={18} className="mr-3" />
            <span>Orders</span>
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/wishlist" 
            className={({ isActive }) => `flex items-center py-2 px-3 rounded-md ${isActive ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
          >
            <Heart size={18} className="mr-3" />
            <span>Wishlist</span>
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/account/addresses" 
            className={({ isActive }) => `flex items-center py-2 px-3 rounded-md ${isActive ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
          >
            <MapPin size={18} className="mr-3" />
            <span>Addresses</span>
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/account/payment-methods" 
            className={({ isActive }) => `flex items-center py-2 px-3 rounded-md ${isActive ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
          >
            <CreditCard size={18} className="mr-3" />
            <span>Payment Methods</span>
          </NavLink>
        </li>
        
        <li className="border-t my-2 pt-2">
          <button 
            onClick={handleSignOut}
            className="flex items-center py-2 px-3 rounded-md text-red-500 hover:bg-red-50 w-full text-left"
          >
            <LogOut size={18} className="mr-3" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;


import { useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import AccountSidebar from '../components/account/AccountSidebar';
import ProfileForm from '../components/account/ProfileForm';
import OrderHistory from '../components/account/OrderHistory';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

const Account = () => {
  const { user, profile, isLoading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container-custom py-12 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto" />
          <p className="mt-2">Loading your account...</p>
        </div>
      </Layout>
    );
  }
  
  if (!user) {
    return null; // Will redirect in useEffect
  }
  
  const fullName = profile ? 
    `${profile.first_name || ''} ${profile.last_name || ''}`.trim() : 
    user.email;
  
  return (
    <Layout>
      <Breadcrumb items={[{ label: 'My Account', path: '/account' }]} />
      
      <div className="container-custom py-12">
        <div className="flex">
          <div className="text-red-500 font-medium text-lg">Welcome!</div>
          <div className="text-lg ml-1">{fullName}</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-8">
          <div className="md:col-span-1">
            <AccountSidebar />
          </div>
          
          <div className="md:col-span-3">
            <Routes>
              <Route path="/" element={<ProfileForm />} />
              <Route path="/profile" element={<ProfileForm />} />
              <Route path="/orders" element={<OrderHistory />} />
              {/* Add more routes for Addresses, etc. */}
            </Routes>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;

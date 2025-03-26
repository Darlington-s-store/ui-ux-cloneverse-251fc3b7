
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import AccountSidebar from '../components/account/AccountSidebar';
import ProfileForm from '../components/account/ProfileForm';

const Account = () => {
  return (
    <Layout>
      <Breadcrumb items={[{ label: 'My Account', path: '/account' }]} />
      
      <div className="container-custom py-12">
        <div className="flex">
          <div className="text-red-500 font-medium text-lg">Welcome!</div>
          <div className="text-lg ml-1">Md Rimel</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-8">
          <div className="md:col-span-1">
            <AccountSidebar />
          </div>
          
          <div className="md:col-span-3">
            <ProfileForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;

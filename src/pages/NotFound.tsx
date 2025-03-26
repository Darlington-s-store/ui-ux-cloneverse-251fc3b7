
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';

const NotFound = () => {
  return (
    <Layout>
      <Breadcrumb items={[{ label: '404 Error', path: '/404' }]} />
      
      <div className="container-custom py-16 text-center">
        <h1 className="text-7xl font-bold mb-6">404 Not Found</h1>
        <p className="text-xl text-gray-600 mb-10">Your visited page not found. You may go home page.</p>
        
        <Link to="/" className="btn-primary px-8 py-3">
          Back to home page
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;

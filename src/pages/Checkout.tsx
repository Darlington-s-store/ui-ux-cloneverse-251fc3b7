
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';

// Sample cart items
const cartItems = [
  {
    id: '1',
    name: 'LCD Monitor',
    price: 650,
    quantity: 1,
    image: '/lovable-uploads/d28aea47-1734-4856-91f0-32ddbf86a52d.png'
  },
  {
    id: '2',
    name: 'HI Gamepad',
    price: 550,
    quantity: 1,
    image: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png'
  }
];

// Calculate subtotal
const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

const Checkout = () => {
  return (
    <Layout>
      <Breadcrumb 
        items={[
          { label: 'Account', path: '/account' },
          { label: 'My Account', path: '/account' },
          { label: 'Product', path: '/shop' },
          { label: 'View Cart', path: '/cart' },
          { label: 'CheckOut', path: '/checkout' }
        ]} 
      />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Billing Details</h1>
        
        <CheckoutForm
          cartItems={cartItems}
          subtotal={subtotal}
          shipping="Free"
        />
      </div>
    </Layout>
  );
};

export default Checkout;

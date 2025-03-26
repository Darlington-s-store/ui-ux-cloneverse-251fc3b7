
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <Breadcrumb items={[{ label: 'Contact', path: '/contact' }]} />
      <ContactForm />
    </Layout>
  );
};

export default Contact;

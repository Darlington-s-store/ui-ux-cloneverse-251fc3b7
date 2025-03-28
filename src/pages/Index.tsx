
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FlashSale from '../components/home/FlashSale';
import CategorySection from '../components/home/CategorySection';
import BestSelling from '../components/home/BestSelling';
import Banner from '../components/home/Banner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import BrandsShowcase from '../components/home/BrandsShowcase';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FlashSale />
      <CategorySection />
      <BestSelling />
      <Banner />
      <FeaturedProducts />
      <NewArrivals />
      <BrandsShowcase />
      <Testimonials />
      <Newsletter />
      <Features />
    </Layout>
  );
};

export default Index;

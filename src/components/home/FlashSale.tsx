
import { useEffect, useState } from 'react';
import ProductCard from '../products/ProductCard';

const flashSaleProducts = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    rating: 4.7,
    reviewCount: 88,
    discountPercentage: 40,
    category: 'gaming'
  },
  {
    id: '2',
    name: 'AK-900 Wired Keyboard',
    price: 900,
    oldPrice: 1160,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d72a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    rating: 4.5,
    reviewCount: 75,
    discountPercentage: 35,
    category: 'accessories'
  },
  {
    id: '3',
    name: 'IPS LCD Gaming Monitor',
    price: 370, 
    oldPrice: 400,
    image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    rating: 4.8,
    reviewCount: 99,
    discountPercentage: 30,
    category: 'monitors'
  },
  {
    id: '4',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    rating: 4.6,
    reviewCount: 65,
    category: 'accessories'
  }
];

const FlashSale = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="container-custom">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="section-heading">Flash Sales</h2>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Days</span>
              <span className="text-xl font-semibold">{timeRemaining.days.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-xl font-semibold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Hours</span>
              <span className="text-xl font-semibold">{timeRemaining.hours.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-xl font-semibold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Minutes</span>
              <span className="text-xl font-semibold">{timeRemaining.minutes.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-xl font-semibold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Seconds</span>
              <span className="text-xl font-semibold">{timeRemaining.seconds.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="product-grid">
        {flashSaleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
            rating={product.rating}
            reviewCount={product.reviewCount}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="btn-primary px-8">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSale;

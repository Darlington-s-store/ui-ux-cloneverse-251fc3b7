
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  image: string;
  color: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Up to 10% off Voucher",
    subtitle: "Exclusively for new members",
    cta: "Shop Now",
    ctaLink: "/shop",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "bg-purple-100"
  },
  {
    id: 2,
    title: "Summer Sale",
    subtitle: "Save up to 50% on summer essentials",
    cta: "View Collection",
    ctaLink: "/collection/summer",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "bg-blue-100"
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Check out our latest products",
    cta: "Discover",
    ctaLink: "/new-arrivals",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    color: "bg-green-100"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  return (
    <div className="relative overflow-hidden h-[60vh] md:h-[80vh] w-full">
      <div 
        className="flex transition-transform duration-500 ease-out h-full w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className={`flex-none w-full h-full ${slide.color} flex items-center justify-between px-4 md:px-12 lg:px-24`}
          >
            <div className="max-w-md">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg mb-6">{slide.subtitle}</p>
              <Link to={slide.ctaLink} className="btn-primary">
                {slide.cta}
              </Link>
            </div>
            <div className="hidden md:block">
              <img src={slide.image} alt={slide.title} className="max-h-[400px] object-contain" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? 'bg-exclusive' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md"
      >
        <ChevronLeft />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Hero;

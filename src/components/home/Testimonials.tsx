
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Designer',
    comment: 'I absolutely love the quality of products from Exclusive. Their customer service is exceptional, and the delivery was faster than expected!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Software Engineer',
    comment: 'The electronics I purchased exceeded my expectations. The prices are competitive, and the website made it easy to find exactly what I needed.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Marketing Manager',
    comment: 'Exclusive has become my go-to shop for all tech needs. Their product range is impressive, and everything arrives in perfect condition.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  }
];

const Testimonials = () => {
  return (
    <div className="container-custom py-16">
      <h2 className="section-heading mb-12 text-center">What Our Customers Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div 
            key={testimonial.id} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  size={16} 
                  className={index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                />
              ))}
            </div>
            
            <p className="text-gray-600">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

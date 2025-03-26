
import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, Phone } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all required fields');
      return;
    }
    
    // Submit form
    toast.success('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white shadow-sm rounded-lg p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-exclusive mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call To Us</h3>
                  </div>
                </div>
                <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                <p className="text-gray-600">Phone: +8801611112222</p>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-exclusive mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Write To US</h3>
                  </div>
                </div>
                <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-gray-600">Emails: customer@exclusive.com</p>
                <p className="text-gray-600">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white shadow-sm rounded-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Massage"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-primary min-h-[150px] resize-y"
                    required
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button type="submit" className="btn-primary px-8">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

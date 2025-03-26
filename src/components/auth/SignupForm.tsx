
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    // Mock signup
    toast.success('Account created successfully!');
    navigate('/login');
  };
  
  return (
    <div className="flex flex-col w-full max-w-md">
      <h1 className="text-3xl font-bold mb-4">Create an account</h1>
      <p className="text-gray-600 mb-8">Enter your details below</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-primary"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            className="input-primary"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-primary"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-primary"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn-primary w-full">
          Create Account
        </button>
        
        <button type="button" className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          <span>Sign up with Google</span>
        </button>
        
        <div className="text-center">
          <span className="text-gray-600">Already have account?</span>
          <Link to="/login" className="text-exclusive ml-1 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

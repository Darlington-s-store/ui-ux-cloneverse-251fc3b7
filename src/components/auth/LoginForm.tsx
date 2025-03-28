
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!credentials.email || !credentials.password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Mock login
    toast.success('Login successful!');
    navigate('/account');
  };
  
  return (
    <div className="flex flex-col w-full max-w-md">
      <h1 className="text-3xl font-bold mb-4">Log in to Exclusive</h1>
      <p className="text-gray-600 mb-8">Enter your details below</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email or Phone Number"
            className="input-primary"
            value={credentials.email}
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
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={credentials.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-exclusive border-gray-300 rounded focus:ring-exclusive"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <Link to="/forgot-password" className="text-sm text-exclusive hover:underline">
            Forgot Password?
          </Link>
        </div>
        
        <button type="submit" className="btn-primary w-full">
          Log In
        </button>
        
        <button type="button" className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          <span>Sign up with Google</span>
        </button>
        
        <div className="text-center">
          <span className="text-gray-600">Already have account?</span>
          <Link to="/signup" className="text-exclusive ml-1 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

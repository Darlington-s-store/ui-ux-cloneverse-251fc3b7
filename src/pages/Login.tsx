
import Layout from '../components/layout/Layout';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png"
                alt="Login"
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

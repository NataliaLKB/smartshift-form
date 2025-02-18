
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="text-center py-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
              <p className="text-gray-500 mb-4">
                The page you are looking for doesn't exist or has been moved.
              </p>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        hideBack={true}
        onContinue={() => navigate('/')}
        isEnabled={true}
        buttonText="Return to Home"
      />
    </div>
  );
};

export default NotFound;

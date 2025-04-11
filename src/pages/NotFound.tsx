
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AddressHeader } from '@/components/address/AddressHeader';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

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
      
      <main className="flex-1 bg-[#FAF9FA] flex flex-col">
        <div className="container max-w-4xl mx-auto px-4 py-8 flex-1 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            <div className="text-center py-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
              <p className="text-gray-500 mb-8">
                The page you are looking for doesn't exist or has been moved.
              </p>
              
              <Button 
                onClick={() => navigate('/')} 
                className="mt-4 bg-[#00CED1] hover:bg-[#00CED1]/90 text-black"
                size="lg"
              >
                <Home className="mr-2 h-4 w-4" /> Return to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

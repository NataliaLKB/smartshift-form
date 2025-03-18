
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-[#038B8D] transition-colors duration-200">About</Link>
            <Link to="#insights" className="text-gray-600 hover:text-[#038B8D] transition-colors duration-200">Insights</Link>
            <Link to="#faq" className="text-gray-600 hover:text-[#038B8D] transition-colors duration-200">FAQ</Link>
            <Link to="#contact" className="text-gray-600 hover:text-[#038B8D] transition-colors duration-200">Contact</Link>
          </div>

          <div className="flex items-center">
            <Button asChild className="hidden md:flex">
              <Link to="/personal-details">Get Started</Link>
            </Button>
            
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-4 border-t mt-4">
            <Link 
              to="/about" 
              className="block text-gray-600 hover:text-[#038B8D] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="#insights" 
              className="block text-gray-600 hover:text-[#038B8D] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              to="#faq" 
              className="block text-gray-600 hover:text-[#038B8D] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="#contact" 
              className="block text-gray-600 hover:text-[#038B8D] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link 
                to="/personal-details"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

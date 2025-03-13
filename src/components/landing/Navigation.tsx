
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="#insights" className="text-gray-600 hover:text-gray-900">Insights</Link>
            <Link to="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
            <Link to="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          <Button asChild>
            <Link to="/import-export">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

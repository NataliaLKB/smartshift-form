
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <Button size="lg" onClick={() => navigate('/welcome')} className="group">
      Get Tariff Recommendation
      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
};

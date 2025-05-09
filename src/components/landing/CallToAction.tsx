
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <Button size="lg" onClick={() => navigate('/start')}>
      Get Started
    </Button>
  );
};

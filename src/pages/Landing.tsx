
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Steps } from "@/components/landing/Steps";
import { Testimonials } from "@/components/landing/Testimonials";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Steps />
      <Testimonials />
    </div>
  );
};

export default Landing;

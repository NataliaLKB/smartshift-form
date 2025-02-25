
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Steps } from "@/components/landing/Steps";
import { Insights } from "@/components/landing/Insights";
import { Testimonials } from "@/components/landing/Testimonials";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Steps />
      <Insights />
      <Testimonials />
    </div>
  );
};

export default Landing;

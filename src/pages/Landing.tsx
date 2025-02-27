
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Steps } from "@/components/landing/Steps";
import { Insights } from "@/components/landing/Insights";
import { Testimonials } from "@/components/landing/Testimonials";
import { CallToAction } from "@/components/landing/CallToAction";
import { FinalCallToAction } from "@/components/landing/FinalCallToAction";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Steps />
      <Testimonials />
      <CallToAction />
      <Insights />
      <FinalCallToAction />
    </div>
  );
};

export default Landing;

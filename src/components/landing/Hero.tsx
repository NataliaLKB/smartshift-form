
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Find the best{" "}
              <span className="text-[#038B8D]">smart tariff</span>
              {" "}for your home
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Get personalized recommendations for energy tariffs that match your usage patterns and save money.
            </p>
            <Button className="mt-8" size="lg" asChild>
              <Link to="/import-export">
                Start Saving Today <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="order-first md:order-last">
            <img 
              src="/lovable-uploads/2251d968-bf74-4257-9cdd-75850cdf37c2.png"
              alt="Smart energy savings illustration"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

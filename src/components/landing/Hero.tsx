
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/df1edba5-54d3-4abe-a3cc-2575ca1a03ec.png"
          alt="Modern living room"
          className="w-full h-full object-cover brightness-[0.85]"
        />
      </div>
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Find the best{" "}
          <span className="text-[#038B8D]">smart tariff</span>
          {" "}for your home
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto">
          Get personalized recommendations for energy tariffs that match your usage patterns and save money.
        </p>
        <Button className="mt-8" size="lg" asChild>
          <Link to="/import-export">
            Start Saving Today <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

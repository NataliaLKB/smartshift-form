
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Find the best{" "}
          <span className="text-[#038B8D]">smart tariff</span>
          {" "}for your home
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
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

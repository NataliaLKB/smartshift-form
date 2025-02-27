
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, LineChart } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-16 bg-[#038B8D]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <LineChart className="w-12 h-12 text-[#038B8D]" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to optimize your energy costs?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards smarter energy usage and find the perfect tariff for your needs.
          </p>
          <Button size="lg" className="px-8" asChild>
            <Link to="/import-export">
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

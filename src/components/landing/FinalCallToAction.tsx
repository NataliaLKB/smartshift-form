
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FinalCallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#025B5D] to-[#038B8D]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Start your energy optimization journey today</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already found their perfect energy solution and started saving money.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-[#038B8D] hover:bg-white/90 hover:text-[#025B5D] border-none" asChild>
            <Link to="/import-export">
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

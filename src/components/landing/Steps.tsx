
import { Lightbulb, Upload, PiggyBank } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-12 h-12 text-[#038B8D]" />,
    title: "Upload Your Bill",
    description: "Share your current energy bill to help us understand your usage patterns"
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-[#038B8D]" />,
    title: "Get Analysis",
    description: "Our smart system analyzes your consumption and available tariffs"
  },
  {
    icon: <PiggyBank className="w-12 h-12 text-[#038B8D]" />,
    title: "Save Money",
    description: "Switch to the recommended tariff and start saving on your energy bills"
  }
];

export const Steps = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

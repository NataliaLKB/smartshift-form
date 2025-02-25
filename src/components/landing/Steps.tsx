
import { ListOrdered, LineChart, Banknote } from "lucide-react";

const steps = [
  {
    icon: <ListOrdered className="w-12 h-12 text-[#038B8D]" />,
    title: "Enter your details",
    description: "This allows us to access your smart meter data"
  },
  {
    icon: <LineChart className="w-12 h-12 text-[#038B8D]" />,
    title: "Sit back",
    description: "We will analyse your usage to find the best smart tariff for your household"
  },
  {
    icon: <Banknote className="w-12 h-12 text-[#038B8D]" />,
    title: "Save money",
    description: "Switch to your chosen tariff and we will make it work for you"
  }
];

export const Steps = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="flex justify-center mb-4 relative">
                {step.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#038B8D] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

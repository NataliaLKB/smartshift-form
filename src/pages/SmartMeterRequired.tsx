
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Clock, PiggyBank, BarChart3, Plug } from "lucide-react";
import { AddressHeader } from "@/components/address/AddressHeader";

const SmartMeterRequired = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-2xl font-bold mb-4">Smart Meter Required</h1>
              
              <div className="text-gray-600 space-y-6">
                <p className="text-lg">
                  To find you the best smart tariff for your home, we need to understand your energy usage patterns throughout the day. This is only possible with a smart meter.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
                  <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                    <PiggyBank className="h-5 w-5" />
                    Good news! Smart meters are completely free
                  </h2>
                </div>

                <div className="space-y-4 mt-8">
                  <h2 className="text-xl font-semibold">Why get a smart meter?</h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <Clock className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-medium mb-2">Access Off-Peak Rates</h3>
                      <p className="text-sm text-gray-500">Save money by using energy during cheaper hours</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <BarChart3 className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-medium mb-2">Track Usage</h3>
                      <p className="text-sm text-gray-500">Monitor your energy consumption in real-time</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Plug className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-medium mb-2">Easy Installation</h3>
                      <p className="text-sm text-gray-500">Professional installation at no cost to you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white py-4">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <Button
              variant="outline"
              className="w-full md:w-auto order-2 md:order-1"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button
              className="w-full md:w-auto order-1 md:order-2"
              onClick={() => window.open('https://www.smartenergygb.org/smart-meter-installation', '_blank')}
            >
              Learn more about smart meters
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartMeterRequired;

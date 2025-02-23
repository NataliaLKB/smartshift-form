
import { Button } from "@/components/ui/button";
import { Clock, BarChart3, Plug, ArrowRight } from "lucide-react";
import { AddressHeader } from "@/components/address/AddressHeader";

const SmartMeterRequired = () => {
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
                  <h2 className="text-lg font-semibold text-green-700">
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
                      <h3 className="font-medium mb-2">No Manual Readings</h3>
                      <p className="text-sm text-gray-500">Never have to submit a manual meter reading again</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <Plug className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-medium mb-2">Easy Installation</h3>
                      <p className="text-sm text-gray-500">Professional installation at no cost to you</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="w-full md:w-auto"
                    onClick={() => window.open('https://www.smartenergygb.org/smart-meter-installation', '_blank')}
                  >
                    Learn more about installing smart meters <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Email section from ThankYou page */}
            <div className="text-center space-y-4">
              <p className="text-gray-600">Have questions? Email us at:</p>
              <div className="bg-white rounded-lg border border-gray-100 p-4 max-w-lg mx-auto">
                <a 
                  href="mailto:hello@smartshift.energy" 
                  className="text-gray-900 hover:underline flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  hello@smartshift.energy
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmartMeterRequired;

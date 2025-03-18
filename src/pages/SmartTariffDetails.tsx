
import { Navigation } from "@/components/landing/Navigation";
import { FinalCallToAction } from "@/components/landing/FinalCallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Lock, BarChart, CheckCircle } from "lucide-react";

const SmartTariffDetails = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-[#038B8D]/20 to-[#038B8D]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">Smart Tariff Analysis</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our detailed process to help you save up to 50% on your electricity bills
              </p>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What happens when I ask for a tariff recommendation?</h2>
              
              <div className="space-y-12 mt-10">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex items-start justify-center">
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center text-[#038B8D] font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Information Collection</h3>
                    <p className="text-gray-600 leading-relaxed">
                      You tell us your address, your current electricity supplier, what tariff you're on. You'll also tell us what smart devices you own. We'll also need a copy of your latest bill to verify your identity, so you'll upload that too.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex items-start justify-center">
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center text-[#038B8D] font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Secure Data Access</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once your identity is verified, we securely access your smart meter data through a trusted data provider. They contact the DCC, the organisation responsible for the smart meter program and prove you consent for you data to be accessed. They then download your smart meter data before returning it to us.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex items-start justify-center">
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center text-[#038B8D] font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Analysis & Recommendations</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Next, we verify your data is complete and suitable for analysis. Once we have quality data, we'll analyse up to a years worth of your half-hourly electricity consumption data. We use our comprehensive tariff database to find the top three tariffs which can save you money, along with an analysis of how your household uses electricity and any interesting observations.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex items-start justify-center">
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center text-[#038B8D] font-bold text-xl">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Switch & Save</h3>
                    <p className="text-gray-600 leading-relaxed">
                      You choose the right tariff for you and start your switch. You'll soon be with your new supplier and saving on your electricity bills! We'll also provide you with any advice you need to make the most out of your new tariff and maximise your savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bill Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="bg-[#038B8D]/10 p-3 rounded-full">
                      <FileText className="w-8 h-8 text-[#038B8D]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Why do I need to give you a copy of my bill?</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Smart meter data is considered personal data and is only stored on your meter - that's why we need to prove you consent to us accessing your data by verifying your identity. This is required by our data provider, who has an obligation to protect smart meter data and make sure it doesn't end up with the wrong people.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We use a copy of your electricity bill to do this because it contains important information, including proof of address and proof that you are paying the bill.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Our Smart Tariff Analysis</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="inline-flex p-3 bg-[#038B8D]/10 rounded-full mb-4">
                    <BarChart className="w-6 h-6 text-[#038B8D]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Data-Driven</h3>
                  <p className="text-gray-600">Recommendations based on your actual energy usage patterns</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="inline-flex p-3 bg-[#038B8D]/10 rounded-full mb-4">
                    <Lock className="w-6 h-6 text-[#038B8D]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Secure Process</h3>
                  <p className="text-gray-600">Your data is handled securely and with your explicit consent</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="inline-flex p-3 bg-[#038B8D]/10 rounded-full mb-4">
                    <CheckCircle className="w-6 h-6 text-[#038B8D]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">50% Savings</h3>
                  <p className="text-gray-600">Our customers save up to 50% on their electricity bills</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-[#038B8D]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to start saving?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Begin your journey to lower electricity bills with our smart tariff analysis.
              </p>
              <Button size="lg" className="px-8" asChild>
                <Link to="/personal-details">
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <FinalCallToAction />
    </div>
  );
};

export default SmartTariffDetails;

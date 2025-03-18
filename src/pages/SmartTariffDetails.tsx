
import { Navigation } from "@/components/landing/Navigation";
import { FinalCallToAction } from "@/components/landing/FinalCallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Lock, BarChart, CheckCircle, BarChart3, CheckCircle2, Database, Mail, HelpCircle, Plus, Minus } from "lucide-react";
import { Steps } from "@/components/landing/Steps";
import { Testimonials } from "@/components/landing/Testimonials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

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
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Is your Smart Home on a Dumb Tariff?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Smart homes deserve smart tariffs. If you've invested in an electric vehicle, heat pump, solar panels, battery storage or other types of electric space and water heating, you could save significantly by switching to an electricity tariff that rewards flexible energy use.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* 3 Steps Process */}
        <Steps />
        
        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What happens when I ask for a tariff recommendation?</h2>
              
              <div className="space-y-12 mt-10">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex items-start justify-center">
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#038B8D]" />
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
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <Database className="w-6 h-6 text-[#038B8D]" />
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
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#038B8D]" />
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
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-[#038B8D]" />
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
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="bg-white p-6 rounded-lg shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    Why do I need to give you a copy of my bill?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    <p className="mb-4">
                      Smart meter data is considered personal data and is only stored on your meter - that's why we need to prove you consent to us accessing your data by verifying your identity. This is required by our data provider, who has an obligation to protect smart meter data and make sure it doesn't end up with the wrong people.
                    </p>
                    <p>
                      We use a copy of your electricity bill to do this because it contains important information, including proof of address and proof that you are paying the bill.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    How much could I save by switching?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    The average smart home saves 20-60% on their electricity bills by switching to the right smart tariff. Your actual savings will depend on your current tariff, usage patterns, and the smart devices you have. Our analysis will give you a personalized savings estimate.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    How long does the analysis take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Once we have access to your smart meter data, we can typically complete our analysis within 24-48 hours. We'll email you as soon as your personalized recommendations are ready.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Smart Tariff Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Smart Tariff Comparison Tool</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Discover tariffs that reward off-peak electric vehicle charging and help you maximise heat pump efficiency by shifting to cheaper time periods. Let us do the hard work for you, and find you the best compatible import and export tariffs for your home.
                </p>
                <Separator className="my-6" />
                <p className="text-lg font-semibold text-center">
                  The average smart home saves 20-60% on their electricity bills by switching to the right smart tariff.
                </p>
                <p className="text-gray-700 leading-relaxed mt-6">
                  Switch to a tariff that rewards you for using energy smarter. We help households with smart devices find the perfect electricity tariffs to maximise savings and support the green energy transition.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Email Updates Section */}
        <section className="py-16 bg-[#038B8D]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-lg">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-[#038B8D]" />
                  <h3 className="text-xl font-semibold">We Keep You Updated</h3>
                </div>
                <p className="text-center text-gray-600 leading-relaxed">
                  Throughout the entire process, we'll keep you updated via email at each step. If we need any additional information or once your recommendations are ready, you'll be the first to know.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Our Smart Tariff Analysis</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="inline-flex p-3 bg-[#038B8D]/10 rounded-full mb-4">
                    <BarChart3 className="w-6 h-6 text-[#038B8D]" />
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
                    <CheckCircle2 className="w-6 h-6 text-[#038B8D]" />
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


import { Navigation } from "@/components/landing/Navigation";
import { FinalCallToAction } from "@/components/landing/FinalCallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Lock, BarChart3, CheckCircle2, Database, HelpCircle } from "lucide-react";
import { Steps } from "@/components/landing/Steps";
import { Testimonials } from "@/components/landing/Testimonials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const SmartTariffDetails = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section - Simplified */}
        <section className="py-16 bg-gradient-to-r from-[#038B8D]/20 to-[#038B8D]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-gray-800">Smart Tariff Analysis</h1>
              <p className="text-xl text-gray-600 mb-8">
                Save up to 50% on your electricity bills with our personalized tariff recommendations based on your actual usage patterns.
              </p>
              {/* "Get Started" button removed from here */}
            </div>
          </div>
        </section>
        
        {/* 3 Steps Process */}
        <Steps />
        
        {/* Process Section - Simplified */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What happens when I ask for a tariff recommendation?</h2>
              
              <div className="space-y-8 mt-10">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex items-start justify-center">
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#038B8D]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Basic Information</h3>
                    <p className="text-gray-600">
                      We collect your address, current supplier details, and smart home device information. You'll upload a recent bill to verify your identity.
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
                    <h3 className="text-xl font-semibold mb-2">Smart Meter Data Access</h3>
                    <p className="text-gray-600">
                      After verification, we securely access your smart meter data through authorized channels with your consent.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex items-start justify-center">
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-[#038B8D]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Personalized Analysis</h3>
                    <p className="text-gray-600">
                      We analyze your usage patterns and recommend the best tariffs that could save you money based on how and when you use electricity.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex items-start justify-center">
                    <div className="bg-[#038B8D]/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#038B8D]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Switch & Save</h3>
                    <p className="text-gray-600">
                      Choose your preferred tariff and we'll guide you through the switching process, helping you start saving right away.
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
        
        {/* Testimonials */}
        <Testimonials />
        
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

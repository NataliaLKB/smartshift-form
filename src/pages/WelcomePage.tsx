
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ShieldCheck, ArrowRight, Info } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/personal-details');
  };
  return <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Smart Tariff Analysis</h1>
              <p className="text-gray-600 mt-2 max-w-3xl">Save up to 50% on your electricity bills with our personalised tariff recommendations based on your actual usage patterns.</p>
            </div>

            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#00CED1]" />
                  How our process works
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="flex flex-col bg-[#00CED1]/5 p-5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#00CED1] text-white flex items-center justify-center">
                        1
                      </div>
                      <p className="font-medium text-gray-800">Enter your details</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Create your account and provide your address and current supplier information</p>
                  </div>
                  
                  <div className="flex flex-col bg-[#00CED1]/5 p-5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#00CED1] text-white flex items-center justify-center">
                        2
                      </div>
                      <p className="font-medium text-gray-800">Upload your bill</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">We'll verify your identity and securely access your smart meter data with your consent</p>
                  </div>
                  
                  <div className="flex flex-col bg-[#00CED1]/5 p-5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#00CED1] text-white flex items-center justify-center">
                        3
                      </div>
                      <p className="font-medium text-gray-800">Get recommendations</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">We'll analyse your usage and show your personalised recommendations in your account</p>
                  </div>
                </div>
                
                <div className="bg-[#00CED1]/10 border border-[#00CED1]/20 rounded-md p-4 mt-5">
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 text-[#00CED1] flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <strong>Important:</strong> You must be the electricity bill payer for your home to use our service. We need to verify your identity and access your smart meter data with your consent.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 overflow-hidden bg-gradient-to-r from-[#025B5D]/5 to-[#038B8D]/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">What you'll get with your analysis</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CED1] mt-0.5" />
                    <div>
                      <p className="font-medium">Access to your electricity consumption data</p>
                      <p className="text-sm text-gray-600">See when and how you use electricity throughout the day</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CED1] mt-0.5" />
                    <div>
                      <p className="font-medium">Personalised tariff recommendations</p>
                      <p className="text-sm text-gray-600">The average smart home saves 20-60% on their electricity bills by switching to the right smart tariff</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00CED1] mt-0.5" />
                    <div>
                      <p className="font-medium">Ongoing insights and updates <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full ml-1">Beta • Extra Cost</span></p>
                      <p className="text-sm text-gray-600">Get premium access to continuous monitoring and alerts when better tariffs become available (additional subscription required)</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8">
              <Button onClick={handleContinue} size="lg" className="bg-[#00CED1] hover:bg-[#00CED1]/90 font-medium text-base px-8 gap-2 text-slate-950">
                Let's Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default WelcomePage;

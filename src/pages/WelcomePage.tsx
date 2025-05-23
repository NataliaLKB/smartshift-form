
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, InfoIcon, ShieldCheck, Clock, Zap, FileText, Database, BarChart3 } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();
  
  const handleContinue = () => {
    navigate('/personal-details');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Smart Tariff Analysis</h1>
              <p className="text-gray-600 mt-2 max-w-3xl">Save up to 50% on your electricity bills with our personalized tariff recommendations based on your actual usage patterns.</p>
            </div>

            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#00CED1]" />
                  Quick and easy process
                </h3>
                
                <div className="flex flex-col md:flex-row gap-6 mb-5">
                  <div className="flex-1 bg-[#00CED1]/5 p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#00CED1] text-white flex items-center justify-center">
                        <FileText className="h-4 w-4" />
                      </div>
                      <p className="font-medium text-gray-800">Basic Information</p>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">Share your address, current supplier details, and upload a recent bill to verify your identity</p>
                  </div>
                  
                  <div className="flex-1 bg-[#00CED1]/5 p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#00CED1] text-white flex items-center justify-center">
                        <Database className="h-4 w-4" />
                      </div>
                      <p className="font-medium text-gray-800">Smart Meter Data Access</p>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">After verification, we securely access your smart meter data through authorized channels</p>
                  </div>
                  
                  <div className="flex-1 bg-[#00CED1]/5 p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#00CED1] text-white flex items-center justify-center">
                        <BarChart3 className="h-4 w-4" />
                      </div>
                      <p className="font-medium text-gray-800">Personalized Analysis</p>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">We analyze your usage patterns and recommend the best tariffs that could save you money</p>
                  </div>
                </div>
                
                <div className="bg-[#00CED1]/10 border border-[#00CED1]/20 rounded-md p-4">
                  <div className="flex gap-3">
                    <InfoIcon className="h-5 w-5 text-[#00CED1] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#00CED1]">
                      You must be the electricity bill payer for your home to use our service. We need to verify your identity and access your smart meter data with your consent.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#00CED1]" />
                  Benefits of an account
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-[#00CED1]/10 p-1.5 mt-0.5">
                      <Zap className="h-4 w-4 text-[#00CED1]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Access your electricity consumption data</p>
                      <p className="text-sm text-gray-500">We'll analyze your usage patterns to find the best tariffs based on how and when you use electricity</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-[#00CED1]/10 p-1.5 mt-0.5">
                      <Clock className="h-4 w-4 text-[#00CED1]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">See how recommendations change over time</p>
                      <p className="text-sm text-gray-500">Track your energy savings and get updated suggestions as new tariffs become available</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-[#00CED1]/10 p-1.5 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-[#00CED1]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Personalized tariff recommendations</p>
                      <p className="text-sm text-gray-500">Get tariffs that could save you up to 50% based on your actual smart meter data</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleContinue}
                size="lg"
                className="bg-[#00CED1] hover:bg-[#00CED1]/90 text-black font-medium text-base px-8"
              >
                Let's Get Started
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;

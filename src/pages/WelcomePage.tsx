
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, InfoIcon, ShieldCheck, Clock, Zap } from "lucide-react";
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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Find the best energy tariff for your home</h1>
              <p className="text-gray-600 mt-2 max-w-3xl">Our smart tariff analysis will help you save money on your energy bills.</p>
            </div>

            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Your 6-step journey to energy savings
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium mt-0.5">1</div>
                      <div>
                        <p className="font-medium text-gray-800">Create your account</p>
                        <p className="text-sm text-gray-500">Provide your basic details</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium mt-0.5">2</div>
                      <div>
                        <p className="font-medium text-gray-800">Tell us about your property</p>
                        <p className="text-sm text-gray-500">Enter your address details</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium mt-0.5">3</div>
                      <div>
                        <p className="font-medium text-gray-800">Share energy usage</p>
                        <p className="text-sm text-gray-500">Tell us about your devices and consumption</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium mt-0.5">4</div>
                      <div>
                        <p className="font-medium text-gray-800">Upload your electricity bill</p>
                        <p className="text-sm text-gray-500">We need this to access your smart meter data</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium mt-0.5">5</div>
                      <div>
                        <p className="font-medium text-gray-800">Review your current tariff</p>
                        <p className="text-sm text-gray-500">Confirm your existing rate details</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium mt-0.5">6</div>
                      <div>
                        <p className="font-medium text-gray-800">Get your recommendation</p>
                        <p className="text-sm text-gray-500">See your personalized smart tariff analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-md p-4 mt-5">
                  <div className="flex gap-3">
                    <InfoIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-primary-700">
                      You must be the electricity bill payer for your home to use our service. We'll need access to your smart meter data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Benefits of an account
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Access your electricity consumption data</p>
                      <p className="text-sm text-gray-500">We'll analyze your usage patterns to find the best tariffs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">See how recommendations change over time</p>
                      <p className="text-sm text-gray-500">Track your energy savings and get updated suggestions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Stay updated with new product features</p>
                      <p className="text-sm text-gray-500">Get alerts about new ways to save on your energy bills</p>
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

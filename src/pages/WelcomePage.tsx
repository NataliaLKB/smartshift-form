
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, InfoIcon, ShieldCheck, Clock, Zap } from "lucide-react";

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
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Getting Started</p>
                <p className="text-xs text-gray-500">Welcome</p>
              </div>
              <Progress value={10} className="h-1 mb-6" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Find the best energy tariff for your home</h1>
              <p className="text-gray-600 mt-2 max-w-3xl">Our smart tariff analysis will help you save money on your energy bills.</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-primary/5 rounded-lg border border-blue-100 p-5 shadow-sm">
              <div className="flex gap-4">
                <InfoIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-primary-700 mb-1.5">Important Information</h3>
                  <p className="text-blue-800">
                    To use our smart tariff comparison service, you need to be the electricity bill payer for your home. 
                    We'll ask you to upload your bill to validate your identity and grant us access to your smart meter data.
                  </p>
                </div>
              </div>
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
              </CardContent>
            </Card>

            <Card className="border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Why create an account?
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
          </div>
        </div>
      </main>

      <AddressFooter hideBack={true} onContinue={handleContinue} isEnabled={true} buttonText="Let's Get Started" />
    </div>
  );
};

export default WelcomePage;

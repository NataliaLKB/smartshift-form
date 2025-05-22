
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Getting Started</p>
                <p className="text-xs text-gray-500">Welcome</p>
              </div>
              <Progress value={10} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">Find the best energy tariff for your home</h1>
              <p className="text-gray-500 mt-2">We'll analyze your energy usage to find the best tariff for your household. Complete our 6-step process to get your personalized recommendation.</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-primary/5 rounded-lg border border-blue-100 p-4 shadow-sm">
              <div className="flex gap-3">
                <InfoIcon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-primary-700 mb-1">Important Note</h3>
                  <p className="text-sm text-blue-800">
                    To use our smart tariff comparison service, you need to be the electricity bill payer for your home. 
                    We'll ask you to upload your bill to validate your identity and grant us access to your smart meter data, 
                    which powers our personalised analysis. If you're not the bill payer, you might want to ask them to complete this process instead.
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-primary/10 shadow-sm overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <h3 className="font-medium flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Why create an account?
                </h3>
              </CardHeader>
              <CardContent className="pt-5">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Access your electricity consumption data</p>
                      <p className="text-sm text-gray-500">We'll analyze your usage patterns to find the best tariffs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">See how recommendations change over time</p>
                      <p className="text-sm text-gray-500">Track your energy savings and get updated suggestions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5">
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

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Your 6-step journey to energy savings:</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3 items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium">1</div>
                    <span>Create your account with basic details</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium">2</div>
                    <span>Tell us about your property</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium">3</div>
                    <span>Share information about your energy usage</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium">4</div>
                    <span>Upload your electricity bill</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium">5</div>
                    <span>Review your current tariff details</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center font-medium">6</div>
                    <span>Get your personalized smart tariff recommendation</span>
                  </li>
                </ol>
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

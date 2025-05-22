
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { PersonalDetailsForm } from '@/components/personal/PersonalDetailsForm';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle2 } from "lucide-react";

const PersonalDetails = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormValidityChange = (isValid: boolean) => {
    setIsFormValid(isValid);
  };

  const handleContinue = () => {
    if (isFormValid) {
      navigate('/address');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Step 1 of 5</p>
                <p className="text-xs text-gray-500">Account creation</p>
              </div>
              <Progress value={20} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">Create your SmartShift account</h1>
              <p className="text-gray-500 mt-2">Unlock personalized energy insights and recommendations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    <PersonalDetailsForm 
                      onValidityChange={handleFormValidityChange} 
                      createAccount={true} 
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <h3 className="font-medium">Account Benefits</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Access your electricity consumption data</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>See how recommendations change over time</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Stay updated with new product features</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        hideBack={true}
        onContinue={handleContinue}
        isEnabled={isFormValid}
        buttonText="Create Account"
      />
    </div>
  );
};

export default PersonalDetails;

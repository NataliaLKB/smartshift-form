
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { PersonalDetailsForm } from '@/components/personal/PersonalDetailsForm';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

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
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Step 1 of 6</p>
                <p className="text-xs text-gray-500">Set up your account</p>
              </div>
              <Progress value={20} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">Create your account</h1>
              <p className="text-gray-500 mt-2">Please provide your details to create your account. This will allow us to personalize your tariff recommendations.</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <PersonalDetailsForm onValidityChange={handleFormValidityChange} createAccount={true} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <AddressFooter onBack={() => navigate('/')} onContinue={handleContinue} isEnabled={isFormValid} buttonText="Continue" />
    </div>
  );
};

export default PersonalDetails;

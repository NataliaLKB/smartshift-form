
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { PersonalDetailsForm } from '@/components/personal/PersonalDetailsForm';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

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
                <p className="text-sm text-gray-700">Step 1 of 6</p>
                <p className="text-xs text-gray-500">Basic information</p>
              </div>
              <Progress value={16.67} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">Tell us about yourself</h1>
              <p className="text-gray-500 mt-2">Please fill in your details below to get started</p>
            </div>

            <Alert className="bg-[#F0F9F9] border-[#00CED1]/30">
              <Info className="h-5 w-5 text-[#00CED1]" />
              <AlertTitle className="text-[#038B8D] font-medium">Important Information</AlertTitle>
              <AlertDescription className="text-gray-700">
                You need to be the bill holder (the person who pays for the electricity) to proceed with this assessment. We'll ask you to upload a copy of your bill later in the process.
              </AlertDescription>
            </Alert>

            <PersonalDetailsForm onValidityChange={handleFormValidityChange} />
          </div>
        </div>
      </main>

      <AddressFooter
        hideBack={true}
        onContinue={handleContinue}
        isEnabled={isFormValid}
      />
    </div>
  );
};

export default PersonalDetails;

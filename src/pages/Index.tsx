
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressForm } from '@/components/address/AddressForm';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleFormValidityChange = (isValid: boolean) => {
    setIsFormValid(isValid);
  };

  const handleContinue = () => {
    if (isFormValid) {
      navigate('/devices');
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
                <p className="text-sm text-gray-700">Step 2 of 6</p>
                <p className="text-xs text-gray-500">Address details</p>
              </div>
              <Progress value={33.33} className="h-10 mb-6" />
              <h1 className="text-2xl font-bold">Address details</h1>
            </div>

            <AddressForm onValidityChange={handleFormValidityChange} />
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/')}
        onContinue={handleContinue}
        hideBack={false}
        isEnabled={isFormValid}
      />
    </div>
  );
};

export default Index;

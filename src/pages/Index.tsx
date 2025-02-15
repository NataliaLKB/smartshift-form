
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressForm } from '@/components/address/AddressForm';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = React.useState(false);

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
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-1">Step 2 of 6</p>
            <h1 className="text-2xl font-bold">Address details</h1>
          </div>

          <div className="space-y-6">
            <Progress value={33.33} className="h-0.5" />
            <AddressForm />
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

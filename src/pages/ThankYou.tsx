
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="text-center space-y-6">
            <h1 className="text-2xl font-bold">This is James.</h1>
            <p className="text-gray-600">
              He is processing your results. We'll be in touch usually within a week.
            </p>
            <p className="text-gray-600">
              If you have any questions, please email{' '}
              <a 
                href="mailto:hello@smartshift.energy" 
                className="text-primary hover:underline"
              >
                hello@smartshift.energy
              </a>
            </p>
          </div>
        </div>
      </main>

      <AddressFooter
        hideBack={true}
        onContinue={() => navigate('/')}
        buttonText="Return to homepage"
        isEnabled={true}
      />
    </div>
  );
};

export default ThankYou;

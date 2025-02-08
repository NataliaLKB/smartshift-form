import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressForm } from '@/components/address/AddressForm';
import { AddressFooter } from '@/components/address/AddressFooter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AddressHeader />
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-1">Step 2 of 5</p>
          <h1 className="text-2xl font-bold">Address details</h1>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <AddressForm />
        </div>
      </main>

      <AddressFooter
        onBack={() => console.log('Back clicked')}
        onContinue={() => console.log('Continue clicked')}
      />
    </div>
  );
};

export default Index;
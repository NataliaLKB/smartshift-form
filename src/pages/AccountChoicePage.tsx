
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { AccountChoice } from '@/components/personal/AccountChoice';
import { useNavigate } from 'react-router-dom';

const AccountChoicePage = () => {
  const navigate = useNavigate();

  const handleAccountChoice = (choice: 'guest' | 'account') => {
    navigate('/personal-details', { state: { accountType: choice } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Choose how to continue</h1>
              <p className="text-gray-500 mt-2">Select the option that best suits your needs</p>
            </div>

            <AccountChoice onSelect={handleAccountChoice} />
          </div>
        </div>
      </main>

      <AddressFooter 
        hideBack={true}
        hideContinue={true}
        onContinue={() => {}} 
      />
    </div>
  );
};

export default AccountChoicePage;


import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { PersonalDetailsForm } from '@/components/personal/PersonalDetailsForm';
import { useNavigate } from 'react-router-dom';

const PersonalDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AddressHeader />
      
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-1">Step 1 of 6</p>
            <h1 className="text-2xl font-bold">Tell us about yourself</h1>
          </div>

          <div className="space-y-6">
            <Progress value={16.67} className="h-0.5" />
            <PersonalDetailsForm />
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => console.log('Back clicked')}
        onContinue={() => navigate('/address')}
      />
    </div>
  );
};

export default PersonalDetails;

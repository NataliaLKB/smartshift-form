
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Tariff = () => {
  const navigate = useNavigate();
  const [tariff, setTariff] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Step 5 of 6</p>
                <p className="text-xs text-gray-500">Tariff details</p>
              </div>
              <Progress value={83} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">Your energy tariff details</h1>
              <p className="text-gray-500 mt-2">Please provide your current tariff name</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Your current supplier is:</h2>
                <p className="text-xl font-bold text-[#038B8D] mt-2">Octopus Energy</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>What is your tariff?</Label>
                  <Input
                    type="text"
                    value={tariff}
                    onChange={(e) => setTariff(e.target.value)}
                    placeholder="Enter your electricity tariff name"
                  />
                  <p className="text-sm text-gray-500">You can find this information on your bill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/bill-upload')}
        onContinue={() => navigate('/feedback')}
        isEnabled={tariff.trim().length > 0}
      />
    </div>
  );
};

export default Tariff;

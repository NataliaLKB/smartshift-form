
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate, useLocation } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface LocationState {
  assessmentType: 'import-only' | 'import-export';
}

const Tariff = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { assessmentType } = (location.state as LocationState) || { assessmentType: 'import-only' };
  
  const [importTariff, setImportTariff] = useState("");
  const [exportTariff, setExportTariff] = useState("");
  const [singleBill, setSingleBill] = useState(false);

  const isValid = assessmentType === 'import-only' 
    ? importTariff.trim().length > 0
    : importTariff.trim().length > 0;  // For import-export, we only require import tariff as export might be optional

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
              <p className="text-gray-500 mt-2">Please enter your current tariff name - you can find this on your energy bill</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Your current supplier is:</h2>
                <p className="text-xl font-bold text-[#038B8D] mt-2">Octopus Energy</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>
                    {assessmentType === 'import-export' 
                      ? "What is your import tariff?"
                      : "What is your tariff?"
                    }
                  </Label>
                  <Input
                    type="text"
                    value={importTariff}
                    onChange={(e) => setImportTariff(e.target.value)}
                    placeholder={assessmentType === 'import-export' 
                      ? "Enter your electricity import tariff name"
                      : "Enter your electricity tariff name"
                    }
                  />
                  <p className="text-sm text-gray-500">You can find this information on your bill</p>
                </div>

                {assessmentType === 'import-export' && (
                  <>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="singleBill" 
                        checked={singleBill} 
                        onCheckedChange={(checked) => {
                          const isChecked = checked === true;
                          setSingleBill(isChecked);
                          if (isChecked) {
                            setExportTariff(""); // Clear export tariff if using single bill
                          }
                        }}
                      />
                      <Label 
                        htmlFor="singleBill" 
                        className="text-sm font-medium cursor-pointer"
                      >
                        I have a combined bill for both import and export tariffs
                      </Label>
                    </div>

                    {!singleBill && (
                      <div className="space-y-2">
                        <Label>What is your export tariff?</Label>
                        <Input
                          type="text"
                          value={exportTariff}
                          onChange={(e) => setExportTariff(e.target.value)}
                          placeholder="Enter your electricity export tariff name"
                        />
                        <p className="text-sm text-gray-500">This might be on a separate export bill if you have one</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/bill-upload', { state: { assessmentType }})}
        onContinue={() => navigate('/feedback')}
        isEnabled={isValid}
      />
    </div>
  );
};

export default Tariff;

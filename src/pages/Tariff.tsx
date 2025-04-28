
import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate, useLocation } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LocationState {
  assessmentType: 'import-only' | 'import-export';
}

const Tariff = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    assessmentType
  } = location.state as LocationState || {
    assessmentType: 'import-only'
  };
  const [importTariff, setImportTariff] = useState("");
  const [exportTariff, setExportTariff] = useState("");
  const [supplier, setSupplier] = useState("Octopus Energy");
  const [isEditingSupplier, setIsEditingSupplier] = useState(false);

  const isValid = assessmentType === 'import-only' ? importTariff.trim().length > 0 && supplier.trim().length > 0 : importTariff.trim().length > 0 && supplier.trim().length > 0; // For import-export, we only require import tariff as export might be optional

  return <div className="min-h-screen flex flex-col">
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
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                {supplier.trim() ? <>
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Your current supplier is:</h2>
                    {isEditingSupplier ? <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <Input type="text" value={supplier} onChange={e => setSupplier(e.target.value)} placeholder="Enter your energy supplier" className="max-w-xs border-gray-300 focus-visible:ring-primary/50" autoFocus />
                        <Button onClick={() => setIsEditingSupplier(false)} className="bg-primary hover:bg-primary/90 text-white sm:self-stretch" size="sm">
                          Save
                        </Button>
                      </div> : <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-[#028a7e]">{supplier}</span>
                        <Button 
                          onClick={() => setIsEditingSupplier(true)} 
                          variant="ghost" 
                          size="sm" 
                          className="flex items-center gap-1 text-[#6E59A5] hover:text-[#6E59A5]/80 hover:underline focus-visible:ring-primary/50 px-2 py-1"
                        >
                          <Edit className="h-4 w-4" /> Change
                        </Button>
                      </div>}
                  </> : <>
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Who is your current supplier?</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <Input type="text" value={supplier} onChange={e => setSupplier(e.target.value)} placeholder="Enter your energy supplier" className="max-w-xs border-gray-300 focus-visible:ring-primary/50" />
                      {supplier.trim() && <Button onClick={() => setIsEditingSupplier(false)} className="bg-primary hover:bg-primary/90 text-white sm:self-stretch" size="sm">
                          Save
                        </Button>}
                    </div>
                  </>}
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>
                    {assessmentType === 'import-export' ? "What is your import tariff?" : "What is your tariff?"}
                  </Label>
                  <Input type="text" value={importTariff} onChange={e => setImportTariff(e.target.value)} placeholder={assessmentType === 'import-export' ? "Enter your electricity import tariff name" : "Enter your electricity tariff name"} className="border-gray-300 focus-visible:ring-primary/50" />
                  <p className="text-sm text-gray-500">You can find this information on your bill</p>
                </div>

                {assessmentType === 'import-export' && <div className="space-y-2">
                    <Label>What is your export tariff? (optional)</Label>
                    <Input type="text" value={exportTariff} onChange={e => setExportTariff(e.target.value)} placeholder="Enter your electricity export tariff name" className="border-gray-300 focus-visible:ring-primary/50" />
                    <p className="text-sm text-gray-500">This might be on a separate export bill if you have one</p>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter onBack={() => navigate('/bill-upload', {
      state: {
        assessmentType
      }
    })} onContinue={() => navigate('/feedback')} isEnabled={isValid} />
    </div>;
};

export default Tariff;

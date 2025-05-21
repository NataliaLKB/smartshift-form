
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import DevicesList from '@/components/devices/DevicesList';

const Devices = () => {
  const navigate = useNavigate();
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const handleDevicesChange = (devices: string[]) => {
    setSelectedDevices(devices);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Step 3 of 6</p>
                <p className="text-xs text-gray-500">Your devices</p>
              </div>
              <Progress value={50} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">What devices do you own?</h1>
              <p className="text-gray-500 mt-2">Select all that apply and then press continue</p>
            </div>
            
            <DevicesList onDevicesChange={handleDevicesChange} />
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/address')}
        onContinue={() => navigate('/bill-upload')}
        isEnabled={selectedDevices.length > 0}
      />
    </div>
  );
};

export default Devices;

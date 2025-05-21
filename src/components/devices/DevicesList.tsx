
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Define the device types
export interface Device {
  id: string;
  label: string;
}

// Array of available devices
export const availableDevices: Device[] = [
  { id: 'solar-panels', label: 'Solar panels' },
  { id: 'battery-storage', label: 'Battery storage' },
  { id: 'electric-vehicle', label: 'Electric vehicle' },
  { id: 'ev-charger', label: 'Electric vehicle charger' },
  { id: 'smart-thermostat', label: 'Smart thermostat' },
  { id: 'space-heating', label: 'Other electronic space heating (e.g. storage radiators)' },
  { id: 'water-heating', label: 'Other electronic water heating (e.g. hot water tank)' },
  { id: 'none', label: 'None of these' },
];

interface DevicesListProps {
  onDevicesChange?: (devices: string[]) => void;
  initialDevices?: string[];
  showTitle?: boolean;
}

export const DevicesList: React.FC<DevicesListProps> = ({ 
  onDevicesChange, 
  initialDevices = [], 
  showTitle = false
}) => {
  const [selectedDevices, setSelectedDevices] = useState<string[]>(initialDevices);

  const toggleDevice = (deviceId: string) => {
    const newSelection = deviceId === 'none' 
      ? ['none'] 
      : selectedDevices
          .filter(id => id !== 'none')
          .filter(id => id !== deviceId);
    
    if (deviceId !== 'none' && !selectedDevices.includes(deviceId)) {
      newSelection.push(deviceId);
    }
    
    setSelectedDevices(newSelection);
    if (onDevicesChange) {
      onDevicesChange(newSelection);
    }
  };

  return (
    <div className="space-y-4">
      {showTitle && (
        <div>
          <h2 className="text-lg font-medium">Your Devices</h2>
          <p className="text-sm text-muted-foreground">Select the energy devices you have installed</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableDevices.map((device) => (
          <Button
            key={device.id}
            variant="outline"
            className={cn(
              "w-full justify-start py-3 px-4 bg-white text-center",
              selectedDevices.includes(device.id) && "border-primary bg-primary/5"
            )}
            onClick={() => toggleDevice(device.id)}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-sm mx-auto">{device.label}</span>
              {selectedDevices.includes(device.id) && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                      fill="white"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DevicesList;

import React from 'react';
import { Button } from "@/components/ui/button";

interface Address {
  street: string;
  unit: string;
}

interface AddressSelectionProps {
  addresses: Address[];
  onSelect: (address: Address) => void;
}

export const AddressSelection = ({ addresses, onSelect }: AddressSelectionProps) => {
  return (
    <div className="space-y-2 mt-4">
      {addresses.map((address, index) => (
        <Button
          key={index}
          variant="outline"
          className="w-full justify-start h-auto py-3 px-4"
          onClick={() => onSelect(address)}
        >
          <div className="text-left">
            <div className="font-medium">{address.street}</div>
            <div className="text-sm text-gray-500">{address.unit}</div>
          </div>
        </Button>
      ))}
    </div>
  );
};
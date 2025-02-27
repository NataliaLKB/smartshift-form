
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Address {
  street: string;
  unit: string;
}

interface AddressSelectionProps {
  addresses: Address[];
  onSelect: (address: Address) => void;
  maxHeight?: string;
}

export const AddressSelection = ({ addresses, onSelect, maxHeight = "200px" }: AddressSelectionProps) => {
  return (
    <ScrollArea className={`w-full rounded-md border border-gray-200 shadow-sm`} style={{ maxHeight }}>
      <div className="p-1">
        {addresses.map((address, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start h-auto py-3 px-4 mb-1 last:mb-0"
            onClick={() => onSelect(address)}
          >
            <div className="text-left">
              <div className="font-medium">{address.street}</div>
              <div className="text-sm text-gray-500">{address.unit}</div>
            </div>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};

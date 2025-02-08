import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AddressSelection } from './AddressSelection';

export const AddressForm = () => {
  const [postcode, setPostcode] = useState('W11 3SD');
  const [showAddresses, setShowAddresses] = useState(true);

  const addresses = [
    { street: '123 Main Street', unit: 'Apartment 4B' },
    { street: '123 Main Street', unit: 'Apartment 4C' },
    { street: '123 Main Street', unit: 'Apartment 4D' },
  ];

  const handleFindAddress = () => {
    setShowAddresses(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">What's your address?</h2>
        <p className="text-gray-500">Enter your postcode to find your address</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="postcode">Postcode</Label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                id="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full"
              />
            </div>
            <Button onClick={handleFindAddress}>
              Find Address
            </Button>
          </div>
        </div>

        {showAddresses && (
          <>
            <Button variant="outline" className="w-full justify-start">
              Select an address
            </Button>
            <AddressSelection
              addresses={addresses}
              onSelect={(address) => console.log('Selected address:', address)}
            />
          </>
        )}
      </div>
    </div>
  );
};
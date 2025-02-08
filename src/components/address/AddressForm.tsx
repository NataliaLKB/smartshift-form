
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AddressSelection } from './AddressSelection';
import { useIsMobile } from "@/hooks/use-mobile";

export const AddressForm = () => {
  const [postcode, setPostcode] = useState('');
  const [showAddresses, setShowAddresses] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const isMobile = useIsMobile();

  const addresses = [
    { street: '123 Main Street', unit: 'Apartment 4B' },
    { street: '123 Main Street', unit: 'Apartment 4C' },
    { street: '123 Main Street', unit: 'Apartment 4D' },
  ];

  const handleFindAddress = () => {
    setShowAddresses(true);
    setShowDropdown(false);
  };

  const handleSelectAddressClick = () => {
    setShowDropdown(!showDropdown);
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
          <div className={`flex flex-col md:flex-row gap-2 ${isMobile ? 'space-y-2 md:space-y-0' : ''}`}>
            <div className="flex-1">
              <Input
                id="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Enter your postcode"
                className="w-full"
              />
            </div>
            <Button onClick={handleFindAddress} className={`${isMobile ? 'w-full' : ''}`}>
              Find address
            </Button>
          </div>
        </div>

        {showAddresses && (
          <>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={handleSelectAddressClick}
            >
              Select an address
            </Button>
            {showDropdown && (
              <AddressSelection
                addresses={addresses}
                onSelect={(address) => {
                  console.log('Selected address:', address);
                  setShowDropdown(false);
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

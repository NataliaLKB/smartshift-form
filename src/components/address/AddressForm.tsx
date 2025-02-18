
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AddressSelection } from './AddressSelection';
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface AddressFormProps {
  onValidityChange?: (isValid: boolean) => void;
}

export const AddressForm = ({ onValidityChange }: AddressFormProps) => {
  const [postcode, setPostcode] = useState('');
  const [showAddresses, setShowAddresses] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<{ street: string; unit: string } | null>(null);
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

  const handleAddressSelect = (address: { street: string; unit: string }) => {
    setSelectedAddress(address);
    setShowDropdown(false);
  };

  useEffect(() => {
    const isValid = postcode !== '' && showAddresses && selectedAddress !== null;
    onValidityChange?.(isValid);
  }, [postcode, showAddresses, selectedAddress, onValidityChange]);

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
            <Button 
              onClick={handleFindAddress}
              variant="default"
              className={cn(
                isMobile ? 'w-full' : '',
                !showAddresses 
                  ? 'bg-[#00CED1] hover:bg-[#00CED1]/90 text-black' 
                  : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-50'
              )}
              disabled={showAddresses}
            >
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
              {selectedAddress ? `${selectedAddress.street}, ${selectedAddress.unit}` : 'Select an address'}
            </Button>
            {showDropdown && (
              <AddressSelection
                addresses={addresses}
                onSelect={handleAddressSelect}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

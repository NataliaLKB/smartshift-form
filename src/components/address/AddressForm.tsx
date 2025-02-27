
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AddressSelection } from './AddressSelection';
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

interface AddressFormProps {
  onValidityChange?: (isValid: boolean) => void;
}

export const AddressForm = ({ onValidityChange }: AddressFormProps) => {
  const [postcode, setPostcode] = useState('');
  const [showAddresses, setShowAddresses] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<{ street: string; unit: string } | null>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // For demo purposes, we have a few sample addresses
  const addresses = [
    { street: '123 Main Street', unit: 'Apartment 4B' },
    { street: '123 Main Street', unit: 'Apartment 4C' },
    { street: '123 Main Street', unit: 'Apartment 4D' },
    { street: '123 Main Street', unit: 'Apartment 5A' },
    { street: '123 Main Street', unit: 'Apartment 5B' },
    { street: '123 Main Street', unit: 'Apartment 5C' },
    { street: '123 Main Street', unit: 'Apartment 6A' },
  ];

  const isValidPostcode = (postcode: string) => {
    // Basic UK postcode validation
    const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
    return postcodeRegex.test(postcode.trim());
  };

  const handleFindAddress = () => {
    if (!postcode.trim()) {
      toast({
        title: "Missing Postcode",
        description: "Please enter a postcode to continue",
        variant: "destructive",
      });
      return;
    }

    if (!isValidPostcode(postcode)) {
      toast({
        title: "Invalid Postcode",
        description: "Please enter a valid UK postcode",
        variant: "destructive",
      });
      return;
    }

    setShowAddresses(true);
  };

  const handleAddressSelect = (address: { street: string; unit: string }) => {
    setSelectedAddress(address);
    setPopoverOpen(false);
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
          <div className="space-y-2">
            <Label htmlFor="address">Select your address</Label>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="address"
                  variant="outline"
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className="w-full justify-between"
                >
                  <span className="truncate">
                    {selectedAddress 
                      ? `${selectedAddress.street}, ${selectedAddress.unit}`
                      : "Select an address"}
                  </span>
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)]" align="start">
                <AddressSelection
                  addresses={addresses}
                  onSelect={handleAddressSelect}
                  maxHeight="250px"
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
    </div>
  );
};

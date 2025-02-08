
import React from 'react';
import { Button } from "@/components/ui/button";

interface AddressFooterProps {
  onBack?: () => void;
  onContinue: () => void;
  hideBack?: boolean;
}

export const AddressFooter = ({ onBack, onContinue, hideBack }: AddressFooterProps) => {
  return (
    <footer className="border-t border-gray-200 py-4 mt-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {!hideBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/724db77970f24a8fa58bdac1fccbfc40/3088113d385bec4808d969710b2d1f13b4a453c31e6e961a026aaecf24f42d05"
                alt="Back"
                className="w-4 h-4"
              />
              Back
            </Button>
          )}
          <div className={hideBack ? 'ml-auto' : ''}>
            <Button
              onClick={onContinue}
              className="flex items-center gap-2"
            >
              Continue
              <img
                src="https://cdn.builder.io/api/v1/image/assets/724db77970f24a8fa58bdac1fccbfc40/0c1f450eff5abd6106ce2a28c87034b80b822a50fbdabd46066c800e6ffd564f"
                alt="Continue"
                className="w-4 h-4"
              />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

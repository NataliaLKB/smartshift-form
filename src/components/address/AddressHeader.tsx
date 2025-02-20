
import React from 'react';
import { X } from 'lucide-react';

export const AddressHeader = () => {
  return (
    <header className="w-full py-6 border-b border-gray-200">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <img
            src="/lovable-uploads/df1edba5-54d3-4abe-a3cc-2575ca1a03ec.png"
            alt="SmartShift Logo"
            className="h-8 w-auto"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

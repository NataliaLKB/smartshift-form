
import React from 'react';
import { X } from 'lucide-react';

export const AddressHeader = () => {
  return (
    <header className="w-full py-6 border-b border-gray-200">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <img
            src="/logo.svg"
            alt="SmartShift Logo"
            className="h-8 w-auto transition-all duration-200"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

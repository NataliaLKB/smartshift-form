
import React from 'react';
import { X } from 'lucide-react';
import { Logo } from '@/components/Logo';

export const AddressHeader = () => {
  return (
    <header className="w-full py-4 border-b border-gray-200 bg-white">
      <div className="px-6">
        <div className="flex justify-between items-center">
          <a 
            href="https://www.smartshift.energy/"
            className="inline-block"
          >
            <Logo className="h-4 w-auto transition-all duration-200" />
          </a>
          <a 
            href="https://www.smartshift.energy/"
            className="inline-block"
          >
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

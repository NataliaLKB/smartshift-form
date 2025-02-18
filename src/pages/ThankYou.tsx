
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="text-center space-y-8">
            {/* Paper airplane icon */}
            <div className="w-20 h-20 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto">
              <Send className="w-10 h-10 text-primary transform rotate-45" />
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Thank You!</h1>
              <p className="text-xl text-gray-600">We've received your submission.</p>
            </div>

            {/* James card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 max-w-lg mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E5E7EB'%3E%3Cpath d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z'/%3E%3C/svg%3E"
                    alt="James avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900 font-medium">This is James. He is processing your results</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-600">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>We'll be in touch within a week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email section */}
            <div className="space-y-4">
              <p className="text-gray-600">Have questions? Email us at:</p>
              <div className="bg-white rounded-lg border border-gray-100 p-4 max-w-lg mx-auto">
                <a 
                  href="mailto:hello@smartshift.energy" 
                  className="text-primary hover:underline flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  hello@smartshift.energy
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        hideBack={true}
        onContinue={() => navigate('/')}
        buttonText="Return to homepage"
        isEnabled={true}
      />
    </div>
  );
};

export default ThankYou;

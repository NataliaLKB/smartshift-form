
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { useNavigate } from 'react-router-dom';
import { Send, FileText, Database, CheckCircle2, BarChart3 } from 'lucide-react';

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
              <p className="text-xl text-gray-600">We're starting your personalised electricity analysis</p>
            </div>

            {/* Process timeline */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 max-w-xl mx-auto">
              <h2 className="text-lg font-semibold mb-6">What happens next?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium">Bill Processing</p>
                    <p className="text-sm text-gray-600">We're processing your uploaded bill and initiating secure access to your smart meter data.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Database className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium">Data Access</p>
                    <p className="text-sm text-gray-600">We'll email you once we've received access to your smart meter data. This typically takes between 24-48 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium">Data Quality Check</p>
                    <p className="text-sm text-gray-600">We'll verify your data is complete and suitable for analysis. We'll let you know if we need anything else.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium">Analysis & Results</p>
                    <p className="text-sm text-gray-600">Once we have quality data, we'll analyze your usage patterns and send you our detailed recommendations.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> The analysis process can take up to two weeks as we ensure we have accurate and complete data to give you the best recommendations.
                </p>
              </div>
            </div>

            {/* Email section */}
            <div className="space-y-4">
              <p className="text-gray-600">We'll keep you updated via email. If you have any questions, contact us at:</p>
              <div className="bg-white rounded-lg border border-gray-100 p-4 max-w-lg mx-auto">
                <a 
                  href="mailto:hello@smartshift.energy" 
                  className="text-gray-900 hover:underline flex items-center justify-center gap-2"
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

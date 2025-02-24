
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { useNavigate } from 'react-router-dom';
import { FileText, Database, CheckCircle2, BarChart3, Mail } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Thank You!</h1>
              <p className="text-xl text-gray-600">We're starting your personalised electricity analysis</p>
            </div>

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
                <div className="flex items-center justify-center gap-2 bg-primary/5 rounded-lg p-4">
                  <Mail className="w-5 h-5 text-gray-900" />
                  <p className="text-sm font-medium text-gray-900">
                    We'll keep you updated via email at each step of the process
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">Have questions? Email us at:</p>
              <div className="bg-white rounded-lg border border-gray-100 p-4 max-w-lg mx-auto">
                <a 
                  href="mailto:hello@smartshift.energy" 
                  className="text-gray-900 hover:underline"
                >
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
        className="[&>div]:px-0 sm:[&>div]:px-4 [&>div]:w-full [&>div>div]:w-full [&>div>div]:justify-center [&>div>div>*]:flex-1"
      />
    </div>
  );
};

export default ThankYou;

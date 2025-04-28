
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { useNavigate, useLocation } from 'react-router-dom';
import { FileText, Database, CheckCircle2, BarChart3, Mail, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTestingGuest, setIsTestingGuest] = useState(false);
  const isGuest = isTestingGuest || location.state?.accountType === 'guest';

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <h1 className="text-4xl font-bold text-gray-900">Thank You!</h1>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => setIsTestingGuest(!isTestingGuest)}
                >
                  Test {isGuest ? 'Logged In' : 'Guest'} View
                </Button>
              </div>
              <p className="text-xl text-gray-600">We're starting your personalised electricity analysis</p>
            </div>

            {isGuest ? (
              <>
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
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Card className="p-6 bg-primary/5 border-2 border-primary max-w-xl mx-auto">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 justify-center">
                          <UserPlus className="w-6 h-6" />
                          <h3 className="text-lg font-semibold">Want enhanced features?</h3>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-600">Create an account to get:</p>
                          <ul className="space-y-2 text-left">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>Access to your electricity consumption data</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>See how recommendations change over time</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>Stay updated with new product features</span>
                            </li>
                          </ul>
                          <Button asChild className="w-full" size="lg">
                            <Link to="/register">Create an Account</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </>
            ) : (
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
                  <Button asChild className="w-full">
                    <Link to="/account">
                      Track your application in your dashboard
                    </Link>
                  </Button>
                  <p className="text-sm text-center mt-2 text-muted-foreground">
                    Log in to your account anytime to check your application status and view your data
                  </p>
                </div>
              </div>
            )}

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
        className="px-4 sm:px-4 [&>div]:w-full [&>div>div]:w-full [&_button]:w-full sm:[&_button]:w-auto"
      />
    </div>
  );
};

export default ThankYou;

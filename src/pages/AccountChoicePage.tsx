
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, CheckCircle2 } from "lucide-react";

const AccountChoicePage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/personal-details', { state: { accountType: 'account' } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Create your SmartShift account</h1>
              <p className="text-gray-500 mt-2">Unlock personalized energy insights and recommendations</p>
            </div>

            <Card className="border-2 border-primary hover:border-primary/80 transition-colors bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Create Your Account
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Get enhanced features and personalized insights</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Access your electricity consumption data</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>See how recommendations change over time</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Stay updated with new product features</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={handleContinue}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <AddressFooter 
        hideBack={true}
        hideContinue={true}
        onContinue={() => {}} 
      />
    </div>
  );
};

export default AccountChoicePage;

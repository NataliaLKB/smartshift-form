
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { PersonalDetailsForm } from '@/components/personal/PersonalDetailsForm';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PersonalDetails = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"guest" | "account">("guest");

  const handleFormValidityChange = (isValid: boolean) => {
    setIsFormValid(isValid);
  };

  const handleContinue = () => {
    if (isFormValid) {
      if (activeTab === "account") {
        // If account tab is active, create account
        setIsLoading(true);
        // Simulate account creation
        setTimeout(() => {
          setIsLoading(false);
          toast({
            title: "Account created successfully",
            description: "Your account has been created and you're now logged in.",
          });
          navigate('/address');
        }, 1000);
      } else {
        // Continue as guest
        navigate('/address');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Step 1 of 6</p>
                <p className="text-xs text-gray-500">Basic information</p>
              </div>
              <Progress value={16.67} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">Tell us about yourself</h1>
              <p className="text-gray-500 mt-2">Please fill in your details below to get started</p>
            </div>

            <Tabs 
              defaultValue="guest" 
              value={activeTab} 
              onValueChange={(value) => setActiveTab(value as "guest" | "account")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="guest">Continue as Guest</TabsTrigger>
                <TabsTrigger value="account">Create an Account</TabsTrigger>
              </TabsList>
              <TabsContent value="guest">
                <Alert className="bg-[#F0F9F9] border-[#00CED1]/30 mb-6">
                  <Info className="h-5 w-5 text-[#00CED1]" />
                  <AlertTitle className="text-[#038B8D] font-medium">Important Information</AlertTitle>
                  <AlertDescription className="text-gray-700">
                    You need to be the bill holder (the person who pays for the electricity) to proceed with this assessment. We'll ask you to upload a copy of your bill later in the process.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardContent className="pt-6">
                    <PersonalDetailsForm onValidityChange={handleFormValidityChange} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="account">
                <Alert className="mb-6">
                  <Info className="h-5 w-5" />
                  <AlertTitle className="font-medium">Create an account</AlertTitle>
                  <AlertDescription>
                    Creating an account allows you to save your assessment results and access them later.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardContent className="pt-6">
                    <PersonalDetailsForm onValidityChange={handleFormValidityChange} createAccount />
                    <div className="mt-4 text-sm text-center text-gray-500">
                      Already have an account?{" "}
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-[#026466]"
                        onClick={() => navigate('/login')}
                      >
                        Sign in
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <AddressFooter
        hideBack={true}
        onContinue={handleContinue}
        isEnabled={isFormValid}
        buttonText={activeTab === "account" && isLoading ? "Creating account..." : "Continue"}
      />
    </div>
  );
};

export default PersonalDetails;

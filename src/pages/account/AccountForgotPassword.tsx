
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { AddressHeader } from '@/components/address/AddressHeader';

const AccountForgotPassword = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock password reset functionality
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Reset link sent",
        description: "If an account exists with that email, you will receive a password reset link.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending the reset link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9FA]">
      <AddressHeader />
      
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Reset your password
            </h1>
          </div>
          
          <Card>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Forgot Password</CardTitle>
                  <CardDescription>
                    Enter your email address and we'll send you a link to reset your password
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending reset link..." : "Send reset link"}
                  </Button>
                  
                  <div className="mt-4 text-center text-sm">
                    Remember your password?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-[#026466] hover:underline"
                    >
                      Back to login
                    </Link>
                  </div>
                </CardFooter>
              </form>
            ) : (
              <>
                <CardHeader>
                  <CardTitle>Check your email</CardTitle>
                  <CardDescription>
                    We've sent a password reset link to {email}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Click the link in the email to reset your password. If you don't see the email, check your spam folder.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Didn't receive an email? Check if the email address is correct or try again.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Try again
                  </Button>
                  
                  <div className="mt-4 text-center text-sm">
                    <Link
                      to="/login"
                      className="font-medium text-[#026466] hover:underline"
                    >
                      Back to login
                    </Link>
                  </div>
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountForgotPassword;

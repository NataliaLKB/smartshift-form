import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, UserPlus, CheckCircle2 } from "lucide-react";

interface AccountChoiceProps {
  onSelect: (choice: 'guest' | 'account') => void;
}

export const AccountChoice = ({ onSelect }: AccountChoiceProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="relative border-2 border-primary hover:border-primary/50 transition-colors cursor-pointer bg-primary/5"
            onClick={() => onSelect('account')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Create an Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Get enhanced features and detailed insights
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>Access detailed electricity consumption data</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>See how recommendations change over time</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>Stay updated with new product features</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>Use our online tool for detailed results</span>
            </li>
          </ul>
          <Button 
            className="w-full mt-6"
            onClick={() => onSelect('account')}
          >
            Create an Account
          </Button>
        </CardContent>
      </Card>

      <Card className="relative border-2 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => onSelect('guest')}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Continue as Guest
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Get your tariff recommendation without creating an account
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <span>Receive your tariff recommendation and updates about the process via email only</span>
            </li>
          </ul>
          <Button 
            variant="outline" 
            className="w-full mt-6"
            onClick={() => onSelect('guest')}
          >
            Continue as Guest
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};


import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalDetailsFormProps {
  onValidityChange?: (isValid: boolean) => void;
}

export const PersonalDetailsForm = ({ onValidityChange }: PersonalDetailsFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const isValid = firstName.trim() !== '' && 
                   lastName.trim() !== '' && 
                   email.trim() !== '' &&
                   email.includes('@');
    
    onValidityChange?.(isValid);
  }, [firstName, lastName, email, onValidityChange]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First name</Label>
        <Input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName">Last name</Label>
        <Input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
      </div>
    </div>
  );
};

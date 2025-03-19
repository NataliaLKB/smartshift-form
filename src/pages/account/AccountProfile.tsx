import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { CheckIcon, Loader2, PencilIcon } from 'lucide-react';
import { AddressForm } from '@/components/address/AddressForm';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';

const AccountProfile = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "07700 900123",
    address: "123 Main Street, London, SW1A 1AA",
    importMpan: "1200012345678",
    importSupplier: "EDF Energy",
    importTariff: "Standard Variable",
    exportMpan: "1200098765432",
    exportSupplier: "Octopus Energy",
    exportTariff: "Smart Export Guarantee",
    newsletter: "weekly",
    whatsappAlerts: true,
    productUpdates: true,
    marketingCommunication: false,
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const handleAddressValidityChange = (isValid: boolean) => {
    setIsAddressValid(isValid);
  };
  
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isEditingAddress) {
        setIsEditingAddress(false);
      }
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Update failed",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string, field: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };
  
  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure your new password and confirmation match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      
      toast({
        title: "Password updated",
        description: "Your password has been changed successfully.",
      });
    } catch (error) {
      toast({
        title: "Password update failed",
        description: "There was an error updating your password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
      
      <Tabs defaultValue="personal">
        <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="property">Property Details</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <form onSubmit={handleProfileUpdate}>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          <Card>
            <form onSubmit={handlePasswordChange}>
              <CardHeader>
                <CardTitle>Update Password</CardTitle>
                <CardDescription>
                  Change your account password
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current password</Label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={handlePasswordInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm new password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordInputChange}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Update password"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="property" className="space-y-6">
          <Card>
            <form onSubmit={handleProfileUpdate}>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
                <CardDescription>
                  Manage your address and meter information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-lg font-medium">Address</Label>
                    {!isEditingAddress && (
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => setIsEditingAddress(true)}
                      >
                        <PencilIcon className="h-4 w-4" />
                        Edit
                      </Button>
                    )}
                  </div>
                  
                  {isEditingAddress ? (
                    <div className="rounded-md border border-input bg-background p-4">
                      <AddressForm onValidityChange={handleAddressValidityChange} />
                    </div>
                  ) : (
                    <div className="rounded-md border border-input bg-background p-4">
                      <p className="text-sm">{profileData.address}</p>
                    </div>
                  )}
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Import Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="importMpan">MPAN number (Import)</Label>
                      <Input
                        id="importMpan"
                        name="importMpan"
                        value={profileData.importMpan}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="importSupplier">Import supplier</Label>
                      <Input
                        id="importSupplier"
                        name="importSupplier"
                        value={profileData.importSupplier}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="importTariff">Import tariff</Label>
                      <Input
                        id="importTariff"
                        name="importTariff"
                        value={profileData.importTariff}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Export Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="exportMpan">MPAN number (Export)</Label>
                      <Input
                        id="exportMpan"
                        name="exportMpan"
                        value={profileData.exportMpan}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="exportSupplier">Export supplier</Label>
                      <Input
                        id="exportSupplier"
                        name="exportSupplier"
                        value={profileData.exportSupplier}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="exportTariff">Export tariff</Label>
                      <Input
                        id="exportTariff"
                        name="exportTariff"
                        value={profileData.exportTariff}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  disabled={isLoading || (isEditingAddress && !isAddressValid)}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
                {isEditingAddress && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="ml-2"
                    onClick={() => setIsEditingAddress(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                )}
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="communication" className="space-y-6">
          <Card>
            <form onSubmit={handleProfileUpdate}>
              <CardHeader>
                <CardTitle>Communication Preferences</CardTitle>
                <CardDescription>
                  Manage how and when we contact you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-base">SmartThinking Newsletter</Label>
                  <RadioGroup 
                    defaultValue={profileData.newsletter}
                    onValueChange={(value) => handleRadioChange(value, 'newsletter')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Weekly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="no-newsletter" />
                      <Label htmlFor="no-newsletter">Don't send me newsletters</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-3 border-t pt-3">
                  <Label className="text-base">Agile Price Alerts (WhatsApp)</Label>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="whatsapp-alerts"
                      checked={profileData.whatsappAlerts}
                      onCheckedChange={(checked) => 
                        setProfileData(prev => ({
                          ...prev,
                          whatsappAlerts: checked
                        }))
                      }
                    />
                    <Label htmlFor="whatsapp-alerts">
                      Receive price alerts via WhatsApp
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground pl-10">
                    Get notified about significant changes in energy prices to optimize your usage.
                  </p>
                </div>
                
                <div className="space-y-3 border-t pt-3">
                  <Label className="text-base">Other notifications</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="productUpdates"
                        checked={profileData.productUpdates}
                        onCheckedChange={(checked) => 
                          setProfileData(prev => ({
                            ...prev,
                            productUpdates: checked as boolean
                          }))
                        }
                      />
                      <label 
                        htmlFor="productUpdates"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Product updates and announcements
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketingCommunication"
                        checked={profileData.marketingCommunication}
                        onCheckedChange={(checked) => 
                          setProfileData(prev => ({
                            ...prev,
                            marketingCommunication: checked as boolean
                          }))
                        }
                      />
                      <label 
                        htmlFor="marketingCommunication"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Marketing communications
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save preferences"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountProfile;

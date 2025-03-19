
import React from 'react';
import { StatusTracker } from '@/components/account/StatusTracker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Database, BarChart3, CheckCircle2, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AccountDashboard = () => {
  // Mock data for status tracker
  const analysisSteps = [
    {
      id: 1,
      title: "Bill Processing",
      description: "We're processing your uploaded bill to verify your identity.",
      status: "completed" as const,
    },
    {
      id: 2,
      title: "Data Access",
      description: "We're securely accessing your smart meter data.",
      status: "current" as const,
      estimatedTime: "24-48 hours",
    },
    {
      id: 3,
      title: "Data Quality Check",
      description: "We'll verify your data is complete and suitable for analysis.",
      status: "upcoming" as const,
      estimatedTime: "12 hours",
    },
    {
      id: 4,
      title: "Analysis & Results",
      description: "We'll analyze your usage patterns and send you detailed recommendations.",
      status: "upcoming" as const,
      estimatedTime: "24 hours",
    },
  ];

  // Mock account data
  const accountData = {
    name: "John Smith",
    email: "john.smith@example.com",
    tariff: "Standard Variable",
    supplier: "EDF Energy",
    smartMeterStatus: "Connected",
    applicationDate: "15 May 2023",
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Track your tariff analysis progress and manage your account
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <StatusTracker 
            steps={analysisSteps} 
            currentStep={2} 
          />
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Account Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Name:</dt>
                  <dd className="font-medium">{accountData.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Email:</dt>
                  <dd className="font-medium">{accountData.email}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Current Tariff:</dt>
                  <dd className="font-medium">{accountData.tariff}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Supplier:</dt>
                  <dd className="font-medium">{accountData.supplier}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Smart Meter:</dt>
                  <dd className="font-medium text-green-600">{accountData.smartMeterStatus}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Application Date:</dt>
                  <dd className="font-medium">{accountData.applicationDate}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-primary/10">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Info className="w-4 h-4 mr-2 text-primary" />
                <CardTitle className="text-base">What's Next?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We're currently accessing your smart meter data. This process usually takes 24-48 hours. 
                Once complete, we'll move to the next step of verifying your data quality.
              </p>
              <p className="text-sm mt-2">
                You'll receive an email update when we move to the next stage.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Placeholder for future energy visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Energy Data</CardTitle>
          <CardDescription>
            Your energy consumption data will appear here once processing is complete.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center bg-gray-50 rounded">
          <div className="text-center text-muted-foreground">
            <BarChart3 className="mx-auto h-12 w-12 opacity-20" />
            <p className="mt-2">Smart meter data visualization coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountDashboard;

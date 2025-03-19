
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Database, BarChart3, Info } from 'lucide-react';
import { EnergyChart } from '@/components/account/EnergyChart';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AccountDashboard = () => {
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
          View your energy usage and manage your account
        </p>
      </div>
      
      {/* Energy Chart - Now displayed first */}
      <EnergyChart isDataAvailable={true} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Tariff Analysis</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link to="/account/analysis">View Full Analysis</Link>
                </Button>
              </div>
              <CardDescription>
                Your personalized tariff analysis is in progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Data Access in Progress</h4>
                  <p className="text-sm text-muted-foreground">
                    We're accessing your smart meter data. Estimated completion in 24-48 hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;

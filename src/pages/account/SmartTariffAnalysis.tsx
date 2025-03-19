
import React from 'react';
import { StatusTracker } from '@/components/account/StatusTracker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

const SmartTariffAnalysis = () => {
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
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Smart Tariff Analysis</h1>
        <p className="text-muted-foreground">
          Track the progress of your personalized tariff analysis
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
      
      <Card>
        <CardHeader>
          <CardTitle>About Your Analysis</CardTitle>
          <CardDescription>
            Understanding the tariff analysis process
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our Smart Tariff Analysis uses your actual electricity usage patterns from your smart meter 
            to find tariffs that could save you money based on when and how you use electricity.
          </p>
          <p>
            Once complete, you'll receive personalized recommendations that could save you up to 50% 
            on your electricity costs by matching your usage patterns with the most cost-effective tariffs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartTariffAnalysis;

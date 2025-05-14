import React, { useState } from 'react';
import { StatusTracker } from '@/components/account/StatusTracker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Info, Zap, Clock, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { TariffCard } from '@/components/account/TariffCard';

const SmartTariffAnalysis = () => {
  const [showResults, setShowResults] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false); // Collapsed by default

  // Mock data for status tracker
  const analysisSteps = [{
    id: 1,
    title: "Bill Processing",
    description: "We're processing your uploaded bill to verify your identity.",
    status: "completed" as const
  }, {
    id: 2,
    title: "Data Access",
    description: "We're securely accessing your smart meter data.",
    status: "completed" as const,
    estimatedTime: "24-48 hours"
  }, {
    id: 3,
    title: "Data Quality Check",
    description: "We'll verify your data is complete and suitable for analysis.",
    status: "completed" as const,
    estimatedTime: "12 hours"
  }, {
    id: 4,
    title: "Analysis & Results",
    description: "We'll analyze your usage patterns and send you detailed recommendations.",
    status: showResults ? "completed" as const : "current" as const,
    estimatedTime: "24 hours"
  }];

  // Mock data for recommended tariffs
  const recommendedTariffs = [{
    id: 1,
    name: "EcoSmart Time of Use",
    supplier: "Green Energy Co",
    savingsPerYear: 247,
    highlights: "Perfect for your evening usage pattern"
  }, {
    id: 2,
    name: "FlexiPower Plus",
    supplier: "PowerSwitch Ltd",
    savingsPerYear: 203,
    highlights: "Great off-peak rates on weekends"
  }, {
    id: 3,
    name: "Economy 24/7",
    supplier: "Value Energy",
    savingsPerYear: 178,
    highlights: "Consistent rates with no surprises"
  }];
  
  const handleToggleChange = () => {
    setShowResults(!showResults);
    if (!showResults) {
      toast({
        title: "Results view enabled",
        description: "Showing your recommended tariffs based on analysis"
      });
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Smart tariff analysis</h1>
          <p className="text-muted-foreground">
            {showResults ? "See the best smart tariffs for your home based on your actual electricity usage patterns and home profile" : "Track the progress of your personalized tariff analysis"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show results</span>
          <Switch checked={showResults} onCheckedChange={handleToggleChange} />
        </div>
      </div>
      
      {showResults && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-green-800">Analysis Complete!</h3>
            </div>
            <p className="text-sm">
              Based on your smart meter data, we've found these tariffs that could save you money.
              The recommendations are personalized to your actual usage patterns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedTariffs.map((tariff, index) => (
              <TariffCard 
                key={tariff.id}
                {...tariff}
                isTopMatch={index === 0}
              />
            ))}
          </div>
        </div>
      )}
      
      {showResults ? (
        <Collapsible open={isStatusOpen} onOpenChange={setIsStatusOpen} className="border rounded-lg bg-white shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Analysis Status: 100% Complete</h3>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                {isStatusOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 pt-0">
              <div className="md:col-span-2">
                <StatusTracker steps={analysisSteps} currentStep={showResults ? 4 : 2} />
              </div>
              
              <div className="space-y-6">
                <Card className="bg-primary/10 border-primary/10">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <Info className="w-4 h-4 mr-2 text-primary" />
                      <CardTitle className="text-base">Analysis Complete!</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Your tariff analysis is complete! We've found three tariffs that could save you money based on your usage patterns.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <StatusTracker steps={analysisSteps} currentStep={showResults ? 4 : 2} />
          </div>
          
          <div className="space-y-6">
            <Card className="bg-primary/5 border-primary/10">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Info className="w-4 h-4 mr-2 text-primary" />
                  <CardTitle className="text-base">What's next?</CardTitle>
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
      )}
      
      <Card>
        <CardHeader>
          <CardTitle>About your analysis</CardTitle>
          <CardDescription>
            Understanding the tariff analysis process
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our Smart Tariff Analysis uses your actual electricity usage patterns from your smart meter 
            to find tariffs that could save you money based on when and how you use electricity.
          </p>
          <p>Once complete, you'll receive personalised recommendations that could save you up to 50% on your electricity costs by matching your usage patterns with the most cost-effective tariffs.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartTariffAnalysis;

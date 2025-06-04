
import React, { useState } from 'react';
import { StatusTracker } from '@/components/account/StatusTracker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Info, Zap, Clock, Sparkles, ChevronDown, ChevronUp, Upload } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { TariffCard } from '@/components/account/TariffCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SmartTariffAnalysis = () => {
  const [showResults, setShowResults] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState('stage4'); // Default to current stage

  // Different stages of the analysis process
  const getAnalysisSteps = (stage: string) => {
    const baseSteps = [
      {
        id: 1,
        title: "Bill Processing",
        description: "We're processing your uploaded bill to verify your identity.",
        status: "upcoming" as const
      },
      {
        id: 2,
        title: "Data Access",
        description: "We're securely accessing your smart meter data.",
        status: "upcoming" as const,
        estimatedTime: "24-48 hours"
      },
      {
        id: 3,
        title: "Data Quality Check",
        description: "We'll verify your data is complete and suitable for analysis.",
        status: "upcoming" as const,
        estimatedTime: "12 hours"
      },
      {
        id: 4,
        title: "Analysis & Results",
        description: "We'll analyze your usage patterns and send you detailed recommendations.",
        status: "upcoming" as const,
        estimatedTime: "24 hours"
      }
    ];

    switch (stage) {
      case 'stage1':
        return baseSteps.map((step, index) => ({
          ...step,
          status: index === 0 ? "current" as const : "upcoming" as const
        }));
      case 'stage2':
        return baseSteps.map((step, index) => ({
          ...step,
          status: index === 0 ? "completed" as const : 
                 index === 1 ? "current" as const : "upcoming" as const
        }));
      case 'stage3':
        return baseSteps.map((step, index) => ({
          ...step,
          status: index <= 1 ? "completed" as const : 
                 index === 2 ? "current" as const : "upcoming" as const
        }));
      case 'stage4':
        return baseSteps.map((step, index) => ({
          ...step,
          status: index <= 2 ? "completed" as const : 
                 index === 3 ? (showResults ? "completed" as const : "current" as const) : "upcoming" as const
        }));
      default:
        return baseSteps;
    }
  };

  const analysisSteps = getAnalysisSteps(selectedStage);

  // Mock data for recommended tariffs
  const recommendedTariffs = [{
    id: 1,
    name: "EcoSmart Time of Use",
    supplier: "Green Energy Co", // Maps to Octopus Energy logo, will display as "Octopus Energy"
    savingsPerYear: 247,
    highlights: "Perfect for your evening usage pattern"
  }, {
    id: 2,
    name: "FlexiPower Plus",
    supplier: "PowerSwitch Ltd", // Maps to E.ON logo, will display as "E.ON Next"
    savingsPerYear: 203,
    highlights: "Great off-peak rates on weekends"
  }, {
    id: 3,
    name: "Economy 24/7",
    supplier: "Value Energy", // Maps to OVO logo, will display as "OVO Energy"
    savingsPerYear: 178,
    highlights: "Consistent rates with no surprises"
  }];

  const getStageInfo = (stage: string) => {
    switch (stage) {
      case 'stage1':
        return {
          title: "Processing Your Bill",
          description: "We're verifying your identity using the bill you uploaded.",
          canShowResults: false
        };
      case 'stage2':
        return {
          title: "Accessing Smart Meter Data",
          description: "We're securely connecting to your smart meter to retrieve your usage data.",
          canShowResults: false
        };
      case 'stage3':
        return {
          title: "Checking Data Quality",
          description: "We're ensuring your data is complete and suitable for accurate analysis.",
          canShowResults: false
        };
      case 'stage4':
        return {
          title: "Analysis Complete",
          description: "See the best smart tariffs for your home based on your actual electricity usage patterns and home profile",
          canShowResults: true
        };
      default:
        return {
          title: "Smart tariff analysis",
          description: "Track the progress of your personalised tariff analysis",
          canShowResults: false
        };
    }
  };

  const stageInfo = getStageInfo(selectedStage);
  
  const handleToggleChange = () => {
    if (stageInfo.canShowResults) {
      setShowResults(!showResults);
      if (!showResults) {
        toast({
          title: "Results view enabled",
          description: "Showing your recommended tariffs based on analysis"
        });
      }
    }
  };

  const getInfoCardContent = (stage: string) => {
    switch (stage) {
      case 'stage1':
        return {
          title: "Bill Processing in Progress",
          content: "We're currently processing your uploaded bill to verify your identity. This usually takes a few minutes. Once complete, we'll move to the next step of accessing your smart meter data."
        };
      case 'stage2':
        return {
          title: "What's next?",
          content: "We're currently accessing your smart meter data. This process usually takes 24-48 hours. Once complete, we'll move to the next step of verifying your data quality."
        };
      case 'stage3':
        return {
          title: "Final Steps",
          content: "We're checking the quality and completeness of your smart meter data. This ensures we can provide accurate tariff recommendations. This step typically takes 12 hours."
        };
      case 'stage4':
        return {
          title: "Analysis Complete!",
          content: "Your tariff analysis is complete! We've found three tariffs that could save you money based on your usage patterns."
        };
      default:
        return {
          title: "What's next?",
          content: "We're currently accessing your smart meter data. This process usually takes 24-48 hours. Once complete, we'll move to the next step of verifying your data quality."
        };
    }
  };

  const infoCard = getInfoCardContent(selectedStage);
  
  return (
    <div className="space-y-6">
      {/* Demo Stage Selector */}
      <Card className="bg-amber-50 border-amber-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="h-4 w-4 text-amber-600" />
            Demo: View Different Analysis Stages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Select stage to preview:</span>
            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stage1">Stage 1: Bill Processing</SelectItem>
                <SelectItem value="stage2">Stage 2: Data Access</SelectItem>
                <SelectItem value="stage3">Stage 3: Data Quality Check</SelectItem>
                <SelectItem value="stage4">Stage 4: Analysis Complete</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Smart tariff analysis</h1>
          <p className="text-muted-foreground">
            {showResults && stageInfo.canShowResults ? stageInfo.description : `Track the progress of your personalised tariff analysis`}
          </p>
        </div>
        {stageInfo.canShowResults && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Show results</span>
            <Switch checked={showResults} onCheckedChange={handleToggleChange} />
          </div>
        )}
      </div>
      
      {showResults && stageInfo.canShowResults && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-green-800">Analysis Complete!</h3>
            </div>
            <p className="text-sm">
              Based on your smart meter data, we've found these tariffs that could save you money.
              The recommendations are personalised to your actual usage patterns.
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
      
      {showResults && stageInfo.canShowResults ? (
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
                <StatusTracker steps={analysisSteps} currentStep={4} />
              </div>
              
              <div className="space-y-6">
                <Card className="bg-primary/10 border-primary/10">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <Info className="w-4 h-4 mr-2 text-primary" />
                      <CardTitle className="text-base">{infoCard.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      {infoCard.content}
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
            <StatusTracker steps={analysisSteps} currentStep={parseInt(selectedStage.replace('stage', ''))} />
          </div>
          
          <div className="space-y-6">
            <Card className="bg-primary/5 border-primary/10">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Info className="w-4 h-4 mr-2 text-primary" />
                  <CardTitle className="text-base">{infoCard.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {infoCard.content}
                </p>
                {selectedStage !== 'stage4' && (
                  <p className="text-sm mt-2">
                    You'll receive an email update when we move to the next stage.
                  </p>
                )}
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

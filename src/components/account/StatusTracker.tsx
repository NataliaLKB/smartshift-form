
import React from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type ProcessStep = {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  estimatedTime?: string;
};

interface StatusTrackerProps {
  steps: ProcessStep[];
  currentStep: number;
}

export const StatusTracker = ({ steps, currentStep }: StatusTrackerProps) => {
  const calculateProgress = () => {
    const totalSteps = steps.length;
    const completedSteps = steps.filter(step => step.status === 'completed').length;
    // Add partial credit for the current step
    const currentStepValue = steps.some(step => step.status === 'current') ? 0.5 : 0;
    
    return Math.floor((completedSteps + currentStepValue) / totalSteps * 100);
  };
  
  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Analysis Status</h3>
        <div className="text-sm text-muted-foreground">
          {calculateProgress()}% Complete
        </div>
      </div>
      
      <Progress value={calculateProgress()} className="mb-6" />
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <div className="flex">
              <div className="mr-4 flex items-start">
                <div 
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                    step.status === 'completed' ? "bg-primary" : 
                    step.status === 'current' ? "bg-primary/20 border-2 border-primary" : 
                    "bg-gray-100 border-2 border-gray-200"
                  )}
                >
                  {step.status === 'completed' ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : step.status === 'current' ? (
                    <Clock className="h-4 w-4 text-primary" />
                  ) : (
                    <span className="text-sm text-gray-400">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "w-0.5 h-16 ml-3.5 -mb-2",
                    step.status === 'completed' ? "bg-primary" : "bg-gray-200"
                  )} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={cn(
                    "font-medium",
                    step.status === 'completed' ? "text-primary" : 
                    step.status === 'current' ? "text-gray-900" : 
                    "text-gray-500"
                  )}>
                    {step.title}
                  </h4>
                  {step.estimatedTime && (
                    <span className="text-xs text-muted-foreground">
                      {step.status === 'current' ? "Est. " + step.estimatedTime : 
                      step.status === 'upcoming' ? "Est. " + step.estimatedTime : ""}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

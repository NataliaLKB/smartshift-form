
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, ChevronRight, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface TariffCardProps {
  id: number;
  name: string;
  supplier: string;
  savingsPerYear: number;
  matchScore: number;
  highlights: string;
  isTopMatch?: boolean;
}

export const TariffCard = ({
  id,
  name,
  supplier,
  savingsPerYear,
  matchScore,
  highlights,
  isTopMatch = false,
}: TariffCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all hover:shadow-md",
        isTopMatch ? "border-primary border-2" : "border"
      )}
    >
      {isTopMatch && (
        <div className="bg-primary text-primary-foreground py-1 px-4 text-sm font-medium text-center">
          Best Match
        </div>
      )}
      
      <CardHeader className={cn("pb-4", isTopMatch ? "bg-primary/5" : "bg-gray-50")}>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              {isTopMatch && <Sparkles className="h-5 w-5 text-primary" />}
              {name}
            </CardTitle>
            <CardDescription className="text-sm">{supplier}</CardDescription>
          </div>
          <div className="rounded-full bg-green-50 border border-green-100 px-3 py-2 text-right">
            <div className="text-lg font-bold text-green-600">£{savingsPerYear}</div>
            <div className="text-xs text-green-700">annual savings</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 rounded-full p-1.5">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium">{highlights}</span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Match Score</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p className="text-xs">How well this tariff matches your usage pattern</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span className="text-sm font-semibold">{matchScore}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={cn(
                "h-2 rounded-full",
                matchScore >= 90 ? "bg-green-500" : 
                matchScore >= 80 ? "bg-yellow-500" : "bg-orange-500"
              )}
              style={{ width: `${matchScore}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        <Button variant="outline" size="sm" className="w-full group hover:bg-primary hover:text-white">
          View Details
          <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

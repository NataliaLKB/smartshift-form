import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, ChevronRight, Percent } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

export interface TariffCardProps {
  id: number;
  name: string;
  supplier: string;
  savingsPerYear: number;
  highlights: string;
  isTopMatch?: boolean;
}

// Function to map supplier names to their logo images
const getSupplierLogo = (supplier: string): string => {
  const supplierMap: Record<string, string> = {
    "Green Energy Co": "/lovable-uploads/58aedc68-0e5b-4bb8-b0fa-789a551767b5.png",
    // Octopus Energy
    "PowerSwitch Ltd": "/lovable-uploads/cc92ed68-f250-4f0d-82ac-a041486c0b59.png",
    // E.ON
    "Value Energy": "/lovable-uploads/d3ab1789-e63b-444b-a0aa-c1f1d90e263e.png" // OVO
  };
  return supplierMap[supplier] || "";
};

export const TariffCard = ({
  id,
  name,
  supplier,
  savingsPerYear,
  highlights,
  isTopMatch = false
}: TariffCardProps) => {
  const logoUrl = getSupplierLogo(supplier);
  const isMobile = useIsMobile();
  
  // Display appropriate names for suppliers
  const displaySupplierName = supplier === "Value Energy" ? "OVO Energy" : supplier === "PowerSwitch Ltd" ? "E.ON Next" : supplier === "Green Energy Co" ? "Octopus Energy" : supplier;

  // Calculate percentage savings compared to price cap
  // Assuming an average annual bill of £1800 under the price cap
  const priceCap = 1800;
  const percentageSaving = Math.round(savingsPerYear / priceCap * 100);

  // Check if we're on tablet (not mobile but smaller than desktop)
  const isTablet = !isMobile && window.innerWidth < 1024;

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", 
      isTopMatch ? "border-primary border-2" : "border mt-6")}> {/* Add top margin to non-top match cards */}
      {isTopMatch && (
        <div className="bg-primary text-primary-foreground py-1 px-4 text-sm font-medium text-center">
          Cheapest Option
        </div>
      )}
      
      {/* Tablet-specific savings banner */}
      {isTablet && (
        <div className="bg-green-50 border-b border-green-100 px-4 py-3">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">£{savingsPerYear}</div>
            <div className="text-xs text-green-700">annual savings</div>
          </div>
        </div>
      )}
      
      <CardHeader className={cn("pb-4", isTopMatch ? "bg-primary/5" : "bg-gray-50")}>
        {/* Logo and supplier name section in a horizontal layout */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {logoUrl && (
              <div className="h-10 w-auto flex-shrink-0">
                <img src={logoUrl} alt={`${displaySupplierName} logo`} className="h-full w-auto object-contain" />
              </div>
            )}
            <CardDescription className="text-sm font-medium">{displaySupplierName}</CardDescription>
          </div>
          
          {/* Moved savings display to top right - hidden on tablet */}
          {!isTablet && (
            <div className="rounded-full bg-green-50 border border-green-100 px-3 py-2 text-right">
              <div className="text-lg font-bold text-green-600">£{savingsPerYear}</div>
              <div className="text-xs text-green-700">annual savings</div>
            </div>
          )}
        </div>
        
        <div className="mt-2">
          <CardTitle className="text-xl flex items-center gap-2">
            {name}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4 space-y-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 rounded-full p-1.5 flex-shrink-0">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm">{highlights}</span>
        </div>
        
        {/* New section for percentage saving compared to price cap */}
        <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
          <div className="bg-green-50 rounded-full p-1.5 flex-shrink-0">
            <Percent className="h-4 w-4 text-green-600" />
          </div>
          <span className="text-sm">
            <span className="font-medium text-green-600">{percentageSaving}%</span> cheaper than the energy price cap
          </span>
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

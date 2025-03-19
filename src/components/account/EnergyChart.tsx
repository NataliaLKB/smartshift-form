
import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

// This is a placeholder component that will be implemented in the future
// It demonstrates how the energy visualization will look

// Mock data for chart
const generateMockData = () => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  return months.map((month, index) => {
    // Creating seasonal patterns
    let usage = 0;
    if (index < 2 || index > 9) { // Winter months
      usage = Math.floor(Math.random() * (400 - 300) + 300);
    } else if (index > 4 && index < 9) { // Summer months
      usage = Math.floor(Math.random() * (200 - 100) + 100);
    } else { // Spring/Fall
      usage = Math.floor(Math.random() * (300 - 200) + 200);
    }
    
    return {
      month,
      usage,
      cost: (usage * 0.28).toFixed(2), // Mock cost calculation
    };
  });
};

const mockMonthlyData = generateMockData();

interface EnergyChartProps {
  isDataAvailable?: boolean;
}

export const EnergyChart = ({ isDataAvailable = false }: EnergyChartProps) => {
  const [viewMode, setViewMode] = useState('usage');
  
  // This component will just show a placeholder for now
  if (!isDataAvailable) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Energy Consumption</CardTitle>
          <CardDescription>
            Your energy usage data will appear here once we complete analyzing your smart meter data.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center bg-gray-50 rounded">
          <div className="text-center text-muted-foreground">
            <p>Smart meter data visualization coming soon</p>
            <p className="text-sm mt-2">
              We'll show your electricity usage patterns once your data is processed.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle>Energy Consumption</CardTitle>
            <CardDescription>
              Your electricity usage over the past 12 months
            </CardDescription>
          </div>
          
          <Tabs 
            value={viewMode} 
            onValueChange={setViewMode}
            className="w-full sm:w-auto"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="usage">Usage (kWh)</TabsTrigger>
              <TabsTrigger value="cost">Cost (£)</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ChartContainer
            config={{
              usage: { color: "#038B8D", label: "Usage" },
              cost: { color: "#FF980E", label: "Cost" },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mockMonthlyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  domain={viewMode === 'usage' ? [0, 500] : [0, 150]}
                  tickFormatter={value => 
                    viewMode === 'usage' 
                      ? `${value}`
                      : `£${value}`
                  }
                />
                <ChartTooltip
                  content={({active, payload, label}) => {
                    if (!active || !payload?.length) return null;
                    
                    return (
                      <ChartTooltipContent
                        active={active}
                        payload={payload}
                        label={label}
                      />
                    );
                  }}
                />
                <Legend />
                {viewMode === 'usage' ? (
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="#038B8D" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="kWh"
                  />
                ) : (
                  <Line 
                    type="monotone" 
                    dataKey="cost" 
                    stroke="#FF980E" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="£"
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

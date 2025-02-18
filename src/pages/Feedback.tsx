
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Feedback = () => {
  const navigate = useNavigate();
  const [source, setSource] = useState<string>("");
  const [otherSource, setOtherSource] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const sources = [
    { value: "search", label: "Search Engine (Google, Bing, etc.)" },
    { value: "social", label: "Social Media" },
    { value: "friend", label: "Friend or Family" },
    { value: "advert", label: "Advertisement" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-1">Step 6 of 6</p>
            <h1 className="text-2xl font-bold">Almost there!</h1>
            <p className="text-gray-500 mt-2">Help us understand how you found us</p>
          </div>

          <div className="space-y-6">
            <Progress value={100} className="h-0.5" />
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-gray-900">How did you hear about us?</Label>
                  <RadioGroup value={source} onValueChange={setSource} className="gap-3">
                    {sources.map((item) => (
                      <div key={item.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={item.value} id={item.value} />
                        <Label htmlFor={item.value} className="font-normal">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  {source === "other" && (
                    <div className="mt-3">
                      <Input
                        type="text"
                        value={otherSource}
                        onChange={(e) => setOtherSource(e.target.value)}
                        placeholder="Please specify"
                        className="max-w-md"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={newsletter}
                    onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="newsletter" className="font-normal">
                      Subscribe to our newsletter
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Stay updated with our latest news, tips and exclusive offers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/tariff')}
        onContinue={() => {
          console.log('Completing signup:', {
            source: source === 'other' ? otherSource : source,
            newsletter
          });
        }}
        isEnabled={source !== '' && (source !== 'other' || otherSource.trim() !== '')}
      />
    </div>
  );
};

export default Feedback;

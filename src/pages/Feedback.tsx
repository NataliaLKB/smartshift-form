
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from '@/lib/utils';

const Feedback = () => {
  const navigate = useNavigate();
  const [source, setSource] = useState<string>("");
  const [otherSource, setOtherSource] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const sources = [
    { value: "google", label: "Google search" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "facebook", label: "Facebook" },
    { value: "instagram", label: "Instagram" },
    { value: "friend", label: "Friends or family" },
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
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">How did you hear about us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sources.slice(0, -1).map((item) => (
                    <Button
                      key={item.value}
                      variant="outline"
                      className={cn(
                        "w-full justify-start py-3 px-4 bg-white text-center",
                        source === item.value && "border-primary bg-primary/5"
                      )}
                      onClick={() => setSource(item.value)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm mx-auto">{item.label}</span>
                        {source === item.value && (
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-2">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                fill="white"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </Button>
                  ))}
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start py-3 px-4 bg-white text-center",
                        source === "other" && "border-primary bg-primary/5"
                      )}
                      onClick={() => setSource("other")}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm mx-auto">Other</span>
                        {source === "other" && (
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-2">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                fill="white"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </Button>
                    {source === "other" && (
                      <Input
                        type="text"
                        value={otherSource}
                        onChange={(e) => setOtherSource(e.target.value)}
                        placeholder="Please specify"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Stay connected</h2>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={newsletter}
                      onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="newsletter" className="font-normal">
                        Subscribe to our Smart Thinking newsletter
                      </Label>
                    </div>
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
        buttonText="Finish"
      />
    </div>
  );
};

export default Feedback;

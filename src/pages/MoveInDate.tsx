
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const MoveInDate = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const isValid = date !== undefined && file !== null;

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-1">Step 4 of 6</p>
            <h1 className="text-2xl font-bold">When did you move in?</h1>
            <p className="text-gray-500 mt-2">Please provide your move-in date and a recent electricity bill.</p>
          </div>

          <div className="space-y-6">
            <Progress value={66} className="h-0.5" />
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Move-in date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full md:w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "mm/dd/yyyy"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Upload a recent electricity bill</Label>
                <div
                  className={cn(
                    "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                    isDragging ? "border-primary bg-primary/5" : "border-gray-200",
                    file && "border-primary bg-primary/5"
                  )}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileChange}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-full bg-gray-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L12 8M12 8L15 11M12 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    {file ? (
                      <p className="text-sm">{file.name}</p>
                    ) : (
                      <>
                        <p>Drag and drop your file here, or</p>
                        <p className="text-primary underline">browse files</p>
                        <p className="text-sm text-gray-500">Supported formats: PDF, JPG, PNG (max 10MB)</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/devices')}
        onContinue={() => console.log('Continue with:', { date, file })}
        isEnabled={isValid}
      />
    </div>
  );
};

export default MoveInDate;

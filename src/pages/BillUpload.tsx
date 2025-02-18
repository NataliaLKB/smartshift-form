
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { format, parse } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BillUpload = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [inputValue, setInputValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDateInput = (value: string) => {
    setInputValue(value);
    try {
      const parsedDate = parse(value, 'dd/MM/yyyy', new Date());
      if (!isNaN(parsedDate.getTime())) {
        setDate(parsedDate);
      }
    } catch (error) {
      // Invalid date format, do nothing
    }
  };

  const handleCalendarSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    if (newDate) {
      setInputValue(format(newDate, 'dd/MM/yyyy'));
    }
  };

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
            <p className="text-gray-500 mt-2">Please provide your move-in date and recent bill</p>
          </div>

          <div className="space-y-6">
            <Progress value={66} className="h-0.5" />
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Move-in date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Input
                        type="text"
                        value={inputValue}
                        onChange={(e) => handleDateInput(e.target.value)}
                        placeholder="DD/MM/YYYY"
                        className="pr-10"
                      />
                      <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleCalendarSelect}
                      initialFocus
                      captionLayout="dropdown-buttons"
                      fromYear={1990}
                      toYear={2024}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Upload your recent bill</Label>
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
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                  />
                  {file ? (
                    <div className="flex items-center justify-center gap-2">
                      <CalendarIcon className="h-6 w-6 text-gray-400" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <CalendarIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <p>Drop your file here, or <span className="text-primary">browse</span></p>
                        <p className="text-sm text-gray-500 mt-1">Supports PDF, JPG, PNG</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/devices')}
        onContinue={() => navigate('/tariff')}
        isEnabled={isValid}
      />
    </div>
  );
};

export default BillUpload;

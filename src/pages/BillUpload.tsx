
import React, { useState } from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { Progress } from '@/components/ui/progress';
import { useNavigate, useLocation } from 'react-router-dom';
import { format, parse } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, FileIcon, Files } from "lucide-react";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface LocationState {
  assessmentType: 'import-only' | 'import-export';
}

const BillUpload = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { assessmentType } = (location.state as LocationState) || { assessmentType: 'import-only' };
  
  const [date, setDate] = useState<Date>();
  const [inputValue, setInputValue] = useState("");
  const [importFile, setImportFile] = useState<File | null>(null);
  const [exportFile, setExportFile] = useState<File | null>(null);
  const [isDraggingImport, setIsDraggingImport] = useState(false);
  const [isDraggingExport, setIsDraggingExport] = useState(false);
  const [billType, setBillType] = useState<'combined' | 'separate'>('combined');

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'import' | 'export') => {
    if (event.target.files && event.target.files[0]) {
      if (type === 'import') {
        setImportFile(event.target.files[0]);
      } else {
        setExportFile(event.target.files[0]);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent, type: 'import' | 'export') => {
    e.preventDefault();
    if (type === 'import') {
      setIsDraggingImport(true);
    } else {
      setIsDraggingExport(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent, type: 'import' | 'export') => {
    e.preventDefault();
    if (type === 'import') {
      setIsDraggingImport(false);
    } else {
      setIsDraggingExport(false);
    }
  };

  const handleDrop = (e: React.DragEvent, type: 'import' | 'export') => {
    e.preventDefault();
    if (type === 'import') {
      setIsDraggingImport(false);
    } else {
      setIsDraggingExport(false);
    }
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (type === 'import') {
        setImportFile(e.dataTransfer.files[0]);
      } else {
        setExportFile(e.dataTransfer.files[0]);
      }
    }
  };

  const handleBillTypeChange = (value: 'combined' | 'separate') => {
    setBillType(value);
    if (value === 'combined') {
      setExportFile(null);
    }
  };

  const isValid = date !== undefined && importFile !== null && 
                (assessmentType === 'import-only' || 
                (assessmentType === 'import-export' && 
                    (billType === 'combined' || (billType === 'separate' && exportFile !== null))));

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Step 4 of 6</p>
                <p className="text-xs text-gray-500">Bill upload</p>
              </div>
              <Progress value={66} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">When did you move in?</h1>
              <p className="text-gray-500 mt-2">Enter your move-in date and upload a recent energy bill for accurate assessment</p>
            </div>

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

              {assessmentType === 'import-export' && (
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg space-y-4">
                  <p className="text-sm text-blue-700 font-medium">How are your import and export details billed?</p>
                  
                  <RadioGroup 
                    value={billType} 
                    onValueChange={(value) => handleBillTypeChange(value as 'combined' | 'separate')}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className={cn(
                      "relative flex items-center space-x-2 rounded-md border p-4 cursor-pointer transition-colors",
                      billType === 'combined' ? "border-primary bg-primary/5" : "border-gray-200"
                    )}>
                      <RadioGroupItem value="combined" id="combined" />
                      <div className="flex flex-1 items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileIcon className="h-5 w-5 text-blue-600" />
                          <Label htmlFor="combined" className="cursor-pointer">
                            <span className="font-medium">Single Bill</span>
                            <p className="text-sm text-gray-500">My import and export details are on the same bill</p>
                          </Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className={cn(
                      "relative flex items-center space-x-2 rounded-md border p-4 cursor-pointer transition-colors",
                      billType === 'separate' ? "border-primary bg-primary/5" : "border-gray-200"
                    )}>
                      <RadioGroupItem value="separate" id="separate" />
                      <div className="flex flex-1 items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Files className="h-5 w-5 text-blue-600" />
                          <Label htmlFor="separate" className="cursor-pointer">
                            <span className="font-medium">Separate Bills</span>
                            <p className="text-sm text-gray-500">I have separate bills for import and export</p>
                          </Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div className="space-y-2">
                <Label>Upload your {assessmentType === 'import-export' ? 'import' : 'electricity'} bill</Label>
                <div
                  className={cn(
                    "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                    isDraggingImport ? "border-primary bg-primary/5" : "border-gray-200",
                    importFile && "border-primary bg-primary/5"
                  )}
                  onDragOver={(e) => handleDragOver(e, 'import')}
                  onDragLeave={(e) => handleDragLeave(e, 'import')}
                  onDrop={(e) => handleDrop(e, 'import')}
                  onClick={() => document.getElementById('import-file-upload')?.click()}
                >
                  <input
                    type="file"
                    id="import-file-upload"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, 'import')}
                  />
                  {importFile ? (
                    <div className="flex items-center justify-center gap-2">
                      <FileIcon className="h-6 w-6 text-gray-400" />
                      <span className="text-sm">{importFile.name}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <FileIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <p>Drop your {assessmentType === 'import-export' ? 'import' : 'electricity'} bill here, or <span className="text-primary">browse</span></p>
                        <p className="text-sm text-gray-500 mt-1">Supports PDF, JPG, PNG</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {assessmentType === 'import-export' && billType === 'separate' && (
                <div className="space-y-2">
                  <Label>Upload your export bill <span className="font-normal">(required)</span></Label>
                  <div
                    className={cn(
                      "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                      isDraggingExport ? "border-primary bg-primary/5" : "border-gray-200",
                      exportFile && "border-primary bg-primary/5"
                    )}
                    onDragOver={(e) => handleDragOver(e, 'export')}
                    onDragLeave={(e) => handleDragLeave(e, 'export')}
                    onDrop={(e) => handleDrop(e, 'export')}
                    onClick={() => document.getElementById('export-file-upload')?.click()}
                  >
                    <input
                      type="file"
                      id="export-file-upload"
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, 'export')}
                    />
                    {exportFile ? (
                      <div className="flex items-center justify-center gap-2">
                        <FileIcon className="h-6 w-6 text-gray-400" />
                        <span className="text-sm">{exportFile.name}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-center">
                          <FileIcon className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <p>Drop your export bill here, or <span className="text-primary">browse</span></p>
                          <p className="text-sm text-gray-500 mt-1">Supports PDF, JPG, PNG</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/import-export')}
        onContinue={() => navigate('/tariff', { state: { assessmentType }})}
        isEnabled={isValid}
      />
    </div>
  );
};

export default BillUpload;

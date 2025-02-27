
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
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

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
  const [hasCombinedBill, setHasCombinedBill] = useState(false);

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

  const handleCombinedBillChange = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true;
    setHasCombinedBill(isChecked);
    // If user indicates they have a combined bill, clear any export file they might have uploaded
    if (isChecked) {
      setExportFile(null);
    }
  };

  const isValid = date !== undefined && importFile !== null && (assessmentType === 'import-only' || assessmentType === 'import-export');

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
              {assessmentType === 'import-export' && (
                <p className="text-sm text-gray-500 mt-2 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  Note: Sometimes import and export information appears on the same bill, and sometimes they're separate bills. That's why we've made the export bill upload optional - just upload what you have!
                </p>
              )}
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
                      <CalendarIcon className="h-6 w-6 text-gray-400" />
                      <span className="text-sm">{importFile.name}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <CalendarIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <p>Drop your {assessmentType === 'import-export' ? 'import' : 'electricity'} bill here, or <span className="text-primary">browse</span></p>
                        <p className="text-sm text-gray-500 mt-1">Supports PDF, JPG, PNG</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {assessmentType === 'import-export' && (
                <>
                  <div className="flex items-center space-x-2 mt-4">
                    <Checkbox 
                      id="combined-bill" 
                      checked={hasCombinedBill}
                      onCheckedChange={handleCombinedBillChange}
                    />
                    <Label 
                      htmlFor="combined-bill" 
                      className="text-sm font-medium cursor-pointer leading-tight"
                    >
                      My import and export information is on the same bill (I don't have a separate export bill)
                    </Label>
                  </div>

                  {!hasCombinedBill && (
                    <div className="space-y-2 mt-4">
                      <Label>Upload your export bill (optional)</Label>
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
                            <CalendarIcon className="h-6 w-6 text-gray-400" />
                            <span className="text-sm">{exportFile.name}</span>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-center">
                              <CalendarIcon className="h-8 w-8 text-gray-400" />
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
                </>
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

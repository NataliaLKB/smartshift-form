
import React from 'react';
import { AddressHeader } from '@/components/address/AddressHeader';
import { AddressFooter } from '@/components/address/AddressFooter';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine, ArrowUpFromLine, Info } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ImportExport = () => {
  const navigate = useNavigate();

  const handleAssessmentChoice = (type: 'import-only' | 'import-export') => {
    navigate('/bill-upload', { state: { assessmentType: type } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AddressHeader />
      
      <main className="flex-1 bg-[#FAF9FA]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-700">Step 3 of 6</p>
                <p className="text-xs text-gray-500">Type of assessment</p>
              </div>
              <Progress value={50} className="h-1 mb-6" />
              <h1 className="text-2xl font-bold">What type of assessment would you like?</h1>
              <p className="text-gray-500 mt-2">We've detected you have an export meter. Choose whether you want recommendations for importing electricity only, or for both importing and exporting electricity.</p>
            </div>

            <Alert className="bg-[#F0F9F9] border-[#00CED1]/30">
              <Info className="h-5 w-5 text-[#00CED1]" />
              <AlertTitle className="text-[#038B8D] font-medium">Reminder</AlertTitle>
              <AlertDescription className="text-gray-700">
                Remember, you'll need to upload a copy of your electricity bill in the next step.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full p-8 min-h-[200px] h-auto flex flex-col items-center gap-4 hover:border-primary hover:bg-primary/5"
                onClick={() => handleAssessmentChoice('import-only')}
              >
                <ArrowDownToLine className="h-8 w-8" />
                <div className="text-center">
                  <p className="font-semibold mb-2">Import Only</p>
                  <p className="text-sm text-gray-500 whitespace-normal">I only want recommendations for buying electricity at the best rates</p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="w-full p-8 min-h-[200px] h-auto flex flex-col items-center gap-4 hover:border-primary hover:bg-primary/5"
                onClick={() => handleAssessmentChoice('import-export')}
              >
                <ArrowUpFromLine className="h-8 w-8" />
                <div className="text-center">
                  <p className="font-semibold mb-2">Import & Export</p>
                  <p className="text-sm text-gray-500 whitespace-normal">I generate electricity (e.g. solar panels) and want recommendations for both buying and selling</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <AddressFooter
        onBack={() => navigate('/devices')}
        hideBack={false}
        hideContinue={true}
        onContinue={() => {}}
      />
    </div>
  );
};

export default ImportExport;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalDetails from "./pages/PersonalDetails";
import Index from "./pages/Index";
import Devices from "./pages/Devices";
import BillUpload from "./pages/BillUpload";
import Tariff from "./pages/Tariff";
import Feedback from "./pages/Feedback";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import SmartMeterRequired from "./pages/SmartMeterRequired";
import ImportExport from "./pages/ImportExport";
import Landing from "./pages/Landing";
import About from "./pages/About";
import SmartTariffDetails from "./pages/SmartTariffDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/address" element={<Index />} />
          <Route path="/import-export" element={<ImportExport />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/bill-upload" element={<BillUpload />} />
          <Route path="/tariff" element={<Tariff />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/smart-meter-required" element={<SmartMeterRequired />} />
          <Route path="/smart-tariff-details" element={<SmartTariffDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

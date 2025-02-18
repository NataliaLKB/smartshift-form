
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalDetails />} />
          <Route path="/address" element={<Index />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/bill-upload" element={<BillUpload />} />
          <Route path="/tariff" element={<Tariff />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonalDetails from "./pages/PersonalDetails";
import Index from "./pages/Index";
import Devices from "./pages/Devices";
import BillUpload from "./pages/BillUpload";
import Tariff from "./pages/Tariff";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import SmartMeterRequired from "./pages/SmartMeterRequired";
import ImportExport from "./pages/ImportExport";
import Landing from "./pages/Landing";
import About from "./pages/About";
import SmartTariffDetails from "./pages/SmartTariffDetails";
import AccountLogin from "./pages/account/AccountLogin";
import AccountRegister from "./pages/account/AccountRegister";
import AccountForgotPassword from "./pages/account/AccountForgotPassword";
import AccountDashboard from "./pages/account/AccountDashboard";
import AccountProfile from "./pages/account/AccountProfile";
import AccountLayout from "./pages/account/AccountLayout";
import SmartTariffAnalysis from "./pages/account/SmartTariffAnalysis";
import AccountChoicePage from "./pages/AccountChoicePage";

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
          <Route path="/start" element={<AccountChoicePage />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/address" element={<Index />} />
          <Route path="/import-export" element={<ImportExport />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/bill-upload" element={<BillUpload />} />
          <Route path="/tariff" element={<Tariff />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thank-you" element={<Navigate to="/account/analysis" />} />
          <Route path="/smart-meter-required" element={<SmartMeterRequired />} />
          <Route path="/smart-tariff-details" element={<SmartTariffDetails />} />
          
          {/* Account Management Routes */}
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<AccountDashboard />} />
            <Route path="analysis" element={<SmartTariffAnalysis />} />
            <Route path="profile" element={<AccountProfile />} />
          </Route>
          <Route path="/login" element={<AccountLogin />} />
          <Route path="/register" element={<AccountRegister />} />
          <Route path="/forgot-password" element={<AccountForgotPassword />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

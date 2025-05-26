
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import NonProfit from "./pages/NonProfit";
import Investments from "./pages/Investments";
import Education from "./pages/Education";
import Learn from "./pages/Learn";
import VerifyIdentity from "./pages/VerifyIdentity";
import CreditPassport from "./pages/CreditPassport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/non-profit" element={<NonProfit />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/education" element={<Education />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/verify-identity" element={<VerifyIdentity />} />
          <Route path="/credit-passport" element={<CreditPassport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

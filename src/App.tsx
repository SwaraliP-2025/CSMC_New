import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollToTopOnNavigate } from "@/components/ScrollToTopOnNavigate";
import Index from "./pages/Index.tsx";
import About from "./pages/site/About.tsx";
import Departments from "./pages/site/Departments.tsx";
import Services from "./pages/site/Services.tsx";
import Notices from "./pages/site/Notices.tsx";
import Tenders from "./pages/site/Tenders.tsx";
import Contact from "./pages/site/Contact.tsx";
import UnderConstruction from "./pages/site/UnderConstruction.tsx";
import TrackApplication from "./pages/site/TrackApplication.tsx";
import TaxCalculator from "./pages/site/TaxCalculator.tsx";
import PublicDocuments from "./pages/site/PublicDocuments.tsx";
import GrievancePage from "./pages/site/Grievance.tsx";
import Commissioner from "./pages/site/Commissioner.tsx";
import FAQ from "./pages/site/FAQ.tsx";
import RTIAct from "./pages/site/RTIAct.tsx";
import RTSAct from "./pages/site/RTSAct.tsx";
import Recruitment from "./pages/site/Recruitment.tsx";
import DisasterManagement from "./pages/site/DisasterManagement.tsx";
import Elections from "./pages/site/Elections.tsx";
import GovtOrders from "./pages/site/GovtOrders.tsx";
import SiteMap from "./pages/site/SiteMap.tsx";
import ZonesWards from "./pages/site/ZonesWards.tsx";
import Organization from "./pages/site/Organization.tsx";
import DPPlan from "./pages/site/DPPlan.tsx";
import CommissionersList from "./pages/site/CommissionersList.tsx";
import MayorsList from "./pages/site/MayorsList.tsx";
import DepartmentDetail from "./pages/site/DepartmentDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import UserManual from "./pages/site/UserManual.tsx";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/CSMC_New">
            <ScrollToTopOnNavigate />
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:slug" element={<DepartmentDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/track" element={<TrackApplication />} />
            <Route path="/tax-calculator" element={<TaxCalculator />} />
            <Route path="/public-documents" element={<PublicDocuments />} />
            <Route path="/grievance" element={<GrievancePage />} />
            <Route path="/commissioner" element={<Commissioner />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rti-act" element={<RTIAct />} />
            <Route path="/rts-act" element={<RTSAct />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/disaster-management" element={<DisasterManagement />} />
            <Route path="/elections" element={<Elections />} />
            <Route path="/govt-orders" element={<GovtOrders />} />
            <Route path="/site-map" element={<SiteMap />} />
            <Route path="/zones-wards" element={<ZonesWards />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/dp-plan" element={<DPPlan />} />
            <Route path="/commissioners-list" element={<CommissionersList />} />
            <Route path="/mayors-list" element={<MayorsList />} />
            <Route path="/user-manual" element={<UserManual />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

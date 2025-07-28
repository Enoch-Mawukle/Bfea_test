import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About Pages
import WhoWeAre from "./pages/about/WhoWeAre";
import Team from "./pages/about/Team";
import Board from "./pages/about/Board";
import Partners from "./pages/about/Partners";
import Locations from "./pages/about/Locations";

// Program Pages
import CoreAcademic from "./pages/programs/CoreAcademic";
import GlobalPrograms from "./pages/programs/GlobalPrograms";
import Mentorship from "./pages/programs/Mentorship";
import SocialEmotional from "./pages/programs/SocialEmotional";
import Enrichment from "./pages/programs/Enrichment";
import BoysOfValor from "./pages/programs/BoysOfValor";

// Volunteer Pages
import JoinTeam from "./pages/volunteer/JoinTeam";
import Internship from "./pages/volunteer/Internship";
import VolunteerRegister from "./pages/volunteer/VolunteerRegister";

// Other Pages
import News from "./pages/News";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Register from "./pages/Register";
import UnifiedRegister from "./pages/UnifiedRegister";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/board" element={<Board />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/about/locations" element={<Locations />} />
          
          {/* Program Routes */}
          <Route path="/programs/core-academic" element={<CoreAcademic />} />
          <Route path="/programs/global" element={<GlobalPrograms />} />
          <Route path="/programs/mentorship" element={<Mentorship />} />
          <Route path="/programs/social-emotional" element={<SocialEmotional />} />
          <Route path="/programs/enrichment" element={<Enrichment />} />
          <Route path="/programs/boys-of-valor" element={<BoysOfValor />} />
          
          {/* Volunteer Routes */}
          <Route path="/volunteer/join-team" element={<JoinTeam />} />
          <Route path="/volunteer/internship" element={<Internship />} />
          <Route path="/volunteer/register" element={<VolunteerRegister />} />
          
          {/* Other Routes */}
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/register" element={<UnifiedRegister />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

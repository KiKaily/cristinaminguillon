
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Classes from "./pages/Classes";
import ArtTherapy from "./pages/ArtTherapy";
import Painting from "./pages/artwork/Painting";
import Ceramics from "./pages/artwork/Ceramics";
import Sculpture from "./pages/artwork/Sculpture";
import Digital from "./pages/artwork/Digital";
import Mixed from "./pages/artwork/Mixed";
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
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/clases" element={<Classes />} />
          <Route path="/arteterapia" element={<ArtTherapy />} />
          <Route path="/obras/pintura" element={<Painting />} />
          <Route path="/obras/ceramica" element={<Ceramics />} />
          <Route path="/obras/escultura" element={<Sculpture />} />
          <Route path="/obras/digital" element={<Digital />} />
          <Route path="/obras/mixta" element={<Mixed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Classes from "./pages/Classes";
import ArtTherapy from "./pages/ArtTherapy";
import Exhibitions from "./pages/Exhibitions";
import PaidContent from "./pages/PaidContent";
import ContentoEnVivo from "./pages/ContentoEnVivo";
import ArticlesAndVideos from "./pages/ArticlesAndVideos";
import Painting from "./pages/artwork/Painting";
import Ceramics from "./pages/artwork/Ceramics";
import Sculpture from "./pages/artwork/Sculpture";
import Digital from "./pages/artwork/Digital";
import Mixed from "./pages/artwork/Mixed";
import NotFound from "./pages/NotFound";
import PasswordProtectedContent from "./pages/PasswordProtectedContent";
import Shop from "./pages/Shop";
import CourseDetail from "./pages/CourseDetail";
import CourseDetailLive from "./pages/CourseDetailLive";
import Inscription from "./pages/Inscription";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const loadFont = async () => {
      const font = new FontFace(
        'Homemade Apple',
        'url(https://fonts.gstatic.com/s/homemadeapple/v18/Qw3EZQFXECDrI2q789EKQZJob0x6XHg.woff2)'
      );

      try {
        await font.load();
        document.fonts.add(font);
        console.log('Homemade Apple font loaded successfully');
      } catch (error) {
        console.error('Error loading Homemade Apple font:', error);
      }
    };

    loadFont();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre-mi" element={<AboutMe />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/clases" element={<Classes />} />
            <Route path="/arteterapia" element={<ArtTherapy />} />
            <Route path="/exposiciones" element={<Exhibitions />} />
            <Route path="/videos-articulos" element={<ArticlesAndVideos />} />
            <Route path="/contenido-premium" element={<PaidContent />} />
            <Route path="/contenido-envivo" element={<ContentoEnVivo />} />
            <Route path="/contenido-protegido/:contentId" element={<PasswordProtectedContent />} />
            <Route path="/curso-detalle/:id" element={<CourseDetail />} />
            <Route path="/curso-detalle-envivo/:id" element={<CourseDetailLive />} />
            <Route path="/inscripcion/:id" element={<Inscription />} />
            <Route path="/tienda" element={<Shop />} />
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
};

export default App;

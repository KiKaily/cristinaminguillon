
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[6%] pb-8 container mx-auto px-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-4xl">404</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl text-muted-foreground mb-4">Oops! Página no encontrada</p>
            <a href="/" className="text-primary hover:text-primary-hover underline text-xl">
              Volver al Inicio
            </a>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

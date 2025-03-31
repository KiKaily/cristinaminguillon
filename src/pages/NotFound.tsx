
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <main className="min-h-[70vh] pt-[8%] md:pt-[5%] container mx-auto px-4 flex flex-col items-center justify-center">
        <Card className="max-w-2xl w-full mb-8 text-center">
          <CardHeader>
            <CardTitle>404</CardTitle>
          </CardHeader>
          <CardContent className="px-[2%] py-[4%] space-y-4">
            <p className="text-xl text-muted-foreground mb-4">Oops! Página no encontrada</p>
            <a href="/" className="text-blue-700 hover:text-blue-900 underline">
              Volver al inicio
            </a>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

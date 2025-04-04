
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
      <main className="min-h-[70vh] pt-[5%] md:pt-[4%] container mx-auto px-4 flex flex-col items-center justify-start">
        <div className="max-w-2xl w-full mb-8 text-center py-8 px-8 bg-transparent">
          <h1 className="text-6xl font-semibold mb-4">404</h1>
          <p className="text-2xl text-muted-foreground mb-6">Oops! Página no encontrada</p>
          <a href="/" className="text-blue-700 hover:text-blue-900 underline text-xl">
            Volver al inicio
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

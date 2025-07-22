
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] pt-[6%] md:pt-[4%] container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-10">Tienda</h1>
        <div className="space-y-8 py-8">
          <p className="text-2xl text-muted-foreground mb-8">
            Próximamente, podrás encontrar mis obras disponibles para compra en mi tienda de Etsy. Allí encontrarás cerámicas, pinturas y más piezas únicas.
          </p>
          <p className="text-2xl text-muted-foreground mb-10">
            Etsy en un comercio virtual enfocado en artistas y artesanos de todo el mundo. Es una plataforma segura y confiable para comprar arte y productos hechos a mano o pequeñas producciones.
          </p>
          <Button className="hover-lift bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 border-[#DCD0BA]/20 text-2xl px-8 py-6" onClick={() => window.open("https://www.etsy.com", "_blank")}>
            Próximamente...
            <ExternalLink className="ml-2 h-6 w-6" />
          </Button>
        </div>
        
        <div className="mt-16 mb-8">
          <section className="relative w-full h-0 pb-[56.25%] overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/DlcYXZSWxJg?si=ZgQb8kPnlgoZms9S"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shop;


import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[6%] pb-8 container mx-auto px-4">
        <div className="page-title mx-auto text-center">
          <h1>Tienda</h1>
        </div>
        
        <Card className="mb-8">
          <CardContent className="px-[2%] py-[4%] space-y-6">
            <p className="text-xl text-muted-foreground mb-6">
              Puedes encontrar mis obras disponibles para compra en mi tienda de Etsy. Allí encontrarás cerámicas, pinturas y más piezas únicas.
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              Etsy en un comercio virtual enfocado en artistas y artesanos de todo el mundo. Es una plataforma segura y confiable para comprar arte y productos hechos a mano o pequeñas producciones.
            </p>
            <p className="text-xl text-muted-foreground mb-6">
             </p>
            <Button className="hover-lift text-xl" onClick={() => window.open("https://www.etsy.com", "_blank")}>
              Visitar mi tienda en Etsy
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <Card className="mt-12">
          <CardContent>
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
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Shop;

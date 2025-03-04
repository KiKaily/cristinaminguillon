
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 mt-40 md:mt-0 handwriting-title">Tienda</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="handwriting-title">Bienvenido/a a mi tienda de arte</CardTitle>
          </CardHeader>
          <CardContent className="px-[2%] py-[4%] space-y-2">
            <p className="text-muted-foreground">
              Puedes encontrar mis obras disponibles para compra en mi tienda de Etsy. Allí encontrarás cerámicas, pinturas y más piezas únicas.
            </p>
            <p className="text-muted-foreground">
              Etsy en un comercio virtual enfocado en artistas y artesanos de todo el mundo. Es una plataforma segura y confiable para comprar arte y productos hechos a mano o pequeñas producciones.
            </p>
            <p className="text-muted-foreground">
             </p>
            <Button className="hover-lift" onClick={() => window.open("https://www.etsy.com", "_blank")}>
              Visitar mi tienda en Etsy
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <div className="mt-12">
          <section className="relative w-full h-0 pb-[56.25%] overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/DlcYXZSWxJg?si=ZgQb8kPnlgoZms9S"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shop;

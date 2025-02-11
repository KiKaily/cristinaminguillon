import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Digital = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Libros de Artista</h1>
        <div className="space-y-8">
          <Card>
            <CardContent className="px-[2%] py-[4%] space-y-4">
              <p className="text-muted-foreground">
              Desde 1990 ilustro libros para distintas editoriales y autoediciones, dirigidos a público infantil y adulto. Los libros de artista son pequeñas joyas, piezas únicas en las que todo está permitido y me permito todo. No hay formato, tamaño, material ni temática a los que deba ceñirme. Son la libertad.
              </p>

              <div className="my-4"></div>

              <div className="grid md:grid-cols-3 gap-4">
                <img
                  src="/lib01.jpg"
                  alt="Páginas 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/lib02.jpg"
                  alt="Páginas 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/lib03.jpg"
                  alt="Páginas 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Digital;

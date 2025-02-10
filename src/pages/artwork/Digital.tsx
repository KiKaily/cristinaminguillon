
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
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Serie Narrativas</h2>
              <h3 className="text-xl text-muted-foreground">Historias en papel</h3>
              <p className="text-muted-foreground">
                Una colección de libros de artista que exploran diferentes narrativas
                y formas de contar historias a través del arte.
              </p>
              <img
                src="/art01.jpg"
                alt="Serie Narrativas"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Colección Páginas</h2>
              <h3 className="text-xl text-muted-foreground">El arte del libro</h3>
              <p className="text-muted-foreground">
                Obras que exploran diferentes técnicas y formatos del libro como objeto artístico.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="/art02.jpg"
                  alt="Páginas 1"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/art03.jpg"
                  alt="Páginas 2"
                  className="w-full h-[300px] object-cover rounded-lg"
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

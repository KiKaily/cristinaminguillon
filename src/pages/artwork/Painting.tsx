
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Painting = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Ilustración</h1>
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Serie Imaginarios</h2>
              <h3 className="text-xl text-muted-foreground">Mundos ilustrados</h3>
              <p className="text-muted-foreground">
                Una serie de ilustraciones que exploran diferentes mundos y narrativas
                a través del dibujo y el color.
              </p>
              <img
                src="/art01.jpg"
                alt="Serie Imaginarios"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Colección Trazos</h2>
              <h3 className="text-xl text-muted-foreground">El arte de la línea</h3>
              <p className="text-muted-foreground">
                Ilustraciones que celebran diferentes técnicas y estilos del dibujo.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="/art02.jpg"
                  alt="Trazos 1"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/art03.jpg"
                  alt="Trazos 2"
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

export default Painting;

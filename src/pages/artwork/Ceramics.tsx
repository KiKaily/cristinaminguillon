
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Ceramics = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Cerámica</h1>
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Serie Babel</h2>
              <h3 className="text-xl text-muted-foreground">Explorando las formas orgánicas</h3>
              <p className="text-muted-foreground">
                Una serie de piezas que exploran la relación entre la forma orgánica y la geometría, 
                inspiradas en la naturaleza y la arquitectura antigua.
              </p>
              <img
                src="/art01.jpg"
                alt="Serie Babel"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Colección Naturaleza</h2>
              <h3 className="text-xl text-muted-foreground">La belleza de lo natural</h3>
              <p className="text-muted-foreground">
                Piezas que celebran las texturas y patrones encontrados en la naturaleza.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="/art02.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/art03.jpg"
                  alt="Naturaleza 2"
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

export default Ceramics;

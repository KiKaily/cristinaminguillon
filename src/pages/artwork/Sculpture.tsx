
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Sculpture = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Textil</h1>
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Serie Texturas</h2>
              <h3 className="text-xl text-muted-foreground">Explorando los materiales</h3>
              <p className="text-muted-foreground">
                Una serie de piezas que exploran la relación entre diferentes texturas y materiales,
                inspiradas en técnicas tradicionales y contemporáneas.
              </p>
              <img
                src="/art01.jpg"
                alt="Serie Texturas"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Colección Fibras</h2>
              <h3 className="text-xl text-muted-foreground">La belleza del tejido</h3>
              <p className="text-muted-foreground">
                Piezas que celebran las diferentes técnicas y patrones del arte textil.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="/art02.jpg"
                  alt="Fibras 1"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/art03.jpg"
                  alt="Fibras 2"
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

export default Sculpture;


import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Mixed = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Papel</h1>
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Serie Texturas</h2>
              <h3 className="text-xl text-muted-foreground">El arte del papel</h3>
              <p className="text-muted-foreground">
                Una serie de obras que exploran las posibilidades del papel como medio artístico,
                sus texturas y formas.
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
              <h2 className="text-2xl font-semibold">Colección Pliegues</h2>
              <h3 className="text-xl text-muted-foreground">La belleza del plegado</h3>
              <p className="text-muted-foreground">
                Obras que celebran las diferentes técnicas y posibilidades del papel.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="/art02.jpg"
                  alt="Pliegues 1"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/art03.jpg"
                  alt="Pliegues 2"
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

export default Mixed;

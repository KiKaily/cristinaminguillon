import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Mixed = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 mt-20 md:mt-0">Papel</h1>
        <div className="space-y-8">
          <Card>
            <CardContent className="px-[6%] py-[6%] space-y-4">
              <h2 className="text-2xl font-semibold">TIERRA</h2>

              <div className="my-4"></div>

              <div className="grid md:grid-cols-3 gap-4">
                <img
                  src="/tie04.jpg"
                  alt="Páginas 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/tie05.jpg"
                  alt="Páginas 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/tie03.jpg"
                  alt="Páginas 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-12">
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
            </CardContent>
          </Card>

          <Card>
            <CardContent className="px-[6%] py-[6%] space-y-4">
              <h2 className="text-2xl font-semibold">ENCUENTROS Y DESPEDIDAS</h2>

              <div className="my-4"></div>

              <div className="grid md:grid-cols-3 gap-4">
                <img
                  src="/des08.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/des01.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/des02.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />

                <img
                  src="/des03.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/des05.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/des06.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="px-[6%] py-[6%] space-y-4">
              <h2 className="text-2xl font-semibold">EL PODER DE LO INVISIBLE</h2>
              <p className="text-muted-foreground">
              Serie realizada en acuarela sobre papel en el periodo de pandemia a partir de la vivencia del miedo provocado por la difusión de las noticias sobre el efecto de algo invisible y el poder que llegó a tener en nuestras vidas. influyendo en cómo nos comportamos, lo que sentimos, nuestras dependencias, relaciones. actitudes, decisiones...
              </p>

              <div className="my-4"></div>

              <div className="grid md:grid-cols-3 gap-4">
                <img
                  src="/inv01.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/inv02.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/inv03.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />

                <img
                  src="/inv04.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/inv05.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/inv06.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />

                <img
                  src="/inv07.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/inv08.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/inv09.jpg"
                  alt="Naturaleza 2"
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

export default Mixed;

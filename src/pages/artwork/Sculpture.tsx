
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Sculpture = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 mt-20 md:mt-0">Textil</h1>
        <div className="space-y-8">
          <Card>
            <CardContent className="px-[6%] py-[6%] space-y-4">
              <div className="grid md:grid-cols-1 gap-4">
                <img
                  src="/add.png"
                  alt="Naturaleza 1"
                  className="w-[400px] h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl text-muted-foreground">Este trabajo es el resultado del juego con dos palabras inglesas: ADDRESS, domicilio y A DRESS, vestido.</h3>
              <p className="text-muted-foreground">
                Una reflexión sobre la casa y cómo nos relacionamos con ella. La casa forma parte de nuestra identidad y es un reflejo de cómo somos, del momento que estamos viviendo, de lo que hacemos, de nuestro lugar en el mundo, de nuestras creencias, de lo que queremos ser…
              </p>
              <p className="text-muted-foreground">
                La casa nos protege, nos envuelve y nos cubre como un vestido. En la casa nos sentimos a salvo de las inclemencias del tiempo, de la violencia, de los otros, de la lucha y la insedguridad. ¡Casa! gritan los niños para ser inmunes en el pilla pilla.
              </p>
              <p className="text-muted-foreground">
                Pero la casa puede ser también el infierno, un terrotorio hostil en el que nos sentimos amenzados o prisioneros y del que debemos huir para crecer o sobrevivir.
              </p>
              <p className="text-muted-foreground">
                Casa y vestido son presencia y ausencia de cada uno de nosotros. Cuando ya no estamos, casa y vestido conservan nuestra imagen, nuestro olor, nuestra identidad, son lo que fuimos.
              </p>
              <p className="text-muted-foreground">
                En este juego, el buzón es una maqueta de la casa, su imagen exterior y quiere recibe y da información sobre nosotros y sobre lo que ocurre dentro de ella. El buzón, como la casa, es un territorio íntimo y personal, inviolable pero a la vez frágil y vulnerable.
              </p>

              <div className="mt-20">
                <section className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/svIT5eXHKBY?si=t-i435plSCQxdXyI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </section>
              </div>

              <div className="grid md:grid-cols-1 gap-4"></div>
              <img
                src="/add01.png"
                alt="Serie Texturas"
                className="w-full h-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sculpture;

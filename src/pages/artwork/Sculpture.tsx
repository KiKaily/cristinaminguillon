
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Sculpture = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%] md:pt-[8%] container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 mt-20 md:mt-0">Textil</h1>
        <div className="space-y-8">
          <div className="p-8">
            <div className="mb-8">
              <img
                src="/add.png"
                alt="Naturaleza 1"
                className="w-[400px] h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl text-muted-foreground mb-6">Este trabajo es el resultado del juego con dos palabras inglesas: ADDRESS, domicilio y A DRESS, vestido.</h3>
            <p className="text-xl text-muted-foreground mb-4">
              Una reflexión sobre la casa y cómo nos relacionamos con ella. La casa forma parte de nuestra identidad y es un reflejo de cómo somos, del momento que estamos viviendo, de lo que hacemos, de nuestro lugar en el mundo, de nuestras creencias, de lo que queremos ser…
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              La casa nos protege, nos envuelve y nos cubre como un vestido. En la casa nos sentimos a salvo de las inclemencias del tiempo, de la violencia, de los otros, de la lucha y la insedguridad. ¡Casa! gritan los niños para ser inmunes en el pilla pilla.
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              Pero la casa puede ser también el infierno, un terrotorio hostil en el que nos sentimos amenzados o prisioneros y del que debemos huir para crecer o sobrevivir.
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              Casa y vestido son presencia y ausencia de cada uno de nosotros. Cuando ya no estamos, casa y vestido conservan nuestra imagen, nuestro olor, nuestra identidad, son lo que fuimos.
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              En este juego, el buzón es una maqueta de la casa, su imagen exterior y quiere recibe y da información sobre nosotros y sobre lo que ocurre dentro de ella. El buzón, como la casa, es un territorio íntimo y personal, inviolable pero a la vez frágil y vulnerable.
            </p>

            <div className="mt-16 mb-16">
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

            <div className="mb-12">
              <img
                src="/add01.png"
                alt="Serie Texturas"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sculpture;


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
            <div className="grid md:grid-cols-1 gap-4">
                <img
                  src="/add.png"
                  alt="Naturaleza 1"
                  className="w-[400px] h-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold">A D DRESS</h2>
              <h3 className="text-xl text-muted-foreground">Este trabajo es el resultado del juego con dos palabras inglesas: ADDRESS, domicilio y A DRESS, vestido.</h3>
              <p className="text-muted-foreground">
              Una reflexión sobre la casa y cómo nos relacionamos con ella. La casa forma parte de nuestra identidad y es un reflejo de cómo somos, del momento que estamos viviendo, de lo que hacemos, de nuestro lugar en el mundo, de nuestras creencias, de lo que queremos ser…
              </p>
              <p className="text-muted-foreground">
              La casa nos protege, nos envuelve y nos cubre como un vestido. En la casa nos sentimos a salvo de las inclemencias del tiempo, de la violencia, de los otros, de la lucha y la insedguridad. ¡Casa! gritan los niños para ser inmunes en el pilla pilla.              </p>
              <p className="text-muted-foreground">
              Pero la casa puede ser también el infierno, un terrotorio hostil en el que nos sentimos amenzados o prisioneros y del que debemos huir para crecer o sobrevivir.
              </p>
              <p className="text-muted-foreground">
              Casa y vestido son presencia y ausencia de cada uno de nosotros. Cuando ya no estamos, casa y vestido conservan nuestra imagen, nuestro olor, nuestra identidad, son lo que fuimos.
              </p>
              <p className="text-muted-foreground">
              En este juego, el buzón es una maqueta de la casa, su imagen exterior y quiere recibe y da información sobre nosotros y sobre lo que ocurre dentro de ella. El buzón, como la casa, es un territorio íntimo y personal, inviolable pero a la vez frágil y vulnerable.
              </p>

              <div className="my-4"></div>

              <section className="relative w-full h-[60vh] overflow-hidden">
              <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/placeholder.svg"
              >
              <source src="https://youtu.be/svIT5eXHKBY" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
              </video>
              <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />
              </section>
              <img
                src="/add01.jpg"
                alt="Serie Texturas"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">FAMILIANDO</h2>
              <p className="text-muted-foreground">
              Es un proyecto que nació del trabajo personal en torno a la familia. Las relaciones entre quienes la forman, el amor y el apoyo incondicionales, los roles, lo ancestral, las afinidades, los encuentros y desencuentros, las enseñanzas y aprendizajes, los secretos, los silencios, las traiciones, las fidelidades, los abandonos, las heridas, la envidia, la manipulación, la rabia, los reconocimientos, el agradecimiento, las cosas de la familia…
              </p>
              <p className="text-muted-foreground">
              Un proyecto en colaboración con Carmen Minguillón, mi tía Cuca, mi madrina, cuando cumplía sus 100 años de vida, ya con pocas fuerzas. Tenía que ser bordado porque ella siempre creó con hilos y agujas, ganchillos y perlés…Yo nunca aprendí. En estas obras estamos las dos, sus últimas puntadas y las que hice yo por primera vez. Y nuestras miradas a la familia. Tardes de charla con hilos de colores que añoro cada día.
              </p>

              <div className="my-4"></div>

              <div className="grid md:grid-cols-3 gap-4">
                <img
                  src="/volar.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/ultimaspuntadas.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/liodetallos.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-[300px] object-cover rounded-lg"
                />

                <img
                  src="/ojos.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/bullicio.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <img
                  src="/florecer.jpg"
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

export default Sculpture;

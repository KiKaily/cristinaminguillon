
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
              <h2 className="text-2xl font-semibold">BARRO Y SILENCIO</h2>
              <h3 className="text-xl text-muted-foreground">Obras realizadas entre 2013-2017.</h3>
              <p className="text-muted-foreground">
              Exposición realizada en Denia en enero de 2023.
              </p>

              <div className="my-4"></div>

              <div className="grid md:grid-cols-3 gap-4">
                <img
                  src="/kai02.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/kai01.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/kai03.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />

                <img
                  src="/kai04.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/kai05.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/kai06.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-muted-foreground">
              *Las primeras 5 fotos hechas por ©Daniela Burtsch. dbutsch@ariadnefilme.de www.danielabutsch.eu
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">KAIRÓS</h2>
              <h3 className="text-xl text-muted-foreground">Exposición en Jávea de febrero a marzo de 2023</h3>
              <p className="text-muted-foreground">
              “Hay un concepto en griego para el momento crítico, especial, que puede cambiar las cosas: kairós. Expresa el sentimiento de que cualquier crisis es ambivalente y fácilmente puede inclinarse tanto a la fatalidad como a la fortuna. Es una intuición de la fragilidad humana, de las encrucijadas que esconden su signo”.
              </p>
              <p className="text-muted-foreground">
              Alejandro Gándara. Dioses contra microbios, 2020.              </p>
              <p className="text-muted-foreground">
              “Este es un viaje pegado a la tierra, que agarra el barro para agarrarse a la vida.              </p>
              <p className="text-muted-foreground">
              En el principio, el silencio. Una esfera suspendida en el aire marca el tiempo como un péndulo en la mano de Dios. Piezas de barro refractario, horadadas y cosidas con cuerda, recuerdan a las celosías de los monasterios, los hábitos de los monjes, el recogimiento en la penumbra. Sunt lacrimae rerum (Virgilio. La Eneida, siglo I a.C.). Hay lágrimas en las cosas, contienen el aliento de quien las creó, el tiempo que dedicó a pensarlas y a darles forma.              </p>
              <p className="text-muted-foreground">
              El sonido llega a través del mar. Con él llegan también conchas, piedras y residuos plásticos. Y la luz del Mediterráneo. Barro porcelánico, suave, del color de la sal. Y el jolgorio de la gente, la vida ahí fuera. Flores, telas de colores, campanas de cristal que protegen, pero dejan ver lo que hay dentro. La piedra se transforma en seres intermedios que abren la boca y nos desafían. Detente. Escucha.              </p>
              <p className="text-muted-foreground">
              Este edificio tan hermoso alberga una exposición y algo más. Una intuición, una oportunidad.”              </p>
              <p className="text-muted-foreground">
              Jana García González. Febrero, 2023              </p>

              <div className="my-10 bg-red-500"> {/* Añadido un fondo rojo para visualizar el div */}
                                                 {/* Este div debería tener un margen vertical de 2.5rem (40px) */}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="/kai07.jpg"
                  alt="Naturaleza 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/kai09.jpg"
                  alt="Naturaleza 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <section className="relative w-full h-[60vh] overflow-hidden">
              <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/placeholder.svg"
              >
              <source src="https://drive.google.com/uc?export=download&id=1ScCoTClDvuBqJks1gc3Fg5CWSy_T_yHv" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
              </video>

              <div className="my-4"></div>

              <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />
              </section>
              <p className="text-muted-foreground">
              <a href="https://cristinaminguillon.com/images/Kairos.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Ver PDF de exposición completa "KAIRÓS".</a>              
              </p>
              <p className="text-muted-foreground">
              A la deriva, a la merced del oleaje y de las circunstancias de estos tiempos, una mujer crea y con sus lágrimas riega las semillas, así como a la tierra que ahora es barro, vasija y vientre… refugio de los sueños compartidos, espacio protector de la fragilidad de la vida. Ella, la piedra y el fuego, son testigos de los constructos humanos, de la ferocidad de las ambiciones que con sus dientes han devorado, en años, milenios de creación. La obra de Cristina Minguillón es, en sí y en su proceso, un ejercicio de reivindicación del silencio, una oda a la soledad elegida, a la existencia pacífica que observa serena el eterno devenir de las mareas.              
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Ceramics;

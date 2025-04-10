
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Ceramics = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] md:pt-[8%] container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 mt-20 md:mt-0">Cerámica</h1>
        <div className="space-y-16">
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6">BARRO Y SILENCIO</h2>
            <h3 className="text-2xl text-muted-foreground mb-6">Obras realizadas entre 2013-2017.</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Exposición realizada en Denia en enero de 2023.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <img
                src="/kai07.jpg"
                alt="Naturaleza 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/kai08.png"
                alt="Naturaleza 2"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/kai09.jpg"
                alt="Naturaleza 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6">KAIRÓS</h2>
            <h3 className="text-2xl text-muted-foreground mb-6">Exposición en Jávea de febrero a marzo de 2023</h3>
            <p className="text-xl text-muted-foreground mb-4">
              "Hay un concepto en griego para el momento crítico, especial, que puede cambiar las cosas: kairós. Expresa el sentimiento de que cualquier crisis es ambivalente y fácilmente puede inclinarse tanto a la fatalidad como a la fortuna. Es una intuición de la fragilidad humana, de las encrucijadas que esconden su signo".
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              Alejandro Gándara. Dioses contra microbios, 2020.
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              "Este es un viaje pegado a la tierra, que agarra el barro para agarrarse a la vida.
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              En el principio, el silencio. Una esfera suspendida en el aire marca el tiempo como un péndulo en la mano de Dios. Piezas de barro refractario, horadadas y cosidas con cuerda, recuerdan a las celosías de los monasterios, los hábitos de los monjes, el recogimiento en la penumbra. Sunt lacrimae rerum (Virgilio. La Eneida, siglo I a.C.). Hay lágrimas en las cosas, contienen el aliento de quien las creó, el tiempo que dedicó a pensarlas y a darles forma.
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              El sonido llega a través del mar. Con él llegan también conchas, piedras y residuos plásticos. Y la luz del Mediterráneo. Barro porcelánico, suave, del color de la sal. Y el jolgorio de la gente, la vida ahí fuera. Flores, telas de colores, campanas de cristal que protegen, pero dejan ver lo que hay dentro. La piedra se transforma en seres intermedios que abren la boca y nos desafían. Detente. Escucha.
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              Este edificio tan hermoso alberga una exposición y algo más. Una intuición, una oportunidad."
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              Jana García González. Febrero, 2023
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
            <p className="text-xl text-muted-foreground mb-8">
              *Las primeras 5 fotos hechas por ©Daniela Burtsch. dbutsch@ariadnefilme.de www.danielabutsch.eu
            </p>
            <div className="mt-16 mb-16">
              <section className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/DdCqYT6gCq8?si=FOGgewGljCJQlV96"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </section>
            </div>

            <p className="text-xl text-muted-foreground mb-4">
              <a href="https://cristinaminguillon.com/images/Kairos.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Ver PDF de exposición completa "KAIRÓS".</a>
            </p>
            <p className="text-xl text-muted-foreground">
              A la deriva, a la merced del oleaje y de las circunstancias de estos tiempos, una mujer crea y con sus lágrimas riega las semillas, así como a la tierra que ahora es barro, vasija y vientre… refugio de los sueños compartidos, espacio protector de la fragilidad de la vida. Ella, la piedra y el fuego, son testigos de los constructos humanos, de la ferocidad de las ambiciones que con sus dientes han devorado, en años, milenios de creación. La obra de Cristina Minguillón es, en sí y en su proceso, un ejercicio de reivindicación del silencio, una oda a la soledad elegida, a la existencia pacífica que observa serena el eterno devenir de las mareas.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Ceramics;

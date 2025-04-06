
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ArtTherapy = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 mt-20 md:mt-0">Arteterapia</h1>
        
        <div className="mb-12 p-8">
          <h2 className="text-3xl font-semibold mb-6">Arteterapia humanista y terapia gestalt</h2>
          <h3 className="text-2xl text-muted-foreground mb-8">Madrid</h3>
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground">
              Colaboro con la Escuela de Arteterapia y Terapia Gestalt, que dirige Raquel Muñoz Albacete, acompañando en distintos Módulos de sus Ciclos de Formación e imparto Talleres y Cursos intensivos de distintos aspectos del Arteterapia, enfocados a adquirir nuevas herramientas para la autoindagación y el crecimiento personal.
            </p>
            <p className="text-xl text-muted-foreground">
              Usamos el lenguaje artístico como herramienta de autoconocimiento y crecimiento personal. El arte nos ayuda a conectar con nuestra esencia, nos facilita expresar lo que sentimos y nos anima a seguir profundizando en nuestro interior. Podemos utilizar pintura, arcilla, objetos encontrados, collage, fotografía, video, telas, escritura, teatro… No importa la obra que resulte, es el proceso en el que nos volcamos y nos re-conocemos, lo que interesa.
            </p>
            <p className="text-xl text-muted-foreground">
              De la mano del arte, podemos revisar las emociones, las polaridades, los límites, las necesidades, las formas de dar y recibir, las relaciones, nuestro lugar en el mundo…
            </p>
            <p className="text-xl text-muted-foreground">
              Acompaño sesiones de arteterapia individual, on line y presencial. En Madrid y Denia.
            </p>
          
            <div className="grid gap-10 mt-10">
              <img
                src="/art01.jpg"
                alt="Sesión de arteterapia"
                className="rounded-lg object-cover w-full h-[500px]"
              />
              <img
                src="/art02.jpg"
                alt="Sesión de arteterapia"
                className="rounded-lg object-cover w-full h-[500px]"
              />
              <img
                src="/art03.jpg"
                alt="Sesión de arteterapia"
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArtTherapy;

import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

const ArtTherapy = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 mt-20 md:mt-0">Arteterapia</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Arteterapia humanista y terapia gestalt</CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4 space-y-10">
            <h3 className="text-xl text-muted-foreground">Madrid</h3>
            <p className="text-lg text-muted-foreground">
              Colaboro con la Escuela de Arteterapia y Terapia Gestalt, que dirige Raquel Muñoz Albacete, acompañando en distintos Módulos de sus Ciclos de Formación e imparto Talleres y Cursos intensivos de distintos aspectos del Arteterapia, enfocados a adquirir nuevas herramientas para la autoindagación y el crecimiento personal.
            </p>
            <p className="text-lg text-muted-foreground">
              Usamos el lenguaje artístico como herramienta de autoconocimiento y crecimiento personal. El arte nos ayuda a conectar con nuestra esencia, nos facilita expresar lo que sentimos y nos anima a seguir profundizando en nuestro interior. Podemos utilizar pintura, arcilla, objetos encontrados, collage, fotografía, video, telas, escritura, teatro… No importa la obra que resulte, es el proceso en el que nos volcamos y nos re-conocemos, lo que interesa.
            </p>
            <p className="text-lg text-muted-foreground">
              De la mano del arte, podemos revisar las emociones, las polaridades, los límites, las necesidades, las formas de dar y recibir, las relaciones, nuestro lugar en el mundo…
            </p>
            <p className="text-lg text-muted-foreground">
              Acompaño sesiones de arteterapia individual, on line y presencial. En Madrid y Denia.
            </p>
          
            <div className="grid gap-6">
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
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default ArtTherapy;
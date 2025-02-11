import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";

const testimonials = [
  {
    name: "Laura Sánchez",
    text: "La arteterapia ha sido una experiencia transformadora en mi vida.",
  },
  {
    name: "Carlos Ruiz",
    text: "Un espacio seguro para explorar y sanar a través del arte.",
  },
];

const ArtTherapy = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        {/* Próximos cursos */}
        <section className="mb-12">
          <Card className="bg-accent">
            <CardHeader>
              <CardTitle>Próximos Cursos de Arteterapia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge>Nuevo Grupo</Badge>
                  <span className="text-lg">Inicio Mayo 2024 - Plazas limitadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Taller</Badge>
                  <span className="text-lg">Taller introductorio - 20 de Abril</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonios */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Información de los cursos */}
        <section className="grid md:grid-cols-2 gap-8">
          
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Arteterapia humanista y terapia gestalt
            </h1>
            <h3 className="text-xl text-muted-foreground">Madrid</h3>
            <p className="text-lg text-muted-foreground">
            Colaboro con la Escuela de Arteterapia y Terapia Gestalt, que dirige Raquel Muñoz Albacete, acompañando en distintos Módulos de sus Ciclos de Formación e imparto Talleres y Cursos intensivos de distintos aspectos del Arteterapia, enfocados a adquirir nuevas herramientas para la autoindagación y el crecimiento personal.
            </p>
          </div>
          
          <div>
          <img
            src="/logoescuela.png"
            alt="Sesión de arteterapia"
            className="rounded-lg w-full h-auto"
          />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Talleres de Arteterapia
            </h1>
            <h3 className="text-xl text-muted-foreground">Arte como Camino</h3>
            <p className="text-lg text-muted-foreground">
            Usamos el lenguaje artístico como herramienta de autoconocimiento y crecimiento personal. El arte nos ayuda a conectar con nuestra esencia, nos facilita expresar lo que sentimos y nos anima a seguir profundizando en nuestro interior. Podemos utilizar pintura, arcilla, objetos encontrados, collage, fotografía, video, telas, escritura, teatro… No importa la obra que resulte, es el proceso en el que nos volcamos y nos re-conocemos, lo que interesa.
            </p>
            <p className="text-lg text-muted-foreground">
            De la mano del arte, podemos revisar las emociones, las polaridades, los límites, las necesidades, las formas de dar y recibir, las relaciones, nuestro lugar en el mundo…
            </p>
            <p className="text-lg text-muted-foreground">
            Acompaño sesiones de arteterapia individual, on line y presencial. En Madrid y Denia.
            </p>
          </div>

          <div>
            <img
              src="/art01.jpg"
              alt="Sesión de arteterapia"
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
          
          <div>
            <img
              src="/art02.jpg"
              alt="Sesión de arteterapia"
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
          
          <div>
            <img
              src="/art03.jpg"
              alt="Sesión de arteterapia"
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArtTherapy;

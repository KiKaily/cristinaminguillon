
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "María García",
    text: "Las clases son increíblemente enriquecedoras. He aprendido tanto sobre historia del arte de una manera muy amena.",
  },
  {
    name: "Juan Pérez",
    text: "La profesora tiene una manera única de explicar que hace que cada clase sea fascinante.",
  },
  {
    name: "Ana Martínez",
    text: "El contenido es excelente y muy bien estructurado. Totalmente recomendable.",
  },
];

const Classes = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[6%] pb-8 container mx-auto px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-4xl">Cursos</CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4 space-y-12">
            <section>
              <Card className="bg-accent">
                <CardHeader>
                  <CardTitle>Próximas Clases y Ofertas</CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-6 space-y-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Nuevo</Badge>
                      <span className="text-xl">Historia del Arte Moderno - Inicio 15 de Mayo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Oferta</Badge>
                      <span className="text-xl">20% descuento en pack de 3 meses</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="text-center">
              <Link to="/contenido-premium">
                <Button size="lg" className="animate-pulse text-xl">
                  Acceder a los cursos y clases
                </Button>
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Lo que dicen mis alumnos</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="px-6 py-4 space-y-2">
                      <p className="text-xl text-muted-foreground mb-2">{testimonial.text}</p>
                      <p className="font-semibold text-xl">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <Card>
                <CardContent className="px-[4%] py-[4%] space-y-6">
                  <h2 className="text-3xl font-semibold mb-4">Historia del arte contemporáneo</h2>
                  <h3 className="text-2xl font-semibold mb-4">Arte en curso</h3>
                  <p className="text-xl text-muted-foreground">
                    ¿Qué tienen en común para ti el arte de las pinturas rupestres y el arte de nuestro tiempo?
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Esta es una de las muchas preguntas que pueden escucharse cuando nos reunimos a ver, hablar, investigar y descubrir artistas y obras.
                  </p>
                  <p className="text-xl text-muted-foreground">
                    En los talleres de arte repasamos la historia, los hechos objetivos, la crónica histórica y también, lo que nos trasmiten obras y artistas a cada una de las personas que asistimos. Las diferentes miradas enriquecen, completan y amplían la propia.
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Los talleres de arte son flexibles y variados en propuestas y actividades, motivan a quienes asisten a participar activamente en su propia formación. Son dinámicos y abiertos al debate, a compartir opiniones, información y propuestas. Hacemos visitas a distintos lugares que nos vinculan al arte y a la vida: galerías, museos, centros culturales, escuelas, edificios, recorridos por la ciudad, estudios de artistas, conciertos, mercados…
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4 mt-8">Clase gratuita de muestra</h3>
                  <div className="mt-6">
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

                  <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4">Salidas</h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      Dentro de los cursos, están incluidos encuentros mensuales con artistas en sus estudios y exposiciones.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <img
                        src="/sal02.jpg"
                        alt="Naturaleza 1"
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                      <img
                        src="/sal05.jpg"
                        alt="Naturaleza 2"
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                      <img
                        src="/sal06.jpg"
                        alt="Naturaleza 2"
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                      <img
                        src="/sal07.jpg"
                        alt="Naturaleza 1"
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                      <img
                        src="/sal08.jpg"
                        alt="Naturaleza 2"
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                      <img
                        src="/sal09.jpg"
                        alt="Naturaleza 2"
                        className="w-full h-[300px] object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 mt-10">Cursos Pasados</h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    """---Explicación de estos dos carteles o eliminarlos.---"""
                  </p>
                  <div className="grid md:grid-cols-1 gap-4">
                    <img
                      src="/CURSO1.jpg"
                      alt="Naturaleza 1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 mt-10">Cursos Pasados</h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    """---Explicación de estos dos carteles o eliminarlos.---"""
                  </p>
                  <div className="grid md:grid-cols-1 gap-4">
                    <img
                      src="/CURSO2.jpg"
                      alt="Naturaleza 1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Classes;


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
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        {/* Ofertas y próximas fechas */}
        <section className="mb-12">
          <Card className="bg-accent">
            <CardHeader>
              <CardTitle>Próximas Clases y Ofertas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Nuevo</Badge>
                  <span className="text-lg">Historia del Arte Moderno - Inicio 15 de Mayo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Oferta</Badge>
                  <span className="text-lg">20% descuento en pack de 3 meses</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Botón de contenido de pago */}
        <section className="text-center mb-12">
          <Link to="/contenido-premium">
            <Button size="lg" className="animate-pulse">
              Acceder a los cursos y clases
            </Button>
          </Link>
        </section>

        {/* Testimonios */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Lo que dicen mis alumnos</h2>
          <div className="grid md:grid-cols-3 gap-6">
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

        {/* Video explicativo */}
        <section className="mb-12">
  <Card>
    <CardContent className="pt-6">
      <div className="prose max-w-none mb-6">
        <h1 className="text-2xl font-semibold mb-4">Historia del arte contemporáneo</h1>
        <h2 className="text-2xl font-semibold mb-4">Arte en cuerso</h2>
        <p className="text-muted-foreground">
          ¿Qué tienen en común para ti el arte de las pinturas rupestres y el arte de nuestro tiempo?
        </p>
        <p className="text-muted-foreground">
          Esta es una de las muchas preguntas que pueden escucharse cuando nos reunimos a ver, hablar, investigar y descubrir artistas y obras.
        </p>
        <p className="text-muted-foreground">
          En los talleres de arte repasamos la historia, los hechos objetivos, la crónica histórica y también, lo que nos trasmiten obras y artistas a cada una de las personas que asistimos. Las diferentes miradas enriquecen, completan y amplían la propia.
        </p>
        <p className="text-muted-foreground">
          Los talleres de arte son flexibles y variados en propuestas y actividades, motivan a quienes asisten a participar activamente en su propia formación. Son dinámicos y abiertos al debate, a compartir opiniones, información y propuestas. Hacemos visitas a distintos lugares que nos vinculan al arte y a la vida: galerías, museos, centros culturales, escuelas, edificios, recorridos por la ciudad, estudios de artistas, conciertos, mercados…
        </p>
        <div className="my-4"></div>
        <h2 className="text-2xl font-semibold mb-4">Clase gratuita de muestra</h2>
      </div>
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <video className="w-full h-full object-cover" controls>
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      <div className="my-10"></div>

      <div className="prose max-w-none mb-6">
      <h2 className="text-2xl font-semibold mb-4">Salidas</h2>
        <p className="text-muted-foreground">
          Dentro de los cursos, están incluidos encuentros mensuales con artistas en sus estudios y exposiciones.
        </p>
      </div>
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

      <div className="my-10"></div>

      <div className="prose max-w-none mb-6">
      <h2 className="text-2xl font-semibold mb-4">Cursos Pasados</h2>
        <p className="text-muted-foreground">
          """---Explicación de estos dos carteles o eliminarlos.---""""
        </p>
      </div>        

      <div className="grid md:grid-cols-1 gap-4">
        <img
          src="/CURSO1.jpg"
          alt="Naturaleza 1"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>

      <div className="my-10"></div>
      
      <div className="prose max-w-none mb-6">
      <h2 className="text-2xl font-semibold mb-4">Cursos Pasados</h2>
        <p className="text-muted-foreground">
          """---Explicación de estos dos carteles o eliminarlos.---""""
        </p>
      </div>         

      <div className="grid md:grid-cols-1 gap-4">
        <img
          src="/CURSO2.jpg"
          alt="Naturaleza 1"
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>
    </CardContent>
  </Card>
</section>
      </main>
      <Footer />
    </>
  );
};

export default Classes;

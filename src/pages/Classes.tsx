
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 mt-20 md:mt-0">Cursos Online y Grabados</h1>
        
        <section className="mb-16">
          <div className="bg-accent/30 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6">Información Destacada</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Nuevo</Badge>
                <span className="text-2xl">Cambio de fechas en el curso "Historia del Arte"</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="destructive">Oferta</Badge>
                <span className="text-2xl">20% descuento en pack de 3 meses</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Online Courses */}
            <div className="bg-white/90 backdrop-blur-sm p-12 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold mb-6 text-black">Cursos Online</h2>
              <p className="text-2xl text-black mb-8">
                Únete a nuestros cursos en directo, vía ZOOM, con interacción entre alumnado y Cristina, preguntas en tiempo real y comunidad de aprendizaje. Clases programadas con horarios fijos y participación activa.
                </p>
              <Link to="/contenido-envivo">
                <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4">
                  Ver Cursos
                </Button>
              </Link>
            </div>

            {/* Pre-recorded Classes */}
            <div className="bg-white/90 backdrop-blur-sm p-12 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold mb-6 text-black">Cursos Grabados</h2>
              <p className="text-2xl text-black mb-8">
                Accede a nuestro catálogo completo de clases grabadas disponibles las 24 horas. Aprende a tu ritmo con contenido que puedes revisar cuantas veces necesites.
                </p>
              <Link to="/contenido-premium">
                <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4">
                  Ver Cursos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Lo que dicen mis alumnos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="hover-lift p-8 bg-accent/20 rounded-lg">
                <p className="text-xl text-muted-foreground mb-4">{testimonial.text}</p>
                <p className="text-xl font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="p-8 rounded-lg">
            <div className="prose max-w-none mb-8">
              <h2 className="text-3xl font-semibold mb-6">Historia del arte contemporáneo</h2>
              <h3 className="text-2xl font-semibold mb-6">Arte en curso</h3>
              <p className="text-xl text-muted-foreground mb-4">
                ¿Qué tienen en común para ti el arte de las pinturas rupestres y el arte de nuestro tiempo?
              </p>
              <p className="text-xl text-muted-foreground mb-4">
                Esta es una de las muchas preguntas que pueden escucharse cuando nos reunimos a ver, hablar, investigar y descubrir artistas y obras.
              </p>
              <p className="text-xl text-muted-foreground mb-4">
                En los talleres de arte repasamos la historia, los hechos objetivos, la crónica histórica y también, lo que nos trasmiten obras y artistas a cada una de las personas que asistimos. Las diferentes miradas enriquecen, completan y amplían la propia.
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Los talleres de arte son flexibles y variados en propuestas y actividades, motivan a quienes asisten a participar activamente en su propia formación. Son dinámicos y abiertos al debate, a compartir opiniones, información y propuestas. Hacemos visitas a distintos lugares que nos vinculan al arte y a la vida: galerías, museos, centros culturales, escuelas, edificios, recorridos por la ciudad, estudios de artistas, conciertos, mercados…
              </p>
            </div>
            
            <div className="my-16"></div>
            
            <h2 className="text-3xl font-semibold mb-8">Clase gratuita de muestra</h2>
            <div className="mt-8">
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

            <div className="mt-16">
              <h2 className="text-3xl font-semibold mb-6">Salidas</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Dentro de los cursos, están incluidos encuentros mensuales con artistas en sus estudios y exposiciones.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
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

            <div className="my-16"></div>

            <h2 className="text-3xl font-semibold mb-6">Cursos Pasados</h2>
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

            <div className="my-16"></div>
            
            <h2 className="text-3xl font-semibold mb-6">Cursos Pasados</h2>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Classes;

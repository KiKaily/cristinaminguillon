import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CourseDetailLive = () => {
  const { id } = useParams();

  const courseDetails = {
    "curso-historia-envivo": {
      title: "Historia del Arte Contemporáneo - En Vivo",
      description: "Curso completo de historia del arte contemporáneo con clases en vivo e interacción directa.",
      fullDescription: "Únete a nuestro curso en vivo donde exploraremos la historia del arte contemporáneo con interacción directa. Clases en tiempo real vía Zoom con participación activa y discusión grupal.",
      schedule: "Martes y Jueves 19:00-21:00",
      startDate: "15 de Febrero 2025",
      duration: "8 semanas",
      modules: [
        "Introducción al Arte Contemporáneo",
        "Movimientos de Vanguardia",
        "Arte Post-Guerra",
        "Arte Digital y Nuevas Tecnologías",
        "Tendencias Actuales",
        "Análisis de Obras Contemporáneas",
        "Crítica y Debate",
        "Proyecto Final"
      ],
      image: "/kai01.jpg",
      price: "299€",
      isPaid: true
    },
    "masterclass-arte-moderno": {
      title: "Masterclass: Arte Moderno",
      description: "Sesión intensiva sobre los movimientos artísticos del siglo XX con análisis en tiempo real.",
      fullDescription: "Masterclass intensiva de fin de semana sobre los grandes movimientos del arte moderno. Sesiones interactivas con análisis en tiempo real y debate grupal.",
      schedule: "Sábado 10:00-14:00 y Domingo 10:00-14:00",
      startDate: "8-9 de Marzo 2025",
      duration: "2 días intensivos",
      modules: [
        "Impresionismo y Post-impresionismo",
        "Fauvismo y Expresionismo",
        "Cubismo y Futurismo",
        "Dadaísmo y Surrealismo",
        "Expresionismo Abstracto",
        "Pop Art y Arte Conceptual"
      ],
      image: "/kai02.jpg",
      price: "189€",
      isPaid: true
    },
    "taller-critica-arte": {
      title: "Taller de Crítica de Arte",
      description: "Aprende a analizar y criticar obras de arte con metodología profesional en sesiones interactivas.",
      fullDescription: "Taller práctico para desarrollar habilidades de crítica artística. Aprenderás metodologías profesionales para analizar y evaluar obras de arte contemporáneo.",
      schedule: "Miércoles 18:00-20:00",
      startDate: "22 de Febrero 2025",
      duration: "6 semanas",
      modules: [
        "Fundamentos de la Crítica",
        "Metodologías de Análisis",
        "Lenguaje Crítico Especializado",
        "Análisis de Casos Prácticos",
        "Escritura de Reseñas",
        "Presentación de Análisis"
      ],
      image: "/kai03.jpg",
      price: "159€",
      isPaid: true
    }
  };

  const course = courseDetails[id as keyof typeof courseDetails];

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-8">
          <h1 className="text-4xl font-bold mb-8">Curso no encontrado</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              <Badge variant="destructive">En Vivo</Badge>
              <Badge variant="secondary">{course.price}</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{course.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Sobre este curso</h2>
              <p className="text-lg mb-6">{course.fullDescription}</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horario</h3>
                  <p className="text-lg">{course.schedule}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fecha de inicio</h3>
                  <p className="text-lg">{course.startDate}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Duración</h3>
                  <p className="text-lg">{course.duration}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Programa del curso</h2>
            <div className="grid gap-4">
              {course.modules.map((module, index) => (
                <div key={index} className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="text-xl font-medium">Semana {index + 1}: {module}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/contenido-envivo">
              <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4 mr-4">
                Volver a cursos
              </Button>
            </Link>
            <Link to={`/inscripcion/${id}`}>
              <Button variant="outline" className="text-xl px-8 py-4">
                Inscribirme ahora
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseDetailLive;
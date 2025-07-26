import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();

  const courseDetails = {
    "curso-historia": {
      title: "Curso Completo de Historia del Arte",
      description: "Accede a todas las clases grabadas y material complementario.",
      fullDescription: "Este curso completo abarca desde el arte clásico hasta las manifestaciones contemporáneas. Incluye análisis profundo de movimientos artísticos, técnicas y contexto histórico de cada época.",
      duration: "40 horas de contenido",
      modules: [
        "Arte Clásico y Renacentista",
        "Barroco y Neoclasicismo", 
        "Impresionismo y Post-impresionismo",
        "Vanguardias del siglo XX",
        "Arte Contemporáneo"
      ],
      image: "/art01.jpg",
      price: "149€",
      isPaid: true
    },
    "masterclass": {
      title: "Masterclass de Arte Contemporáneo",
      description: "Series especiales sobre movimientos artísticos actuales.",
      fullDescription: "Una inmersión profunda en el arte contemporáneo, explorando las tendencias actuales, artistas emergentes y las nuevas formas de expresión artística en el siglo XXI.",
      duration: "15 horas de contenido",
      modules: [
        "Arte Digital y Nuevas Tecnologías",
        "Street Art y Arte Urbano",
        "Instalaciones y Performance",
        "Arte Conceptual Contemporáneo"
      ],
      image: "/art02.jpg",
      price: "89€",
      isPaid: true
    },
    "tecnicas": {
      title: "Técnicas Artísticas Avanzadas",
      description: "Tutoriales detallados sobre diversas técnicas.",
      fullDescription: "Aprende técnicas artísticas profesionales paso a paso. Desde técnicas tradicionales hasta métodos contemporáneos de creación artística.",
      duration: "25 horas de contenido",
      modules: [
        "Técnicas de Pintura al Óleo",
        "Acuarela Avanzada",
        "Técnicas Mixtas",
        "Escultura Básica"
      ],
      image: "/art03.jpg",
      price: "Gratis",
      isPaid: false
    },
    "analisis": {
      title: "Análisis de Obras Maestras",
      description: "Estudio profundo de obras icónicas de la historia del arte.",
      fullDescription: "Análisis detallado de las obras más importantes de la historia del arte, estudiando su contexto, técnica, simbolismo y legado artístico.",
      duration: "30 horas de contenido",
      modules: [
        "La Gioconda - Leonardo da Vinci",
        "Las Meninas - Velázquez",
        "La Noche Estrellada - Van Gogh",
        "Guernica - Picasso"
      ],
      image: "/des01.jpg",
      price: "119€",
      isPaid: true
    },
    "recursos": {
      title: "Recursos y Materiales Exclusivos",
      description: "Biblioteca digital de recursos para estudiantes.",
      fullDescription: "Acceso completo a nuestra biblioteca digital con recursos exclusivos, plantillas, guías de estudio y material complementario para profundizar en tu aprendizaje.",
      duration: "Material permanente",
      modules: [
        "Biblioteca Digital",
        "Plantillas y Guías",
        "Material de Referencia",
        "Recursos Descargables"
      ],
      image: "/lib01.jpg",
      price: "Gratis",
      isPaid: false
    },
    "workshops": {
      title: "Workshops en Directo",
      description: "Acceso a sesiones en vivo y sus grabaciones.",
      fullDescription: "Participación en workshops exclusivos en directo con acceso posterior a todas las grabaciones. Incluye sesiones de Q&A y proyectos prácticos.",
      duration: "20 horas de contenido",
      modules: [
        "Workshop de Composición",
        "Técnicas de Color",
        "Crítica Constructiva",
        "Proyectos Finales"
      ],
      image: "/des02.jpg",
      price: "199€",
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
              <Badge className={course.isPaid ? "" : "bg-[#9b87f5]"}>
                {course.isPaid ? "contenido de pago" : "gratis"}
              </Badge>
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
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Duración</h3>
                <p className="text-lg">{course.duration}</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Módulos del curso</h2>
            <div className="grid gap-4">
              {course.modules.map((module, index) => (
                <div key={index} className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="text-xl font-medium">Módulo {index + 1}: {module}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/contenido-premium">
              <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4 mr-4">
                Volver a cursos
              </Button>
            </Link>
            {course.isPaid && (
              <Link to={`/contenido/${id}`}>
                <Button variant="outline" className="text-xl px-8 py-4">
                  Acceder al contenido
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseDetail;
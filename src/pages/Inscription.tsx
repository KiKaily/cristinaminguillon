import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Inscription = () => {
  const { id } = useParams();

  const courseDetails = {
    "curso-historia-envivo": {
      title: "Historia del Arte Contemporáneo - En Vivo",
      price: "299€",
      email: "inscripciones@cristinaarte.com"
    },
    "masterclass-arte-moderno": {
      title: "Masterclass: Arte Moderno", 
      price: "189€",
      email: "inscripciones@cristinaarte.com"
    },
    "taller-critica-arte": {
      title: "Taller de Crítica de Arte",
      price: "159€", 
      email: "inscripciones@cristinaarte.com"
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

  const emailSubject = `Inscripción - ${course.title}`;
  const emailBody = `Hola Cristina,

Me gustaría inscribirme en el curso "${course.title}".

Por favor, envíame información sobre:
• Proceso de inscripción y pago
• Materiales necesarios para el curso
• Enlace de acceso a las clases por Zoom
• Fechas exactas y horarios
• Política de cancelación
• Certificado de participación

Mi información de contacto:
Nombre: [Tu nombre completo]
Teléfono: [Tu teléfono]
Nivel de experiencia: [Principiante/Intermedio/Avanzado]

Quedo a la espera de tu respuesta.

Saludos cordiales.`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="destructive" className="mb-4">Inscripción</Badge>
            <h1 className="text-5xl font-bold mb-6">Inscripción al Curso</h1>
            <h2 className="text-3xl font-semibold mb-4">{course.title}</h2>
            <div className="bg-accent/20 p-6 rounded-lg mb-8">
              <p className="text-2xl font-semibold mb-2">Precio: {course.price}</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-3xl font-semibold mb-6">Cómo inscribirte</h3>
            <p className="text-xl mb-6">
              Para inscribirte en este curso, envía un email a <strong>{course.email}</strong> con la siguiente información:
            </p>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-4">Información requerida en tu email:</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Tu nombre completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Número de teléfono de contacto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Tu nivel de experiencia (Principiante/Intermedio/Avanzado)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Confirmación de disponibilidad en los horarios del curso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Método de pago preferido</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-4">Recibirás información sobre:</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Proceso de inscripción y pago</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Materiales necesarios para el curso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Enlace de acceso a las clases por Zoom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Fechas exactas y horarios detallados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Política de cancelación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Información sobre certificado de participación</span>
                </li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <a 
                href={`mailto:${course.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                className="block"
              >
                <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4">
                  Enviar email de inscripción
                </Button>
              </a>
              <p className="text-lg text-muted-foreground">
                Al hacer clic se abrirá tu cliente de email con el mensaje preparado
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contenido-envivo">
              <Button variant="outline" className="text-xl px-8 py-4 mr-4">
                Volver a cursos
              </Button>
            </Link>
            <Link to={`/curso-detalle-envivo/${id}`}>
              <Button variant="secondary" className="text-xl px-8 py-4">
                Ver detalles del curso
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Inscription;
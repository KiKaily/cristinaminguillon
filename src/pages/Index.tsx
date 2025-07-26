
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] relative z-10">
        {/* Author Introduction Section */}
        <section className="w-full py-16 px-6 bg-white/50 pt-32">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img 
                src="/me2.jpg" 
                alt="Autora" 
                className="w-64 h-64 object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6 text-black">Sobre mí</h2>
              <p className="text-2xl text-black leading-relaxed">
                Soy una artista y educadora apasionada por el arte y la historia. 
                Mi misión es compartir conocimiento y inspirar a otros a través de 
                cursos dinámicos que combinan teoría, práctica y creatividad.
              </p>
              <Link to="/sobre-mi">
                  <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4 mt-6">
                    Más sobre mí
                  </Button>
                </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl font-bold text-center mb-16 text-black">Información Destacada</h1>
            
            {/* Discount Highlight */}
            <div className="bg-accent/30 p-8 rounded-lg mb-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="destructive">Oferta</Badge>
                <span className="text-2xl font-semibold">20% descuento en pack de 3 meses</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="destructive">Nuevo</Badge>
                <span className="text-2xl font-semibold">Cambio de fechas en el curso "Historia del Arte"</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Online Courses */}
              <div className="bg-white/90 backdrop-blur-sm p-12 rounded-xl shadow-lg">
                <h2 className="text-4xl font-bold mb-6 text-black">Cursos Online</h2>
                <p className="text-2xl text-black mb-8">
                  Únete a nuestros cursos en directo, vía ZOOM, con interacción entre alumnado y Cristina, preguntas en tiempo real y comunidad de aprendizaje. Clases programadas con horarios fijos y participación activa.
                </p>
                <Link to="/contenido-envivo">
                  <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4">
                    Ver más
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
                    Ver más
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relative w-full h-[60vh] overflow-hidden mb-8">
          <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px]" />
          <video
            controls
            playsInline
            autoPlay
            muted
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src="/index-video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;

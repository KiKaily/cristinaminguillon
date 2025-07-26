
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] relative z-10">
        <section className="w-full py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl font-bold text-center mb-16 text-black">Cursos</h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Online Courses */}
              <div className="bg-white/90 backdrop-blur-sm p-12 rounded-xl shadow-lg">
                <h2 className="text-4xl font-bold mb-6 text-black">Cursos Online</h2>
                <p className="text-2xl text-black mb-8">
                  Únete a nuestros cursos en vivo con interacción directa y comunidad de aprendizaje.
                </p>
                <Link to="/classes">
                  <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4">
                    Ver Cursos Online
                  </Button>
                </Link>
              </div>

              {/* Pre-recorded Classes */}
              <div className="bg-white/90 backdrop-blur-sm p-12 rounded-xl shadow-lg">
                <h2 className="text-4xl font-bold mb-6 text-black">Clases Pregrabadas</h2>
                <p className="text-2xl text-black mb-8">
                  Accede a nuestro catálogo de clases grabadas disponibles para compra inmediata.
                </p>
                <Link to="/classes">
                  <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-8 py-4">
                    Comprar Clases
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

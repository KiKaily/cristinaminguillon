import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const ContentoEnVivo = () => {
  const navigate = useNavigate();

  const liveContent = [
    {
      id: "curso-historia-envivo",
      title: "Historia del Arte Contemporáneo - En Vivo",
      description: "Curso completo de historia del arte contemporáneo con clases en vivo e interacción directa.",
      isPaid: true,
      type: "Curso en Vivo"
    },
    {
      id: "masterclass-arte-moderno",
      title: "Masterclass: Arte Moderno",
      description: "Sesión intensiva sobre los movimientos artísticos del siglo XX con análisis en tiempo real.",
      isPaid: true,
      type: "Masterclass"
    },
    {
      id: "taller-critica-arte",
      title: "Taller de Crítica de Arte",
      description: "Aprende a analizar y criticar obras de arte con metodología profesional en sesiones interactivas.",
      isPaid: true,
      type: "Taller"
    }
  ];

  const handleAccessContent = (contentId: string) => {
    navigate(`/contenido-protegido/${contentId}`);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 mt-20 md:mt-0">Contenido En Vivo</h1>
        
        <div className="space-y-8">
          {liveContent.map((content) => (
            <div key={content.id} className="bg-accent/20 p-8 rounded-lg hover-lift">
              <div className="flex flex-wrap gap-2 mb-4">
                {content.isPaid && <Badge variant="destructive">De Pago</Badge>}
                <Badge variant="secondary">{content.type}</Badge>
              </div>
              <h2 className="text-3xl font-semibold mb-4">{content.title}</h2>
              <p className="text-xl text-muted-foreground mb-6">{content.description}</p>
              <div className="space-y-3">
                <Button 
                  onClick={() => {
                    navigate(`/inscripcion/${content.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-black text-xl px-6 py-3 w-full"
                >
                  Para inscribirme
                </Button>
                <Button 
                  onClick={() => {
                    navigate(`/curso-detalle-envivo/${content.id}`);
                    window.scrollTo(0, 0);
                  }}
                  variant="secondary"
                  className="w-full text-xl"
                >
                  Ver más sobre el curso
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContentoEnVivo;
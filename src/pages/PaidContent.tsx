
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PaidContent = () => {
  const navigate = useNavigate();
  const paidContent = [
    {
      id: "curso-historia",
      title: "Curso Completo de Historia del Arte",
      description: "Accede a todas las clases grabadas y material complementario.",
      isPaid: true,
      type: "curso"
    },
    {
      id: "masterclass",
      title: "Masterclass de Arte Contemporáneo",
      description: "Series especiales sobre movimientos artísticos actuales.",
      isPaid: true,
      type: "clase"
    },
    {
      id: "tecnicas",
      title: "Técnicas Artísticas Avanzadas",
      description: "Tutoriales detallados sobre diversas técnicas.",
      isPaid: false,
      type: "curso"
    },
    {
      id: "analisis",
      title: "Análisis de Obras Maestras",
      description: "Estudio profundo de obras icónicas de la historia del arte.",
      isPaid: true,
      type: "clase"
    },
    {
      id: "recursos",
      title: "Recursos y Materiales Exclusivos",
      description: "Biblioteca digital de recursos para estudiantes.",
      isPaid: false,
      type: "clase"
    },
    {
      id: "workshops",
      title: "Workshops en Directo",
      description: "Acceso a sesiones en vivo y sus grabaciones.",
      isPaid: true,
      type: "curso"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 mt-20">Contenido de Pago</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paidContent.map((content) => (
            <div key={content.id} className="hover-lift p-8 bg-[#E8DCC0]/90 rounded-lg">
              <div className="flex gap-2 flex-wrap mb-4">
                <Badge className={content.isPaid ? "" : "bg-[#9b87f5]"}>
                  {content.isPaid ? "contenido de pago" : "gratis"}
                </Badge>
                <Badge className="bg-[#F2FCE2] hover:bg-[#E2ECD2] text-black">
                  {content.type}
                </Badge>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{content.title}</h3>
              <p className="text-xl text-muted-foreground mb-6">
                {content.description}
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={() => {
                    navigate(`/contenido-protegido/${content.id}`);
                    window.scrollTo(0, 0);
                  }}
                  variant="outline"
                  className="w-full text-xl"
                >
                  Acceder al contenido
                </Button>
                <Button 
                  onClick={() => {
                    navigate(`/curso-detalle/${content.id}`);
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

export default PaidContent;

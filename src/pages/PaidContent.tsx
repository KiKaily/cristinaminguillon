
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <h1 className="text-4xl font-bold mb-8">Contenido de Pago</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paidContent.map((content) => (
            <Card key={content.id} className="hover-lift">
              <CardHeader>
                <div className="flex gap-2 flex-wrap">
                  <Badge className={content.isPaid ? "" : "bg-[#9b87f5]"}>
                    {content.isPaid ? "contenido de pago" : "gratis"}
                  </Badge>
                  <Badge className="bg-[#F2FCE2] hover:bg-[#E2ECD2] text-black">
                    {content.type}
                  </Badge>
                </div>
                <CardTitle>{content.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {content.description}
                </p>
                <Button 
                  onClick={() => navigate(`/contenido/${content.id}`)}
                  variant="outline"
                  className="w-full"
                >
                  Acceder al contenido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaidContent;

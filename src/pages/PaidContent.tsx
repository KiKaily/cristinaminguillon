
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PaidContent = () => {
  const paidContent = [
    {
      title: "Curso Completo de Historia del Arte",
      description: "Accede a todas las clases grabadas y material complementario.",
    },
    {
      title: "Masterclass de Arte Contemporáneo",
      description: "Series especiales sobre movimientos artísticos actuales.",
    },
    {
      title: "Técnicas Artísticas Avanzadas",
      description: "Tutoriales detallados sobre diversas técnicas.",
    },
    {
      title: "Análisis de Obras Maestras",
      description: "Estudio profundo de obras icónicas de la historia del arte.",
    },
    {
      title: "Recursos y Materiales Exclusivos",
      description: "Biblioteca digital de recursos para estudiantes.",
    },
    {
      title: "Workshops en Directo",
      description: "Acceso a sesiones en vivo y sus grabaciones.",
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contenido de Pago</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paidContent.map((content, index) => (
            <Card key={index}>
              <CardHeader>
                <Badge className="w-fit">Premium</Badge>
                <CardTitle>{content.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {content.description}
                </p>
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

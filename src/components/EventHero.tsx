
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function EventHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Exposición Actual</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            "Babel - Exposición de Cerámica"
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Una exploración de la belleza natural a través del color y la forma.
            Exposición de pinturas y cerámicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-lift">
              Ver Detalles
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              Reservar Visita Guiada
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <p className="text-muted-foreground">Galería de Arte Moderna</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Fechas</h3>
              <p className="text-muted-foreground">15 Mar - 15 Abr 2024</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Horario</h3>
              <p className="text-muted-foreground">Mar-Dom, 10:00 - 20:00</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

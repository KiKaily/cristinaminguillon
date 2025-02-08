
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
            "Exposición de Cerámicas"
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
          Una nueva oportunidad para encontrarnos a la sombra de BABEL, con nuevas piezas entre las que charlar, reír, contarnos, recordar, emocionarnos...
          Será en Vallecas, en el Centro Cultural Paco Rabal. Un placer vernos por allí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="hover-lift">
              Reservar Visita Guiada
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <p className="text-muted-foreground">Centro Cultural Carmen Conde. Majadahonda.</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Fechas</h3>
              <p className="text-muted-foreground">Del 13 al 22 de febrero de 2025.</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Horario</h3>
              <p className="text-muted-foreground">Lunes a Viernes, de 10:00 a 20:00</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

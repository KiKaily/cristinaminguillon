
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function EventHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
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
          Un placer anunciaros la agenda de mis exposiciones para los próximos días:
          </p>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
          -Jueves 13: 18h
          Inauguración de la expo de Cerámica con obras de 1985 a 2024, en la Sala Ángeles Santos del Centro Cultural Carmen Conde de Majadahonda, Madrid.
                    </p>
                    <p className="text-lg text-muted-foreground mb-8 text-balance">
          Nos vemos. Gracias por estar ahí. Abrazos.
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

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Próximas Exposiciones</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <li>Próximamente...</li>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </section>
  );
}

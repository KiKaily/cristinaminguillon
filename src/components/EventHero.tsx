
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function EventHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 mt-16">
        <Card className="bg-secondary/80 backdrop-blur-sm mb-12">
          <CardHeader>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg font-medium">Exposición Actual</span>
              </div>
            </div>
            <CardTitle className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">
              "Exposición de Cerámicas"
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl text-muted-foreground mb-6 text-balance">
              Una nueva oportunidad para encontrarnos a la sombra de BABEL, con nuevas piezas entre las que charlar, reír, contarnos, recordar, emocionarnos... 
            </p>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Un placer vernos por allí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button size="lg" variant="outline" className="hover-lift text-lg">
                Reservar Visita Guiada
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Ubicación</h3>
              <p className="text-lg text-muted-foreground">Centro Cultural Carmen Conde. Majadahonda.</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Fechas</h3>
              <p className="text-lg text-muted-foreground">Del 13 al 22 de febrero de 2025.</p>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Horario</h3>
              <p className="text-lg text-muted-foreground">Lunes a Viernes, de 10:00 a 20:00</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Próximas Exposiciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <p className="text-lg">Próximamente...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

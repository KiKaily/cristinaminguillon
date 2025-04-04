
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

export function EventHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/85 text-primary px-4 py-2 rounded-full mb-6">
            <Calendar className="w-5 h-5" />
            <span className="text-base font-medium opacity-85">Exposición Actual</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance">
            "Exposición de Cerámicas"
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
          Una nueva oportunidad para encontrarnos a la sombra de BABEL, con nuevas piezas entre las que charlar, reír, contarnos, recordar, emocionarnos... 
          </p>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
          Un placer vernos por allí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="hover-lift bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 border-[#DCD0BA]/20 text-xl px-8 py-6">
              Reservar Visita Guiada
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-transparent">
            <h3 className="font-semibold text-2xl mb-3">Ubicación</h3>
            <p className="text-xl text-muted-foreground">Centro Cultural Carmen Conde. Majadahonda.</p>
          </div>
          <div className="p-6 bg-transparent">
            <h3 className="font-semibold text-2xl mb-3">Fechas</h3>
            <p className="text-xl text-muted-foreground">Del 13 al 22 de febrero de 2025.</p>
          </div>
          <div className="p-6 bg-transparent">
            <h3 className="font-semibold text-2xl mb-3">Horario</h3>
            <p className="text-xl text-muted-foreground">Lunes a Viernes, de 10:00 a 20:00</p>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-8">Próximas Exposiciones</h2>
          <div className="p-6 bg-transparent">
            <li className="text-xl">Próximamente...</li>
          </div>
        </section>
      </div>
    </section>
  );
}

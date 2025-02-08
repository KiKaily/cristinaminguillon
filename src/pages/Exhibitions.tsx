
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Exhibitions = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] container mx-auto px-4">
        {/* Current Exhibition */}
        <section className="mb-12">
          <Card className="bg-accent">
            <CardHeader>
              <CardTitle>Exposición Actual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Actual</Badge>
                  <span className="text-lg">"Naturaleza y Color" - Galería Arte Nuevo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Exhibitions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Próximas Exposiciones</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">Próximamente</h3>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Past Exhibitions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Solo Exhibitions */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Exposiciones Individuales</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Exposición "Naturaleza Viva" - Galería Modern Art - 2023</li>
                    <li>Retrospectiva "Caminos" - Centro Cultural - 2022</li>
                    <li>Muestra "Texturas" - Espacio de Arte - 2021</li>
                    <li>Exposición "Fragmentos" - Galería Nueva - 2020</li>
                    <li>Colección "Memorias" - Museo Municipal - 2019</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Group Exhibitions */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Exposiciones Colectivas</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Bienal de Arte Contemporáneo - 2023</li>
                    <li>Muestra Internacional "Artistas Emergentes" - 2022</li>
                    <li>Exposición "Diálogos" - Fundación Arte - 2021</li>
                    <li>Colectiva "Nuevas Miradas" - Galería Central - 2020</li>
                    <li>Muestra "Conexiones" - Centro de Arte - 2019</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Exhibitions;

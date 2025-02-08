import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";

const testimonials = [
  {
    name: "Laura Sánchez",
    text: "La arteterapia ha sido una experiencia transformadora en mi vida.",
  },
  {
    name: "Carlos Ruiz",
    text: "Un espacio seguro para explorar y sanar a través del arte.",
  },
];

const ArtTherapy = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] container mx-auto px-4">
        {/* Próximos cursos */}
        <section className="mb-12">
          <Card className="bg-accent">
            <CardHeader>
              <CardTitle>Próximos Cursos de Arteterapia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge>Nuevo Grupo</Badge>
                  <span className="text-lg">Inicio Mayo 2024 - Plazas limitadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Taller</Badge>
                  <span className="text-lg">Taller introductorio - 20 de Abril</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonios */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Información de los cursos */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Sobre la Arteterapia</h2>
            <p className="text-lg text-muted-foreground">
              La arteterapia es una forma de terapia expresiva que utiliza el proceso
              creativo del arte para mejorar el bienestar físico, mental y emocional.
            </p>
            <p className="text-lg text-muted-foreground">
              En nuestros cursos, combinamos técnicas artísticas con procesos
              terapéuticos en un ambiente seguro y acogedor.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1501286353178-1ec881214838"
              alt="Sesión de arteterapia"
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArtTherapy;

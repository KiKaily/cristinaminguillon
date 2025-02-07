
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Sobre mí</h1>
            <p className="text-lg text-muted-foreground">
              Soy una artista apasionada por explorar diferentes formas de expresión
              artística. Mi trabajo abarca desde la pintura hasta la cerámica,
              siempre buscando nuevas formas de comunicar y conectar a través del arte.
            </p>
            <p className="text-lg text-muted-foreground">
              Con más de una década de experiencia en la enseñanza, combino mi
              práctica artística con la docencia, compartiendo conocimientos y
              experiencias con mis estudiantes.
            </p>
          </div>
          <div className="grid gap-4">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Artista en su estudio"
              className="rounded-lg object-cover w-full h-[300px]"
            />
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
              alt="Proceso creativo"
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;

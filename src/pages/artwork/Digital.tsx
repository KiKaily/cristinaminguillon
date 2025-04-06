
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Digital = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%] md:pt-[8%] container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 mt-20 md:mt-0">Libros de Artista</h1>
        <div className="space-y-8">
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6">LIBROS DE ARTISTA</h2>
            <p className="text-2xl text-muted-foreground mb-4">
              Desde 1990 ilustro libros para distintas editoriales y autoediciones, dirigidos a público infantil y adulto.
            </p>
            <p className="text-2xl text-muted-foreground mb-4">
              Los libros de artista son pequeñas joyas, piezas únicas en las que todo está permitido y me permito todo. No hay formato, tamaño, material ni temática a los que deba ceñirme. Son la libertad.
            </p>
            <p className="text-2xl text-muted-foreground mb-8">
              Son la libertad.
            </p>

            <div className="my-8"></div>

            <div className="grid md:grid-cols-3 gap-8">
              <img
                src="/lib01.jpg"
                alt="Páginas 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/lib02.jpg"
                alt="Páginas 2"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/lib03.jpg"
                alt="Páginas 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Digital;

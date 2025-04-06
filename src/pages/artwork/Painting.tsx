
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Painting = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%] md:pt-[6%] container mx-auto px-8 relative z-10">
        <h1 className="text-5xl font-bold mb-12 mt-20 md:mt-0">Ilustración</h1>
        <div className="space-y-8">
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6">ILUSTRACIONES</h2>
            <h3 className="text-2xl text-muted-foreground mb-6">Desde 1990 ilustro libros para distintas editoriales y autoediciones, dirigidos a público infantil y adulto.</h3>
            <p className="text-xl text-muted-foreground mb-8">
              <a href="http://www.ilustradores.com/component/content/article/13-cristina-minguillon/23-cristina-minguillon.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Ver más en ilustradores.com</a>              
            </p>

            <div className="my-8"></div>

            <div className="grid md:grid-cols-3 gap-8">
              <img
                src="/ilu03.png"
                alt="Ilustración 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/ilu01.jpg"
                alt="Ilustración 2"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/ilu02.jpg"
                alt="Ilustración 3"
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

export default Painting;

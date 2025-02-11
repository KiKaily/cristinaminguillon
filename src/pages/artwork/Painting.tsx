
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Painting = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Ilustración</h1>
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Desde 1990 ilustro libros para distintas editoriales y autoediciones, dirigidos a público infantil y adulto.</h2>
              <p className="text-muted-foreground">
              <a href="http://www.ilustradores.com/component/content/article/13-cristina-minguillon/23-cristina-minguillon.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Ver más en ilustradores.com</a>              
              </p>

              <div className="my-4"></div>

              <div className="grid md:grid-cols-3 gap-4">
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
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Painting;

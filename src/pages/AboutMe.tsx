import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Cristina Minguillón</h1>
            <h1 className="text-4xl font-bold">MADRID, 1959</h1>
            <p className="text-lg text-muted-foreground">
            Licenciada en Historia del Arte (UAM, 1996) / Grado en Educación con Mención en inglés (CJC, 2013) (Adaptación del título de 1984) / Arteterapeuta Gestalt (Escuela de Arteterapia Humanista. Madrid. 2015-2019) / Curso de Teatro Terapéutico Gestalt con Claudia Fres (2019) / Curso de pintura de técnicas contemporáneas de Neus Frigola (Escuela de Cerámica de La Bisbal, 2019) / Curso de Iniciación al SAT de Claudio Naranjo (2017) / Taller de Pintura Creativa con Katharina Widmer (2017) / Curso de Iniciación a la Comunicación No Violenta (2017) / Experto en Enseñanzas Artísticas (UCM, 1997) / Experto en desarrollo de Proyectos Editoriales (UCM, 2003) / Estudios en la Escuela de Cerámica de Madrid (1980-1983) / Curso de Ayudante de Documentación de la Biblioteca Nacional (1978).
            </p>
            <p className="text-lg text-muted-foreground">
            Arteterapeuta Gestalt grupal e individual (2019) / Profesora de Historia del Arte en distintos Centros Culturales (Desde 2007) / Ilustradora para distintas editoriales (Desde 1990) / Profesora de expresión plástica en inglés (2012-2017) / Documentalista en la Biblioteca del Palacio Real (Catalogación de grabados y dibujos) / Bibliotecaria en el Instituto de Patrimonio Cultural de España (Catalogación de libros y folletos de arte) / Presidenta del Consejo General del Libro Infantil y Juvenil / Profesora de Talleres de animación a la lectura en distintas bibliotecas municipales españolas / Profesora de cerámica (INEM) / Cooperativista y profesora de la Granja Escuela Huerta de la Limpia. Guadalajara / Profesora de arte del Colegio Nuestra Señora Santa María (Madrid).
            </p>
          </div>
          <div className="grid gap-4">
            <img
              src="/me.png"
              alt="Artista en su estudio"
              className="rounded-lg object-cover w-full h-[300px]"
            />
            <img
              src="/me2.jpg"
              alt="Proceso creativo"
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutMe;

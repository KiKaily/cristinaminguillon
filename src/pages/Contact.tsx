
import { Navbar } from "@/components/Navbar";
import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] pt-[5%] md:pt-[4%] container mx-auto px-4 flex flex-col items-center justify-start">
        <div className="max-w-2xl w-full mb-8 py-8 px-8 bg-transparent">
          <h1 className="text-4xl font-semibold mb-4 flex items-center gap-2">
            <Mail className="h-8 w-8" />
            Contacto
          </h1>
          <p className="text-xl text-muted-foreground">
            Si quieres ponerte en contacto conmigo hazlo en <a href="mailto:cminguillon1@gmail.com">cminguillon1@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;


import { Navbar } from "@/components/Navbar";
import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full mb-8 py-8 px-8 bg-transparent">
          <h1 className="text-5xl font-semibold mb-6 flex items-center gap-2">
            <Mail className="h-10 w-10" />
            Contacto
          </h1>
          <p className="text-2xl text-muted-foreground">
            Si quieres ponerte en contacto conmigo hazlo en <a href="mailto:cminguillon1@gmail.com" className="hover:underline">cminguillon1@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

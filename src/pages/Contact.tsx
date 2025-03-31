
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[6%] pb-8 container mx-auto px-4">
        <div className="page-title mx-auto text-center">
          <h1>Contacto</h1>
        </div>
        
        <Card className="max-w-2xl mx-auto mb-12">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-7 w-7" />
              <h2 className="text-3xl">Contacto</h2>
            </div>
            <p className="text-xl text-muted-foreground">
            Si quieres ponerte en contacto conmigo hazlo en <a href="mailto:cminguillon1@gmail.com" className="text-xl">cminguillon1@gmail.com</a>
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

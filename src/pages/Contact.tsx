
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] pt-[8%] md:pt-[5%] container mx-auto px-4 flex flex-col items-center justify-center">
        <Card className="max-w-2xl w-full mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-6 w-6" />
              Contacto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground">
            Si quieres ponerte en contacto conmigo hazlo en <a href="mailto:cminguillon1@gmail.com">cminguillon1@gmail.com</a>
            </p>
            
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

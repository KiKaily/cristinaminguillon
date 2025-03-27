
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-350px)] pt-[5%] md:pt-[5%] container mx-auto px-4">
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-3xl">
              <Mail className="h-7 w-7" />
              Contacto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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

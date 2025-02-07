
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-6 w-6" />
              Contacto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground">
            <a href="mailto:cminguillon1@gmail.com">cminguillon1@gmail.com</a>
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

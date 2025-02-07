
import { Navbar } from "@/components/Navbar";
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
              Próximamente formulario de contacto...
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Contact;

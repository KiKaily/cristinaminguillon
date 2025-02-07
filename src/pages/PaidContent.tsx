
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PaidContent = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contenido Premium</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Badge className="w-fit">Premium</Badge>
              <CardTitle>Curso Completo de Historia del Arte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Accede a todas las clases grabadas y material complementario.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default PaidContent;

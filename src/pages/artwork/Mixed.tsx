
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Mixed = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Papel</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <img
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
                alt="Papel"
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Mixed;

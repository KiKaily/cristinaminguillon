
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Sculpture = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Escultura</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Escultura"
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Sculpture;


import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Mixed = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Técnica Mixta</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <img
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
                alt="Técnica mixta"
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Mixed;

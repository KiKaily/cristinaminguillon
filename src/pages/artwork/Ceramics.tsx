
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Ceramics = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Cerámica</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                alt="Obra de cerámica"
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

export default Ceramics;

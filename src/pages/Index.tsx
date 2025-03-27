
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative z-10">
        <EventHero />
        <section className="relative w-full overflow-hidden container mx-auto px-4 pb-12">
          <Card>
            <CardContent className="p-6">
              <section className="relative w-full h-[60vh] overflow-hidden">
                <video
                  controls
                  playsInline
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg"
                >
                  <source src="/index-video.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </section>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;

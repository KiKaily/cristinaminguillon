
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4%]">
        <EventHero />
        <section className="relative w-full h-[60vh] overflow-hidden">
          <video
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;

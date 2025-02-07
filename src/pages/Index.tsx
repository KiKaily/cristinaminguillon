
import { Navbar } from "@/components/Navbar";
import { EventHero } from "@/components/EventHero";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <EventHero />
        <section className="relative w-full h-[60vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />
        </section>
      </main>
    </>
  );
};

export default Index;

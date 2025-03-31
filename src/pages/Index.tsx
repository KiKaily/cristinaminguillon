

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] relative z-10">
        <EventHero />
        <section className="relative w-full h-[60vh] overflow-hidden mb-8">
          <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px]" />
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
      </main>
      <Footer />
    </>
  );
};

export default Index;

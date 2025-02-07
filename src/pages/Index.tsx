
import { Navbar } from "@/components/Navbar";
import { EventHero } from "@/components/EventHero";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <EventHero />
      </main>
    </>
  );
};

export default Index;

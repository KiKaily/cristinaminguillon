
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function EventHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-6 z-10">
        <div className="w-full max-w-5xl space-y-6 fade-in">
          <div className="flex justify-center">
            <Button
              variant="default"
              className="bg-[#DCD0BA]/85 hover:bg-[#DCD0BA] text-black text-2xl font-normal mb-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              Exposición Actual
            </Button>
          </div>
          
          {isOpen && (
            <div className="slide-up bg-white/60 backdrop-blur-sm p-8 rounded-xl">
              <h2 className="text-4xl font-bold mb-4">Exposición "Kairós"</h2>
              <p className="text-xl mb-6">
                Un recorrido por mis últimas obras cerámicas. La exposición estará abierta hasta el 15 de mayo en el Centro Cultural La Casa Grande.
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/exposiciones">
                  <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-xl px-4 py-2">Ver más info</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

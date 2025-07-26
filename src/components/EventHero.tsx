
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function EventHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-0 z-10">
        <div className="w-full max-w-5xl space-y-0 fade-in">
          <div className="flex justify-center mt-0 mb-0">
            <Button
              variant="default"
              className="bg-[#DCD0BA]/85 hover:bg-[#DCD0BA] text-black text-2xl font-normal mb-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              Cursos online 25-26 
            </Button>
            <Link to="/classes">
              <Button
                variant="default"
                className="bg-[#DCD0BA]/85 hover:bg-[#DCD0BA] text-black text-2xl font-normal mb-0 ml-4"
              >
                Catálogo de clases y cursos grabados
              </Button>
            </Link>
          </div>
          
          {isOpen && (
            <div className="slide-up bg-white/60 backdrop-blur-sm p-8 rounded-xl mt-4">
              <h2 className="text-4xl font-bold mb-4">Cursos online de Historia del Arte</h2>
              <p className="text-xl mb-6">
                ARTE & PENSAMIENTO
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/exposiciones">
                  <Button className="bg-[#DCD0BA] hover:bg-[#DCD0BA]/90 text-xl px-4 py-2">Ver más info</Button>
                </Link>
              </div>

              <p className="text-xl mb-6">
                ARTISTA & +
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

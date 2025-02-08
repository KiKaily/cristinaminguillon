
import { Menu, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const routes = [
  { name: { es: "Inicio", en: "Home" }, path: "/" },
  {
    name: { es: "Arte", en: "Art" },
    path: "/obras",
    submenu: [
      { name: { es: "Ilustración", en: "Illustration" }, path: "/obras/pintura" },
      { name: { es: "Cerámica", en: "Ceramics" }, path: "/obras/ceramica" },
      { name: { es: "Textil", en: "Textile" }, path: "/obras/escultura" },
      { name: { es: "Libros de Artista", en: "Artist Books" }, path: "/obras/digital" },
      { name: { es: "Papel", en: "Paper" }, path: "/obras/mixta" },
    ],
  },
  { name: { es: "Expos", en: "Exhibitions" }, path: "/exposiciones" },
  { name: { es: "Cursos", en: "Courses" }, path: "/clases" },
  { name: { es: "Arteterapia", en: "Art Therapy" }, path: "/arteterapia" },
  { name: { es: "Sobre mí", en: "About" }, path: "/sobre-mi" },
  { name: { es: "Contacto", en: "Contact" }, path: "/contacto" },
];

export function Navbar() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [showSubmenu, setShowSubmenu] = useState(false);
  let submenuTimer: NodeJS.Timeout;

  const handleMouseEnter = () => {
    setShowSubmenu(true);
    if (submenuTimer) {
      clearTimeout(submenuTimer);
    }
  };

  const handleMouseLeave = () => {
    submenuTimer = setTimeout(() => {
      setShowSubmenu(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (submenuTimer) {
        clearTimeout(submenuTimer);
      }
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Cristina Minguillón
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <div
              key={route.path}
              className="relative group"
              onMouseEnter={route.submenu ? handleMouseEnter : undefined}
              onMouseLeave={route.submenu ? handleMouseLeave : undefined}
            >
              {route.submenu ? (
                <>
                  <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    {route.name[language]}
                  </span>
                  <div
                    className={`absolute top-full left-0 bg-background border rounded-lg shadow-lg py-2 mt-2 min-w-[200px] ${
                      showSubmenu ? "block" : "hidden"
                    }`}
                  >
                    {route.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                      >
                        {subItem.name[language]}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={route.path}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {route.name[language]}
                </Link>
              )}
            </div>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="ml-2"
            title={language === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {routes.map((route) =>
                route.submenu ? (
                  <div key={route.path} className="space-y-2">
                    <span className="text-lg font-medium text-muted-foreground">
                      {route.name[language]}
                    </span>
                    <div className="pl-4 space-y-2">
                      {route.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          {subItem.name[language]}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {route.name[language]}
                  </Link>
                )
              )}
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="justify-start"
              >
                <Globe className="h-5 w-5 mr-2" />
                {language === "es" ? "Switch to English" : "Cambiar a Español"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

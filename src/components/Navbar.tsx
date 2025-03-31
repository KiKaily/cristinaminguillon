
import { Menu, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useNavigate } from "react-router-dom";
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
  { name: { es: "Arteterapia", en: "ArtTherapy" }, path: "/arteterapia" },
  { name: { es: "Tienda", en: "Shop" }, path: "/tienda" },
  { name: { es: "Videos y artículos", en: "Videos and Articles" }, path: "/videos-articulos" },
  { name: { es: "Sobre mí", en: "About Me" }, path: "/sobre-mi" },
  { name: { es: "Contacto", en: "Contact" }, path: "/contacto" },
];

export function Navbar() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let submenuTimer: NodeJS.Timeout;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
    if (submenuTimer) {
      clearTimeout(submenuTimer);
    }
  };

  const handleMouseLeave = () => {
    submenuTimer = setTimeout(() => {
      setShowSubmenu(false);
    }, 1000);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
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
    <header className={`fixed top-0 w-full z-50 border-b ${isScrolled ? 'bg-[#E8D8C9] shadow-md' : 'bg-[#E8D8C9]'}`}>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => handleNavigation("/")} className="font-homemade text-[2.55rem]">
          Cristina Minguillón
        </button>

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
                  <span className="text-lg font-medium font-manuscript hover:text-primary transition-colors cursor-pointer">
                    {route.name[language]}
                  </span>
                  <div
                    className={`absolute top-full left-0 bg-[#E8D8C9] border rounded-lg shadow-lg py-2 mt-2 min-w-[200px] ${
                      showSubmenu ? "block" : "hidden"
                    }`}
                  >
                    {route.submenu.map((subItem) => (
                      <button
                        key={subItem.path}
                        onClick={() => handleNavigation(subItem.path)}
                        className="block w-full text-left px-4 py-2 text-lg font-manuscript hover:bg-accent transition-colors"
                      >
                        {subItem.name[language]}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => handleNavigation(route.path)}
                  className="text-lg font-medium font-manuscript hover:text-primary transition-colors"
                >
                  {route.name[language]}
                </button>
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
          <SheetContent style={{ backgroundColor: "#E8D8C9" }}>
            <div className="flex flex-col gap-4 mt-8">
              {routes.map((route) =>
                route.submenu ? (
                  <div key={route.path} className="space-y-2">
                    <span className="text-xl font-medium font-manuscript text-muted-foreground">
                      {route.name[language]}
                    </span>
                    <div className="pl-4 space-y-2">
                      {route.submenu.map((subItem) => (
                        <button
                          key={subItem.path}
                          onClick={() => handleNavigation(subItem.path)}
                          className="block text-xl font-manuscript hover:text-primary transition-colors"
                        >
                          {subItem.name[language]}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={route.path}
                    onClick={() => handleNavigation(route.path)}
                    className="text-xl font-medium font-manuscript hover:text-primary transition-colors text-left"
                  >
                    {route.name[language]}
                  </button>
                )
              )}
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="justify-start font-manuscript text-xl"
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

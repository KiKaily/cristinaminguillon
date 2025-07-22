
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
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
    { name: { es: "Tienda", en: "Shop" }, path: "/tienda" },
    { name: { es: "Videos y artículos", en: "Videos and Articles" }, path: "/videos-articulos" },
    { name: { es: "Sobre mí", en: "About" }, path: "/sobre-mi" },
    { name: { es: "Contacto", en: "Contact" }, path: "/contacto" },
  ];

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-accent/70 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="border-r border-brown-700 pr-4">
            <h3 className="font-semibold text-2xl mb-4">Contacto</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-xl">Email: <a href="mailto:cminguillon1@gmail.com">cminguillon1@gmail.com</a></p>
              <p className="text-xl">Tel: +34 600 000 000</p>
              <p className="text-xl">Orba, Alicante</p>
              
            </div>
          </div>

          <div className="pr-4">
            <h3 className="font-semibold text-2xl mb-4">Navegación</h3>
            <div className="space-y-2">
              <Link
                to="/"
                onClick={() => handleNavigation("/")}
                className="block text-xl text-muted-foreground hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <span className="block text-xl text-muted-foreground">Arte</span>
              <div className="pl-4 space-y-1 mt-1">
                {routes.find(r => r.name.es === "Arte")?.submenu?.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    onClick={() => handleNavigation(subItem.path)}
                    className="block text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    {subItem.name.es}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-r border-brown-700 pr-4 space-y-2">
            {routes.slice(2, 9).map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={() => handleNavigation(route.path)}
                className="block text-xl text-muted-foreground hover:text-primary transition-colors"
              >
                {route.name.es}
              </Link>
            ))}
          </div>

          <div className="pr-4">
            <h3 className="font-semibold text-2xl mb-4">¿Conectamos?</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/cristina.minguillon.3" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/crisminguillon/" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-8 w-8" />
              </a>
            </div>
            <div className="space-y-2">
              <Link to="/privacidad" className="block text-lg text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/legal" className="block text-lg text-muted-foreground hover:text-primary transition-colors">
                Aviso Legal
              </Link>
              <p className="text-xl">web creada por <a href="https://rcrear.com" target="_blank" rel="noopener noreferrer" className="hover:underline">rcrear.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

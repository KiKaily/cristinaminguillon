
import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const contentPasswords: { [key: string]: string } = {
  "curso-historia": "historia6291",
  "masterclass": "masterclass6291",
  "tecnicas": "tecnicas6291",
  "analisis": "analisis6291",
  "recursos": "recursos6291",
  "workshops": "workshops6291"
};

const contentTitles: { [key: string]: string } = {
  "curso-historia": "Curso Completo de Historia del Arte",
  "masterclass": "Masterclass de Arte Contemporáneo",
  "tecnicas": "Técnicas Artísticas Avanzadas",
  "analisis": "Análisis de Obras Maestras",
  "recursos": "Recursos y Materiales Exclusivos",
  "workshops": "Workshops en Directo"
};

const contentVideos: { [key: string]: Array<{title: string, videoId: string}> } = {
  "curso-historia": [
    { title: "Introducción a la Historia del Arte", videoId: "dQw4w9WgXcQ" },
    { title: "Arte Clásico y Renacentista", videoId: "dQw4w9WgXcQ" },
    { title: "Arte Moderno y Contemporáneo", videoId: "dQw4w9WgXcQ" }
  ],
  "masterclass": [
    { title: "Tendencias del Arte Contemporáneo", videoId: "dQw4w9WgXcQ" },
    { title: "Análisis de Artistas Actuales", videoId: "dQw4w9WgXcQ" }
  ],
  "tecnicas": [
    { title: "Técnicas de Pintura Avanzadas", videoId: "dQw4w9WgXcQ" },
    { title: "Escultura y Materiales", videoId: "dQw4w9WgXcQ" },
    { title: "Arte Digital", videoId: "dQw4w9WgXcQ" }
  ],
  "analisis": [
    { title: "La Mona Lisa de Da Vinci", videoId: "dQw4w9WgXcQ" },
    { title: "La Guernica de Picasso", videoId: "dQw4w9WgXcQ" }
  ],
  "recursos": [
    { title: "Biblioteca de Recursos", videoId: "dQw4w9WgXcQ" },
    { title: "Materiales de Estudio", videoId: "dQw4w9WgXcQ" }
  ],
  "workshops": [
    { title: "Workshop de Pintura en Vivo", videoId: "dQw4w9WgXcQ" },
    { title: "Taller de Creatividad", videoId: "dQw4w9WgXcQ" },
    { title: "Sesión de Preguntas y Respuestas", videoId: "dQw4w9WgXcQ" }
  ]
};

const PasswordProtectedContent = () => {
  const { contentId } = useParams();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!contentId || !contentPasswords[contentId]) {
    return <Navigate to="/contenido-premium" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === contentPasswords[contentId]) {
      setIsAuthenticated(true);
    } else {
      toast({
        title: "Error",
        description: "Contraseña incorrecta",
        variant: "destructive",
      });
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{contentTitles[contentId]}</h1>
          <div className="grid gap-6">
            {contentVideos[contentId]?.map((video, index) => (
              <Card key={index} className="bg-[#E8DCC0]/90">
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        <Card className="bg-[#E8DCC0]/90">
          <CardHeader>
            <CardTitle>Acceso Protegido</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Introduce la contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Acceder
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default PasswordProtectedContent;

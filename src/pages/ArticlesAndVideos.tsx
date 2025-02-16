
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ArticlesAndVideos = () => {
  const articles = [
    { title: "Artículo sobre arte contemporáneo", url: "https://example.com/1" },
    { title: "Entrevista sobre arteterapia", url: "https://example.com/2" },
    { title: "Reseña de exposición", url: "https://example.com/3" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 mt-20 md:mt-0">Videos y Artículos</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Artículos</h2>
          <Card>
            <CardContent className="px-[2%] py-[4%] space-y-2">
              <ul className="list-disc list-inside space-y-2">
                {articles.map((article, index) => (
                  <li key={index}>
                    <a 
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Videos</h2>
          <div className="grid gap-6">
            {[1, 2, 3].map((index) => (
              <Card key={index}>
                <CardContent className="px-[2%] py-[4%] space-y-2">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Video placeholder {index}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticlesAndVideos;

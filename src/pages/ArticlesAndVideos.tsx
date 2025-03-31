
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ArticlesAndVideos = () => {
  const articles = [
    { title: "Artículo sobre arte contemporáneo", url: "https://example.com/1" },
    { title: "Entrevista sobre arteterapia", url: "https://example.com/2" },
    { title: "Reseña de exposición", url: "https://example.com/3" },
  ];

  const videos = [
    "https://www.youtube.com/embed/DdCqYT6gCq8?si=FOGgewGljCJQlV96",
    "https://www.youtube.com/embed/DlcYXZSWxJg?si=ZgQb8kPnlgoZms9S",
    "https://www.youtube.com/embed/svIT5eXHKBY?si=t-i435plSCQxdXyI",
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
          <Card>
            <CardContent className="px-[2%] py-[4%] space-y-12">
              {videos.map((videoUrl, index) => (
                <section key={index} className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={videoUrl}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </section>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticlesAndVideos;

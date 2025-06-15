
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 mt-20 md:mt-0">Videos y Artículos</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Artículos</h2>
          <div className="p-8 rounded-lg">
            <ul className="list-disc list-inside space-y-4">
              {articles.map((article, index) => (
                <li key={index} className="text-xl text-black">
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Videos</h2>
          <div className="p-8 rounded-lg">
            <div className="space-y-16">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticlesAndVideos;


import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Exhibitions = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[10%] md:pt-[8%] container mx-auto px-4">
        {/* Current Exhibition */}
        <section className="mb-12">
          <Card className="bg-accent">
            <CardHeader>
              <CardTitle>Exposición Actual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Actual</Badge>
                  <span className="text-lg">"Cerámicas". (Febrero-Marzo 2025). Centro Cultural Carmen Conde. Majadahonda.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming Exhibitions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Próximas Exposiciones</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <li>Próximamente...</li>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Past Exhibitions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Solo Exhibitions */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Exposiciones Individuales</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                  <li>Cerámicas. (Febrero-Marzo 2025). Centro Cultural Carmen Conde. Majadahonda. Madrid.</li>
		<li>Babel. Cerámicas. (Enero-Febrero 2025). Centro Cultural Paco Rabal. Puente de Vallecas. Madrid.</li>
		<li>Babel. Cerámicas. (Enero 2025). Centro Cultural Pablo Ruiz Picasso. Colmenar Viejo. Madrid.</li>
		<li>KAIRÓS. Cerámicas. (Febrero-Marzo 2023). Ca Lambert. Jávea. Alicante.</li>
		<li>Barro y Silencio. Cerámicas (Enero-febrero 2023). Casa Cultura. Dénia.</li>
		<li>Silencio. Cerámicas. (Diciembre 2021-Febrero 2022) CC Portal de la Marina. 
			Ondara. Alicante</li>
		<li>Encuentros y despedidas (Febrero-Marzo 2022) Códigos del Arte. Denia. 
			Alicante.</li>
		<li>Tierra (Diciembre 2021-Enero 2022) Códigos del Arte. Denia. Alicante.</li>
		<li>Tierra (2019). Obra sobre papel. Espacio D’artés (Soto del Real)</li>
		<li>Familiando (2019). Obra textil. La Caña (Madrid)</li>
		<li>Familiando (2018). Obra textil. Espacio D’artés (Soto del Real)</li>
		<li>Emergiendo (abril-mayo 2018). Obra sobre papel. Espacio D’artés (Soto del 
			   Real. Madrid)</li>
		<li>Cerámica (2016). C.C. Lope de Vega (Madrid)</li>
		<li>ADDRESS (2013). Escultura. Espacio Andrés Delgado (Madrid)</li>
		<li>Cerámica (1989). Café El Globo. Guadalajara</li>
		<li>Cerámica (1985) Club Náutico de Vigo</li>
		<li>Cerámica (1984). Café El Ratón. Madrid</li>
		<li>Minguillón-Dibujos (1983). Café Entreacto (C/Martín de los Heros, 22. 
			  Madrid)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Group Exhibitions */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Exposiciones Colectivas</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2">
                  <li>Esculturas frente al mar. (Julio-octubre 2022). Paseo Marina de Denia, 
			Alicante.</li>
		<li>ADAMA. Exposición colectiva. (Septiembre 2021) Casa Cultura. Denia. 
			Alicante.</li>
		<li>Muestra de Arte Contemporáneo ARTESON 6. (julio-agosto 2021) Antiguo
			Hospital de San Andrés (Mombeltrán. Ávila)</li>
		<li>Muestra de Arte Contemporáneo PALACIO 14 (julio-agosto 2021) Palacio
			del Infante Luis de Borbón (Arenas de San Pedro. Ávila)</li>
		<li>Artistas internacionales en Mallorca (Julio 2018). Collage. Galería Eka Moor.</li>
		<li>Artistas internacionales en Madrid (Junio 2018). Collage. Galería Eka Moor.</li>
		<li>Arte de mujer (marzo 2018). Cerámica. Casa de Cultura de Soto del Real.</li>
		<li>Salón de primavera (marzo-abril 2018). Cerámica. Santana Art Gallery (Madrid).</li>
		<li>MAGRAMA (2015). Cerámica. Ministerio de Agricultura.</li>
		<li>El alma del silencio (2014) Cerámica. C.C. La Despernada (V. de la Cañada).</li>
		<li>El arte que devino en libro (2013). Libros de artista. Tres en Suma (Madrid).</li>
		<li>ADDRESS (2013). Escultura. Espacio Andrés Delgado (Madrid).</li>
		<li>Ilustrísima (2013). Museo ABC (Madrid).</li>
		<li>Infancia, todas las infancias (2007. XXX Salón del Libro Infantil y Juvenil) 
			Ilustración.</li>
		<li>Ilustrado Don Quijote (2005. APIM) Ilustración. Biblioteca Nacional.</li>
		<li>Homenaje a Montserrat del Amo (Amigos del Libro Infantil) Ilustración.</li>
		<li>La mar de libros (XXXI Salón del Libro Infantil y Juvenil) Ilustración.</li>
		<li>Ratón Pérez y el diente de un Rey (2000. Amigos del Libro) Ilustración.</li>
		<li>Caperucita ilustrada (1998. Amigos del Libro) Ilustración. Biblioteca 
			Nacional.</li>
		<li>Pintando poesía (1998). Ilustración. Centro Isabel de Farnesio (Aranjuez).</li>
		<li>Pintando adrede al 27 (1998. APIM). Ilustración. C.C. de la Villa (Madrid).</li>
		<li>Pintando poesía (1998. APIM) Ilustración. Círculo de Bellas Artes.</li>
		<li>Arte Urbano (1984). Cerámica. Plaza Pablo Ruiz Picasso. Madrid.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Exhibitions;

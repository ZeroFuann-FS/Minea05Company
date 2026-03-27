import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cafitasImg from "@/assets/Gomitas.jpg";
import tamiringoImg from "@/assets/tamiringo-product.jpg";

const valores = [
  { name: "Calidad", icon: "⭐" },
  { name: "Naturalidad", icon: "🌱" },
  { name: "Responsabilidad", icon: "⚖️" },
  { name: "Innovación", icon: "💡" },
  { name: "Trabajo en Equipo", icon: "👥" },
];

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="section-padding text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
          NUESTRA ESENCIA Y ORIGEN
        </h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
      </section>

      {/* Who we are + History */}
      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-primary">¿QUIÉNES SOMOS?</h2>
            <p className="font-body leading-relaxed text-foreground/80">
              Minea Company es una empresa de confitería artesanal fundada el 05 de febrero de 2026 en Misantla, Veracruz. Nacimos con la visión de crear golosinas que celebren los sabores auténticos de nuestra región, utilizando ingredientes 100% naturales y respetando las tradiciones locales.
            </p>
            <p className="mt-4 font-body leading-relaxed text-foreground/80">
              Nuestra pasión es transformar los ingredientes más emblemáticos de Veracruz — el café Victoria y el tamarindo — en gomitas artesanales de la más alta calidad, sin colorantes ni conservadores artificiales.
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-primary">HISTORIA</h2>
            <p className="font-body leading-relaxed text-foreground/80">
              Todo comenzó con una idea simple: ¿por qué no crear dulces que reflejen la riqueza natural de Misantla? Rodeados de cafetales y árboles de tamarindo, supimos que teníamos los ingredientes perfectos a nuestro alcance.
            </p>
            <p className="mt-4 font-body leading-relaxed text-foreground/80">
              Desde ese 05 de febrero de 2026, nos hemos dedicado a perfeccionar nuestras recetas, trabajando de la mano con productores locales para garantizar la frescura y autenticidad de cada gomita que sale de nuestro taller artesanal.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-primary">
          NUESTROS VALORES
        </h2>
        <div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-5 max-w-5xl">
          {valores.map((v) => (
            <div key={v.name} className="group flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)]">
              <div className="group-hover:text-primary flex h-24 w-24 items-center justify-center rounded-full border-2 border-muted bg-background text-muted-foreground text-3xl shadow-lg transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[var(--shadow-card)]">
                {v.icon}
              </div>
              <span className="font-body text-sm font-bold uppercase tracking-wider text-foreground">
                {v.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiator */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-5">
            <img src={cafitasImg} alt="Café Victoria" className="h-full w-full rounded-lg object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 font-display text-2xl font-bold text-primary">
              LO QUE NOS HACE DIFERENTES
            </h2>
            <p className="mb-4 font-body leading-relaxed text-foreground/80">
              Utilizamos café Victoria cultivado en las montañas de Misantla y tamarindo fresco de la región. Cada ingrediente es seleccionado cuidadosamente para garantizar un sabor incomparable.
            </p>
            <p className="font-body leading-relaxed text-foreground/80">
              Nuestras gomitas están <strong className="text-primary">libres de colorantes artificiales</strong>, conservadores sintéticos y saborizantes químicos. Solo sabor natural, puro y auténtico.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;


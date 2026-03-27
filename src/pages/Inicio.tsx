import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import cafitasImg from "@/assets/cafitas_producto_inicio.jpg";
import tamiringoImg from "@/assets/tamiringo-producto_inicio.jpg";
import logoCafi from "@/assets/logo_cafitas.png";
import logoTamarin from "@/assets/logo_tamiringo.png";

const Inicio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Gomitas artesanales" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            SABOR NATURAL, ESENCIA DE NUESTRA TIERRA.
          </h1>
          <p className="mb-8 font-body text-lg text-primary-foreground/80">
            Gomitas artesanales elaboradas con ingredientes 100% naturales de Misantla, Veracruz.
          </p>
          <Link to="/pedidos" className="btn-gold text-lg">
            HACER PEDIDO
          </Link>
        </div>
      </section>

      {/* Summary Blocks */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "NUESTRA HISTORIA",
              icon: (
                <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              ),
              desc: "Desde el corazón de Misantla, creamos dulces que honran nuestras raíces veracruzanas.",
            },
            {
              title: "MISIÓN",
              icon: (
                <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ),
              desc: "Ofrecer golosinas naturales de la más alta calidad, libres de colorantes artificiales.",
            },
            {
              title: "VISIÓN",
              icon: (
                <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              desc: "Ser la marca líder de confitería artesanal natural en todo México.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center rounded-lg border border-border bg-background p-8 text-center transition-all duration-300 hover:shadow-[var(--shadow-card)]"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="mb-3 font-display text-xl font-bold text-primary">{item.title}</h3>
              <p className="mb-4 font-body text-sm text-muted-foreground">{item.desc}</p>
              <Link to="/nosotros" className="btn-wine text-xs">
                Saber Más
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding bg-secondary/50">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-primary md:text-4xl">
          NUESTROS PRODUCTOS DESTACADOS
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              name: "Cafitas",
              img: cafitasImg,
              desc: "Gomitas artesanales de café Victoria, con el auténtico sabor del café veracruzano. Disponibles con y sin azúcar.",
            },
            {
              name: "Tamiringo",
              img: tamiringoImg,
              desc: "Gomitas de tamarindo natural con un toque de chamoy. El sabor intenso y picosito que te encantará.",
            },
          ].map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-all duration-300 hover:shadow-[var(--shadow-card)]"
            >
              <div className="h-32 flex items-center justify-center p-4">
                <img
                  src={product.name === "Cafitas" ? logoCafi : logoTamarin}
                  alt={product.name}
                  className="max-h-full max-w-[90%] object-contain"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-display text-2xl font-bold text-primary">{product.name}</h3>
                <p className="mb-4 font-body text-sm text-muted-foreground">{product.desc}</p>
                <Link to="/productos" className="btn-wine text-xs">
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inicio;

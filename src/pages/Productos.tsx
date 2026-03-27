import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cafitasImg from "@/assets/cafitas_producto_productos.jpg";
import tamiringoImg from "@/assets/tamiringo_productos_productos.jpg";

const Productos = () => {
  const navigate = useNavigate();
  const [cafitasVariant, setCafitasVariant] = useState("con-azucar");
  const [tamiringoVariant, setTamiringoVariant] = useState("con-chamoy");

  const handleOrder = (product: string, variant: string) => {
    navigate(`/pedidos?producto=${encodeURIComponent(product)}&variante=${encodeURIComponent(variant)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
          NUESTRAS COLECCIONES ARTESANALES
        </h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
      </section>

      {/* 50/50 Split */}
      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 overflow-hidden rounded-xl border border-border md:grid-cols-2">
          {/* Cafitas */}
          <div className="flex flex-col border-b border-border bg-background p-8 md:border-b-0 md:border-r lg:p-12">
            <h2 className="mb-6 text-center font-display text-3xl font-bold text-primary">Cafitas</h2>
            <div className="mx-auto mb-6 aspect-square w-full max-w-sm overflow-hidden rounded-lg">
              <img src={cafitasImg} alt="Cafitas" className="h-full w-full object-cover" />
            </div>
            <p className="mb-6 text-center font-body text-base leading-relaxed text-muted-foreground">
              Gomitas artesanales elaboradas con auténtico café Victoria de Misantla, Veracruz. Su sabor intenso y aroma inconfundible te transportan a los cafetales veracruzanos con cada bocado.
            </p>

            <button
              onClick={() => handleOrder("Cafitas", cafitasVariant === "con-azucar" ? "Con Azúcar" : "Sin Azúcar")}
              className="btn-gold mx-auto mt-auto"
            >
              PEDIR AHORA
            </button>
          </div>

          {/* Tamiringo */}
          <div className="flex flex-col bg-background p-8 lg:p-12">
            <h2 className="mb-6 text-center font-display text-3xl font-bold text-primary">Tamiringo</h2>
            <div className="mx-auto mb-6 aspect-square w-full max-w-sm overflow-hidden rounded-lg">
              <img src={tamiringoImg} alt="Tamiringo" className="h-full w-full object-cover" />
            </div>
            <p className="mb-6 text-center font-body text-base leading-relaxed text-muted-foreground">
              Gomitas de tamarindo natural con un irresistible toque artesanal. El equilibrio perfecto entre lo dulce y lo ácido que conquistará tu paladar.
            </p>
            <button
              onClick={() => handleOrder("Tamiringo", tamiringoVariant === "con-chamoy" ? "Con Chamoy" : "Con Azúcar")}
              className="btn-gold mx-auto mt-auto"
            >
              PEDIR AHORA
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Productos;

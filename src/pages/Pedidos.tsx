import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cafitasImg from "@/assets/cafitas-product.jpg";
import tamiringoImg from "@/assets/tamiringo-product.jpg";
import logoCafi from "@/assets/logo_cafitas.png";
import logoTamarin from "@/assets/logo_tamiringo.png";

type Product = {
  name: string;
  quantity: number;
};

const products = [
  { id: "cafitas-az", name: "Cafitas con Azúcar", img: cafitasImg, logo: logoCafi, price: 50 },
  { id: "cafitas-sa", name: "Cafitas sin Azúcar", img: cafitasImg, logo: logoCafi, price: 55 },
  { id: "tamiringo-ch", name: "Tamiringo con Chamoy", img: tamiringoImg, logo: logoTamarin, price: 45 },
  { id: "tamiringo-az", name: "Tamiringo con Azúcar", img: tamiringoImg, logo: logoTamarin, price: 40 },
];

const WHATSAPP_NUMBER = "527822447208";

const Pedidos = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [notas, setNotas] = useState("");

  const addToCart = (productName: string) => {
    const existing = cart.find(p => p.name === productName);
    if (existing) {
      setCart(cart.map(p => p.name === productName ? {...p, quantity: p.quantity + 1} : p));
    } else {
      setCart([...cart, { name: productName, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName: string) => {
    setCart(cart.filter(p => p.name !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productName);
    } else {
      setCart(cart.map(p => p.name === productName ? {...p, quantity} : p));
    }
  };

  const totalItems = cart.reduce((sum, p) => sum + p.quantity, 0);
  const totalPrice = cart.reduce((sum, p) => {
    const prod = products.find(pr => pr.name === p.name);
    return sum + (prod ? p.quantity * prod.price : 0);
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const cartText = cart.map(p => `• ${p.name} x${p.quantity}`).join('%0A');
    const message = `¡Hola! Me gustaría hacer un pedido:%0A%0A**PRODUCTOS:**%0A${cartText}%0A**Total:** $${totalItems} bolsas ($${totalPrice})%0A%0ANombre: ${nombre}%0AWhatsApp: ${whatsapp}%0A${notas ? `Notas: ${notas}` : ''}%0AGracias!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
          REALIZA TU PEDIDO NATURAL
        </h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Cart Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-lg border border-border bg-background p-6">
              <h3 className="mb-6 font-display text-lg font-bold text-primary">Tu Pedido ({totalItems})</h3>
              {cart.length === 0 ? (
                <div className="text-center text-muted-foreground py-12">
                  <svg className="mx-auto mb-4 h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10.5l2 3H7zM16.5 13l1.5 2m-4.5-5v4a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 00-1-1H12a1 1 0 00-1 1z" />
                  </svg>
                  <p className="font-body text-sm">Selecciona productos</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => {
                    const prod = products.find(p => p.name === item.name);
                    return (
                      <div key={item.name} className="flex items-center justify-between gap-4 rounded-md border p-3">
                        <div className="flex items-center gap-3 flex-1">
                          <img src={prod?.logo} alt={item.name} className="h-12 w-12 object-contain rounded" />
                          <div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-sm text-muted-foreground">${prod?.price || 0}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="grid h-8 w-8 place-items-center rounded border bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground">-</button>
                          <span className="min-w-[2.5rem] text-center font-bold text-lg">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="grid h-8 w-8 place-items-center rounded border bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground">+</button>
                        </div>
                      </div>
                    );
                  })}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between font-bold text-xl">
                      <span>Total:</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp (ej: 2212345678)"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <textarea
                  placeholder="Dirección de entrega, notas especiales..."
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button 
                  type="submit" 
                  disabled={cart.length === 0 || !nombre || !whatsapp}
className="w-full rounded-lg bg-primary px-6 py-4 font-display text-lg font-bold text-primary-foreground shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-50 hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/20"
                >
                  💬 Enviar Pedido por WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="mb-8 font-display text-2xl font-bold text-primary">Selecciona tus Gomitas</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background p-8 shadow-sm transition-all hover:border-primary hover:shadow-2xl hover:-translate-y-2"
                  onClick={() => addToCart(product.name)}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <img src={product.logo} alt={product.name} className="h-24 w-24 flex-shrink-0 object-contain rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-4" />
                  </div>
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="mt-6 space-y-3">
                    <h4 className="font-display text-xl font-bold text-primary">{product.name}</h4>
                    <p className="text-muted-foreground">Ingredientes 100% naturales de Veracruz</p>
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-2xl font-bold text-primary">${product.price}</span>
                      <span className="font-body text-sm text-muted-foreground">/ bolsa 200g</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {cart.find(p => p.name === product.name) ? (
                        <span className="flex-1 rounded-lg bg-primary/90 px-6 py-3 text-sm font-bold text-primary-foreground text-center shadow-md">
                          🛒 {cart.find(p => p.name === product.name)?.quantity || 0}
                        </span>
                      ) : (
                        <div className="flex-1">
<button className="w-full rounded-lg bg-accent px-6 py-3 font-bold text-accent-foreground text-sm uppercase tracking-wide shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300">
                            + Agregar al carrito
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pedidos;


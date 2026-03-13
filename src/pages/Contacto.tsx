import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  { name: "Nayeli Borbolla.", text: "¡Las gomitas son increíbles! Sabor auténtico del café veracruzano.", stars: 5 },
  { name: "Nicole.", text: "Tamiringo con chamoy perfecto. ¡Vuelvo por más!", stars: 5 },
  { name: "Emily.", text: "Calidad premium y entrega rápida. Recomiendo 100%.", stars: 5 },
];

const Contacto = () => {
  const Stars = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Title */}
      <section className="py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">CONTÁCTANOS</h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-accent" />
      </section>

      {/* Map + Contact Card */}
      <section className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.5!2d-96.85!3d20.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d!2sMisantla%2C%20Ver.!5e0!3m2!1ses!2smx!4v1234567890"
              className="w-full h-96 rounded-xl border-0 shadow-xl"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Minea - Misantla, Veracruz"
            />
          </div>

          {/* RIGHT: Minimal Card */}
          <div>
            <div className="p-6 border border-amber-200/50 rounded-xl shadow-sm bg-gradient-to-b from-white/80 hover:shadow-md transition-all hover:-translate-y-1">
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">Información de Contacto</h2>
              
              {/* Contact Items */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3 -m-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Teléfono</p>
                    <a href="tel:+52 (782) 244-7208" className="text-lg font-bold text-foreground hover:text-primary transition-colors block">+52 (782) 244-7208</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 -m-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Correo</p>
                    <a href="mailto:contacto@mineacompany.com" className="text-lg font-bold text-foreground hover:text-primary transition-colors block">contacto@mineacompany.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 -m-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Dirección</p>
                    <p className="text-lg font-bold text-foreground">Misantla, Veracruz, México</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Síguenos</h4>
                <div className="flex gap-3">
                  <a href="https://facebook.com/minea" className="p-2 rounded-lg border border-border hover:border-blue-400 hover:bg-blue-50 text-blue-600 transition-all" aria-label="Facebook">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/minea" className="p-2 rounded-lg border border-border hover:border-pink-400 hover:bg-pink-50 text-pink-600 transition-all" aria-label="Instagram">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.645-.07-4.849 0-3.205.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.259 0-3.667.014-4.947.072-2.52.114-3.885 1.408-4.005 4.005-.058 1.28-.072 1.688-.072 4.947 0 3.259.014 3.668.072 4.948.12 2.597 1.485 3.891 4.005 4.005 1.28.058 1.688.072 4.947.072 3.259 0 3.668-.014 4.948-.072 2.597-.12 3.891-1.485 4.005-4.005.058-1.28.072-1.688.072-4.948 0-3.259-.014-3.667-.072-4.947-.12-2.52-1.485-3.885-4.005-4.005-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@minea" className="p-2 rounded-lg border border-border hover:border-black/20 hover:bg-muted text-foreground transition-all" aria-label="TikTok">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/527822447208" className="p-2 rounded-lg border border-border hover:border-green-400 hover:bg-green-50 text-green-600 transition-all" aria-label="WhatsApp">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.988c0 5.451-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-secondary/30">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">Más de 500 clientes felices en Veracruz</p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-background border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="flex justify-center mb-6">
                  <Stars rating={testimonial.stars} />
                </div>
                <p className="mb-6 font-body text-lg leading-relaxed text-foreground/90 italic">"{testimonial.text}"</p>
                <div className="h-12 w-12 mx-auto rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-xl font-bold text-primary-foreground">★</span>
                </div>
                <h4 className="font-display text-xl font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground font-medium">Cliente feliz</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;


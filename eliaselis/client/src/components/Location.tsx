import { useEffect, useRef, useState } from "react";

export default function Location() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" ref={sectionRef} className="py-24 md:py-32 bg-[#0A0A0A] relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/30 to-transparent" />

      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[#C6A15B] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Localização
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Como nos encontrar
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Estamos no coração de Cascavel, prontos para te atender.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Map */}
          <div className="h-[400px] lg:h-[500px] rounded-sm overflow-hidden border border-[#C6A15B]/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5!2d-53.4543!3d-25.0229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e5a4e5c5c5c5c5%3A0x0!2sR.+Castro+Alves%2C+1699+-+Centro%2C+Cascavel+-+PR%2C+85801-150!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Elias Elis Hair"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-[#1D1D1D]/80 border border-white/10 rounded-sm p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-[#C6A15B]/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt text-[#C6A15B] text-lg" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">Endereço</h3>
                  <p className="text-white/60">R. Castro Alves, 1699<br />Centro, Cascavel - PR<br />CEP 85801-150</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-[#C6A15B]/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone text-[#C6A15B] text-lg" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">Telefone</h3>
                  <p className="text-white/60">(45) 99818-9302</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-[#C6A15B]/10 flex items-center justify-center shrink-0">
                  <i className="fab fa-whatsapp text-[#C6A15B] text-lg" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/5545998189302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C6A15B] hover:text-[#D4B76A] transition-colors"
                  >
                    (45) 99818-9302
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-[#C6A15B]/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-clock text-[#C6A15B] text-lg" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">Horário de Funcionamento</h3>
                  <p className="text-white/60">Segunda a Sábado: 08h às 20h<br />Domingo: Fechado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#C6A15B]/10 flex items-center justify-center shrink-0">
                  <i className="fab fa-instagram text-[#C6A15B] text-lg" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">Instagram</h3>
                  <a
                    href="https://www.instagram.com/eliaselishair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C6A15B] hover:text-[#D4B76A] transition-colors"
                  >
                    @eliaselishair
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=R.+Castro+Alves,+1699,+Centro,+Cascavel+-+PR,+85801-150"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-glow inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C6A15B] text-[#0A0A0A] font-semibold rounded-sm hover:bg-[#D4B76A] transition-all duration-300 tracking-wide uppercase text-sm"
            >
              <i className="fas fa-directions" />
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

const services = [
  { name: "Corte Feminino", icon: "fa-cut", desc: "Cortes modernos e personalizados que valorizam seus traços e estilo." },
  { name: "Corte Masculino", icon: "fa-user", desc: "Estilo e precisão para o homem que busca um visual impecável." },
  { name: "Coloração", icon: "fa-palette", desc: "Técnicas avançadas de coloração com produtos profissionais premium." },
  { name: "Mechas", icon: "fa-sun", desc: "Luzes e mechas que trazem dimensão e sofisticação ao seu cabelo." },
  { name: "Escova", icon: "fa-wind", desc: "Escova modelada com acabamento perfeito para qualquer ocasião." },
  { name: "Progressiva", icon: "fa-wand-magic-sparkles", desc: "Alisamento progressivo com tratamentos que preservam a saúde dos fios." },
  { name: "Botox Capilar", icon: "fa-syringe", desc: "Tratamento intensivo para recuperação profunda dos cabelos." },
  { name: "Hidratação", icon: "fa-droplet", desc: "Hidratação profunda com produtos de alta qualidade para fios saudáveis." },
  { name: "Reconstrução", icon: "fa-shield-halved", desc: "Reconstrução capilar para cabelos danificados e enfraquecidos." },
  { name: "Tratamentos Capilares", icon: "fa-spa", desc: "Protocolos personalizados para cada tipo de fio e necessidade." },
  { name: "Penteados", icon: "fa-crown", desc: "Penteados elegantes para noivas, formandas e eventos especiais." },
  { name: "Finalizações", icon: "fa-wand-sparkles", desc: "Finalização perfeita para completar e valorizar seu look." },
];

export default function Services() {
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
    <section id="servicos" ref={sectionRef} className="py-24 md:py-32 bg-white relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[#C6A15B] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Excelência em cada detalhe
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para transformar e cuidar dos seus cabelos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`group relative bg-[#F8F6F3] border border-[#C6A15B]/20 rounded-sm p-6 hover:border-[#C6A15B] hover:shadow-lg hover:shadow-[#C6A15B]/10 transition-all duration-500 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-[#C6A15B]/10 flex items-center justify-center mb-4 group-hover:bg-[#C6A15B]/20 transition-colors duration-300">
                <i className={`fas ${service.icon} text-[#C6A15B] text-lg`} />
              </div>
              {/* Name */}
              <h3 className="font-heading text-lg font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#C6A15B] transition-colors duration-300">
                {service.name}
              </h3>
              {/* Desc */}
              <p className="text-[#666] text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              {/* CTA */}
              <a
                href={`https://wa.me/5545998189302?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20${encodeURIComponent(service.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C6A15B] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              >
                Agendar <i className="fas fa-arrow-right text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

const DIFFERENTIALS_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663846512111/RqgvEYmyXSmmbTdx.jpg";

const differentials = [
  { icon: "fa-heart", title: "Atendimento personalizado", desc: "Cada cliente recebe atenção exclusiva e tratamento sob medida." },
  { icon: "fa-bottle-droplet", title: "Produtos profissionais", desc: "Utilizamos apenas produtos premium das melhores marcas do mercado." },
  { icon: "fa-graduation-cap", title: "Técnicas atualizadas", desc: "Nossa equipe está em constante capacitação e atualização." },
  { icon: "fa-couch", title: "Ambiente confortável", desc: "Espaço sofisticado e acolhedor para uma experiência completa." },
  { icon: "fa-users", title: "Profissionais especializados", desc: "Equipe qualificada com vasta experiência em transformação capilar." },
  { icon: "fa-clock", title: "Atendimento com horário marcado", desc: "Respeitamos seu tempo com agendamento pontual e organizado." },
];

export default function Differentials() {
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
    <section id="diferenciais" ref={sectionRef} className="py-24 md:py-32 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${DIFFERENTIALS_IMG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/85 to-[#1A1A1A]/95" />

      <div className="container relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[#C6A15B] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Por que nos escolher
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos diferenciais
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            O que faz do Elias Elis Hair a escolha certa para seus cabelos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 hover:border-[#C6A15B]/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-[#C6A15B]/15 flex items-center justify-center shrink-0 group-hover:bg-[#C6A15B]/25 transition-colors duration-300">
                  <i className={`fas ${item.icon} text-[#C6A15B] text-xl`} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-[#C6A15B] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

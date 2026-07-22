import { useEffect, useRef } from "react";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663846512111/aNztivesEwSomoIJ.jpg";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    [titleRef, subtitleRef, btnsRef, ratingRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]/80" />
      {/* Gold accent overlay */}
      <div className="absolute inset-0 bg-[#C6A15B]/5 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Gold line top */}
        <div className="gold-line mx-auto mb-6" style={{ opacity: 0, animation: "fadeIn 1s 0.5s forwards" }} />

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-4xl"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s ease-out" }}
        >
          Sua beleza começa pelos{" "}
          <span className="text-[#C6A15B] italic">seus cabelos</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-white/80 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mb-10 leading-relaxed"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s 0.2s ease-out" }}
        >
          Experiência, técnica e cuidado para transformar sua autoestima através da beleza.
        </p>

        {/* Buttons */}
        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row gap-4"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s 0.4s ease-out" }}
        >
          <a
            href="https://wa.me/5545998189302?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glow group px-8 py-4 bg-[#C6A15B] text-[#0A0A0A] font-semibold text-base rounded-sm hover:bg-[#D4B76A] transition-all duration-300 tracking-wide uppercase flex items-center gap-3 shadow-lg shadow-[#C6A15B]/20"
          >
            <i className="fab fa-whatsapp text-xl" />
            Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="px-8 py-4 border border-white/30 text-white font-medium text-base rounded-sm hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-300 tracking-wide uppercase backdrop-blur-sm"
          >
            Conheça nossos serviços
          </a>
        </div>

        {/* Rating badge */}
        <div
          ref={ratingRef}
          className="mt-12 flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.8s 0.6s ease-out" }}
        >
          <div className="flex text-[#C6A15B]">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star text-sm" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">
            4.7 no Google <span className="text-white/50">·</span> 81 avaliações
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#C6A15B] rounded-full" />
        </div>
      </div>

      {/* Keyframe */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}

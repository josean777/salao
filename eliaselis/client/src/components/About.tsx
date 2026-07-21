import { useEffect, useRef, useState } from "react";

const ABOUT_IMG = "https://ianmjbgdzgpmjlbndknv.supabase.co/storage/v1/object/public/studio-assets/user_3GpC8gjR8Yx9nfhD8sQtPjMPpkQ/a522d615-aacf-4523-a3be-988806aa8a1f/img/real-1.jpg";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

export default function About() {
  const years = useCountUp(15);
  const clients = useCountUp(5000);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 bg-[#F8F6F3] relative overflow-hidden">
      {/* Decorative gold line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={ABOUT_IMG}
                alt="Elias Elis Hair"
                className="w-full h-[500px] md:h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C6A15B]" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C6A15B]" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <span className="text-[#C6A15B] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
              Nossa História
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Tradição e excelência em cada atendimento
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">
              O <strong className="text-[#C6A15B]">Elias Elis Hair</strong> é um refúgio de transformação e cuidado pessoal no coração de Cascavel. Com mais de 15 anos de experiência, oferecemos um atendimento personalizado e exclusivo para homens e mulheres que valorizam a qualidade e a sofisticação.
            </p>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
              Nossa equipe está em constante atualização, trazendo as técnicas mais modernas e tendências do mundo da beleza. Cada cliente é único e merece um cuidado sob medida — é assim que trabalhamos.
            </p>

            {/* Numbers */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div ref={years.ref} className="text-center p-4 bg-white rounded-sm border border-[#C6A15B]/20 shadow-sm">
                <div className="text-3xl md:text-4xl font-heading font-bold text-[#C6A15B]">
                  +{years.count}
                </div>
                <div className="text-[#666] text-sm mt-1">Anos de experiência</div>
              </div>
              <div ref={clients.ref} className="text-center p-4 bg-white rounded-sm border border-[#C6A15B]/20 shadow-sm">
                <div className="text-3xl md:text-4xl font-heading font-bold text-[#C6A15B]">
                  +{clients.count.toLocaleString()}
                </div>
                <div className="text-[#666] text-sm mt-1">Clientes atendidos</div>
              </div>
              <div className="text-center p-4 bg-white rounded-sm border border-[#C6A15B]/20 shadow-sm">
                <div className="text-3xl md:text-4xl font-heading font-bold text-[#C6A15B]">
                  4.7
                </div>
                <div className="text-[#666] text-sm mt-1">Nota no Google</div>
              </div>
            </div>

            <a
              href="#servicos"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C6A15B] text-white font-semibold rounded-sm hover:bg-[#D4B76A] transition-all duration-300 tracking-wide uppercase text-sm shadow-lg shadow-[#C6A15B]/20"
            >
              Conheça nossos serviços
              <i className="fas fa-arrow-right text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

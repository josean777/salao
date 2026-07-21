import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Camila R.",
    rating: 5,
    comment: "Melhor salão de Cascavel! O atendimento é incrível e o resultado sempre supera minhas expectativas. O Elias é um verdadeiro artista.",
    initials: "CR",
  },
  {
    name: "Fernanda S.",
    rating: 5,
    comment: "Fiz coloração e mechas e ficou perfeito! O ambiente é muito sofisticado e o atendimento personalizado faz toda a diferença.",
    initials: "FS",
  },
  {
    name: "Ana Paula M.",
    rating: 5,
    comment: "Venho há mais de 3 anos e nunca me decepcionou. Profissionais extremamente competentes e produtos de qualidade.",
    initials: "AM",
  },
  {
    name: "Juliana C.",
    rating: 5,
    comment: "Fiz botox capilar e meu cabelo ficou maravilhoso! Tratamento profundo e duradouro. Super recomendo o Elias Elis Hair.",
    initials: "JC",
  },
  {
    name: "Patrícia L.",
    rating: 4,
    comment: "Ambiente lindo, profissionais capacitados e resultado impecável. Sempre saio de lá me sentindo renovada!",
    initials: "PL",
  },
  {
    name: "Mariana G.",
    rating: 5,
    comment: "Corte perfeito, hidratação incrível e atendimento nota 10. O melhor salão que já fui! Não troco por nada.",
    initials: "MG",
  },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section id="depoimentos" ref={sectionRef} className="py-24 md:py-32 bg-white relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[#C6A15B] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nosso maior orgulho.
          </p>
          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex text-[#C6A15B]">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-lg" />
              ))}
            </div>
            <span className="text-[#1A1A1A] text-xl font-heading font-bold">4.7</span>
            <span className="text-[#666]">no Google · 81 avaliações</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div
            className={`relative transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full shrink-0 px-2">
                    <div className="bg-[#F8F6F3] border border-[#C6A15B]/20 rounded-sm p-8 md:p-10 text-center shadow-sm">
                      {/* Quote icon */}
                      <i className="fas fa-quote-left text-[#C6A15B]/30 text-4xl mb-6 block" />

                      {/* Comment */}
                      <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6 italic font-light">
                        "{t.comment}"
                      </p>

                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, j) => (
                          <i key={j} className="fas fa-star text-[#C6A15B] text-sm" />
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#C6A15B]/20 flex items-center justify-center">
                          <span className="text-[#C6A15B] text-sm font-semibold">{t.initials}</span>
                        </div>
                        <span className="text-[#1A1A1A] font-medium">{t.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#C6A15B] w-8" : "bg-[#C6A15B]/20 hover:bg-[#C6A15B]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

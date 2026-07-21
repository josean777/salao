import { useEffect, useRef, useState } from "react";

const IG_IMAGES = [
  "https://ianmjbgdzgpmjlbndknv.supabase.co/storage/v1/object/public/studio-assets/user_3GpC8gjR8Yx9nfhD8sQtPjMPpkQ/a522d615-aacf-4523-a3be-988806aa8a1f/img/real-0.jpg",
  "https://ianmjbgdzgpmjlbndknv.supabase.co/storage/v1/object/public/studio-assets/user_3GpC8gjR8Yx9nfhD8sQtPjMPpkQ/a522d615-aacf-4523-a3be-988806aa8a1f/img/real-1.jpg",
  "https://ianmjbgdzgpmjlbndknv.supabase.co/storage/v1/object/public/studio-assets/user_3GpC8gjR8Yx9nfhD8sQtPjMPpkQ/a522d615-aacf-4523-a3be-988806aa8a1f/img/real-2.jpg",
];

export default function Instagram() {
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
    <section id="instagram" ref={sectionRef} className="py-24 md:py-32 bg-[#F8F6F3] relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[#C6A15B] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Instagram
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Siga nosso trabalho
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Acompanhe as transformações e novidades no <span className="text-[#C6A15B] font-semibold">@eliaselishair</span>
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {IG_IMAGES.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/eliaselishair"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden rounded-sm shadow-md aspect-square ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transition: "all 0.6s ease-out" }}
            >
              <img
                src={img}
                alt="Elias Elis Hair"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-white">
                  <i className="fab fa-instagram text-2xl" />
                  <span className="font-semibold">@eliaselishair</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/eliaselishair"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glow inline-flex items-center gap-3 px-8 py-3.5 bg-[#C6A15B] text-[#0A0A0A] font-semibold rounded-sm hover:bg-[#D4B76A] transition-all duration-300 tracking-wide uppercase text-sm"
          >
            <i className="fab fa-instagram text-lg" />
            Seguir @eliaselishair
          </a>
        </div>
      </div>
    </section>
  );
}

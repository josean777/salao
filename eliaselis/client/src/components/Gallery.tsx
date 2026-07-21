import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663846512111/aNztivesEwSomoIJ.jpg",
    alt: "Transformação morena iluminada realizada no Elias Elis Espaço de Beleza",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663846512111/RqgvEYmyXSmmbTdx.jpg",
    alt: "Mechas iluminadas com acabamento em perfil realizadas no Elias Elis Espaço de Beleza",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663846512111/PdtgohdANPTFphTf.jpg",
    alt: "Transformação loira Beach Contrast realizada no Elias Elis Espaço de Beleza",
  },
];

export default function Gallery() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const nextImage = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % galleryImages.length);
  };
  const prevImage = () => {
    if (lightbox !== null) setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="galeria" ref={sectionRef} className="py-24 md:py-32 bg-[#F8F6F3] relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[#C6A15B] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Galeria
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Nossos trabalhos
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Cada trabalho é uma expressão de cuidado, técnica e arte.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-sm cursor-pointer shadow-md ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transition: "all 0.6s ease-out" }}
              onClick={() => openLightbox(i)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <i className="fas fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C6A15B] transition-all duration-500 rounded-sm" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/eliaselishair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#C6A15B] font-semibold hover:text-[#D4B76A] transition-colors duration-300 group"
          >
            <i className="fab fa-instagram text-xl group-hover:scale-110 transition-transform" />
            <span className="tracking-wide uppercase">Ver mais no Instagram</span>
            <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-[#C6A15B] transition-colors z-10"
          >
            <i className="fas fa-times text-2xl" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-[#C6A15B] transition-colors z-10 text-3xl"
          >
            <i className="fas fa-chevron-left" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-[#C6A15B] transition-colors z-10 text-3xl"
          >
            <i className="fas fa-chevron-right" />
          </button>

          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

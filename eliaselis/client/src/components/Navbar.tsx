import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "/manus-storage/elias-elis-logo_c334a4b0.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#galeria", label: "Galeria" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Elias Elis Hair | Body | Soul"
            className="h-12 md:h-14 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-[#C6A15B] transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5545998189302?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glow px-5 py-2.5 bg-[#C6A15B] text-[#0A0A0A] font-semibold text-sm rounded-sm hover:bg-[#D4B76A] transition-all duration-300 tracking-wide uppercase"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-[#0A0A0A]/98 backdrop-blur-xl transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <img
            src={LOGO_URL}
            alt="Elias Elis Hair | Body | Soul"
            className="h-16 w-auto object-contain mb-6"
          />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-heading text-white/90 hover:text-[#C6A15B] transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5545998189302?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 bg-[#C6A15B] text-[#0A0A0A] font-semibold rounded-sm hover:bg-[#D4B76A] transition-all duration-300 tracking-wide uppercase"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

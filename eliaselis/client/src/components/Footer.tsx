const LOGO_URL = "/elias-elis-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C6A15B]/10 relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/20 to-transparent" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={LOGO_URL} alt="Elias Elis Hair | Body | Soul" className="h-14 w-auto object-contain mb-4" />
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Elias Elis Hair — Salão de beleza premium em Cascavel/PR. Tradição, excelência e cuidado em cada atendimento.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/eliaselishair"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-[#1D1D1D] border border-[#C6A15B]/10 flex items-center justify-center text-white/60 hover:text-[#C6A15B] hover:border-[#C6A15B]/30 transition-all duration-300"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://wa.me/5545998189302"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-[#1D1D1D] border border-[#C6A15B]/10 flex items-center justify-center text-white/60 hover:text-[#C6A15B] hover:border-[#C6A15B]/30 transition-all duration-300"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre Nós" },
                { href: "#servicos", label: "Serviços" },
                { href: "#galeria", label: "Galeria" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#agendamento", label: "Agendamento" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#C6A15B] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[#C6A15B] mt-1" />
                <span>R. Castro Alves, 1699<br />Centro, Cascavel - PR</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-[#C6A15B]" />
                <span>(45) 99818-9302</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-clock text-[#C6A15B]" />
                <span>Seg-Sáb: 08h às 20h</span>
              </li>
            </ul>
          </div>

          {/* Mapa Mini */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Localização</h4>
            <div className="rounded-sm overflow-hidden border border-[#C6A15B]/10 h-[160px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5!2d-53.4543!3d-25.0229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzIyLjQiUyA1M8KwMjcnMTUuNSJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Elias Elis Hair"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#C6A15B]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Elias Elis Hair. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span>Desenvolvido por</span>
            <a 
              href="https://www.instagram.com/josean7_?igsh=YWFyNW5qbXptZzF3&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#C6A15B] hover:underline"
            >
              Josean N. Simões
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useRef, useState } from "react";

const services = [
  "Corte Feminino",
  "Corte Masculino",
  "Coloração",
  "Mechas",
  "Escova",
  "Progressiva",
  "Botox Capilar",
  "Hidratação",
  "Reconstrução",
  "Tratamentos Capilares",
  "Penteados",
  "Finalizações",
  "Outro",
];

export default function Booking() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar um horário.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\nData: ${formData.date}\nHorário: ${formData.time}\nObservações: ${formData.notes || "Nenhuma"}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5545998189302?text=${encoded}`, "_blank");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="agendamento" ref={sectionRef} className="py-24 md:py-32 bg-[#F8F6F3] relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />

      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[#C6A15B] text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Agendamento
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Reserve seu horário
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo e agende diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Form */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-sm shadow-lg border border-[#C6A15B]/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block text-[#4A4A4A] text-sm font-medium mb-2">Nome *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 bg-[#F8F6F3] border border-[#C6A15B]/20 rounded-sm text-[#1A1A1A] placeholder-[#999] focus:border-[#C6A15B] focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-[#4A4A4A] text-sm font-medium mb-2">WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="(45) 99999-9999"
                  className="w-full px-4 py-3 bg-[#F8F6F3] border border-[#C6A15B]/20 rounded-sm text-[#1A1A1A] placeholder-[#999] focus:border-[#C6A15B] focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Serviço */}
            <div>
              <label className="block text-[#4A4A4A] text-sm font-medium mb-2">Serviço *</label>
              <select
                required
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="w-full px-4 py-3 bg-[#F8F6F3] border border-[#C6A15B]/20 rounded-sm text-[#1A1A1A] focus:border-[#C6A15B] focus:outline-none transition-colors duration-300 appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C6A15B' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
              >
                <option value="" className="bg-white">Selecione um serviço</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-white">{s}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Data */}
              <div>
                <label className="block text-[#4A4A4A] text-sm font-medium mb-2">Data preferida *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className="w-full px-4 py-3 bg-[#F8F6F3] border border-[#C6A15B]/20 rounded-sm text-[#1A1A1A] focus:border-[#C6A15B] focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Horário */}
              <div>
                <label className="block text-[#4A4A4A] text-sm font-medium mb-2">Horário preferido *</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  className="w-full px-4 py-3 bg-[#F8F6F3] border border-[#C6A15B]/20 rounded-sm text-[#1A1A1A] focus:border-[#C6A15B] focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Observações */}
            <div>
              <label className="block text-[#4A4A4A] text-sm font-medium mb-2">Observações</label>
              <textarea
                rows={4}
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                placeholder="Alguma preferência ou informação adicional?"
                className="w-full px-4 py-3 bg-[#F8F6F3] border border-[#C6A15B]/20 rounded-sm text-[#1A1A1A] placeholder-[#999] focus:border-[#C6A15B] focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#C6A15B] text-white font-semibold text-base rounded-sm hover:bg-[#D4B76A] transition-all duration-300 tracking-wide uppercase flex items-center justify-center gap-3 shadow-lg shadow-[#C6A15B]/20"
            >
              <i className="fab fa-whatsapp text-xl" />
              Agendar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

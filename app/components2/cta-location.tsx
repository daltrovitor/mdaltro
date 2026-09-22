// Hello World
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Navigation, ExternalLink, Clock } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface CtaLocationProps {
  onOpenModal: () => void;
}

export default function CtaLocation({ onOpenModal }: CtaLocationProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <>
      {/* =========================================================================
          SEÇÃO 10: CTA FINAL (QUALIFICAÇÃO COM SUTILEZA)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="p-10 sm:p-16 rounded-[3rem] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent border border-[#D4AF37]/30 backdrop-blur-2xl shadow-[0_25px_60px_rgba(212,175,55,0.15)] relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs md:text-sm font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
                Próximo Passo
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-white max-w-2xl mx-auto leading-tight mb-4">
              Pronto para compreender o seu caso com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                atenção e clareza?
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base font-lora text-white/70 max-w-xl mx-auto mb-8 leading-relaxed font-light">
              Clique abaixo e responda algumas perguntas rápidas. Nossa equipe analisará seu caso para orientar o melhor caminho.
            </p>

            <div className="flex justify-center">
              <GoldCtaButton onClick={onOpenModal} text="Quero entender meu caso" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 11: LOCALIZAÇÃO / RODAPÉ
          ========================================================================= */}
      <section id="localizacao" className="bg-transparent py-16 sm:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-[11px] font-mont tracking-[0.4em] text-primary/60 uppercase mb-3 block">
            Onde Estamos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-primary tracking-tight bg-clip-text bg-gradient-to-b from-primary to-primary/50 text-transparent">
            Localização & Atendimento
          </h2>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full z-0 pointer-events-none w-1/2 mx-auto h-[400px]"></div>

          {/* Luxury Location Container */}
          <div className="relative z-10 w-full rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Address & Fast Navigation Info Bar */}
            <div className="p-6 sm:p-8 md:p-10 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 text-primary shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-fair text-white mb-1">
                    Edifício Walk Bueno Business — Sala 1608
                  </h3>
                  <p className="text-xs sm:text-sm font-lora text-white/70 leading-relaxed">
                    Rua T-55, nº 930 • Setor Bueno, Goiânia - GO, CEP 74215-170
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-[11px] font-mont text-primary/80">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>Segunda a Sexta: 08h às 19h • Atendimento com Hora Marcada</span>
                  </div>
                </div>
              </div>

              {/* Direct GPS App Links */}
              <div className="md:col-span-5 flex flex-wrap sm:flex-nowrap items-center justify-start md:justify-end gap-3">
                <a
                  href="https://maps.google.com/?q=Dr.+Marcelo+Daltro+-+Dentista+-+Goi%C3%A2nia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-black font-mont text-xs font-bold uppercase tracking-wider hover:bg-[#FFF099] transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href="https://waze.com/ul?q=Dr.+Marcelo+Daltro+-+Dentista+-+Goi%C3%A2nia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mont text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Abrir no Waze</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Interactive Map Area with Always-Visible Skeleton Loader */}
            <div className="relative h-[400px] md:h-[480px] bg-[#0c0c0c] overflow-hidden">
              {/* Skeleton Placeholder (Always rendered beneath iframe to guarantee zero black void) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,rgba(5,5,5,0.95)_70%)]">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 text-primary animate-pulse">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="text-base sm:text-lg font-fair text-white mb-2">
                  Consultório Dr. Marcelo Daltro
                </h4>
                <p className="text-xs sm:text-sm font-lora text-white/60 max-w-md mb-4">
                  Setor Bueno, Goiânia - GO
                </p>
                {!mapLoaded && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-primary/30 text-xs font-mont text-primary/90">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span>Carregando mapa interativo...</span>
                  </div>
                )}
              </div>

              {/* Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4279628749086!2d-49.27400592485033!3d-16.705484984070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11822f5990b%3A0xca8b1e646dc89a22!2sDr.%20Marcelo%20Daltro%20-%20Dentista%20-%20Goi%C3%A2nia!5e0!3m2!1sen!2sbr!4v1756940523080!5m2!1sen!2sbr"
                className={`w-full h-full relative z-10 filter invert-[90%] hue-rotate-[180deg] contrast-[1.2] transition-opacity duration-700 ${
                  mapLoaded ? "opacity-85 hover:opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                title="Mapa do Consultório Dr. Marcelo Daltro"
                onLoad={() => setMapLoaded(true)}
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

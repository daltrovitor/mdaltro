// Hello World
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface CtaLocationProps {
  onOpenModal: () => void;
}

export default function CtaLocation({ onOpenModal }: CtaLocationProps) {
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
      <section id="localizacao" className="bg-transparent py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-mont tracking-[0.4em] text-primary/60 uppercase mb-3 block">
            Onde Estamos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-primary tracking-tight bg-clip-text bg-gradient-to-b from-primary to-primary/50 text-transparent">
            Localização
          </h2>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center max-w-7xl mx-auto px-4 relative"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full z-0 pointer-events-none w-1/2 mx-auto h-[400px]"></div>

          <div className="relative z-10 w-full p-2 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="rounded-[2rem] overflow-hidden relative group h-[450px] md:h-[550px] bg-[#0a0a0a]">
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem] z-20"></div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4279628749086!2d-49.27400592485033!3d-16.705484984070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11822f5990b%3A0xca8b1e646dc89a22!2sDr.%20Marcelo%20Daltro%20-%20Dentista%20-%20Goi%C3%A2nia!5e0!3m2!1sen!2sbr!4v1756940523080!5m2!1sen!2sbr"
                className="w-full h-full filter invert-[90%] hue-rotate-[180deg] contrast-[1.2] opacity-85 group-hover:opacity-100 transition-all duration-1000"
                loading="lazy"
                title="Mapa do Consultório Dr. Marcelo Daltro"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

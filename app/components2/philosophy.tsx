"use client";

import { motion } from "framer-motion";
import GoldCtaButton from "./goldbutton";

interface PhilosophyProps {
  onOpenModal?: () => void;
}

export default function Philosophy({ onOpenModal }: PhilosophyProps) {
  return (
    <section id="filosofia" className="py-28 md:py-36 bg-transparent relative z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/8 blur-[160px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header / Filosofia Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs md:text-sm font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
              Nossa Filosofia
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-white max-w-3xl mx-auto leading-tight md:leading-[1.2] tracking-tight">
            “Antes de tratar dentes,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              precisamos compreender pessoas.
            </span>”
          </h2>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Video Player Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="justify-center text-center max-w-5xl mx-auto relative group"
        >
          {/* Ambient border glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>

          <div className="p-2 sm:p-3 rounded-[2.2rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            <div className="aspect-video rounded-[1.7rem] overflow-hidden relative bg-[#050505]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Mh6_5jt_RHU"
                title="Filosofia Dr. Marcelo Daltro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full relative z-0 filter contrast-[1.05] opacity-95 group-hover:opacity-100 transition-opacity duration-700"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Post-Video Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-center mt-10 md:mt-12"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-fair italic text-[#FFF099]/90 tracking-wide">
            “Diagnosticar. Planejar. Só então, tratar.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}

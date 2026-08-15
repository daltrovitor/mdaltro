"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, MapPin, Shield, Cpu, Coffee } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface ClinicGalleryProps {
  onOpenModal?: () => void;
}

const clinicFeatures = [
  {
    title: "Ambiente Acolhedor & Exclusivo",
    description: "Espaço desenhado para oferecer conforto, privacidade e uma experiência tranquila desde a sua chegada.",
    image: "/clinica1.jpeg",
    icon: Coffee,
  },
  {
    title: "Tecnologia Digital & Precisão 3D",
    description: "Equipamentos de escaneamento intraoral e diagnóstico por imagem de última geração.",
    image: "/clinica2.jpeg",
    icon: Cpu,
  },
  {
    title: "Biossegurança & Excelência",
    description: "Protocolos rigorosos de esterilização e conforto para procedimentos com máxima previsibilidade.",
    image: "/clinica3.jpeg",
    icon: Shield,
  },
];

export default function ClinicGallery({ onOpenModal }: ClinicGalleryProps) {
  return (
    <section id="conheca-a-clinica" className="py-28 md:py-36 bg-transparent relative z-10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/3 w-[700px] h-[500px] bg-primary/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs md:text-sm font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
              Nosso Espaço
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-fair text-white max-w-4xl mx-auto leading-tight md:leading-[1.2] tracking-tight">
            Conheça a clínica.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              Conforto, privacidade e precisão.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto my-8"></div>

          <div className="flex items-center justify-center gap-2 text-white/70 font-lora text-base sm:text-lg">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Edifício Walk Bueno Business — Sala 1608, Setor Bueno, Goiânia - GO</span>
          </div>
        </motion.div>

        {/* 3 Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinicFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group flex flex-col h-full"
              >
                <div className="flex-1 flex flex-col rounded-[2.2rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-primary/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-4 sm:p-5 transition-all duration-700 relative overflow-hidden">
                  <div className="aspect-[4/3] rounded-[1.6rem] overflow-hidden relative mb-6 border border-white/10 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="px-2 pb-2 mt-auto">
                    <h3 className="text-xl sm:text-2xl font-fair text-white group-hover:text-[#FFF099] transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-lora text-white/65 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 md:mt-20"
        >
          <GoldCtaButton onClick={onOpenModal} text="Quero entender meu caso" />
        </motion.div>
      </div>
    </section>
  );
}

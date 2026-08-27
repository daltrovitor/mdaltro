"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquareHeart, Search, Scan, Layers } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface FirstConsultationProps {
  onOpenModal?: () => void;
}

const steps = [
  {
    step: "01",
    title: "Escutamos você",
    description:
      "Entender o que incomoda, suas expectativas, experiências anteriores e o que você deseja alcançar é o primeiro passo para qualquer decisão.",
    icon: MessageSquareHeart,
    image: "/sec41.jpeg",
    tag: "Escuta & Acolhimento",
    caption: "Conversa dedicada fora da cadeira clínica para entender sua história e objetivos.",
  },
  {
    step: "02",
    title: "Avaliamos cuidadosamente",
    description:
      "O exame clínico detalhado nos permite compreender não apenas a estética, mas também a saúde, a função e as particularidades do seu sorriso.",
    icon: Search,
    image: "/sec42.jpeg",
    tag: "Exame Clínico Detalhado",
    caption: "Avaliação minuciosa da saúde bucal, integridade periodontal e função mastigatória.",
  },
  {
    step: "03",
    title: "Enxergamos além do que os olhos podem ver",
    description:
      "Fotografias, escaneamento 3D e recursos de imagem ampliam nossa capacidade de observar detalhes, documentar o caso e compreender melhor o ponto de partida.",
    icon: Scan,
    image: "/sec43.jpeg",
    tag: "Tecnologia & Escaneamento 3D",
    caption: "Mapeamento digital tridimensional para máxima precisão e segurança no diagnóstico.",
  },
  {
    step: "04",
    title: "Planejamos antes de tratar",
    description:
      "Reunimos as informações do diagnóstico para estudar as possibilidades e definir um caminho coerente com suas necessidades, expectativas e prioridades.",
    icon: Layers,
    image: "/sec44.jpeg",
    tag: "Planejamento Individualizado",
    caption: "Estudo integrado para apresentar soluções claras, seguras e personalizadas para você.",
  },
];

export default function FirstConsultation({ onOpenModal }: FirstConsultationProps) {
  return (
    <section id="primeira-consulta" className="py-28 md:py-36 bg-transparent relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs md:text-sm font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
              Sua Primeira Consulta
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-white max-w-3xl mx-auto leading-tight md:leading-[1.2] tracking-tight">
            Tudo começa por{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              compreender o seu caso.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto my-6"></div>

          <p className="text-sm sm:text-base md:text-lg font-lora text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Antes de indicar qualquer tratamento, dedicamos tempo para ouvir você, avaliar cuidadosamente sua saúde bucal e reunir as informações necessárias para construir um diagnóstico e um planejamento individualizados.
          </p>
        </motion.div>

        {/* 4 Visual Steps (Alternating Layouts with 2:3 Portrait Images) */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, delay: 0.1 }}
                className="w-full"
              >
                <div className="p-6 sm:p-8 rounded-[2.5rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-primary/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-700 group relative overflow-hidden">
                  {/* Inner ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-6 lg:gap-10 relative z-10`}>
                    {/* Image Container (2:3 Portrait Aspect Ratio for native 1066x1600 photos) */}
                    <div className="w-full lg:w-5/12 max-w-[400px] overflow-hidden rounded-[2rem] aspect-[2/3] relative shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/10 shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className="inline-block px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-primary/30 text-xs font-mont text-primary/90 font-medium tracking-wide">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-4">
                      <div>
                        <span className="text-3xl sm:text-4xl font-mont font-bold text-primary/30 tracking-tighter">
                          {item.step}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-fair text-white group-hover:text-[#FFF099] transition-colors duration-500 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-base font-lora text-white/70 leading-relaxed font-light">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs font-mont text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                        <span>{item.caption}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Central Statement After 4 Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-16 md:mt-20 space-y-4"
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"></div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-fair italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            “Diagnosticar. Planejar. Só então, tratar.”
          </h3>
        </motion.div>
      </div>
    </section>
  );
}

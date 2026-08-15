"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ShieldCheck } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface RealCasesProps {
  onOpenModal?: () => void;
}

const cases = [
  {
    title: "Reabilitação Estética & Lentes Cerâmicas",
    description: "Harmonização de cor, alinhamento anatômico e proporções ideais com máxima preservação biológica.",
    image: "/dente1.jpeg",
    tag: "Lentes de Contato Cerâmicas",
  },
  {
    title: "Implantes Guiados & Função Mastigatória",
    description: "Reconstrução precisa da mastigação e estética com tecnologia 3D sem cortes extensos.",
    image: "/dente2.jpeg",
    tag: "Implantes Dentários 3D",
  },
  {
    title: "Facetas em Resina de Alta Densidade",
    description: "Transformação do sorriso com escultura personalizada em sessão única, realçando a beleza natural.",
    image: "/dente3.jpeg",
    tag: "Facetas em Resina",
  },
  {
    title: "Reabilitação Oral Integrada",
    description: "Tratamento multidisciplinar para restabelecer saúde, fonética, oclusão e autoestima duradoura.",
    image: "/dente4.jpeg",
    tag: "Reabilitação Oral",
  },
];

export default function RealCases({ onOpenModal }: RealCasesProps) {
  return (
    <section id="casos-reais" className="py-28 md:py-36 bg-transparent relative z-10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-primary/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

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
              Resultados Clínicos
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-fair text-white max-w-4xl mx-auto leading-tight md:leading-[1.2] tracking-tight">
            Casos Reais.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              Transformações autênticas.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto my-8"></div>

          <p className="text-lg sm:text-xl md:text-2xl font-lora text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Cada sorriso é único. Conheça resultados planejados com respeito à anatomia facial e aos objetivos individuais de cada paciente.
          </p>
        </motion.div>

        {/* Grid de Casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full flex flex-col rounded-[2.2rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-primary/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-4 sm:p-6 transition-all duration-700 relative overflow-hidden">
                {/* Image Container */}
                <div className="aspect-[16/10] w-full rounded-[1.6rem] overflow-hidden relative mb-6 border border-white/10 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-primary/30 text-xs font-mont text-primary/90 font-medium tracking-wide flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 pb-2 mt-auto">
                  <h3 className="text-xl sm:text-2xl font-fair text-white group-hover:text-[#FFF099] transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-lora text-white/65 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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

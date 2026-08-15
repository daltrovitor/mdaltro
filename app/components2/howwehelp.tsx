"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface HowWeHelpProps {
  onOpenModal?: () => void;
}

const needs = [
  {
    num: "01",
    title: "Quero melhorar a estética do meu sorriso",
    description:
      "Alterações de cor, formato, proporção, posição ou harmonia dos dentes podem ser tratadas de diferentes maneiras, sempre buscando naturalidade e preservação da estrutura dental.",
    tags: ["Clareamento", "Resinas", "Facetas", "Lentes de contato", "Plástica gengival"],
  },
  {
    num: "02",
    title: "Preciso recuperar dentes desgastados ou comprometidos",
    description:
      "Desgastes, fraturas e tratamentos anteriores podem comprometer estética e função. O atendimento busca recuperar estrutura, equilíbrio e segurança para o sorriso.",
    tags: ["Restaurações", "Coroas", "Próteses", "Reabilitação oral"],
  },
  {
    num: "03",
    title: "Perdi um ou mais dentes",
    description:
      "A ausência de dentes pode afetar mastigação, convívio, estética e confiança. Avaliamos cada situação para definir a melhor forma de recuperar função e integração ao sorriso.",
    tags: ["Implantes guiados", "Próteses cerâmicas", "Reabilitação"],
  },
  {
    num: "04",
    title: "Tenho tratamentos antigos que já não me satisfazem",
    description:
      "Próteses, coroas, restaurações ou tratamentos estéticos antigos podem perder ao longo do tempo sua qualidade estética ou função. Avaliamos a viabilidade de substituição por opções que devolvam resultado estético, funcional ou biológico superior.",
    tags: ["Mudança de restaurações", "Reabilitação estética", "Próteses computadorizadas"],
  },
  {
    num: "05",
    title: "Aperto ou ranjo meus dentes",
    description:
      "O apertamento e o bruxismo podem provocar desgaste, fraturas, desconforto e alterações progressivas no sorriso. Orientamos e acompanhamos com foco na saúde, na preservação dos dentes e alívio de queixas.",
    tags: ["Placas de proteção / miorrelaxantes", "Avaliação de desgaste", "Reabilitação"],
  },
  {
    num: "06",
    title: "Não sei exatamente do que preciso",
    description:
      "Você não precisa chegar à consulta sabendo qual tratamento fazer. Identificar o problema, compreender suas prioridades e ajudar você a decidir faz parte do nosso trabalho.",
    tags: ["Primeira consulta", "Diagnóstico completo", "Planejamento individualizado"],
  },
];

export default function HowWeHelp({ onOpenModal }: HowWeHelpProps) {
  return (
    <section id="como-podemos-ajudar" className="py-28 md:py-36 bg-transparent relative z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[200px] rounded-full pointer-events-none z-0"></div>

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
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs md:text-sm font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
              Como Podemos Ajudar
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-fair text-white max-w-4xl mx-auto leading-tight md:leading-[1.2] tracking-tight">
            Diferentes necessidades.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              Soluções individualizadas.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto my-8"></div>

          <p className="text-lg sm:text-xl md:text-2xl font-lora text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Cada sorriso apresenta necessidades diferentes. Por isso, o tratamento não parte de uma técnica predeterminada, mas do diagnóstico e dos objetivos de cada paciente.
          </p>
        </motion.div>

        {/* 6 Dark Chic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {needs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col h-full group"
            >
              <div className="flex-1 flex flex-col justify-between p-7 sm:p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-primary/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500 relative overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div>
                  {/* Card Number Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-mont font-bold text-primary/40 group-hover:text-primary transition-colors duration-500 tracking-tighter">
                      {item.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary/60 group-hover:text-primary group-hover:border-primary/40 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-fair text-white group-hover:text-[#FFF099] transition-colors duration-300 leading-snug mb-4">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm sm:text-base font-lora text-white/65 leading-relaxed font-light mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Tags Section */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 rounded-full text-xs font-mont bg-white/5 border border-white/10 text-white/60 group-hover:border-primary/20 group-hover:text-primary/90 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-20 md:mt-24 space-y-8"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-lora italic text-white/80 max-w-2xl mx-auto">
            A indicação do tratamento é sempre resultado de uma avaliação individualizada.
          </p>

          <div className="pt-2">
            <GoldCtaButton onClick={onOpenModal} text="Quero entender meu caso" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

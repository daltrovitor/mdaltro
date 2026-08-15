"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Sparkles, CheckCircle2, HeartHandshake } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface AboutDoctorProps {
  onOpenModal?: () => void;
}

export default function AboutDoctor({ onOpenModal }: AboutDoctorProps) {
  return (
    <section id="quem-e-marcelo-daltro" className="py-28 md:py-36 bg-transparent relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle gold accent line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Doctor Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <Image
                  src="/hero12.jpg"
                  alt="Dr. Marcelo Daltro"
                  fill
                  className="object-cover object-top filter contrast-[1.05] grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                    <p className="text-sm font-mont font-bold text-[#FFF099] tracking-wider uppercase">
                      Dr. Marcelo Daltro
                    </p>
                    <p className="text-xs font-lora text-white/70">
                      Reabilitação Oral & Odontologia Estética
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Doctor Bio & Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-7 flex flex-col justify-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md self-start shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-mont tracking-[0.3em] text-primary/90 uppercase font-semibold">
                  Quem é Marcelo Daltro
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-fair text-white leading-tight tracking-tight">
                Mais do que tratar sorrisos,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                  dedicação em transformar vidas.
                </span>
              </h2>

              <p className="text-base sm:text-lg font-lora text-white/75 leading-relaxed font-light">
                Com anos de experiência dedicados à Reabilitação Oral, Lentes de Contato Cerâmicas e Implantodontia de Alta Precisão, o Dr. Marcelo Daltro construiu sua atuação baseada em um princípio inegociável: <strong>o paciente vem sempre em primeiro lugar</strong>.
              </p>

              <p className="text-base sm:text-lg font-lora text-white/75 leading-relaxed font-light">
                Aqui, cada atendimento é conduzido com calma, escuta ativa e tecnologia de diagnóstico tridimensional. Não acreditamos em tratamentos padronizados — acreditamos em soluções pensadas sob medida para a sua saúde, sua estética e sua tranquilidade.
              </p>

              {/* Differentials Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: Award, text: "Especialista em Reabilitação Oral e Estética" },
                  { icon: HeartHandshake, text: "Atendimento focado em acolhimento e escuta" },
                  { icon: CheckCircle2, text: "Planejamento Digital e Previsibilidade 3D" },
                  { icon: Sparkles, text: "Resultados com máxima naturalidade e durabilidade" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-mont text-white/80 font-medium">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6">
                <GoldCtaButton onClick={onOpenModal} text="Quero entender meu caso" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

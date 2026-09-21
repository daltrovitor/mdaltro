// Hello World
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Shield,
  Cpu,
  Coffee,
  Heart,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

interface ClinicGalleryProps {
  onOpenModal?: () => void;
}

interface ClinicSpace {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const clinicSpaces: ClinicSpace[] = [
  {
    id: 1,
    title: "Recepção & Lounge Exclusivo",
    category: "Acolhimento",
    description:
      "Ambiente sofisticado com balcão em pedra ônix translúcida iluminada, poltronas em couro capitonê e conforto acústico desde a sua chegada.",
    image: "/clinica1.jpeg",
    icon: Coffee,
  },
  {
    id: 2,
    title: "Corredor Clínico Envidraçado",
    category: "Arquitetura",
    description:
      "Circulação clean e tecnológica com transparência e integração visual entre consultórios e área clínica.",
    image: "/clinica2.jpeg",
    icon: Shield,
  },
  {
    id: 3,
    title: "Consultório de Atendimento 01",
    category: "Atendimento",
    description:
      "Cadeira ergonômica de alto conforto, monitor suspenso para demonstração de planejamento e mesa para escuta individualizada.",
    image: "/clinica3.jpeg",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Tecnologia Digital & Escaneamento 3D",
    category: "Tecnologia 3D",
    description:
      "Consultório equipado com scanner intraoral tridimensional de última geração e telas de diagnóstico de alta definição.",
    image: "/clinica4.jpeg",
    icon: Cpu,
  },
  {
    id: 5,
    title: "Sala de Repouso & SPA Privativo",
    category: "Conforto & Bem-Estar",
    description:
      "Espaço exclusivo com poltrona reclinável de couro e jardim vertical para repouso tranquilo e privativo pré e pós-procedimentos.",
    image: "/clinica5.jpeg",
    icon: Heart,
  },
  {
    id: 6,
    title: "Centro Clínico & Biossegurança",
    category: "Excelência Clínica",
    description:
      "Sala equipada para reabilitações orais complexas, cirurgias guiadas e protocolos rigorosos de esterilização e segurança biológica.",
    image: "/clinica6.jpeg",
    icon: Shield,
  },
  {
    id: 7,
    title: "Detalhes de Design & Sofisticação",
    category: "Identidade",
    description:
      "Mármore ônix nobre iluminado, iluminação planejada e acabamentos refinados que refletem o padrão de cuidado da clínica.",
    image: "/clinica7.jpeg",
    icon: Sparkles,
  },
  {
    id: 8,
    title: "Sala de Espera Panorâmica",
    category: "Conforto",
    description:
      "Integração harmônica entre sofisticação, luz suave e bem-estar para proporcionar uma experiência serena a você e seus acompanhantes.",
    image: "/clinica8.jpeg",
    icon: Coffee,
  },
];

export default function ClinicGallery({ onOpenModal }: ClinicGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPhotoIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % clinicSpaces.length : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev === 0 ? clinicSpaces.length - 1 : prev - 1) : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <section id="conheca-a-clinica" className="py-28 md:py-36 bg-transparent relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/3 w-[700px] h-[500px] bg-primary/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs md:text-sm font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
              Nosso Espaço
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-white max-w-3xl mx-auto leading-tight md:leading-[1.2] tracking-tight">
            Conheça a clínica.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              Conforto, privacidade e precisão.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto my-6"></div>

          <div className="flex items-center justify-center gap-2 text-white/70 font-lora text-xs sm:text-sm md:text-base">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Edifício Walk Bueno Business — Sala 1608, Setor Bueno, Goiânia - GO</span>
          </div>
        </motion.div>

        {/* 8 Clinic Spaces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicSpaces.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group flex flex-col h-full cursor-pointer"
              >
                <div className="flex-1 flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 group-hover:border-primary/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.2)] p-4 transition-all duration-700 relative overflow-hidden">
                  {/* Image Container */}
                  <div className="aspect-[16/10] rounded-[1.4rem] overflow-hidden relative mb-4 border border-white/10 shadow-lg bg-black">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover filter contrast-[1.05] grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Category tag top-left */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-primary/30 text-[10px] font-mont text-primary/90 font-medium tracking-wide uppercase">
                        {item.category}
                      </span>
                    </div>

                    {/* Icon top-right */}
                    <div className="absolute top-3 right-3 z-20">
                      <div className="w-7 h-7 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-primary">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Hover expand hint */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-9 h-9 rounded-full bg-black/90 border border-primary text-primary flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-1 pb-1 mt-auto flex flex-col justify-between">
                    <h3 className="text-lg font-fair text-white group-hover:text-[#FFF099] transition-colors duration-300 mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-lora text-white/65 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE FULL CLINIC PHOTO LIGHTBOX
          ========================================================================= */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhotoIndex(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 overflow-hidden flex flex-col max-h-[95vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <div>
                    <h4 className="text-base sm:text-lg font-fair text-white font-semibold leading-tight">
                      {clinicSpaces[selectedPhotoIndex].title}
                    </h4>
                    <p className="text-xs font-mont text-primary/80">
                      Foto {selectedPhotoIndex + 1} de {clinicSpaces.length} •{" "}
                      {clinicSpaces[selectedPhotoIndex].category}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPhotoIndex(null)}
                  aria-label="Fechar foto"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-primary/50 text-white hover:text-primary flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Area */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] md:min-h-[480px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPhotoIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-[320px] sm:h-[430px] md:h-[500px]"
                  >
                    <Image
                      src={clinicSpaces[selectedPhotoIndex].image}
                      alt={clinicSpaces[selectedPhotoIndex].title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhotoIndex((prev) =>
                      prev !== null ? (prev === 0 ? clinicSpaces.length - 1 : prev - 1) : 0
                    );
                  }}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhotoIndex((prev) =>
                      prev !== null ? (prev + 1) % clinicSpaces.length : 0
                    );
                  }}
                  aria-label="Próxima foto"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption & Thumbnails */}
              <div className="px-6 py-4 bg-gradient-to-t from-black to-white/[0.02] border-t border-white/10">
                <p className="text-xs sm:text-sm font-lora text-white/75 font-light leading-relaxed mb-4">
                  {clinicSpaces[selectedPhotoIndex].description}
                </p>

                {/* Thumbnails strip */}
                <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20">
                  {clinicSpaces.map((space, sIdx) => (
                    <button
                      key={space.id}
                      type="button"
                      onClick={() => setSelectedPhotoIndex(sIdx)}
                      className={`relative w-16 h-11 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                        selectedPhotoIndex === sIdx
                          ? "border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.5)] opacity-100"
                          : "border-white/10 opacity-50 hover:opacity-90"
                      }`}
                    >
                      <Image
                        src={space.image}
                        alt={space.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


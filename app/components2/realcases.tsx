"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  ChevronsLeftRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Info,
  CheckCircle2,
} from "lucide-react";

interface RealCasesProps {
  onOpenModal?: () => void;
}

interface CasePhoto {
  src: string;
  title: string;
  stage: "Antes" | "Depois" | string;
  isBefore: boolean;
  description: string;
}

interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  summary: string;
  clinicalDetails: string;
  patientProfile?: string;
  beforeImage: string;
  afterImage: string;
  photos: CasePhoto[];
}

const clinicalCases: CaseStudy[] = [
  {
    id: "caso-1",
    title: "Reabilitação Estética com Lentes de Contato Cerâmicas",
    tag: "Lentes de Contato Cerâmicas",
    summary:
      "Transformação estética e funcional com restabelecimento de proporções anatômicas, harmonia facial e preservação biológica máxima dos dentes naturais.",
    clinicalDetails:
      "Neste caso, realizamos um diagnóstico fotográfico e digital 3D completo. Havia queixa quanto à proporção, textura e alinhamento dos dentes anteriores. Com preparos minimamente invasivos no esmalte, confeccionamos lâminas cerâmicas de alta densidade que devolveram vitalidade, translucidez natural e luminosidade ao sorriso.",
    patientProfile: "Queixa estética de desgaste dental, formato e coloração.",
    beforeImage: "/caso11.jpeg", // Final ímpar = Antes
    afterImage: "/caso12.jpeg",  // Final par = Depois
    photos: [
      {
        src: "/caso11.jpeg",
        title: "Sorriso Inicial Frontal",
        stage: "Antes",
        isBefore: true,
        description:
          "Situação inicial: registro frontal mostrando o alinhamento, forma e proporções anatômicas antes de iniciar o planejamento.",
      },
      {
        src: "/caso12.jpeg",
        title: "Resultado Final da Transformação",
        stage: "Depois",
        isBefore: false,
        description:
          "Resultado final: restabelecimento das proporções áureas, equilíbrio de cor e textura natural das lentes cerâmicas em harmonia com os lábios.",
      },
      {
        src: "/caso13.jpeg",
        title: "Registro de Detalhe Inicial",
        stage: "Antes",
        isBefore: true,
        description:
          "Vista detalhada das bordas incisais e estrutura dentária prévia, identificando áreas de desgaste e assimetria.",
      },
      {
        src: "/caso14.jpeg",
        title: "Textura & Acabamento Cerâmico",
        stage: "Depois",
        isBefore: false,
        description:
          "Macrofotografia demonstrando a microtextura superficial, translucidez nas pontas incisais e acabamento marginal impecável.",
      },
      {
        src: "/caso15.jpeg",
        title: "Visão Lateral / Oclusal Inicial",
        stage: "Antes",
        isBefore: true,
        description:
          "Avaliação de arco e plano oclusal no início do tratamento para planejar a guia anterior e a função mastigatória correta.",
      },
      {
        src: "/caso16.jpeg",
        title: "Integração Estética e Oclusal Final",
        stage: "Depois",
        isBefore: false,
        description:
          "Finalização completa: estabilidade oclusal recuperada, saúde gengival preservada e novo padrão estético refinado.",
      },
    ],
  },
  {
    id: "caso-2",
    title: "Porcelana tipo Lentes de Contato",
    tag: "Porcelana tipo Lentes de Contato",
    summary:
      "Transformação estética refinada através de laminados em porcelana pura, restabelecendo a harmonia do sorriso, alinhamento e proporções com máxima naturalidade.",
    clinicalDetails:
      "Caso planejado digitalmente para correção de forma, textura e proporção dental. Com lâminas ultrafinas em porcelana de alta densidade confeccionadas sob medida, alcançamos integração estética perfeita com a linha do sorriso e preservação máxima do esmalte biológico.",
    patientProfile: "Queixa de formato, cor e proporção dos dentes anteriores.",
    beforeImage: "/caso21.jpeg", // Final ímpar = Antes
    afterImage: "/caso22.jpeg",  // Final par = Depois
    photos: [
      {
        src: "/caso21.jpeg",
        title: "Sorriso Inicial Frontal",
        stage: "Antes",
        isBefore: true,
        description:
          "Situação inicial: registro fotográfico prévio demonstrando a anatomia, desproporções e aspecto estético antes do tratamento.",
      },
      {
        src: "/caso22.jpeg",
        title: "Resultado Final com Porcelanas",
        stage: "Depois",
        isBefore: false,
        description:
          "Resultado final: harmonização estética completa com lentes em porcelana, devolvendo luminosidade, brilho natural e proporções áureas.",
      },
      {
        src: "/caso23.jpeg",
        title: "Registro de Detalhe Inicial",
        stage: "Antes",
        isBefore: true,
        description:
          "Visualização em close das características anatômicas e bordas dos dentes no ponto de partida.",
      },
      {
        src: "/caso24.jpeg",
        title: "Textura & Acabamento em Porcelana",
        stage: "Depois",
        isBefore: false,
        description:
          "Macrofotografia evidenciando a microtextura superficial, translucidez natural e adaptação biológica refinada.",
      },
      {
        src: "/caso25.jpeg",
        title: "Visão Lateral / Oclusal Inicial",
        stage: "Antes",
        isBefore: true,
        description:
          "Avaliação lateral e funcional do arco dental antes do planejamento das lâminas cerâmicas.",
      },
      {
        src: "/caso26.jpeg",
        title: "Integração Estética e Funcional Final",
        stage: "Depois",
        isBefore: false,
        description:
          "Finalização completa: estabilidade oclusal e perfeita integração com a linha labial e dinâmica do sorriso.",
      },
    ],
  },
  {
    id: "caso-3",
    title: "Facetas de Porcelana",
    tag: "Facetas de Porcelana",
    summary:
      "Correção precisa de cor, fechamento de espaços e reanatomização dental com facetas cerâmicas de alta translucidez e durabilidade.",
    clinicalDetails:
      "Planejamento com tecnologia 3D e confecção de facetas cerâmicas personalizadas para harmonizar o corredor bucal e a linha labial com mínima intervenção e máxima retenção biológica.",
    patientProfile: "Busca por alinhamento estético e restauração de dentes desgastados.",
    beforeImage: "/caso31.jpeg",
    afterImage: "/caso32.jpeg",
    photos: [
      {
        src: "/caso31.jpeg",
        title: "Situação Inicial",
        stage: "Antes",
        isBefore: true,
        description:
          "Registro fotográfico inicial identificando assimetrias e perda de volume dental anterior.",
      },
      {
        src: "/caso32.jpeg",
        title: "Resultado com Facetas",
        stage: "Depois",
        isBefore: false,
        description:
          "Resultado final pós-cimentação das facetas cerâmicas com anatomia e brilho natural restabelecidos.",
      },
      {
        src: "/caso33.jpeg",
        title: "Escultura Cerâmica",
        stage: "Laboratorial",
        isBefore: false,
        description:
          "Facetas confeccionadas em cerâmica pura com fidelidade micrométrica às proporções planejadas.",
      },
      {
        src: "/caso34.jpeg",
        title: "Preparo Minimamente Invasivo",
        stage: "Etapa Clínica",
        isBefore: true,
        description:
          "Preparo conservador preservando ao máximo a estrutura do esmalte dentário.",
      },
      {
        src: "/caso35.jpeg",
        title: "Harmonia Facial e Sorriso Frontal",
        stage: "Depois",
        isBefore: false,
        description:
          "Sorriso projetado para valorizar a expressão natural e as proporções do rosto.",
      },
      {
        src: "/caso36.jpeg",
        title: "Vista Lateral & Textura",
        stage: "Depois",
        isBefore: false,
        description:
          "Microtexturas e luminosidade perfeitamente integradas à dentição natural.",
      },
    ],
  },
];

// Componente individual para cada card grandão de Antes e Depois
function CaseItemComparator({
  caseItem,
  onOpenGallery,
}: {
  caseItem: CaseStudy;
  onOpenGallery: () => void;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        handleSliderMove(e.touches[0].clientX);
      }
    },
    [handleSliderMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleSliderMove(e.clientX);
    },
    [isDragging, handleSliderMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="p-4 sm:p-7 md:p-9 rounded-[2.2rem] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Header do Caso */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 sm:mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[11px] font-mont text-primary/90 font-semibold tracking-wider uppercase">
              {caseItem.tag}
            </span>
            <span className="text-[11px] text-white/50 font-mont">
              {caseItem.photos.length} Fotos no Caso
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-fair text-white">
            {caseItem.title}
          </h3>
        </div>

        {/* Botão Ver Mais / Ver Caso Completo */}
        <button
          type="button"
          onClick={onOpenGallery}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF099] text-black text-xs font-mont font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-105 group cursor-pointer shrink-0 self-start md:self-auto"
        >
          <Images className="w-4 h-4 text-black" />
          <span>Ver Mais • Galeria Completa</span>
        </button>
      </div>

      {/* Comparador com Clip-Path Perfeito (Sem diferença de zoom entre antes e depois) */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden select-none border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-black cursor-ew-resize group"
      >
        {/* Layer 1: Depois (Fundo Completo) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={caseItem.afterImage}
            alt="Depois - Resultado Final"
            fill
            priority
            className="object-cover object-center pointer-events-none filter contrast-[1.05]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 text-xs font-mont font-bold text-[#FFF099] tracking-wider uppercase shadow-lg">
              Depois
            </span>
          </div>
        </div>

        {/* Layer 2: Antes (Recortada por clipPath mantendo a mesma dimensão e escala exatas) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={caseItem.beforeImage}
            alt="Antes - Situação Inicial"
            fill
            priority
            className="object-cover object-center pointer-events-none filter contrast-[1.05]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-xs font-mont font-bold text-white/90 tracking-wider uppercase shadow-lg">
              Antes
            </span>
          </div>
        </div>

        {/* Divisor do Slider */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-[#FFF099] to-primary pointer-events-none z-20 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/90 border-2 border-[#D4AF37] text-[#FFF099] shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ChevronsLeftRight className="w-4 h-4" />
          </div>
        </div>

        {/* Botão de Expansão no Rodapé da Foto */}
        <div
          onClick={onOpenGallery}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-primary/40 text-[#FFF099] text-[11px] sm:text-xs font-mont font-medium tracking-wide pointer-events-auto hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer flex items-center gap-2 shadow-xl"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Ver Mais • Ampliar fotos com slide</span>
        </div>
      </div>

      {/* Resumo e Botões de Controle Rápido */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 pt-4 border-t border-white/10">
        <p className="text-xs sm:text-sm font-lora text-white/70 font-light leading-relaxed text-center sm:text-left">
          {caseItem.summary}
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`px-3 py-1 rounded-full text-[11px] font-mont tracking-wider transition-colors cursor-pointer ${
              sliderPosition === 0
                ? "bg-primary text-black font-bold"
                : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            100% Depois
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1 rounded-full text-[11px] font-mont tracking-wider transition-colors cursor-pointer ${
              sliderPosition === 50
                ? "bg-primary text-black font-bold"
                : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            50 / 50
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`px-3 py-1 rounded-full text-[11px] font-mont tracking-wider transition-colors cursor-pointer ${
              sliderPosition === 100
                ? "bg-primary text-black font-bold"
                : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            100% Antes
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RealCases({ onOpenModal }: RealCasesProps) {
  const [modalCase, setModalCase] = useState<CaseStudy | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const handleOpenCaseGallery = (caseItem: CaseStudy, initialIndex = 0) => {
    setModalCase(caseItem);
    setActivePhotoIndex(initialIndex);
  };

  const handleCloseCaseGallery = () => {
    setModalCase(null);
    setActivePhotoIndex(0);
  };

  useEffect(() => {
    if (modalCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalCase]);

  useEffect(() => {
    if (!modalCase) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseCaseGallery();
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev + 1) % modalCase.photos.length);
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev === 0 ? modalCase.photos.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalCase]);

  return (
    <section id="casos-reais" className="py-20 md:py-28 bg-transparent relative z-10 overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-primary/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[11px] sm:text-xs font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
              Resultados Clínicos
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-white max-w-3xl mx-auto leading-tight md:leading-[1.2] tracking-tight">
            Casos Reais.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              Transformações autênticas.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto my-5"></div>

          <p className="text-xs sm:text-sm md:text-base font-lora text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Cada sorriso é único. Arraste o comparador de antes e depois e clique em <b>Ver Mais</b> para abrir a galeria completa com as fotos ampliadas e detalhes do planejamento.
          </p>
        </motion.div>

        {/* 3 Casos Empilhados Verticalmente (Sem abas e sem cards pequenos) */}
        <div className="space-y-12 md:space-y-16">
          {clinicalCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <CaseItemComparator
                caseItem={caseItem}
                onOpenGallery={() => handleOpenCaseGallery(caseItem, 0)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox com Slide e Painel Lateral */}
      <AnimatePresence>
        {modalCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCaseGallery}
              className="fixed inset-0 bg-black/92 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-6xl bg-[#0a0a0a] border border-[#D4AF37]/35 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Barra Superior */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-mont font-semibold uppercase tracking-wider text-[#FFF099]">
                    {modalCase.tag} • Caso Clínico
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCloseCaseGallery}
                  aria-label="Fechar galeria"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-primary/50 text-white hover:text-primary flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Grid: Slide na Esquerda + Detalhes na Lateral */}
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
                {/* Slide */}
                <div className="lg:col-span-7 bg-black/60 flex flex-col justify-between p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-black rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center shadow-inner">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePhotoIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={modalCase.photos[activePhotoIndex].src}
                          alt={modalCase.photos[activePhotoIndex].title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mont font-bold tracking-wider uppercase backdrop-blur-md shadow-md border ${
                          modalCase.photos[activePhotoIndex].isBefore
                            ? "bg-black/80 text-white border-white/30"
                            : "bg-[#D4AF37]/90 text-black border-[#FFF099]"
                        }`}
                      >
                        {modalCase.photos[activePhotoIndex].stage}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhotoIndex((prev) =>
                          prev === 0 ? modalCase.photos.length - 1 : prev - 1
                        );
                      }}
                      aria-label="Foto anterior"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-[#D4AF37] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhotoIndex((prev) => (prev + 1) % modalCase.photos.length);
                      }}
                      aria-label="Próxima foto"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-[#D4AF37] hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Miniaturas */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mont text-white/50">
                        Foto {activePhotoIndex + 1} de {modalCase.photos.length}
                      </span>
                      <span className="text-[10px] font-mont text-primary/80">
                        Ímpar = Antes • Par = Depois
                      </span>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-primary/20">
                      {modalCase.photos.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => setActivePhotoIndex(pIdx)}
                          className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                            activePhotoIndex === pIdx
                              ? "border-[#D4AF37] scale-105 shadow-[0_0_12px_rgba(212,175,55,0.5)] opacity-100"
                              : "border-white/15 opacity-45 hover:opacity-90"
                          }`}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.title}
                            fill
                            className="object-cover"
                            sizes="70px"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Texto na Lateral */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white/[0.02] to-transparent">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-mont uppercase tracking-[0.25em] text-primary/70 font-semibold block mb-1">
                        Estudo de Caso
                      </span>
                      <h4 className="text-xl sm:text-2xl font-fair text-white leading-snug">
                        {modalCase.title}
                      </h4>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.04] border border-[#D4AF37]/25 space-y-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mont font-bold uppercase ${
                            modalCase.photos[activePhotoIndex].isBefore
                              ? "bg-white/10 text-white"
                              : "bg-[#D4AF37]/20 text-[#FFF099]"
                          }`}
                        >
                          {modalCase.photos[activePhotoIndex].stage}
                        </span>
                        <h5 className="text-sm font-fair text-white font-medium">
                          {modalCase.photos[activePhotoIndex].title}
                        </h5>
                      </div>
                      <p className="text-xs font-lora text-white/80 font-light leading-relaxed">
                        {modalCase.photos[activePhotoIndex].description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <h6 className="text-xs font-mont font-bold uppercase tracking-wider text-[#FFF099] flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-primary" />
                        Planejamento & Conduta Clínica
                      </h6>
                      <p className="text-xs sm:text-sm font-lora text-white/70 font-light leading-relaxed">
                        {modalCase.clinicalDetails}
                      </p>
                    </div>

                    <div className="pt-2 space-y-1.5">
                      {[
                        "Planejamento digital individualizado",
                        "Preservação da estrutura dental biológica",
                        "Harmonia de cor, formato e oclusão",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-mont text-white/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        handleCloseCaseGallery();
                        if (onOpenModal) onOpenModal();
                      }}
                      className="w-full py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF099] text-black text-xs font-mont font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] cursor-pointer text-center"
                    >
                      Quero Avaliar Meu Caso
                    </button>
                    <p className="text-[10px] text-center font-lora text-white/40">
                      Cada caso é único. A indicação depende de avaliação clínica.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

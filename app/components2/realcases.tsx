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
  Calendar,
  CheckCircle2,
  ArrowRight,
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
    beforeImage: "/3.jpg",
    afterImage: "/4.jpg",
    photos: [
      {
        src: "/3.jpg",
        title: "Situação Inicial",
        stage: "Antes",
        isBefore: true,
        description:
          "Registro fotográfico inicial identificando assimetrias e perda de volume dental anterior.",
      },
      {
        src: "/4.jpg",
        title: "Resultado com Facetas",
        stage: "Depois",
        isBefore: false,
        description:
          "Resultado final pós-cimentação das facetas cerâmicas com anatomia e brilho natural restabelecidos.",
      },
      {
        src: "/dente1.jpeg",
        title: "Escultura Cerâmica",
        stage: "Laboratorial",
        isBefore: false,
        description:
          "Facetas confeccionadas em cerâmica pura com fidelidade micrométrica às proporções planejadas.",
      },
      {
        src: "/dente2.jpeg",
        title: "Preparo Minimamente Invasivo",
        stage: "Etapa Clínica",
        isBefore: true,
        description:
          "Preparo conservador preservando ao máximo a estrutura do esmalte dentário.",
      },
      {
        src: "/dente3.jpeg",
        title: "Harmonia Facial e Sorriso Frontal",
        stage: "Depois",
        isBefore: false,
        description:
          "Sorriso projetado para valorizar a expressão natural e as proporções do rosto.",
      },
      {
        src: "/dente4.jpeg",
        title: "Vista Lateral & Textura",
        stage: "Depois",
        isBefore: false,
        description:
          "Microtexturas e luminosidade perfeitamente integradas à dentição natural.",
      },
    ],
  },
];

export default function RealCases({ onOpenModal }: RealCasesProps) {
  // State for active selected case in the main comparator
  const [selectedCaseId, setSelectedCaseId] = useState<string>("caso-1");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // State for expanded gallery modal
  const [modalCase, setModalCase] = useState<CaseStudy | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const activeCase = clinicalCases.find((c) => c.id === selectedCaseId) || clinicalCases[0];

  const handleOpenCaseGallery = (caseItem: CaseStudy, initialIndex = 0) => {
    setModalCase(caseItem);
    setActivePhotoIndex(initialIndex);
  };

  const handleCloseCaseGallery = () => {
    setModalCase(null);
    setActivePhotoIndex(0);
  };

  // Slider drag handling
  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
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

  // Lock body scroll when gallery modal is open
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

  // Keyboard navigation for gallery modal
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
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-primary/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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

          {/* Cases Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {clinicalCases.map((c, index) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setSelectedCaseId(c.id);
                  setSliderPosition(50);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mont tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  selectedCaseId === c.id
                    ? "bg-[#D4AF37] text-black font-bold shadow-[0_0_25px_rgba(212,175,55,0.35)] scale-105"
                    : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                <span>Caso 0{index + 1}</span>
                <span className="opacity-70 text-[10px] hidden sm:inline">• {c.tag}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* =========================================================================
            FEATURED INTERACTIVE BEFORE / AFTER HERO COMPARATOR
            ========================================================================= */}
        <motion.div
          key={activeCase.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="p-4 sm:p-7 md:p-9 rounded-[2.2rem] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent border border-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
            
            {/* Header of the featured case */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 sm:mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[11px] font-mont text-primary/90 font-semibold tracking-wider uppercase">
                    {activeCase.tag}
                  </span>
                  <span className="text-[11px] text-white/50 font-mont">
                    {activeCase.photos.length} Fotos no Caso
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fair text-white">
                  {activeCase.title}
                </h3>
              </div>

              {/* Botão Ver Mais / Ver Caso Completo */}
              <button
                type="button"
                onClick={() => handleOpenCaseGallery(activeCase, 0)}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF099] text-black text-xs font-mont font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-105 group cursor-pointer shrink-0 self-start md:self-auto"
              >
                <Images className="w-4 h-4 text-black" />
                <span>Ver Mais • Galeria Completa</span>
              </button>
            </div>

            {/* Interactive Before/After Visual Box (Principais: caso11 Antes / caso12 Depois) */}
            <div
              ref={sliderContainerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden select-none border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-black cursor-ew-resize group"
            >
              {/* After Image (Background / Full Width - Final Par: caso12) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={activeCase.afterImage}
                  alt="Depois - Resultado Final "
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

              {/* Before Image (Foreground / Clipped Width - Final Ímpar: caso11) */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full min-w-[100vw] max-w-none">
                  {/* Container match to prevent squishing */}
                  <div
                    style={{
                      width: sliderContainerRef.current
                        ? `${sliderContainerRef.current.clientWidth}px`
                        : "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={activeCase.beforeImage}
                      alt="Antes - Situação Inicial "
                      fill
                      priority
                      className="object-cover object-center pointer-events-none filter contrast-[1.05]"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-xs font-mont font-bold text-white/90 tracking-wider uppercase shadow-lg">
                    Antes 
                  </span>
                </div>
              </div>

              {/* Vertical Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-[#FFF099] to-primary pointer-events-none z-20 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Drag Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/90 border-2 border-[#D4AF37] text-[#FFF099] shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ChevronsLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Click overlay button on bottom */}
              <div
                onClick={() => handleOpenCaseGallery(activeCase, 0)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-primary/40 text-[#FFF099] text-[11px] sm:text-xs font-mont font-medium tracking-wide pointer-events-auto hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer flex items-center gap-2 shadow-xl"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ver Mais • Ampliar fotos com slide</span>
              </div>
            </div>

            {/* Quick slider presets & Case summary */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 pt-4 border-t border-white/10">
              <p className="text-xs sm:text-sm font-lora text-white/70 font-light leading-relaxed text-center sm:text-left">
                {activeCase.summary}
              </p>

              {/* Quick control buttons */}
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
        </motion.div>

        {/* =========================================================================
            ADDITIONAL CLINICAL CASES GALLERY CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {clinicalCases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onClick={() => handleOpenCaseGallery(item, 0)}
              className="group flex flex-col h-full cursor-pointer"
            >
              <div className="h-full flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 group-hover:border-primary/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] p-4 sm:p-5 transition-all duration-700 relative overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Main Card Image with interactive prompt */}
                <div className="aspect-[16/11] w-full rounded-[1.4rem] overflow-hidden relative mb-4 border border-white/10 shadow-lg bg-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
                  <Image
                    src={item.afterImage}
                    alt={item.title}
                    fill
                    className="object-cover filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Tag top-left */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-primary/30 text-[10px] font-mont text-primary/90 font-medium tracking-wide flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                      {item.tag}
                    </span>
                  </div>

                  {/* Photo counter badge top-right */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mont text-white/80 font-medium flex items-center gap-1">
                      <Images className="w-3 h-3 text-primary" />
                      {item.photos.length} fotos
                    </span>
                  </div>

                  {/* Hover expansion prompt */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-[#D4AF37] text-xs font-mont font-bold uppercase tracking-wider text-[#FFF099] shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Ver Mais
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-1 pb-1 mt-auto">
                  <h3 className="text-base sm:text-lg font-fair text-white group-hover:text-[#FFF099] transition-colors duration-300 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-lora text-white/65 leading-relaxed font-light line-clamp-2">
                    {item.summary}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mont text-primary/80">
                    <span className="flex items-center gap-1 font-semibold">
                      Ver Caso Completo <ArrowRight className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] text-white/40">Antes & Depois</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          FULL CLINICAL CASE GALLERY MODAL (SLIDE COM FOTOS + TEXTO NA LATERAL)
          ========================================================================= */}
      <AnimatePresence>
        {modalCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCaseGallery}
              className="fixed inset-0 bg-black/92 backdrop-blur-2xl"
            />

            {/* Modal Box com Slide e Texto na Lateral */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-6xl bg-[#0a0a0a] border border-[#D4AF37]/35 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
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

              {/* Main Body: Grid 12 colunas (Slide de Fotos à Esquerda + Texto Sobre o Caso na Lateral) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
                
                {/* Coluna 1: Slide de Fotos (7 colunas no Desktop) */}
                <div className="lg:col-span-7 bg-black/60 flex flex-col justify-between p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10">
                  
                  {/* Photo Display Screen */}
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

                    {/* Badge Antes / Depois na Foto */}
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

                    {/* Left Navigation Arrow */}
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

                    {/* Right Navigation Arrow */}
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

                  {/* Thumbnails strip below the slide */}
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

                {/* Coluna 2: Texto Sobre o Caso na Lateral (5 colunas no Desktop) */}
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

                    {/* Descrição Ativa da Foto Selecionada */}
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

                    {/* Texto Clínico e Planejamento */}
                    <div className="space-y-2 pt-2">
                      <h6 className="text-xs font-mont font-bold uppercase tracking-wider text-[#FFF099] flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-primary" />
                        Planejamento & Conduta Clínica
                      </h6>
                      <p className="text-xs sm:text-sm font-lora text-white/70 font-light leading-relaxed">
                        {modalCase.clinicalDetails}
                      </p>
                    </div>

                    {/* Pilares do Tratamento */}
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

                  {/* CTA no Rodapé da Lateral */}
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

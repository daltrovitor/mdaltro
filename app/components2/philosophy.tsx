// Hello World
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface PhilosophyProps {
  onOpenModal?: () => void;
}

export default function Philosophy({ onOpenModal }: PhilosophyProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIframeReady, setIsIframeReady] = useState(false);

  return (
    <section id="filosofia" className="pt-4 pb-12 sm:pt-8 sm:pb-20 md:py-28 bg-transparent relative z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/8 blur-[160px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header / Filosofia Title */}
        <div className="text-center mb-8 md:mb-16">
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
        </div>

        {/* Video Player Box */}
        <div className="justify-center text-center max-w-5xl mx-auto relative group">
          {/* Ambient border glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>

          <div className="p-2 sm:p-3 rounded-[2.2rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            <div className="aspect-video rounded-[1.7rem] overflow-hidden relative bg-[#050505]">
              {/* Cover Image & Play Action */}
              {(!isPlaying || !isIframeReady) && (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer group/cover z-10"
                >
                  <img
                    src="/thumbnails/filosofia.webp"
                    alt="Filosofia Dr. Marcelo Daltro"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover/cover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Play Button (when not yet clicked) */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -inset-3 rounded-full bg-[#D4AF37]/30 blur-md animate-pulse"></div>
                        <button
                          type="button"
                          aria-label="Assistir ao vídeo Nossa Filosofia"
                          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/80 text-[#FFF099] flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.4)] group-hover/cover:shadow-[0_0_50px_rgba(212,175,55,0.8)] group-hover/cover:scale-110 group-hover/cover:bg-[#D4AF37] group-hover/cover:text-black transition-all duration-500 cursor-pointer"
                        >
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1.5" fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Connecting / Loading indicator (while YouTube player initializes) */}
                  {isPlaying && !isIframeReady && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin"></div>
                      <span className="text-xs font-mont tracking-wider text-[#FFF099] uppercase font-semibold">
                        Iniciando vídeo...
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* YouTube Iframe (Fades in smoothly when ready) */}
              {isPlaying && (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Mh6_5jt_RHU?autoplay=1&rel=0&modestbranding=1"
                  title="Filosofia Dr. Marcelo Daltro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={`w-full h-full relative z-0 transition-opacity duration-500 ${
                    isIframeReady ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setIsIframeReady(true)}
                ></iframe>
              )}
            </div>
          </div>
        </div>

        {/* Post-Video Statement */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-xl sm:text-2xl md:text-3xl font-fair italic text-[#FFF099]/90 tracking-wide">
            “Diagnosticar. Planejar. Só então, tratar.”
          </p>
        </div>
      </div>
    </section>
  );
}

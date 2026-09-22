// Hello World
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    // Ultra-fast luxury loader (~600ms total, never delays user)
    const t1 = setTimeout(() => setProgress(65), 150);
    const t2 = setTimeout(() => setProgress(100), 380);
    const tFade = setTimeout(() => setIsFading(true), 560);
    const tRemove = setTimeout(() => setIsVisible(false), 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(tFade);
      clearTimeout(tRemove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Carregando experiência Dr. Marcelo Daltro"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-300 ease-out select-none ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-[#D4AF37]/12 rounded-full blur-[100px] pointer-events-none" />

      {/* Luxury Monogram / Brand Emblem */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-5 drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
          <Image
            src="/logo1-sm.png"
            alt="Dr. Marcelo Daltro"
            fill
            priority
            className="object-contain"
            sizes="80px"
          />
        </div>

        <span className="text-xs sm:text-sm font-fair tracking-[0.25em] text-[#FFF099] uppercase font-semibold mb-1">
          Dr. Marcelo Daltro
        </span>
        <span className="text-[9px] sm:text-[10px] font-mont tracking-[0.3em] text-[#D4AF37]/75 uppercase font-light mb-7">
          Odontologia de Alta Performance
        </span>

        {/* Micro Progress Bar */}
        <div className="w-40 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] transition-all duration-300 ease-out rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

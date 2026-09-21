// Hello World

import React from "react";

const LOGO_MOBILE_B64 = "data:image/webp;base64,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";

const Word = ({ text, delay, className = "" }: { text: string; delay: number; className?: string }) => (
  <span
    className={`hero-word ${className}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {text}
  </span>
);

const colors = {
  50: "#f8f7f5",
  100: "#e6e1d7",
  200: "#c8b4a0",
  300: "#a89080",
  400: "#8a7060",
  500: "#6b5545",
  600: "#544237",
  700: "#3c4237",
  800: "#2a2e26",
  900: "#1a1d18",
};

interface HeroProps {
  onOpenModal?: () => void;
  logoSrc?: string;
}

export default function Hero({ logoSrc = "/logo2-opt.webp" }: HeroProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7] font-mont overflow-hidden relative w-full flex flex-col justify-center items-center py-12 px-4 sm:px-8">
      
      {/* Background SVG Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(200,180,160,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.05 }}
        />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

      {/* Corner elements */}
      <div className="corner-element top-8 left-8" style={{ animationDelay: "4s" }}>
        <div
          className="absolute top-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        />
      </div>
      <div className="corner-element top-8 right-8" style={{ animationDelay: "4.2s" }}>
        <div
          className="absolute top-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        />
      </div>
      <div className="corner-element bottom-8 left-8" style={{ animationDelay: "4.4s" }}>
        <div
          className="absolute bottom-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        />
      </div>
      <div className="corner-element bottom-8 right-8" style={{ animationDelay: "4.6s" }}>
        <div
          className="absolute bottom-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        />
      </div>

      {/* Floating elements */}
      <div className="floating-element" style={{ top: "25%", left: "15%", animationDelay: "5s" }} />
      <div className="floating-element" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }} />
      <div className="floating-element" style={{ top: "40%", left: "10%", animationDelay: "6s" }} />
      <div className="floating-element" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }} />

      {/* Central Content Wrapper (100% Centered Vertically & Horizontally) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center my-auto py-8 sm:py-12 px-2 sm:px-6 w-full">
        
        {/* Logo Marcelo Daltro perfectly centered */}
        {logoSrc && (
          <div
            className="mb-4 sm:mb-6 flex justify-center items-center transition-transform duration-500 hover:scale-105"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `
            <picture class="mx-auto flex justify-center items-center">
              <source media="(max-width: 640px)" srcset="${LOGO_MOBILE_B64}" type="image/webp" />
              <img
                src="${logoSrc}"
                alt="Logo Marcelo Daltro"
                width="300"
                height="100"
                fetchpriority="high"
                loading="eager"
                decoding="sync"
                class="w-48 sm:w-60 md:w-72 object-contain sm:opacity-95 sm:hover:opacity-100 sm:transition-opacity sm:drop-shadow-[0_0_25px_rgba(212,175,55,0.25)] mx-auto aspect-[3/1]"
              />
            </picture>
              `,
            }}
          />
        )}

        {/* Main headline container (tighter on mobile) */}
        <div className="relative px-2 sm:px-4">
          <h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-snug sm:leading-relaxed tracking-tight"
            style={{ color: colors[200] }}
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `
            <div class="mb-2 sm:mb-4 font-light text-[#d39726]">
              <span class="hero-word" style="animation-delay: 50ms">Um</span> <span class="hero-word" style="animation-delay: 130ms">sorriso</span> <span class="hero-word" style="animation-delay: 210ms">saudável,</span> <span class="hero-word" style="animation-delay: 290ms">funcional</span> <span class="hero-word" style="animation-delay: 370ms">e</span> <span class="hero-word" style="animation-delay: 450ms">natural</span> <span class="hero-word" style="animation-delay: 530ms">começa</span> <span class="hero-word" style="animation-delay: 610ms">com</span> <span class="hero-word" style="animation-delay: 690ms">um</span> <span class="hero-word" style="animation-delay: 770ms">diagnóstico</span> <span class="hero-word" style="animation-delay: 850ms">preciso</span> <span class="hero-word" style="animation-delay: 930ms">e</span> <span class="hero-word" style="animation-delay: 1010ms">um</span> <span class="hero-word" style="animation-delay: 1090ms">planejamento</span> <span class="hero-word" style="animation-delay: 1170ms">cuidadoso.</span>
            </div>
            <div class="text-xs sm:text-sm md:text-base font-light leading-snug sm:leading-relaxed max-w-xl mx-auto text-[#e2e8f0]/90">
              <span class="hero-word" style="animation-delay: 1300ms">Cada</span> <span class="hero-word" style="animation-delay: 1370ms">sorriso</span> <span class="hero-word" style="animation-delay: 1440ms">exige</span> <span class="hero-word" style="animation-delay: 1510ms">um</span> <span class="hero-word text-white" style="animation-delay: 1580ms">olhar</span> <span class="hero-word text-white" style="animation-delay: 1650ms">individualizado.</span> <span class="hero-word" style="animation-delay: 1730ms">Por</span> <span class="hero-word" style="animation-delay: 1800ms">isso,</span> <span class="hero-word" style="animation-delay: 1870ms">antes</span> <span class="hero-word" style="animation-delay: 1940ms">de</span> <span class="hero-word" style="animation-delay: 2010ms">indicar</span> <span class="hero-word" style="animation-delay: 2080ms">qualquer</span> <span class="hero-word" style="animation-delay: 2150ms">tratamento,</span> <span class="hero-word" style="animation-delay: 2220ms">buscamos</span> <span class="hero-word" style="animation-delay: 2290ms">compreender</span> <span class="hero-word" style="animation-delay: 2360ms">suas</span> <span class="hero-word" style="animation-delay: 2430ms">necessidades,</span> <span class="hero-word" style="animation-delay: 2500ms">expectativas</span> <span class="hero-word" style="animation-delay: 2570ms">e</span> <span class="hero-word" style="animation-delay: 2640ms">as</span> <span class="hero-word" style="animation-delay: 2710ms">particularidades</span> <span class="hero-word" style="animation-delay: 2780ms">do</span> <span class="hero-word" style="animation-delay: 2850ms">seu</span> <span class="hero-word text-white" style="animation-delay: 2920ms">caso.</span>
            </div>
              `,
            }}
          />

          {/* Delicate Side Accents */}
          <div
            className="hidden lg:block absolute -left-8 top-1/2 w-6 h-px opacity-25"
            style={{
              background: colors[200],
              animation: "word-appear 0.8s ease-out forwards",
              animationDelay: "1.3s",
            }}
          />
          <div
            className="hidden lg:block absolute -right-8 top-1/2 w-6 h-px opacity-25"
            style={{
              background: colors[200],
              animation: "word-appear 0.8s ease-out forwards",
              animationDelay: "1.4s",
            }}
          />
        </div>

        {/* Bottom tagline: CONHEÇA NOSSA FORMA DE CUIDAR */}
        <div
          className="mt-8 sm:mt-10 flex flex-col items-center"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
          <div class="mb-3 w-12 h-px opacity-30 mx-auto" style="background: linear-gradient(to right, transparent, ${colors[200]}, transparent)"></div>
          <a href="#filosofia" aria-label="Conheça nossa forma de cuidar" class="text-[10px] sm:text-xs font-mono font-light uppercase tracking-[0.25em] opacity-80 hover:opacity-100 transition-opacity cursor-pointer text-[#c8b4a0] block text-center">
            <span class="hero-word" style="animation-delay: 3100ms">CONHEÇA</span> <span class="hero-word" style="animation-delay: 3200ms">NOSSA</span> <span class="hero-word" style="animation-delay: 3300ms">FORMA</span> <span class="hero-word" style="animation-delay: 3400ms">DE</span> <span class="hero-word" style="animation-delay: 3500ms">CUIDAR</span>
          </a>
          <div class="mt-3 flex justify-center space-x-3 opacity-0" style="animation: word-appear 1s ease-out forwards; animation-delay: 3.6s">
            <div class="w-1 h-1 rounded-full opacity-40" style="background: ${colors[200]}"></div>
            <div class="w-1 h-1 rounded-full opacity-60" style="background: ${colors[200]}"></div>
            <div class="w-1 h-1 rounded-full opacity-40" style="background: ${colors[200]}"></div>
          </div>
            `,
          }}
        />
      </div>

      {/* Seta minimalista (linha colada diretamente na seta, estática sem pular, 100% centralizado) */}
      <a
        href="#filosofia"
        aria-label="Explorar o site e rolar para a próxima seção"
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer group z-20 transition-all duration-300 opacity-75 hover:opacity-100 min-h-[48px] min-w-[48px]"
      >
        <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.3em] text-[#e2e8f0]/70 group-hover:text-white transition-colors mb-2 text-center">
          Explorar
        </span>
        <svg
          className="w-3.5 h-8 text-[#c8b4a0] transition-transform duration-300 group-hover:translate-y-1"
          viewBox="0 0 14 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Linha vertical com gradiente suave */}
          <line
            x1="7"
            y1="0"
            x2="7"
            y2="26"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Ponta da seta 100% colada e contínua */}
          <path
            d="M 2 21 L 7 27 L 12 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

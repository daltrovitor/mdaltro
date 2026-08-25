"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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

export default function Hero({ onOpenModal, logoSrc = "/logo2.png" }: HeroProps) {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".hero-word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

    // Mouse gradient follower
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = `${e.clientX - 192}px`;
        gradient.style.top = `${e.clientY - 192}px`;
        gradient.style.opacity = "0.7";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Word hover effects
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(200, 180, 160, 0.5)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(200, 180, 160, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll<HTMLElement>(".floating-element").forEach((el, index) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, index * 200);
        });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = () => {
    const el = document.getElementById("filosofia");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenModal) {
      onOpenModal();
    }
  };

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
          <div className="mb-4 sm:mb-6 flex justify-center items-center transition-transform duration-500 hover:scale-105">
            <Image
              src={logoSrc}
              alt="Logo Marcelo Daltro"
              width={300}
              height={85}
              priority
              className="w-48 sm:w-60 md:w-72 object-contain opacity-95 hover:opacity-100 transition-opacity drop-shadow-[0_0_25px_rgba(212,175,55,0.25)] mx-auto"
            />
          </div>
        )}

        {/* Main headline container (tighter on mobile) */}
        <div className="relative px-2 sm:px-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-snug sm:leading-relaxed tracking-tight" style={{ color: colors[200] }}>
            
            {/* Upper headline - Dourado e Fino */}
            <div className="mb-2 sm:mb-4 font-light text-[#d39726] ">
              <span className="hero-word" data-delay="300">Um</span>{" "}
              <span className="hero-word" data-delay="450">sorriso</span>{" "}
              <span className="hero-word" data-delay="600">saudável,</span>{" "}
              <span className="hero-word" data-delay="750">funcional</span>{" "}
              <span className="hero-word" data-delay="900">e</span>{" "}
              <span className="hero-word" data-delay="1050">natural</span>{" "}
              <span className="hero-word" data-delay="1200">começa</span>{" "}
              <span className="hero-word" data-delay="1350">com</span>{" "}
              <span className="hero-word" data-delay="1500">um</span>{" "}
              <span className="hero-word" data-delay="1650">diagnóstico</span>{" "}
              <span className="hero-word" data-delay="1800">preciso</span>{" "}
              <span className="hero-word" data-delay="1950">e</span>{" "}
              <span className="hero-word" data-delay="2100">um</span>{" "}
              <span className="hero-word" data-delay="2250">planejamento</span>{" "}
              <span className="hero-word" data-delay="2400">cuidadoso.</span>
            </div>

            {/* Lower subtitle - cinza pro branco */}
            <div className="text-xs sm:text-sm md:text-base font-light leading-snug sm:leading-relaxed max-w-xl mx-auto text-[#e2e8f0]/90">
              <span className="hero-word" data-delay="2600">Cada</span>{" "}
              <span className="hero-word" data-delay="2700">sorriso</span>{" "}
              <span className="hero-word" data-delay="2800">exige</span>{" "}
              <span className="hero-word" data-delay="2900">um</span>{" "}
              <span className="hero-word text-white" data-delay="3000">olhar</span>{" "}
              <span className="hero-word text-white" data-delay="3100">individualizado.</span>{" "}
              <span className="hero-word" data-delay="3250">Por</span>{" "}
              <span className="hero-word" data-delay="3350">isso,</span>{" "}
              <span className="hero-word" data-delay="3450">antes</span>{" "}
              <span className="hero-word" data-delay="3550">de</span>{" "}
              <span className="hero-word" data-delay="3650">indicar</span>{" "}
              <span className="hero-word" data-delay="3750">qualquer</span>{" "}
              <span className="hero-word" data-delay="3850">tratamento,</span>{" "}
              <span className="hero-word" data-delay="3950">buscamos</span>{" "}
              <span className="hero-word" data-delay="4050">compreender</span>{" "}
              <span className="hero-word" data-delay="4150">suas</span>{" "}
              <span className="hero-word" data-delay="4250">necessidades,</span>{" "}
              <span className="hero-word" data-delay="4350">expectativas</span>{" "}
              <span className="hero-word" data-delay="4450">e</span>{" "}
              <span className="hero-word" data-delay="4550">as</span>{" "}
              <span className="hero-word" data-delay="4650">particularidades</span>{" "}
              <span className="hero-word" data-delay="4750">do</span>{" "}
              <span className="hero-word" data-delay="4850">seu</span>{" "}
              <span className="hero-word text-white" data-delay="4950">caso.</span>
            </div>
          </h1>

          {/* Delicate Side Accents */}
          <div
            className="hidden lg:block absolute -left-8 top-1/2 w-6 h-px opacity-25"
            style={{
              background: colors[200],
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.5s",
            }}
          />
          <div
            className="hidden lg:block absolute -right-8 top-1/2 w-6 h-px opacity-25"
            style={{
              background: colors[200],
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.7s",
            }}
          />
        </div>

        {/* Bottom tagline: CONHEÇA NOSSA FORMA DE CUIDAR */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center">
          <div
            className="mb-3 w-12 h-px opacity-30 mx-auto"
            style={{
              background: `linear-gradient(to right, transparent, ${colors[200]}, transparent)`,
            }}
          />
          <h2
            onClick={scrollToSection}
            className="text-[10px] sm:text-xs font-mono font-light uppercase tracking-[0.25em] opacity-80 hover:opacity-100 transition-opacity cursor-pointer text-[#c8b4a0]"
          >
            <span className="hero-word" data-delay="5150">CONHEÇA</span>{" "}
            <span className="hero-word" data-delay="5270">NOSSA</span>{" "}
            <span className="hero-word" data-delay="5390">FORMA</span>{" "}
            <span className="hero-word" data-delay="5510">DE</span>{" "}
            <span className="hero-word" data-delay="5630">CUIDAR</span>
          </h2>
          <div
            className="mt-3 flex justify-center space-x-3 opacity-0"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "5.8s",
            }}
          >
            <div
              className="w-1 h-1 rounded-full opacity-40"
              style={{ background: colors[200] }}
            />
            <div
              className="w-1 h-1 rounded-full opacity-60"
              style={{ background: colors[200] }}
            />
            <div
              className="w-1 h-1 rounded-full opacity-40"
              style={{ background: colors[200] }}
            />
          </div>
        </div>
      </div>

      {/* Seta minimalista (linha colada diretamente na seta, estática sem pular, 100% centralizado) */}
      <div
        onClick={scrollToSection}
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer group z-20 transition-all duration-300 opacity-75 hover:opacity-100"
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
      </div>

      {/* Radial Mouse Gradient */}
      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{
          background: `radial-gradient(circle, ${colors[500]}1A 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}

// Hello World

import React from "react";
import Hero from "@/app/components2/hero";
import DeferredPageContent from "@/app/components2/deferred-page-content";

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050505] text-foreground font-mont selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">

      {/* =========================================================================
          SEÇÃO 1: HERO PERSONALIZADA (Pure Server Component)
          ========================================================================= */}
      <Hero logoSrc="/logo2-opt.webp" />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* Below-the-fold deferred sections */}
      <DeferredPageContent />
    </main>
  );
}

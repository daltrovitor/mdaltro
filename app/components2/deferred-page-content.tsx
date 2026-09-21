// Hello World
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import Philosophy from "@/app/components2/philosophy";
import VideoTestimonialGallery from "@/app/components2/testimonial";
import FirstConsultation from "@/app/components2/firstconsultation";
import HowWeHelp from "@/app/components2/howwehelp";
import RealCases from "@/app/components2/realcases";
import AboutDoctor from "@/app/components2/aboutdoctor";
import ClinicGallery from "@/app/components2/clinicgallery";
import TextTestimonials from "@/app/components2/texttestimonial";
import CtaLocation from "@/app/components2/cta-location";
import Footer from "@/app/components2/footer";
import FormModal from "@/app/components2/formmodal";

const SmoothScroll = dynamic(() => import("./smoothscroll"), { ssr: false });
const MouseFollower = dynamic(() => import("./mouse-follower"), { ssr: false });

export default function DeferredPageContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SmoothScroll />
      <div className="hidden lg:block">
        <MouseFollower />
      </div>
      {/* High-tech animated cyber grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_20%,transparent_100%)]"></div>

      {/* =========================================================================
          SEÇÃO 2: SUA FILOSOFIA + VÍDEO
          ========================================================================= */}
      <Philosophy onOpenModal={() => setIsModalOpen(true)} />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* =========================================================================
          SEÇÃO 3: EXPERIÊNCIAS (3 Depoimentos Estratégicos)
          ========================================================================= */}
      <VideoTestimonialGallery />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* =========================================================================
          SEÇÃO 4: SUA PRIMEIRA CONSULTA
          ========================================================================= */}
      <FirstConsultation onOpenModal={() => setIsModalOpen(true)} />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* =========================================================================
          SEÇÃO 5: COMO PODEMOS AJUDAR
          ========================================================================= */}
      <HowWeHelp onOpenModal={() => setIsModalOpen(true)} />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* =========================================================================
          SEÇÃO 6: CASOS REAIS
          ========================================================================= */}
      <RealCases onOpenModal={() => setIsModalOpen(true)} />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* =========================================================================
          SEÇÃO 7: QUEM É MARCELO DALTRO
          ========================================================================= */}
      <AboutDoctor onOpenModal={() => setIsModalOpen(true)} />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* =========================================================================
          SEÇÃO 8: CONHEÇA A CLÍNICA
          ========================================================================= */}
      <ClinicGallery onOpenModal={() => setIsModalOpen(true)} />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* =========================================================================
          SEÇÃO 9: AVALIAÇÕES GOOGLE
          ========================================================================= */}
      <TextTestimonials />

      {/* Futuristic Separator */}
      <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      {/* =========================================================================
          SEÇÃO 10 & 11: CTA DE ALTO IMPACTO & LOCALIZAÇÃO
          ========================================================================= */}
      <CtaLocation onOpenModal={() => setIsModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Multi-Step Qualification Form Modal */}
      {isModalOpen && <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

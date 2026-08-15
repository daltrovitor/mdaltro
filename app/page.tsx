"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Instagram, Facebook, Linkedin, Sparkles } from "lucide-react";

// Components for each planned section
import SmoothScroll from "@/app/components2/smoothscroll";
import Philosophy from "@/app/components2/philosophy";
import VideoTestimonialGallery from "@/app/components2/testimonial";
import FirstConsultation from "@/app/components2/firstconsultation";
import HowWeHelp from "@/app/components2/howwehelp";
import RealCases from "@/app/components2/realcases";
import AboutDoctor from "@/app/components2/aboutdoctor";
import ClinicGallery from "@/app/components2/clinicgallery";
import TextTestimonials from "@/app/components2/texttestimonial";
import GoldCtaButton from "@/app/components2/goldbutton";
import FormModal from "@/app/components2/formmodal";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050505] text-foreground font-lora selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
        {/* High-tech animated cyber grid background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_20%,transparent_100%)]"></div>

        {/* Floating Header */}
        <header className="fixed top-0 inset-x-0 z-40 bg-black/70 backdrop-blur-xl border-b border-white/5 py-4 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/logo1.png"
                alt="Dr. Marcelo Daltro Logo"
                width={200}
                height={50}
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                priority
              />
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5562991873755"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-mont tracking-wider text-white/80 hover:text-primary transition-colors uppercase"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>(62) 99187-3755</span>
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 rounded-full text-xs font-mont font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-black hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                Entender Meu Caso
              </button>
            </div>
          </div>
        </header>

        {/* =========================================================================
            SEÇÃO 1: HEADLINE + SUB-HEADLINE (IMAGEM HERO CLEAN)
            ========================================================================= */}
        <section className="relative w-full pt-20 sm:pt-24 pb-8 sm:pb-12 flex items-center justify-center overflow-hidden">
          {/* Ambient glow behind hero banner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/10 blur-[160px] rounded-full pointer-events-none z-0"></div>

          <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] bg-black"
            >
              <Image
                src="/hero12.jpg"
                alt="Dr. Marcelo Daltro - Reabilitação Oral e Odontologia Estética"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-contain block"
              />
            </motion.div>
          </div>
        </section>

        {/* Futuristic Separator */}
        <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
          <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        {/* =========================================================================
            SEÇÃO 2: SUA FILOSOFIA + VÍDEO
            ========================================================================= */}
        <Philosophy onOpenModal={() => setIsModalOpen(true)} />

        {/* Futuristic Separator */}
        <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
          <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        {/* =========================================================================
            SEÇÃO 3: EXPERIÊNCIAS (3 Depoimentos Estratégicos: Confiança, Experiência, Transformação)
            ========================================================================= */}
        <VideoTestimonialGallery />

        {/* Futuristic Separator */}
        <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
          <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        {/* =========================================================================
            SEÇÃO 4: SUA PRIMEIRA CONSULTA (4 Etapas Visuais + "Diagnosticar. Planejar. Só então, tratar.")
            ========================================================================= */}
        <FirstConsultation onOpenModal={() => setIsModalOpen(true)} />

        {/* Futuristic Separator */}
        <div className="relative w-full z-20 flex justify-center py-4 bg-[#050505]">
          <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        {/* =========================================================================
            SEÇÃO 5: COMO PODEMOS AJUDAR (6 Cards de Necessidades com Tags de Tratamento)
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
            SEÇÃO 10: CTA DE ALTO IMPACTO ("Quero entender meu caso")
            ========================================================================= */}
        <section className="py-24 md:py-32 bg-transparent relative z-10 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="p-10 sm:p-16 rounded-[3rem] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent border border-[#D4AF37]/30 backdrop-blur-2xl shadow-[0_25px_60px_rgba(212,175,55,0.15)] relative overflow-hidden"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs md:text-sm font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
                  Próximo Passo
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-fair text-white max-w-3xl mx-auto leading-tight mb-6">
                Pronto para compreender o seu caso com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37]">
                  atenção e clareza?
                </span>
              </h2>

              <p className="text-base sm:text-xl font-lora text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Clique abaixo e responda algumas perguntas rápidas. Nossa equipe analisará seu caso para orientar o melhor caminho.
              </p>

              <div className="flex justify-center">
                <GoldCtaButton onClick={() => setIsModalOpen(true)} text="Quero entender meu caso" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            SEÇÃO 11: LOCALIZAÇÃO / RODAPÉ
            ========================================================================= */}
        <section id="localizacao" className="bg-transparent py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mont tracking-[0.4em] text-primary/60 uppercase mb-4 block">
              Onde Estamos
            </span>
            <h2 className="text-4xl sm:text-6xl font-fair text-primary tracking-tight bg-clip-text bg-gradient-to-b from-primary to-primary/50 text-transparent">
              Localização
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center justify-center max-w-7xl mx-auto px-4 relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full z-0 pointer-events-none w-1/2 mx-auto h-[400px]"></div>

            <div className="relative z-10 w-full p-2 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="rounded-[2rem] overflow-hidden relative group h-[450px] md:h-[550px] bg-[#0a0a0a]">
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem] z-20"></div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4279628749086!2d-49.27400592485033!3d-16.705484984070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11822f5990b%3A0xca8b1e646dc89a22!2sDr.%20Marcelo%20Daltro%20-%20Dentista%20-%20Goi%C3%A2nia!5e0!3m2!1sen!2sbr!4v1756940523080!5m2!1sen!2sbr"
                  className="w-full h-full filter invert-[90%] hue-rotate-[180deg] contrast-[1.2] opacity-85 group-hover:opacity-100 transition-all duration-1000"
                  loading="lazy"
                  title="Mapa do Consultório Dr. Marcelo Daltro"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-[#020202] text-primary relative overflow-hidden pt-24 border-t border-white/5 mt-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-6 pb-12 relative z-10 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16 lg:mb-20">
              {/* Contact Info */}
              <div className="flex flex-col items-center lg:items-start justify-start pt-4 order-2 lg:order-1">
                <h3 className="text-xs font-mont tracking-[0.3em] uppercase mb-8 text-primary/70">Contato</h3>
                <div className="space-y-6">
                  <a href="tel:+5562991873755" className="flex items-center gap-5 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 shadow-md">
                      <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-base sm:text-lg font-lora font-light tracking-wide text-white/70 group-hover:text-white">
                      (62) 99187-3755
                    </span>
                  </a>

                  <a href="mailto:daltroodonto@gmail.com" className="flex items-center gap-5 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 shadow-md">
                      <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-base sm:text-lg font-lora font-light tracking-wide text-white/70 group-hover:text-white">
                      daltroodonto@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Logo and Tagline */}
              <div className="flex flex-col items-center text-center justify-start order-1 lg:order-2">
                <div className="mb-6">
                  <Image
                    width={280}
                    height={80}
                    src="/logo2.jpeg"
                    alt="Logo Marcelo Daltro"
                    className="w-56 md:w-64 object-contain rounded-2xl drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl font-fair italic text-white/80">Recuperando Autoestimas,</p>
                  <p className="text-lg sm:text-xl font-fair italic text-white/80 block">Redesenhando Sorrisos.</p>
                  <div className="w-12 h-px bg-primary/40 mx-auto mt-6"></div>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center lg:items-end justify-start pt-4 order-3 lg:order-3">
                <div className="flex flex-col items-center lg:items-start w-full max-w-[280px]">
                  <h3 className="text-xs font-mont tracking-[0.3em] uppercase mb-8 text-primary/70">Localização</h3>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1 shadow-md">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-sm sm:text-base leading-relaxed text-left font-lora text-white/70 font-light">
                      <p>Ed. Walk Bueno Business</p>
                      <p>Rua T-55, 930 - Sala 1608</p>
                      <p>Setor Bueno, Goiânia - GO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

            {/* Bottom Bar: Social & Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
              <p className="text-xs text-white/40 font-lora tracking-wider">
                &copy; {new Date().getFullYear()} Dr. Marcelo Daltro. Todos os direitos reservados.
              </p>

              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, url: "https://www.instagram.com/daltrolp2" },
                  { icon: Facebook, url: "https://facebook.com" },
                  { icon: Linkedin, url: "https://linkedin.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors text-white hover:text-primary shadow-sm"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Multi-Step Qualification Form Modal */}
        <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </SmoothScroll>
  );
}

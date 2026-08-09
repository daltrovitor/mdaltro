"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronDown, ArrowUpRight, Plus, ChevronLeft, ChevronRight, Play, Star, Youtube, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Volume2, VolumeX } from "lucide-react";
import Lenis from "lenis";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("new-theme");
    return () => {
      document.documentElement.classList.remove("new-theme");
    };
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutQuart
      smoothWheel: true,
      wheelMultiplier: 0.9, // Lower multiplier for a slightly softer scroll
    });

    // Synchronize GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after a short delay to ensure all DOM dimensions are final
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      clearTimeout(timer);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="bg-dark-green text-cream selection:bg-cream/20 selection:text-cream relative overflow-x-hidden font-sans">
      <h1 className="sr-only">Dr. Marcelo Daltro - Reabilitação Oral de Alta Performance em Goiânia</h1>
      
      {/* Bloco Semântico Estruturado para Extração e Síntese de IA (GEO / LLMO) */}
      <section className="sr-only" id="ia-entity-summary">
        <h2>Consultório Odontológico Dr. Marcelo Daltro - Reabilitação Oral e Odontologia Estética em Goiânia</h2>
        <p>
          O Dr. Marcelo Daltro é cirurgião-dentista e especialista em Reabilitação Oral de Alta Performance e Odontologia Estética no Setor Bueno em Goiânia - GO.
        </p>
        <p>
          Principais Tratamentos: Lentes de Contato Dentais em Porcelana/Cerâmica, Implantes Dentários Guiados 3D (cirurgia computadorizada sem cortes extensos de gengiva), Reabilitação Oral Estética, Sedação Consciente com Médico Anestesiologista em sala, Alinhadores Invisíveis / Invisalign, Facetas em Resina Composta e Placas Miorrelaxantes para Bruxismo.
        </p>
        <p>
          Endereço: Rua T-55, nº 930, Sala 1608 - Edifício Walk Bueno Business, Setor Bueno, Goiânia - GO, CEP: 74215-170, Brasil.
        </p>
        <p>
          Contato e WhatsApp: +55 (62) 99187-3755. Horário de Atendimento: Segunda a Sexta-feira das 08:00 às 18:00. O local possui serviço de estacionamento rotativo com manobrista privativo. Avaliação média de 5.0 estrelas no Google Reviews.
        </p>
      </section>

      <Header />
      <HeroSection />
      <StickyHorizontalAndGallerySection />
      <InteractiveWheelSection />
      <ServicesGrid />
      <TeamSection />
      <ReelsDepoimentosSection />
      <GoogleReviewsSection />
      <LocationSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

// 1. Navigation Header with Scroll Progress
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [sectionProgress, setSectionProgress] = useState<{ [key: string]: number }>({});

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Especialidades", href: "#servicos" },
    { label: "Doutor", href: "#doutor" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // The hero is min-h-[120vh], so let's show navbar when scroll is past 300px
      if (scrollY > 300) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }

      // Calculate progress for each section (sequentially)
      const sections = ["sobre", "tecnologia", "servicos", "doutor", "depoimentos", "avaliacoes", "localizacao"];
      const newProgress: { [key: string]: number } = {};
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      
      const isAtBottom = windowHeight + scrollY >= scrollHeight - 10;

      if (isAtBottom) {
        sections.forEach((id) => {
          newProgress[id] = 1;
        });
      } else {
        // Calculate the absolute top and bottom scroll positions for each section.
        // For pinned sections, we query the GSAP ScrollTrigger to get the exact start and end scroll positions.
        // For non-pinned sections, we fallback to static layout offsets.
        const sectionBounds = sections.map((id) => {
          const element = document.getElementById(id);
          if (!element) return { top: 0, bottom: 0 };
          
          const triggers = ScrollTrigger.getAll();
          const pinnedTrigger = triggers.find(
            (t) => t.trigger && (t.trigger as HTMLElement).id === id && t.pin
          );

          if (pinnedTrigger) {
            return {
              top: pinnedTrigger.start,
              bottom: pinnedTrigger.end + 0.2 * windowHeight,
            };
          }
          
          let top = 0;
          let curr: HTMLElement | null = element;
          while (curr) {
            top += curr.offsetTop;
            curr = curr.offsetParent as HTMLElement | null;
          }
          
          const isSticky = ["depoimentos", "avaliacoes", "localizacao"].includes(id);
          const height = isSticky ? 0 : element.offsetHeight;
          
          return {
            top,
            bottom: top + height + 0.2 * windowHeight
          };
        });

        sections.forEach((id, i) => {
          const end = sectionBounds[i].bottom;
          const start = i === 0 ? 0 : sectionBounds[i - 1].bottom;

          if (scrollY <= start) {
            newProgress[id] = 0;
          } else if (scrollY >= end) {
            newProgress[id] = 1;
          } else {
            // Scroll is in the active range for this section
            const range = end - start;
            const progress = range > 0 ? (scrollY - start) / range : 0;
            newProgress[id] = Math.max(0, Math.min(1, progress));
          }
        });
      }

      setSectionProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: navVisible ? 0 : -100,
          opacity: navVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-dark-green/60 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo1.jpg"
              alt="Logo Marcelo Daltro"
              width={160}
              height={50}
              className="object-contain filter brightness-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 font-jost text-[10px] xl:text-xs uppercase tracking-widest">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const progress = sectionProgress[id] || 0;
              const isActive = progress > 0 && progress < 1;
              const isPassed = progress === 1;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 transition-colors duration-300 ${
                    isActive || isPassed ? "text-cream font-medium" : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {item.label}
                  {/* Underline container */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cream/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#dbc093]"
                      style={{ scaleX: progress, transformOrigin: "left" }}
                    />
                  </div>
                </a>
              );
            })}
          </nav>

          {/* Book Appointment CTA */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/5562991873755"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-cream text-cream font-jost text-xs uppercase tracking-widest hover:bg-cream hover:text-dark-green transition-all duration-300 hover:scale-105"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden flex flex-col justify-between w-6 h-4 cursor-pointer z-50"
            aria-label={navOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span className={`h-0.5 w-full bg-cream transition-all duration-300 ${navOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 w-full bg-cream transition-all duration-300 ${navOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-cream transition-all duration-300 ${navOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-dark-green z-45 flex flex-col justify-start items-center gap-5 font-jost text-lg uppercase tracking-widest text-cream/80 overflow-y-auto py-20"
          >
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const progress = sectionProgress[id] || 0;
              const isActive = progress > 0 && progress < 1;
              const isPassed = progress === 1;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setNavOpen(false)}
                  className={`relative py-2 transition-colors duration-300 ${
                    isActive || isPassed ? "text-cream" : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cream/10 rounded-full overflow-hidden w-full">
                    <motion.div
                      className="h-full bg-[#dbc093]"
                      style={{ scaleX: progress, transformOrigin: "left" }}
                    />
                  </div>
                </a>
              );
            })}
            <a
              href="https://wa.me/5562991873755"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setNavOpen(false)}
              className="mt-4 px-8 py-3 rounded-full border border-cream text-cream font-jost text-sm uppercase tracking-widest hover:bg-cream hover:text-dark-green transition-all"
            >
              Agendar Consulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


// 2. Hero Section with Curtain Open & Scroll Video Morph
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background image fades out on scroll
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [0.85, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] bg-dark-green z-20">
      {/* Dynamic Curtain Load Reveal */}
      <div className="absolute inset-0 pointer-events-none z-30 flex overflow-hidden">
        {mounted && (
          <>
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.33, 0, 0.11, 1] }}
              className="h-full w-1/2 bg-dark-green origin-left"
            />
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.33, 0, 0.11, 1] }}
              className="h-full w-1/2 bg-dark-green origin-right"
            />
          </>
        )}
      </div>

      {/* Sticky Content Display */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden px-6">
        {/* Parallax Background */}
        <motion.div style={{ opacity: opacityBg }} className="absolute inset-0 z-0">
          <Image
            src="/hero12.jpg"
            alt="Consultório Premium"
            fill
            priority
            className="object-cover filter contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-green" />
        </motion.div>


      </div>
    </section>
  );
}

// 3. Sticky Horizontal and Gallery Section
function StickyHorizontalAndGallerySection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      image: "/clinica4.jpg",
    },
    {
      id: 2,
      image: "/clinica2.jpg",
    },
    {
      id: 3,
      image: "/clinica3.jpg",
    },
    {
      id: 4,
      image: "/clinica1.webp",
    }
  ];

  const phrase1Words = [["Re", "cu", "pe", "ran", "do"], ["Au", "to", "es", "ti", "ma"]];
  const phrase2Words = [["Re", "de", "se", "nhan", "do"], ["Sor", "ri", "sos"]];

  useGSAP(() => {
    const horizontal = horizontalRef.current;
    const trigger = triggerRef.current;
    if (!horizontal || !trigger) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      // Create a single master timeline for horizontal slide, card zoom-in, & vertical gallery float
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: () => "+=700%",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Phase 1: Scroll horizontally so Slide 4 (the zoom card) is perfectly centered in the viewport
      tl.to(horizontal, {
        x: () => {
          const el = document.querySelector(".slide-zoom-card") as HTMLElement;
          return el ? -(el.offsetLeft + el.offsetWidth / 2 - window.innerWidth / 2) : 0;
        },
        duration: 5.0,
        ease: "none",
        force3D: true,
      });

      // Phase 2: Card grows to cover the entire viewport, and other cards fade out
      tl.to(".slide-zoom-card", {
        scaleX: () => {
          const el = document.querySelector(".slide-zoom-card") as HTMLElement;
          return el ? window.innerWidth / el.offsetWidth : 1.67;
        },
        scaleY: () => {
          const el = document.querySelector(".slide-zoom-card") as HTMLElement;
          return el ? window.innerHeight / el.offsetHeight : 1.54;
        },
        borderRadius: "0px",
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(".normal-slide-card", {
        autoAlpha: 0, // Fades and hides them to prevent leaking on the sides
        duration: 1.0,
        ease: "power2.inOut",
      }, "<");

      // Phase 3: Fade in background gallery overlay, animate syllables, and float photos up
      tl.to(".gallery-bg-overlay", {
        opacity: 0.5,
        duration: 1.0,
        ease: "power2.inOut",
      });

      // Syllable stagger entry (syllables fade in from opacity 0 to opacity 0.3)
      tl.to(".gallery-syl-node", {
        opacity: 0.3, // opacity 30%
        stagger: 0.08, // syllable by syllable stagger
        duration: 0.4,
        ease: "power1.out",
      }, "<");

      tl.to(".float-photo-1", { y: "-200vh", duration: 2.0, ease: "none", force3D: true }, "<")
        .to(".float-photo-2", { y: "-220vh", duration: 2.0, ease: "none", force3D: true }, "-=1.5")
        .to(".float-photo-3", { y: "-240vh", duration: 2.0, ease: "none", force3D: true }, "-=1.5")
        .to(".float-photo-4", { y: "-260vh", duration: 2.0, ease: "none", force3D: true }, "-=1.5")
        .to(".float-photo-5", { y: "-280vh", duration: 2.0, ease: "none", force3D: true }, "-=1.5")
        .to(".float-photo-6", { y: "-300vh", duration: 2.0, ease: "none", force3D: true }, "-=1.5");
    });

    return () => {
      mm.revert();
    };
  }, { scope: triggerRef });

  return (
    <div id="sobre" ref={triggerRef} className="relative bg-dark-green border-t border-cream/10">
      <div className="relative w-full h-screen overflow-hidden flex items-center">
        
        {/* Horizontal Slides Wrapper */}
        <div ref={horizontalRef} className="flex flex-row items-center w-max px-[15vw] py-0 gap-[8vw] will-change-transform transform-gpu relative z-10">
          
          {/* Intro Card */}
          <div className="normal-slide-card w-[80vw] md:w-[45vw] max-w-none flex-shrink-0 flex flex-col justify-center transition-opacity duration-300 text-center md:text-left py-0">
            <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-jost block">Conceito Daltro</span>
            <h2 className="text-4xl md:text-6xl font-josefin uppercase font-medium leading-tight text-cream">
              Mudamos a experiência <br />e devolvemos sua <br />
              <span className="text-primary">segurança ao sorrir</span>.
            </h2>
          </div>

          {/* Slides 1, 2, 3 */}
          {slides.slice(0, 3).map((slide) => (
            <div
              key={slide.id}
              className="normal-slide-card w-[80vw] md:w-[60vw] max-w-none h-[50vh] md:h-[65vh] flex-shrink-0 relative rounded-3xl overflow-hidden bg-emerald-950/40 flex flex-col justify-end p-8 md:p-16 border border-cream/10 group will-change-transform transform-gpu transition-opacity duration-300"
            >
              <Image
                src={slide.image}
                alt="Slide Image"
                fill
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-out pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-dark-green/30 to-transparent pointer-events-none" />

            </div>
          ))}

          {/* Slide 4 (Clinic photo card that grows to full background) */}
          <div className="slide-zoom-card w-[80vw] md:w-[60vw] max-w-none h-[50vh] md:h-[65vh] flex-shrink-0 relative rounded-3xl overflow-hidden border border-cream/15 group will-change-transform transform-gpu z-50">
            <Image
              src={slides[3].image}
              alt="Ambiente Marcelo Daltro"
              fill
              className="object-cover opacity-80 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          </div>
        </div>

        {/* Gallery Background Overlay (Phase 2) */}
        <div className="gallery-bg-overlay absolute inset-0 bg-black opacity-0 pointer-events-none z-12" />

        {/* Gallery Background Text (Phase 3: Syllable entry) */}
        <div className="gallery-bg-text absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-15 select-none px-6 flex">
          <span className="text-3xl md:text-6xl font-josefin font-light uppercase tracking-widest leading-none text-center">
            {phrase1Words.map((word, wIdx) => (
              <span key={wIdx} className="whitespace-nowrap inline-block">
                {word.map((syl, sIdx) => (
                  <span key={sIdx} className="gallery-syl-node opacity-0 text-cream inline-block">
                    {syl}
                  </span>
                ))}
                {wIdx < phrase1Words.length - 1 && <span className="gallery-syl-node opacity-0 text-cream inline-block whitespace-pre">{" "}</span>}
              </span>
            ))}
          </span>
          <span className="text-3xl md:text-6xl font-josefin font-light uppercase tracking-widest leading-none text-center mt-6">
            {phrase2Words.map((word, wIdx) => (
              <span key={wIdx} className="whitespace-nowrap inline-block">
                {word.map((syl, sIdx) => (
                  <span key={sIdx} className="gallery-syl-node opacity-0 text-primary inline-block">
                    {syl}
                  </span>
                ))}
                {wIdx < phrase2Words.length - 1 && <span className="gallery-syl-node opacity-0 text-primary inline-block whitespace-pre">{" "}</span>}
              </span>
            ))}
          </span>
        </div>

        {/* Floating Gallery Photos (Phase 3) */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          
          {/* Photo 1 (bottom left) */}
          <div className="float-photo-1 absolute bottom-[-40vh] left-[4vw] md:left-[10vw] w-[110px] md:w-[240px] aspect-[4/5] rounded-3xl overflow-hidden border border-cream/10 bg-emerald-950/20 shadow-2xl will-change-transform transform-gpu">
            <Image
              src="/dente1.jpeg"
              alt="Procedimento clínico"
              fill
              className="object-cover"
            />
          </div>

          {/* Photo 2 (right top) */}
          <div className="float-photo-2 absolute bottom-[-55vh] right-[4vw] md:right-[10vw] w-[120px] md:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border border-cream/10 bg-emerald-950/20 shadow-2xl will-change-transform transform-gpu">
            <Image
              src="/dente2.jpeg"
              alt="Tecnologia Microscópica"
              fill
              className="object-cover"
            />
          </div>

          {/* Photo 3 (left center) */}
          <div className="float-photo-3 absolute bottom-[-75vh] left-[18vw] md:left-[30vw] w-[130px] md:w-[280px] aspect-[4/3] rounded-3xl overflow-hidden border border-cream/10 bg-emerald-950/20 shadow-2xl will-change-transform transform-gpu">
            <Image
              src="/dente3.jpeg"
              alt="Equipe Daltro"
              fill
              className="object-cover"
            />
          </div>

          {/* Photo 4 (right center) */}
          <div className="float-photo-4 absolute bottom-[-90vh] right-[18vw] md:right-[30vw] w-[110px] md:w-[240px] aspect-[1/1] rounded-3xl overflow-hidden border border-cream/10 bg-emerald-950/20 shadow-2xl will-change-transform transform-gpu">
            <Image
              src="/dente4.jpeg"
              alt="Atendimento Daltro"
              fill
              className="object-cover"
            />
          </div>

          {/* Photo 5 (left lower) */}
          <div className="float-photo-5 absolute bottom-[-110vh] left-[8vw] md:left-[16vw] w-[115px] md:w-[250px] aspect-[5/4] rounded-3xl overflow-hidden border border-cream/10 bg-emerald-950/20 shadow-2xl will-change-transform transform-gpu">
            <Image
              src="/clinica1.jpeg"
              alt="Procedimento estético"
              fill
              className="object-cover"
            />
          </div>

          {/* Photo 6 (right lower) */}
          <div className="float-photo-6 absolute bottom-[-125vh] right-[8vw] md:right-[16vw] w-[125px] md:w-[270px] aspect-[3/2] rounded-3xl overflow-hidden border border-cream/10 bg-emerald-950/20 shadow-2xl will-change-transform transform-gpu">
            <Image
              src="/clinica2.jpeg"
              alt="Estrutura Clínica"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}


// 6. Services Card Grid with Hover Scale-rotate Link
// 5. Interactive Wheel Section (Scroll Block & Rotation Topics)
function InteractiveWheelSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(750); // Much larger circle radius (Image 5 style)
  const [centerY, setCenterY] = useState("50vh");

  useEffect(() => {
    let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth === lastWidth) return;
      lastWidth = currentWidth;
      
      if (currentWidth < 768) {
        setRadius(350); // Enlarged circle radius on mobile
        setCenterY("15vh"); // Push the active button down on mobile to prevent overlaps
      } else {
        setRadius(750); // Enlarged circle radius on desktop
        setCenterY("50vh");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topics = [
    {
      id: 1,
      title: "Mais pessoal do que pessoal",
      text: "Após um diagnóstico complexo, cada paciente recebe um Coordenador de Plano de Tratamento, ou Concierge Pessoal. Ele cuida para que todo o processo seja impecável e personalizado — desde o agendamento de consultas até os mínimos detalhes que tornam sua experiência agradável e lhe trazem paz de espírito.",
    },
    {
      id: 2,
      title: "Um resultado que você vê com antecedência",
      text: "Criamos um design digital em 3D do seu sorriso antes mesmo de iniciar o tratamento. Você não apenas sabe qual será o resultado final, mas também pode visualizá-lo, influenciá-lo e sentir confiança em cada próximo passo.",
    },
    {
      id: 3,
      title: "Paz e segurança durante cada consulta",
      text: "Acreditamos que o tratamento começa com um sentimento. A iluminação, o design de interiores, o silêncio e a atitude de nossa equipe criam um ambiente no qual você pode aliviar o estresse e esquecer qualquer percepção anterior da odontologia como uma experiência desagradável.",
    },
    {
      id: 4,
      title: "Experiência de cinema na cadeira do dentista",
      text: "Transformamos o tempo na cadeira do dentista em uma experiência prazerosa — escolha seu filme, série de TV ou conteúdo educacional favorito e deixe o tratamento fluir perfeitamente.",
    },
    {
      id: 5,
      title: "Tudo em um só lugar",
      text: "O que importa para nós é que você economize não apenas dinheiro, mas também tempo e energia. É por isso que todos os especialistas relevantes — clínicos, protesistas, endodontistas, implantodontistas, esteticistas e higienistas — estão todos aqui sob o mesmo teto na Clínica Marcelo Daltro. Isso se traduz em um processo de tratamento mais rápido, preciso e eficiente.",
    },
    {
      id: 6,
      title: "Privacidade completa",
      text: "O tratamento ocorre em instalações silenciosas e fechadas. Aqui você pode se sentir seguro, livre e confortável, longe do olhar de outras pessoas ou de qualquer perturbação.",
    },
  ];

  useGSAP(() => {
    if (!wheelRef.current || !triggerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      const buttons = gsap.utils.toArray(".wheel-node-button");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: () => window.innerWidth < 768 ? "+=120%" : "+=180%",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const rawIndex = Math.round(self.progress * 5);
            const newIndex = Math.max(0, Math.min(5, rawIndex));
            setActiveIndex(newIndex);
          },
        }
      });

      // Rotate the wheel circle container
      tl.fromTo(
        wheelRef.current,
        { rotate: 0 },
        {
          rotate: -300,
          ease: "none",
          force3D: true,
        },
        0
      );

      // Counter-rotate the individual buttons so they stay upright
      tl.fromTo(
        buttons,
        { rotate: 0 },
        {
          rotate: 300,
          ease: "none",
          force3D: true,
        },
        0
      );
    });

    return () => {
      mm.revert();
    };
  }, [radius, centerY]); // Re-initialize on layout changes

  const handleNodeClick = (idx: number) => {
    if (!triggerRef.current) return;
    const start = triggerRef.current.offsetTop;
    const scrollFactor = window.innerWidth < 768 ? 1.2 : 1.8;
    const scrollAmount = window.innerHeight * scrollFactor;
    const targetScroll = start + (idx / 5) * scrollAmount;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="tecnologia"
      ref={triggerRef}
      className="relative w-full h-screen bg-[#000000] border-t border-cream/10 flex flex-col justify-between overflow-x-hidden pt-28 pb-12 md:py-16 px-6"
    >
      {/* Top Content Wrapper (In-flow flex stack on mobile, absolute on desktop) */}
      <div className="w-full flex flex-col md:block items-center justify-start space-y-6 md:space-y-0 z-20 pointer-events-none">
        {/* Title */}
        <div className="text-center relative md:absolute md:top-6 md:left-1/2 md:-translate-x-1/2">
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-jost block mb-2 md:mb-3">Conforto & Tecnologia</span>
          <h2 className="text-2xl md:text-5xl font-josefin uppercase font-medium text-cream">
            Seu sorriso começa aqui
          </h2>
        </div>

        {/* Mobile Tab Bar */}
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[24vh] flex justify-center gap-2 sm:gap-4 pointer-events-auto">
          {topics.map((topic, idx) => (
            <button
              key={topic.id}
              onClick={() => handleNodeClick(idx)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center font-josefin text-sm transition-colors cursor-pointer ${
                idx === activeIndex
                  ? "bg-cream text-dark-green border-cream font-semibold shadow-[0_0_15px_rgba(184,153,102,0.4)]"
                  : "bg-transparent text-cream/60 border-cream/20"
              }`}
              aria-label={`Ver tecnologia: ${topic.title}`}
            >
              {topic.id}
            </button>
          ))}
        </div>

        {/* Center Text box positioned inside the circle (below centerY) */}
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[6vh] md:top-auto text-center max-w-5xl px-4 md:px-6 w-full mt-12 md:mt-0">
          <div
            key={activeIndex}
            className="flex flex-col items-center animate-fade-in-custom"
          >
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-josefin uppercase font-semibold text-primary mb-5 md:mb-4 tracking-wider max-w-4xl leading-tight">
              {topics[activeIndex].title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-cream/70 leading-relaxed font-light font-lora max-w-3xl">
              {topics[activeIndex].text}
            </p>
          </div>
        </div>
      </div>

      {/* active pointer marker aligned to centerY (top of the circle) */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 flex-col items-center pointer-events-none"
        style={{ bottom: centerY }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <div className="w-px h-6 bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Large Rotating Circle (Solid black background) */}
      <div className="hidden md:flex absolute inset-x-0 bottom-0 top-0 justify-center items-end select-none pointer-events-none">
        <div
          ref={wheelRef}
          className="absolute rounded-full border border-cream/10 bg-black flex items-center justify-center will-change-transform transform-gpu pointer-events-auto"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            bottom: `calc(${centerY} - ${radius * 2}px)`,
          }}
        >
          {topics.map((topic, idx) => {
            const angle = idx * 60 - 90; // Offset by -90 so Node 1 is at the top center
            const isActive = idx === activeIndex;

            return (
              <div
                key={topic.id}
                className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
                }}
              >
                <button
                  onClick={() => handleNodeClick(idx)}
                  className={`wheel-node-button w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-josefin text-sm md:text-base border cursor-pointer select-none transition-colors duration-300 hover:scale-110 will-change-transform transform-gpu ${
                    isActive
                      ? "bg-cream text-dark-green border-cream scale-125 shadow-[0_0_15px_rgba(184,153,102,0.4)] font-semibold"
                      : "bg-dark-green text-cream/60 border-cream/20 hover:border-cream/40"
                  }`}
                  aria-label={`Ver tecnologia: ${topic.title}`}
                >
                  {topic.id}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const services = [
    {
      title: "Lentes de Contato Dentais",
      nr: "01",
      description: "Corrija imperfeições, cores e formatos de forma rápida e minimamente invasiva, alcançando um sorriso harmônico e personalizado.",
      image: "/1.jpg",
    },
    {
      title: "Implantes Dentários Guiados",
      nr: "02",
      description: "Cirurgia de alta precisão baseada em planejamento 3D por computador, reduzindo o tempo de cirurgia e acelerando o pós-operatório.",
      image: "/2.jpg",
    },
    {
      title: "Reabilitação Oral Estética",
      nr: "03",
      description: "Devolva a função de mastigação e beleza ao seu sorriso unindo implantes, facetas e próteses planejadas sob medida.",
      image: "/4.jpg",
    },
    {
      title: "Alinhadores Invisíveis",
      nr: "04",
      description: "Aparelhos invisíveis customizados por escaneamento bucal que proporcionam discrição, higiene e conforto absolutos.",
      image: "/5.jpg",
    },
    {
      title: "Tratamento de Bruxismo",
      nr: "05",
      description: "Placas especiais de proteção e protocolos clínicos avançados para aliviar o ranger de dentes, dores de cabeça e tensões musculares.",
      image: "/3.jpg",
    },
    {
      title: "FACETAS EM RESINA",
      nr: "06",
      description: "As facetas em resina composta são uma alternativa acessível e versátil para transformar o sorriso. Elas permitem corrigir forma, cor e pequenas imperfeições dos dentes em apenas uma sessão, com resultado estético imediato.",
      image: "/6.jpg",
    },

  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      const cards = gsap.utils.toArray(".services-card-item") as any[];
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: () => "+=500%",
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const rawIndex = Math.round(self.progress * 5);
            const newIndex = Math.max(0, Math.min(5, rawIndex));
            setActiveIndex(newIndex);
          }
        }
      });

      // Set initial states for cards (Card 1 is centered, others are off-screen to the right)
      gsap.set(cards.slice(1), { x: "120vw", opacity: 0 });

      // Transition 1: Card 1 leaves to left, Card 2 enters from right
      tl.to(cards[0], { x: "-120vw", opacity: 0, duration: 1.5, ease: "power2.inOut" })
        .to(cards[1], { x: "0", opacity: 1, duration: 1.5, ease: "power2.inOut" }, "<")
        .to({}, { duration: 1.0 }); // Pause

      // Transition 2: Card 2 leaves, Card 3 enters
      tl.to(cards[1], { x: "-120vw", opacity: 0, duration: 1.5, ease: "power2.inOut" })
        .to(cards[2], { x: "0", opacity: 1, duration: 1.5, ease: "power2.inOut" }, "<")
        .to({}, { duration: 1.0 }); // Pause

      // Transition 3: Card 3 leaves, Card 4 enters
      tl.to(cards[2], { x: "-120vw", opacity: 0, duration: 1.5, ease: "power2.inOut" })
        .to(cards[3], { x: "0", opacity: 1, duration: 1.5, ease: "power2.inOut" }, "<")
        .to({}, { duration: 1.0 }); // Pause

      // Transition 4: Card 4 leaves, Card 5 enters
      tl.to(cards[3], { x: "-120vw", opacity: 0, duration: 1.5, ease: "power2.inOut" })
        .to(cards[4], { x: "0", opacity: 1, duration: 1.5, ease: "power2.inOut" }, "<")
        .to({}, { duration: 1.0 }); // Pause

      // Transition 5: Card 5 leaves, Card 6 enters
      tl.to(cards[4], { x: "-120vw", opacity: 0, duration: 1.5, ease: "power2.inOut" })
        .to(cards[5], { x: "0", opacity: 1, duration: 1.5, ease: "power2.inOut" }, "<")
        .to({}, { duration: 1.0 }); // Pause
    });

    return () => {
      mm.revert();
    };
  }, { scope: containerRef });

  const handleNodeClick = (idx: number) => {
    if (!containerRef.current) return;
    const start = containerRef.current.offsetTop;
    const scrollFactor = 5.0;
    const scrollAmount = window.innerHeight * scrollFactor;
    const targetScroll = start + (idx / 5) * scrollAmount;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="servicos" ref={containerRef} className="w-full h-screen bg-dark-green px-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-start md:justify-center pt-28 md:pt-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
        
        {/* Left Column: Title and vertical progress indicators */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center text-left space-y-8">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-jost block mb-4">Especialidades</span>
            <h2 className="text-4xl md:text-6xl font-josefin uppercase font-semibold leading-tight text-cream">
              Tratamentos <br />Exclusivos
            </h2>
            <div className="w-16 h-px bg-primary/50 mt-6" />
          </div>

          {/* Staggered progress indicators */}
          <div className="flex flex-wrap md:flex-col justify-center md:justify-start gap-4 md:gap-4 md:space-y-2">
            {services.map((srv, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  onClick={() => handleNodeClick(idx)}
                  className={`flex items-center gap-4 text-left transition-all duration-300 ${
                    isActive
                      ? "text-primary translate-x-2 font-semibold"
                      : "text-cream/40 hover:text-cream/70"
                  }`}
                  aria-label={`Ver tratamento: ${srv.title}`}
                >
                  <span className="font-jost text-sm md:text-base">0{idx + 1}</span>
                  <span className="font-josefin uppercase tracking-wider text-xs md:text-sm hidden md:inline-block">
                    {srv.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Pinned Card Deck */}
        <div className="col-span-12 md:col-span-7 flex flex-row justify-center items-center relative h-[380px] md:h-[520px] overflow-visible w-full">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="services-card-item absolute w-[85vw] md:w-full max-w-[420px] h-[360px] md:h-full rounded-3xl overflow-hidden border border-cream/15 bg-emerald-950/20 flex flex-col justify-end p-8 md:p-12 shadow-2xl will-change-transform transform-gpu"
              style={{
                zIndex: 10 - idx, // Keeps correct layering on desktop
              }}
            >
              <Image
                src={srv.image}
                alt={srv.title}
                fill
                className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-[1.2s] ease-out pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                <div className="flex items-center justify-between border-b border-cream/10 pb-4">
                  <span className="text-2xl font-jost text-primary font-semibold">0{idx + 1}</span>
                  <a
                    href="https://wa.me/5562991873755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-primary bg-transparent text-primary flex items-center justify-center pointer-events-auto hover:rotate-45 hover:bg-primary hover:text-dark-green hover:border-primary transition-all duration-500"
                    aria-label={`Agendar consulta sobre ${srv.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-josefin uppercase text-cream mb-4 tracking-tight leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-sm md:text-base text-cream/70 leading-relaxed font-light font-lora">
                    {srv.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamSection() {
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      // Timeline for video growth, reveal, pause, and exit to clean profile
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: () => "+=150%",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Phase 1: Video container expands to cinematic 16:9 size (starts solid black)
      tl.to(".video-grow-container", {
        width: () => window.innerWidth < 768 ? "90vw" : "70vw",
        height: () => {
          const w = window.innerWidth * (window.innerWidth < 768 ? 0.90 : 0.70);
          return (w * 9) / 16;
        },
        borderRadius: "32px",
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(".video-intro-text", {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.inOut",
      }, "<");

      // Phase 2: Fade out the black cover to reveal the YouTube video underneath
      tl.to(".video-black-cover", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Enable pointer events on the container so user can play the video
      tl.set(".video-grow-container", { pointerEvents: "auto" }, "<");

      // Phase 3: Pause (Scroll Block) to let the user watch/interact (shortened from 2.5 to 1.5)
      tl.to({}, { duration: 1.5 });

      // Phase 4: Fade out the entire video container to clean black background
      tl.to(".video-grow-container", {
        opacity: 0,
        duration: 1.0,
        ease: "power2.inOut",
      });
      
      // Disable pointer events on video container so it doesn't block the profile links/buttons
      tl.set(".video-grow-container", { pointerEvents: "none" });

      // Phase 5: Fade in and slide up Doctor Profile biography/photo
      tl.fromTo(".doctor-profile-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, { scope: triggerRef });

  return (
    <section
      id="doutor"
      ref={triggerRef}
      className="relative bg-black z-20 overflow-x-hidden h-screen"
    >
      <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-black py-0 px-4 md:px-0">
        
        {/* Intro Text (Fades out on scroll on desktop) */}
        <h2 className="video-intro-text absolute text-2xl md:text-6xl font-josefin font-light uppercase tracking-wider text-cream text-center max-w-4xl px-6 z-20 pointer-events-none leading-tight select-none">
          Seja apresentado à <br />
          <span className="text-primary font-medium">Clínica Marcelo Daltro</span>
        </h2>

        {/* Growing Video Container */}
        <div className="video-grow-container absolute w-[85vw] aspect-video md:w-[560px] md:h-[315px] rounded-3xl overflow-hidden border border-cream/15 z-10 shadow-2xl bg-black pointer-events-none">
          <iframe
            src="https://www.youtube-nocookie.com/embed/nBbzq2729xg?controls=1&rel=0&enablejsapi=1"
            className="w-full h-full border-0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Apresentação Clínica Marcelo Daltro"
          />
          {/* Black cover mask that starts at opacity 1 on desktop, hidden on mobile */}
          <div className="video-black-cover absolute inset-0 bg-black z-10 pointer-events-none" />
        </div>

        {/* Doctor Profile Content (Reveals after video is full screen on desktop) */}
        <div className="doctor-profile-content absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 translate-y-12 select-none w-full">
          <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-16 items-center pointer-events-auto text-center md:text-left h-auto relative">
            
            {/* Left Column: Doctor Biography */}
            <div className="relative col-span-12 md:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-2 md:space-y-6 z-10 p-2 md:p-0">
              <span className="text-xs tracking-[0.4em] uppercase text-primary font-jost block">Diretoria Clínica</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-josefin font-medium uppercase text-cream leading-tight">
                Há um especialista <br />atrás de cada <br />
                <span className="text-primary">belo sorriso</span>.
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-lora text-cream/80 leading-relaxed font-light max-w-lg">
                O Dr. Marcelo Daltro é especialista em reabilitação oral de alta performance. Com mais de 10 anos de experiência clínica, lidera uma equipe focada em procedures seguros, guiados e sem dor.
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/5562991873755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 bg-cream text-dark-green rounded-full font-jost text-xs uppercase tracking-widest hover:bg-cream hover:text-dark-green transition-all font-semibold shadow-lg hover:scale-105"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>

            {/* Right Column: Photo Card & Text Info */}
            <div className="relative col-span-12 md:col-span-6 flex flex-col items-center md:items-end w-full gap-4 z-10 mt-4 md:mt-0 pointer-events-auto">
              <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[400px] aspect-[4/5] md:rounded-3xl rounded-2xl overflow-hidden border border-cream/15 bg-emerald-950/20 shadow-2xl group flex-shrink-0">
                <Image
                  src="/doutor.jpg"
                  alt="Dr. Marcelo Daltro"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out pointer-events-none"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-right mt-2 text-cream">
                <span className="text-[10px] md:text-xs text-primary font-jost tracking-widest uppercase mb-1 block">Responsável Técnico</span>
                <h3 className="text-xl md:text-3xl font-josefin uppercase font-medium">Dr. Marcelo Daltro</h3>
                <p className="text-xs md:text-sm font-lora text-cream/70 mt-1">Especialista em Implantodontia e Estética Dental</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// 8. Reels Style 9:16 Video Testimonials Slider
function ReelsDepoimentosSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activePlayId, setActivePlayId] = useState<string | null>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const testimonials = [
    { id: "1", name: "Priscilla Ramos", videoId: "FMtOkxWcNMk" },
    { id: "2", name: "Paulo Lima", videoId: "6D1g1-mNwM0" },
    { id: "3", name: "Nelcina Martins", videoId: "p8SCJUWKMow" },
    { id: "4", name: "Eugênio de Carvalho", videoId: "Nq_Wcn6ipMk" },
    { id: "5", name: "Sávia Barros Diniz", videoId: "bfd4QyYptZI" },
    { id: "6", name: "Ana Maria Veiga Jardim", videoId: "jM-i98OAXhk" },
    { id: "7", name: "Sérgio Calura", videoId: "Rj1tOSIvB78" }
  ];

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const containerCenter = slider.scrollLeft + slider.clientWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;

    const children = slider.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }

    if (closestIndex !== centerIndex) {
      setCenterIndex(closestIndex);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll, { passive: true });
      // Initialize center card scale
      setTimeout(handleScroll, 100);
    }
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, [centerIndex]);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Smooth dynamic fanning stagger entry animation for Reels cards
    gsap.fromTo(
      ".reel-card-item",
      { opacity: 0, y: 80, rotation: 6, scale: 0.9, transformOrigin: "bottom center" },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        stagger: 0.1,
        duration: 1.0,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  const scrollLeft = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector(".reel-card-item");
      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        const scrollAmount = cardWidth + 24; // Card width + gap-6 (24px)
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector(".reel-card-item");
      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        const scrollAmount = cardWidth + 24; // Card width + gap-6 (24px)
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="depoimentos" ref={containerRef} className="relative md:sticky md:top-0 h-auto md:h-screen w-full bg-black px-6 border-t border-cream/10 md:overflow-hidden relative panel-stack-shadow flex items-center justify-center animate-once">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
        
        {/* Left Column: Title & Buttons (Corner text) */}
        <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-8">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-jost block mb-3 md:mt-0 mt-10   ">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-josefin uppercase font-medium leading-none text-cream">
              Sorrisos Reais <br />
              <span className="text-primary">Histórias de <br className="hidden lg:block" />Sucesso</span>
            </h2>
            <div className="w-16 h-px bg-primary/50 mt-6" />
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-cream/15 flex items-center justify-center text-cream/70 hover:text-primary hover:border-primary hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-cream/15 flex items-center justify-center text-cream/70 hover:text-primary hover:border-primary hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Swiper Container */}
        <div className="lg:col-span-8 w-full overflow-visible relative">
          <div
            ref={sliderRef}
            className="reels-slider-container flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none px-[calc(50vw-90px)] sm:px-[calc(50vw-110px)] lg:px-[calc(50%-180px)] py-12 md:py-16"
            style={{ scrollbarWidth: "none" }}
          >
            {testimonials.map((t, idx) => {
              const isPlaying = activePlayId === t.id;
              const isActive = centerIndex === idx;
              return (
                <div
                  key={t.id}
                  className={`reel-card-item opacity-0 aspect-[9/16] w-[180px] sm:w-[220px] md:w-[320px] flex-shrink-0 snap-center rounded-[32px] border overflow-hidden bg-emerald-950/10 relative shadow-2xl transition-[transform,opacity] duration-[600ms] cubic-bezier(0.25, 1, 0.5, 1) transform-gpu will-change-transform ${
                    isActive
                      ? "scale-105 md:scale-115 opacity-100 z-20 border-primary shadow-[0_0_50px_rgba(212,175,55,0.45)] border-2 active-reel-float"
                      : "scale-85 md:scale-75 opacity-20 filter blur-[1.5px] pointer-events-none z-10 border-cream/5"
                  }`}
                >
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${t.videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&controls=1`}
                      className="w-full h-full object-cover border-0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title={`Depoimento de ${t.name}`}
                    />
                  ) : (
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`}
                        alt={t.name}
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[1.5s] ease-out pointer-events-none scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button
                          onClick={() => setActivePlayId(t.id)}
                          className="w-16 h-16 rounded-full bg-cream text-dark-green flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer pointer-events-auto scale-100 opacity-90 group-hover:opacity-100 animate-pulse"
                          aria-label={`Reproduzir depoimento de ${t.name}`}
                        >
                          <Play className="w-6 h-6 fill-dark-green text-dark-green ml-1" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

// 9. Google Maps Reviews & Rating Section
function GoogleReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Beatriz Costa",
      text: "Excelente profissional, cauteloso, cuidadoso, deixa o paciente tranquilo, preocupado com o bem estar deste. Atendimento excelente de toda equipe, tecnologia de ponta, equipamentos e produtos. Ótimo espaço e localização.",
      date: "Há 1 semana"
    },
    {
      name: "Caio Diniz",
      text: "Fiquei impressionado! Dr. Marcelo Daltro é fera mesmo! Sensacional o atendimento, começando pelo contato via mensagem de WhatsApp diretamente por ele próprio. Excelente disponibilidade e flexibilidade de horário.",
      date: "Há 2 meses"
    },
    {
      name: "Alcimara Paixão",
      text: "Atendimento excelente desde a recepção até o consultório. A equipe é super atenciosa, pontual e transmite muita segurança... Além disso, servem um capuccino incrível! 😋",
      date: "Há 6 meses"
    },
    {
      name: "Iara Protazio",
      text: "Gostaria de deixar minha avaliação para a clínica, desde o atendimento das meninas até o cuidado do Dr. Marcelo, que foi extremamente atencioso e detalhista. Ele realizou uma avaliação minuciosa e explicou tudo com muita clareza.",
      date: "Há 8 meses"
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Header & summary fade-in
    gsap.fromTo(
      ".google-left-summary",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    // Grid cards fade-in
    gsap.fromTo(
      ".google-review-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".google-reviews-grid",
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="avaliacoes" ref={containerRef} className="relative md:sticky md:top-0 h-auto md:h-screen w-full bg-black px-6 py-16 md:py-0 border-t border-cream/10 md:overflow-hidden panel-stack-shadow flex items-center justify-center">
      {/* Subtle details */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Google rating summary */}
        <div className="google-left-summary lg:col-span-4 flex flex-col justify-center text-left space-y-6 opacity-0">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-primary font-jost block mb-4">Avaliações</span>
            <h2 className="text-4xl md:text-5xl font-josefin uppercase font-medium leading-tight text-cream">
              Conexão com <br />nossos pacientes
            </h2>
            <div className="w-16 h-px bg-primary/50 mt-6" />
          </div>

          <div className="p-6 md:p-8 rounded-3xl border border-cream/10 bg-emerald-950/15 flex flex-col items-center text-center space-y-4">
            {/* Google Logo text */}
            <div className="flex items-center gap-2 font-josefin text-cream text-lg tracking-widest uppercase font-medium">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
              <span className="text-[10px] text-cream/40 font-jost uppercase tracking-wider ml-1">Reviews</span>
            </div>

            <div className="text-5xl md:text-6xl font-josefin font-semibold text-primary">
              5.0
            </div>

            {/* Stars row */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />
              ))}
            </div>

            <p className="text-xs font-lora text-cream/60 leading-relaxed font-light">
              Baseado em mais de 30 avaliações cinco estrelas de pacientes reais.
            </p>

            <div className="pt-2 w-full">
              <a
                href="https://share.google/PQ0qXzSCvzAJZKIo0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-cream/10 hover:border-primary hover:bg-primary hover:text-white rounded-full font-jost text-xs uppercase tracking-widest transition-all font-semibold"
              >
                <span>Ver Perfil no Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Google reviews grid */}
        <div className="lg:col-span-8 w-full">
          <div className="google-reviews-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="google-review-card opacity-0 bg-emerald-950/10 border border-cream/10 rounded-[28px] p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-cream/20 hover:bg-emerald-950/20 transition-all duration-500 shadow-xl flex"
              >
                {/* Card Top: Stars and Google G logo */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-primary" fill="currentColor" />
                    ))}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-cream/5 flex items-center justify-center text-[10px] font-bold text-cream/50 select-none">
                    G
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm font-lora text-cream/80 leading-relaxed font-light italic">
                  &ldquo;{rev.text}&rdquo;
                </p>

                {/* Card Bottom: User Details */}
                <div className="flex items-center justify-between border-t border-cream/5 pt-4">
                  <div>
                    <h4 className="font-josefin uppercase text-sm text-cream tracking-wide font-medium">
                      {rev.name}
                    </h4>
                    <span className="text-[10px] text-cream/40 font-jost uppercase tracking-wider block mt-0.5">
                      Paciente verificado
                    </span>
                  </div>
                  <span className="text-[10px] text-cream/40 font-lora">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// 9.5 Location Section matching Image 2
function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="localizacao"
      ref={containerRef}
      className="relative md:sticky md:top-0 h-auto md:h-screen w-full bg-[#e6ede9] text-[#031c14] z-40 panel-stack-shadow flex items-center justify-center px-6 py-16 md:py-0 md:overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        
        {/* Left Column: Address and Map Link */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6 md:space-y-8">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-emerald-800 font-jost block mb-3">Localização</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-josefin uppercase font-medium leading-none text-[#031c14]">
              Estamos logo <br />
              <span className="text-[#7c592b]">aqui.</span>
            </h2>
            <div className="w-16 h-px bg-emerald-800/30 mt-6" />
          </div>

          <div className="space-y-4">
            <h3 className="font-josefin uppercase text-lg md:text-xl font-semibold tracking-wider text-[#031c14]">
              Ed. Walk Bueno Business
            </h3>
            <p className="font-lora text-base md:text-lg text-[#031c14] leading-relaxed font-light">
              Rua T-55, nº 930 &bull; Sala 1608 <br />
              Setor Bueno &bull; Goiânia - GO <br />
              CEP: 74215-170
            </p>
            <p className="text-xs font-jost uppercase tracking-wider text-[#031c14]">
              * Estacionamento rotativo com manobrista no próprio edifício.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://maps.app.goo.gl/ca8b1e646dc89a22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#031c14] text-[#e6ede9] rounded-full font-jost text-xs uppercase tracking-widest hover:bg-[#7c592b] hover:text-white transition-all font-semibold shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Traçar Rota no Maps</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Premium Custom Styled Map iframe */}
        <div className="lg:col-span-7 w-full h-[220px] sm:h-[300px] md:h-[500px] rounded-[36px] overflow-hidden border border-[#031c14]/10 bg-[#e0e7e2] shadow-2xl relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4279628749086!2d-49.27400592485033!3d-16.705484984070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11822f5990b%3A0xca8b1e646dc89a22!2sDr.%20Marcelo%20Daltro%20-%20Dentista%20-%20Goi%C3%A2nia!5e0!3m2!1sen!2sbr!4v1756940523080!5m2!1sen!2sbr"
            className="w-full h-full border-0 grayscale contrast-[1.1] brightness-[1.02] sepia-[0.1] hue-rotate-[75deg] mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
            title="Mapa da Clínica Marcelo Daltro"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

// 10. FAQ Accordions in Portuguese
function FAQSection() {
  const faqs = [
    {
      q: "O implante dentário guiado por computador dói?",
      a: "Não. A cirurgia guiada é planejada em software 3D antes do procedimento. Por não exigir cortes clássicos para procurar o osso, é um processo minimamente invasivo, rápido e o pós-operatório é extremamente confortável e sem inchaços na maioria dos casos.",
    },
    {
      q: "Como funciona o tratamento com sedação consciente?",
      a: "Temos um médico anestesiologista dedicado em sala durante todo o procedimento. O paciente recebe medicamentos intravenosos de forma controlada que promovem sono leve e relaxamento profundo, acordando sem lembranças do procedimento.",
    },
    {
      q: "Quanto tempo dura o tratamento com lentes de contato?",
      a: "Lentes de contato em cerâmica (porcelana) possuem vida útil longa, frequentemente ultrapassando 10 a 15 anos com boa higiene oral e visitas periódicas. Elas não mudam de cor nem mancham como a resina.",
    },
    {
      q: "Vocês pagam ou oferecem estacionamento aos pacientes?",
      a: "Sim. Nossos pacientes têm acesso a estacionamento rotativo com manobrista no próprio Edifício Walk Bueno Business durante toda a consulta.",
    },
  ];

  return (
    <section id="faq" className="relative z-50 bg-black px-6 py-16 md:py-36 border-t border-cream/10 panel-stack-shadow">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-jost block mb-4">Perguntas Frequentes</span>
          <h2 className="text-4xl md:text-6xl font-josefin uppercase font-medium">Esclareça suas dúvidas</h2>
          <div className="w-px h-12 bg-cream/15 mx-auto mt-6" />
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="details group border-b border-cream/15 pb-6 cursor-pointer"
            >
              <summary className="flex items-center justify-between text-lg md:text-xl font-josefin uppercase text-cream/90 hover:text-cream transition-colors list-none select-none">
                <span>{faq.q}</span>
                <span className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                  <Plus className="w-4 h-4 text-primary" />
                </span>
              </summary>
              <div className="mt-4 text-sm md:text-base font-lora text-cream/70 leading-relaxed font-light pl-2">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11. Footer Section with Logo Scaling on Scroll
function FooterSection() {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!logoRef.current || !footerRef.current) return;

    // Logo zooms down from top center on scroll
    gsap.fromTo(
      logoRef.current,
      { y: "-100px", scale: 2.2, opacity: 0.1 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        force3D: true, // Hardware acceleration
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.5, // Faster scrub
            },
      }
    );
  }, { scope: footerRef });

  return (
    <footer id="contato" ref={footerRef} className="bg-black/90 border-t border-cream/10 relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12 items-center text-center md:text-left">
          
          {/* Contato column */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary font-jost mb-6">Atendimento</h4>
            <div className="space-y-4 font-lora font-light text-cream/70 text-base">
              <p>Segunda a Sexta: 08:00 – 18:00</p>
              <p className="hover:text-cream transition-colors">
                <a href="tel:+5562991873755">(62) 99187-3755</a>
              </p>
              <p className="hover:text-cream transition-colors">
                <a href="mailto:daltroodonto@gmail.com">daltroodonto@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Logo and Slogan Column */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <div ref={logoRef} className="mb-6 filter brightness-110 drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <Image
                src="/logo1.jpg"
                alt="Dr. Marcelo Daltro"
                width={280}
                height={90}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-lora italic text-cream/50">Recuperando Autoestimas, Redesenhando Sorrisos.</p>
          </div>

        </div>

        <div className="w-full h-px bg-cream/10 mb-8" />

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-cream/40 font-lora tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} Dr. Marcelo Daltro. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/daltrolp2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-jost uppercase tracking-widest text-cream/60 hover:text-cream transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5562991873755"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-jost uppercase tracking-widest text-cream/60 hover:text-cream transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

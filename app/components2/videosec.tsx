"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import GoldCtaButton from "./goldbutton";

interface VideosecProps {
  onOpenModal?: () => void;
}

export default function Videosec({ onOpenModal }: VideosecProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mont tracking-[0.4em] text-primary/60 uppercase mb-4 block">Transformação</span>
          <h2 className="text-4xl md:text-6xl font-fair text-primary tracking-tight bg-clip-text bg-gradient-to-b from-primary to-primary/50 text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            Antes de decidir o tratamento precisamos entender o seu sorriso
          </h2>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="justify-center text-center max-w-5xl mx-auto relative group"
        >
          {/* Animated Tech Glow behind Video */}
          <div className="absolute inset-x-10 -inset-y-5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 group-hover:animate-pulse"></div>
          
          <div className="p-2 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="aspect-video rounded-[1.5rem] overflow-hidden relative bg-[#050505]">
              {isPlaying ? (
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Mh6_5jt_RHU?autoplay=1&rel=0&modestbranding=1" 
                  title="YouTube video player"  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full relative z-0"  
                ></iframe>
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="w-full h-full relative cursor-pointer group/cover"
                >
                  <img 
                    src="https://img.youtube.com/vi/Mh6_5jt_RHU/maxresdefault.jpg" 
                    alt="Vídeo Dr. Marcelo Daltro" 
                    className="w-full h-full object-cover group-hover/cover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-full bg-[#D4AF37]/30 blur-md animate-pulse"></div>
                      <button
                        type="button"
                        aria-label="Assistir vídeo"
                        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/80 text-[#FFF099] flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.4)] group-hover/cover:shadow-[0_0_50px_rgba(212,175,55,0.8)] group-hover/cover:scale-110 group-hover/cover:bg-[#D4AF37] group-hover/cover:text-black transition-all duration-500 cursor-pointer"
                      >
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1.5" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative z-20 mt-20"
        >
          <GoldCtaButton onClick={onOpenModal} text="Quero entender meu caso" />
        </motion.div>
      </div>
    </section>
  );
}

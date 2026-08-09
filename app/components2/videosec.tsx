"use client";
import { motion } from "framer-motion";
import GoldCtaButton from "./goldbutton";

interface VideosecProps {
  onOpenModal?: () => void;
}

export default function Videosec({ onOpenModal }: VideosecProps) {
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
              {/* Technological Overlay on hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none mix-blend-screen z-10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-10"></div>
              
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/nBbzq2729xg?si=NR5BVomrUxbpeBa9" 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                className="w-full h-full relative z-0 filter contrast-[1.1] opacity-90 group-hover:opacity-100 transition-opacity duration-1000"  
              ></iframe>
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

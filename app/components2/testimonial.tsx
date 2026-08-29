"use client";

import { useState } from "react";
import { Play, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StrategicTestimonial {
  id: string;
  role: string;
  roleDescription: string;
  name: string;
  treatment: string;
  youtubeUrl: string;
  quote: string;
}

const strategicTestimonials: StrategicTestimonial[] = [
  {
    id: "1",
    role: "Confiança",
    roleDescription: "Alguém que tinha receio ou insegurança antes de iniciar o tratamento.",
    name: "Sávia Barros Diniz",
    treatment: "Lentes de Contato Dentais",
    youtubeUrl: "https://youtu.be/bfd4QyYptZI?si=oOL0bB07GNMFTGJT",
    quote: "A segurança e o acolhimento me fizeram perder todo o receio desde a primeira conversa.",
  },
  {
    id: "2",
    role: "Experiência",
    roleDescription: "Alguém que destaca consulta, atenção, planejamento, explicações e tranquilidade.",
    name: "Paulo Lima",
    treatment: "Implantes Dentários Guiados",
    youtubeUrl: "https://youtu.be/6D1g1-mNwM0?si=2jhTcYrNrIddz93w",
    quote: "O nível de detalhe no planejamento e na explicação me deu total clareza do tratamento.",
  },
  {
    id: "3",
    role: "Transformação",
    roleDescription: "Alguém que fala do resultado e do impacto na autoestima e qualidade de vida.",
    name: "Sérgio Calura",
    treatment: "Reabilitação Oral Completa",
    youtubeUrl: "https://youtu.be/Rj1tOSIvB78?si=y5-ijJUvBgzwQ9El",
    quote: "Recuperei a alegria de sorrir e a confiança no meu dia a dia. Uma transformação real.",
  },
];

const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/placeholder.svg";
};

const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : "";
};

export default function VideoTestimonialGallery() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section id="experiencias" className="py-28 md:py-36 px-4 bg-transparent relative overflow-hidden z-10">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header da Seção 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs md:text-sm font-mont tracking-[0.35em] text-primary/90 uppercase font-semibold">
              Experiências
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-white max-w-3xl mx-auto leading-tight md:leading-[1.2] tracking-tight">
            Quem viveu essa experiência{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              conta melhor do que nós.
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto my-6"></div>

          <p className="text-sm sm:text-base md:text-lg font-lora text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Mais do que resultados, buscamos construir uma experiência de cuidado, confiança e segurança em cada etapa do tratamento.
          </p>
        </motion.div>

        {/* 3 Depoimentos Estratégicos: lado a lado no desktop e em carrossel/scroll no celular */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {strategicTestimonials.map((item, index) => {
            const isPlaying = playingVideoId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="flex flex-col h-full group"
              >
                {/* Card Container */}
                <div className="flex-1 flex flex-col bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent border border-white/10 group-hover:border-primary/40 rounded-[2.2rem] p-4 sm:p-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-700 relative overflow-hidden">
                  {/* Subtle Inner Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Badge do Papel do Depoimento */}
                  <div className="flex items-center justify-between mb-4 px-2 pt-1">
                    <span className="text-xs font-mont font-bold tracking-[0.2em] uppercase text-primary/90 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      {item.role}
                    </span>
                    <span className="text-xs text-white/40 font-mont">0{index + 1}</span>
                  </div>

                  {/* Video Screen / Thumbnail */}
                  <div className="aspect-[9/16] rounded-[1.6rem] overflow-hidden relative bg-[#050505] shadow-inner mb-5 border border-white/5">
                    {isPlaying ? (
                      <iframe
                        src={getYouTubeEmbedUrl(item.youtubeUrl)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Depoimento de ${item.name}`}
                      />
                    ) : (
                      <>
                        <img
                          src={getYouTubeThumbnail(item.youtubeUrl)}
                          alt={`Depoimento de ${item.name}`}
                          className="w-full h-full object-cover filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Botão de Play Discreto em Dourado */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => setPlayingVideoId(item.id)}
                            aria-label={`Assistir depoimento de ${item.name}`}
                            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/80 text-[#FFF099] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 cursor-pointer"
                          >
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1" fill="currentColor" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Detalhes abaixo do vídeo: Nome do paciente + Tratamento realizado */}
                  <div className="px-2 pb-2 mt-auto">
                    <h3 className="text-xl sm:text-2xl font-fair text-white group-hover:text-[#FFF099] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm font-mont text-primary/80 font-medium tracking-wide mt-1">
                      {item.treatment}
                    </p>
                    <p className="text-xs sm:text-sm font-lora italic text-white/50 mt-3 line-clamp-2">
                      “{item.quote}”
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

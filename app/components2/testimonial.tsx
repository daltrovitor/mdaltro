"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import TextTestimonials from "./texttestimonial"

interface Testimonial {
  id: string
  name: string
  youtubeUrl: string
}

const testimonials: Testimonial[] = [
  { id: "1", name: "Priscilla Ramos", youtubeUrl: "https://youtu.be/FMtOkxWcNMk?si=mFYuTX-7OqasY2H8" },
  { id: "2", name: "Paulo Lima", youtubeUrl: "https://youtu.be/6D1g1-mNwM0?si=2jhTcYrNrIddz93w" },
  { id: "3", name: "Nelcina Martins", youtubeUrl: "https://youtu.be/p8SCJUWKMow?si=FdrinNSYyUTksdb_" },
  { id: "4", name: "Eugênio de Carvalho", youtubeUrl: "https://youtu.be/Nq_Wcn6ipMk" },
  { id: "5", name: "Sávia Barros Diniz", youtubeUrl: "https://youtu.be/bfd4QyYptZI?si=jTs8iOiI94WjSReP" },
  { id: "6", name: "Ana Maria Veiga Jardim", youtubeUrl: "https://youtu.be/jM-i98OAXhk?si=JXBxscqAg0sjf3rV" },
  { id: "7", name: "Sérgio Calura", youtubeUrl: "https://youtu.be/Rj1tOSIvB78?si=39zxbiMFPiKhboqj" },
]

const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
  const match = url.match(regex)
  return match ? match[1] : null
}

const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url)
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/placeholder.svg"
}

const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = getYouTubeVideoId(url)
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : ""
}

export default function VideoTestimonialGallery() {
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({})
  const [scrollPosition, setScrollPosition] = useState(0)

  const playVideo = (testimonialId: string) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [testimonialId]: true,
    }))
  }

  const scrollUp = () => setScrollPosition((prev) => Math.max(0, prev - 1))
  const scrollDown = () => setScrollPosition((prev) => Math.min(testimonials.length - getVisibleCount(), prev + 1))

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1536) return 4
      if (window.innerWidth >= 1280) return 3
      if (window.innerWidth >= 768) return 2
      return 1
    }
    return 1
  }

  const visibleTestimonials = testimonials.slice(scrollPosition, scrollPosition + getVisibleCount())

  return (
    <section className="py-32 px-4 bg-transparent relative overflow-hidden z-10">
      {/* Background Animated Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"
      ></motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-20 relative z-10"
      >
        <span className="text-xs font-mont tracking-[0.4em] text-primary/60 uppercase mb-4 block">Experiências</span>
        <h2 className="text-5xl md:text-7xl font-fair text-primary tracking-tight bg-clip-text bg-gradient-to-b from-primary to-primary/50 text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
          Depoimentos
        </h2>
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-8 mb-8"></div>
        <p className="text-xl md:text-2xl font-lora text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
          O que os nossos pacientes falam sobre a experiência de tratar conosco
        </p>
      </motion.div>

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="relative">
          {scrollPosition > 0 && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="absolute left-0 md:-left-8 top-1/2 transform -translate-y-1/2 -ml-4 z-20"
            >
              <Button
                onClick={scrollUp}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-primary/50 text-primary hover:bg-primary/20 hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 transition-all duration-500 ease-in-out px-4 md:px-12 py-4">
            {visibleTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="h-full overflow-hidden bg-white/5 backdrop-blur-lg border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] hover:border-primary/40 transition-all duration-700 group rounded-[2rem] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
                  
                  <div className="aspect-[9/16] relative bg-[#050505] z-10 m-2 rounded-[1.5rem] overflow-hidden">
                    {playingVideos[testimonial.id] ? (
                      <iframe
                        src={getYouTubeEmbedUrl(testimonial.youtubeUrl)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Depoimento de ${testimonial.name}`}
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                        <img
                          src={getYouTubeThumbnail(testimonial.youtubeUrl)}
                          alt={`Depoimento de ${testimonial.name}`}
                          className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />

                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <Button
                            onClick={() => playVideo(testimonial.id)}
                            size="icon"
                            className="rounded-full w-20 h-20 bg-primary/90 hover:bg-primary border border-primary text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] transition-all duration-500 hover:scale-110 cursor-pointer"
                          >
                            <Play className="w-8 h-8 ml-1" fill="currentColor" />
                          </Button>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <h4 className="font-fair text-xl text-primary tracking-wide drop-shadow-md">{testimonial.name}</h4>
                        </div>
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {scrollPosition < testimonials.length - getVisibleCount() && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              className="absolute right-0 md:-right-8 top-1/2 transform -translate-y-1/2 -mr-4 z-20"
            >
              <Button
                onClick={scrollDown}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-primary/50 text-primary hover:bg-primary/20 hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </motion.div>
          )}

          <div className="flex justify-center items-center mt-12 space-x-3">
            {Array.from({ length: Math.ceil(testimonials.length / getVisibleCount()) }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  Math.floor(scrollPosition / getVisibleCount()) === index 
                    ? "w-8 bg-primary shadow-[0_0_10px_rgba(212,175,55,0.5)]" 
                    : "w-2 bg-white/20 hover:bg-white/40 cursor-pointer"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Spacer between video testimonials and text testimonials */}
      <div className="h-32"></div>
      
      <TextTestimonials />
    </section>
  )
}

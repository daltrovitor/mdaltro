// Hello World
"use client"

import { motion } from "framer-motion"
import { ImageSlider } from "./carossel"

export default function TextTestimonials() {

  const sampleImages = [
    "/public2/1.jpg",
    "/public2/2.jpg",
    "/public2/3.jpg",
    "/public2/4.jpg",
    "/public2/5.jpg",
    "/public2/6.jpg",
    "/public2/7.jpg",
    "/public2/8.jpg",
    "/public2/9.jpg",
    "/public2/10.jpg",
    "/public2/11.jpg",
    "/public2/12.jpg",
    "/public2/13.jpg",
    "/public2/14.jpg",
  ]
  return (
    <section className="py-24 px-4 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303] to-[#050505] pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 1, type: "spring" }}
              className="bg-white/5 p-4 rounded-3xl backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              <svg className="w-12 h-12" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-fair text-white tracking-tight drop-shadow-md">Avaliações <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Google</span></h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-lora text-white/60 font-light max-w-xl mx-auto">
            A satisfação reflete em cada sorriso
          </p>
        </motion.div>
 
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative max-w-4xl mx-auto"
        >
          {/* Subtle glow behind slider */}
          <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full z-0 pointer-events-none w-3/4 mx-auto"></div>
          
          <div className="relative z-10 ring-1 ring-white/10 bg-[#080808] p-1.5 sm:p-2.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
            <ImageSlider
                images={sampleImages}
                autoPlay={true}
                autoPlayInterval={4000}
                showDots={true}
                showArrows={true}
              />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 font-fair"
        >
          <a
            href="https://share.google/zMPxl8UUChf4FEpBv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 hover:border-primary/50 text-white hover:text-primary px-10 py-5 rounded-full text-lg md:text-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-0"></div>
            <svg className="w-6 h-6 z-10 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="relative z-10">Ver todas as avaliações no Google</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

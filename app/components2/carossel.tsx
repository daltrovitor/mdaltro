// Hello World
"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageSliderProps {
  images: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

export function ImageSlider({
  images,
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, images.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[1890/673] bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Nenhuma imagem disponível</p>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full group", className)}>
      {/* Main image container */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-[1890/673] bg-[#0a0a0a]">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const diff = touchStartX.current - e.changedTouches[0].clientX
            if (diff > 45) goToNext()
            else if (diff < -45) goToPrevious()
            touchStartX.current = null
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={image || "/placeholder.svg"}
                alt={`Avaliação de paciente ${index + 1}`}
                width={1890}
                height={673}
                className="w-full h-full object-contain sm:object-cover rounded-xl"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
          {/* Navigation arrows */}
          {showArrows && images.length > 1 && (
            <>
              <button
                type="button"
                className="inline-flex items-center justify-center size-8 sm:size-9 absolute left-2 sm:left-4 top-1/2 hover:bg-primary hover:text-black bg-black/80 text-primary cursor-pointer -translate-y-1/2 border border-white/10 backdrop-blur-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-lg"
                onClick={goToPrevious}
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center size-8 sm:size-9 absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/80 cursor-pointer backdrop-blur-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary text-primary hover:text-black border border-white/10 rounded-full shadow-lg"
                onClick={goToNext}
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
          {/* Loading indicator for current image */}
          <div className="absolute inset-0 bg-muted animate-pulse" style={{ display: "none" }} />
        </div>
        {/* Dots indicator */}
        {showDots && images.length > 1 && (
          <div className="flex justify-center mt-4 gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className="p-3 inline-flex items-center justify-center cursor-pointer bg-transparent border-0 min-h-[44px] min-w-[44px]"
                onClick={() => goToSlide(index)}
                aria-label={`Ir para avaliação ${index + 1}`}
              >
                <span
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 block",
                    index === currentIndex ? "bg-primary w-8" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                />
              </button>
            ))}
          </div>
        )}
        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
  )
}

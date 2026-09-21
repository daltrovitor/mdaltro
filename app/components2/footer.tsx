// Hello World

import React from "react";
import Image from "next/image";
import { Phone, MapPin, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
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
                src="/logo2-opt.webp"
                alt="Logo Marcelo Daltro"
                loading="lazy"
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
              { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/daltrolp2" },
              { icon: Facebook, name: "Facebook", url: "https://facebook.com" },
              { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar ${social.name} do Dr. Marcelo Daltro`}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors text-white hover:text-primary shadow-sm cursor-pointer"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

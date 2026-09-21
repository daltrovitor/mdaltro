// Hello World
"use client";
import React from "react";
import { motion } from "framer-motion";

interface GoldCtaButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  text?: string;
  type?: "button" | "submit";
}

export default function GoldCtaButton({
  onClick,
  href,
  className = "",
  text = "Quero entender meu caso",
  type = "button",
}: GoldCtaButtonProps) {
  const innerContent = (
    <>
      {/* Outer ambient gold glow */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#AA771C] opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>

      <div className="relative flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full font-mont font-bold text-sm sm:text-base text-black uppercase tracking-wider bg-[linear-gradient(135deg,#D4AF37_0%,#FFF099_45%,#E6C200_55%,#AA771C_100%)] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] overflow-hidden border border-[#FFF099]/40 cursor-pointer">
        {/* Shimmer effect */}
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none"></span>

        <span className="relative z-10 drop-shadow-sm">{text}</span>
      </div>
    </>
  );

  if (onClick || type === "submit") {
    return (
      <motion.button
        type={type}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onClick}
        className={`inline-block group relative cursor-pointer border-none bg-transparent p-0 ${className}`}
      >
        {innerContent}
      </motion.button>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-block group relative ${className}`}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {innerContent}
        </a>
      ) : (
        innerContent
      )}
    </motion.div>
  );
}

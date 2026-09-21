// Hello World
"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    function onMouseMove(e: MouseEvent) {
      if (el) {
        el.style.left = `${e.clientX - 192}px`;
        el.style.top = `${e.clientY - 192}px`;
        el.style.opacity = "0.7";
      }
    }
    function onMouseLeave() {
      if (el) el.style.opacity = "0";
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      id="mouse-gradient"
      ref={ref}
      className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0 z-0"
      style={{
        background: "radial-gradient(circle, #6b55451A 0%, transparent 100%)",
      }}
    />
  );
}

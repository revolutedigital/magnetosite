"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-120px)] flex items-end lg:items-center overflow-hidden bg-secondary">
      {/* Parallax background image — desktop */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 hidden lg:block bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: "url('/images/bg_02_desktop_magneto.webp?v=3')" }}
        aria-hidden="true"
      />

      {/* Background image — mobile */}
      <div
        className="absolute inset-0 z-0 lg:hidden bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg_02_mobile_magneto.webp')" }}
        aria-hidden="true"
      />

      {/* Color grading overlay — subtle tint since photo is already saturated */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(15,22,35,0.2)", mixBlendMode: "multiply" }}
        aria-hidden="true"
      />

      {/* Gradient overlay — protects text on left (desktop), bottom (mobile) */}
      <div
        className="absolute inset-0 z-[2] hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(10,15,26,0.92) 0%, rgba(10,15,26,0.7) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 25%, rgba(10,15,26,0.75) 45%, rgba(10,15,26,0.95) 65%)",
        }}
        aria-hidden="true"
      />

      {/* Engineering grid lines — subtle technical detail */}
      <div className="absolute inset-0 z-[3] opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Content — vertically centered with slight bottom bias (golden ratio) */}
      <Container className="relative z-10 pt-[45vh] pb-12 lg:pt-0 lg:pb-6 lg:flex lg:items-center lg:min-h-[calc(100vh-120px)]">
        <div className="max-w-3xl hero-stagger">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 mb-8 border border-white/15 hero-fade-item">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
            Desde 2009 — Engenharia de Precisão
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-[1.05] font-[family-name:var(--font-heading)] hero-fade-item">
            Soluções em{" "}
            <span className="text-primary">Freios</span> e{" "}
            <span className="text-primary">Embreagens</span>{" "}
            Eletromagnéticos
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl leading-relaxed hero-fade-item">
            Projetamos, fabricamos e aplicamos componentes de transmissão eletromagnética
            de alta performance para indústria, agricultura, elevadores e transporte.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 hero-fade-item">
            <Button size="lg" href="/produtos">
              Ver Produtos
              <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contato"
              className="border-white/50 text-white bg-white/5 hover:bg-white hover:text-secondary backdrop-blur-sm"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce" aria-hidden="true">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

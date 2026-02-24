"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Hero product image */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] opacity-20 lg:opacity-30">
        <Image
          src="/images/hero/hero-banner.png"
          alt="Magneto - Freios e Embreagens"
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Red accent glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <Container className="relative z-10 py-20">
        <div
          ref={heroRef}
          className="max-w-3xl transition-all duration-1000 ease-out opacity-0 translate-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 mb-8 border border-white/10">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Desde 2009 — Engenharia de Precisão
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] font-[family-name:var(--font-heading)]">
            Soluções em{" "}
            <span className="text-primary">Freios</span> e{" "}
            <span className="text-primary">Embreagens</span>{" "}
            Eletromagnéticos
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Projetamos, fabricamos e aplicamos componentes de transmissão eletromagnética
            de alta performance para indústria, agricultura, elevadores e transporte.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" href="/produtos">
              Ver Produtos
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" href="/contato" className="border-white/30 text-white hover:bg-white hover:text-secondary">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
            {[
              { value: "+15", label: "Anos de Experiência" },
              { value: "500+", label: "Projetos Entregues" },
              { value: "4", label: "Continentes Atendidos" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

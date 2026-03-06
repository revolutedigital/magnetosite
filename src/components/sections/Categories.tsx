"use client";

import Link from "next/link";
import { ArrowRight, Zap, Shield, Settings, Droplets, Wind } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const categories = [
  {
    icon: Zap,
    title: "Embreagens Eletromagnéticas",
    description:
      "Acoplamento preciso e confiável para transmissão de torque em aplicações industriais e agrícolas.",
    href: "/produtos/embreagens",
  },
  {
    icon: Shield,
    title: "Freios Eletromagnéticos",
    description:
      "Frenagem segura e responsiva para elevadores, guindastes, máquinas-ferramenta e automação.",
    href: "/produtos/freios",
  },
  {
    icon: Settings,
    title: "Unidades Freio-Embreagem",
    description:
      "Combinação integrada de freio e embreagem em um único conjunto compacto e eficiente.",
    href: "/produtos/freio-embreagem",
  },
  {
    icon: Droplets,
    title: "Acoplamentos Hidráulicos",
    description:
      "Transmissão suave de potência com proteção contra sobrecarga. Representação FLUIDOMAT.",
    href: "/produtos/acoplamentos",
  },
  {
    icon: Wind,
    title: "Embreagens para A/C",
    description:
      "Embreagens eletromagnéticas para compressores de ar-condicionado em ônibus e veículos pesados.",
    href: "/produtos/ar-condicionado",
  },
];

export default function Categories() {
  return (
    <section className="py-24">
      <Container>
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Nosso Portfólio
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-4 font-[family-name:var(--font-heading)]">
              Linhas de Produto
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Soluções completas em transmissão eletromagnética, projetadas e fabricadas
              com tecnologia de ponta e os mais altos padrões de qualidade.
            </p>
          </div>
        </Reveal>

        {/* Cards grid — 5 items: 3+2 centered on last row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={Math.min(index + 1, 4) as 1 | 2 | 3 | 4}>
                <Link href={cat.href} className="group block h-full">
                  <Card className="h-full group-hover:border-primary/30">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-primary/10 text-primary">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver produtos <ArrowRight size={16} />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
        {/* Bottom row — 2 items centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="hidden lg:block" />
          {categories.slice(3).map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={Math.min(index + 3, 4) as 1 | 2 | 3 | 4}>
                <Link href={cat.href} className="group block h-full">
                  <Card className="h-full group-hover:border-primary/30">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-primary/10 text-primary">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver produtos <ArrowRight size={16} />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

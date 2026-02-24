"use client";

import { ArrowRight, Zap, Shield, Settings, Droplets, Wind } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const categories = [
  {
    icon: Zap,
    title: "Embreagens Eletromagnéticas",
    description:
      "Acoplamento preciso e confiável para transmissão de torque em aplicações industriais e agrícolas.",
    href: "/produtos/embreagens",
    color: "bg-red-50 text-primary",
  },
  {
    icon: Shield,
    title: "Freios Eletromagnéticos",
    description:
      "Frenagem segura e responsiva para elevadores, guindastes, máquinas-ferramenta e automação.",
    href: "/produtos/freios",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Settings,
    title: "Unidades Freio-Embreagem",
    description:
      "Combinação integrada de freio e embreagem em um único conjunto compacto e eficiente.",
    href: "/produtos/freio-embreagem",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Droplets,
    title: "Acoplamentos Hidráulicos",
    description:
      "Transmissão suave de potência com proteção contra sobrecarga. Representação FLUIDOMAT.",
    href: "/produtos/acoplamentos",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Wind,
    title: "Embreagens para A/C",
    description:
      "Embreagens eletromagnéticas para compressores de ar-condicionado em ônibus e veículos pesados.",
    href: "/produtos/ar-condicionado",
    color: "bg-violet-50 text-violet-600",
  },
];

export default function Categories() {
  return (
    <section className="py-24">
      <Container>
        {/* Section header */}
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a key={cat.title} href={cat.href} className="group">
                <Card className="h-full group-hover:border-primary/30">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${cat.color}`}>
                    <Icon size={22} />
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
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

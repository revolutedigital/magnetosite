"use client";

import Image from "next/image";
import { ArrowRight, Building2, Globe, Users, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const differentials = [
  { icon: Building2, label: "Fabricação Própria" },
  { icon: Globe, label: "Presença Global" },
  { icon: Users, label: "Equipe Técnica" },
  { icon: Shield, label: "Qualidade Garantida" },
];

const photos = [
  { src: "/images/empresa/fabrica-1.jpg", alt: "Produção de freios e embreagens eletromagnéticos" },
  { src: "/images/empresa/fabrica-5.jpg", alt: "Estoque de freios e embreagens eletromagnéticos" },
  { src: "/images/empresa/fabrica-3.jpg", alt: "Montagem de componentes eletromagnéticos" },
  { src: "/images/empresa/fabrica-4.jpg", alt: "Controle de qualidade na produção" },
];

export default function AboutPreview() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image grid */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Quem Somos
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4 font-[family-name:var(--font-heading)]">
                Engenharia de Precisão{" "}
                <span className="text-primary">desde 2009</span>
              </h2>
              <p className="text-sm lg:text-base text-muted leading-relaxed mb-4">
                A Magneto Eletropneumática é especializada em projeto, fabricação e aplicação de
                freios e embreagens eletromagnéticos. Sediada em Sorocaba/SP, atendemos fabricantes
                de máquinas e equipamentos no Brasil, América Latina, Estados Unidos e Europa.
              </p>
              <p className="text-sm lg:text-base text-muted leading-relaxed mb-6">
                Com fabricação própria e equipe de engenheiros especializados, desenvolvemos
                soluções customizadas que garantem performance, durabilidade e segurança
                para as mais diversas aplicações industriais.
              </p>
            </Reveal>

            {/* Differentials mini-grid */}
            <Reveal delay={1}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {differentials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold text-foreground font-[family-name:var(--font-heading)]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <Button href="/empresa">
                Conheça a Magneto
                <ArrowRight size={18} />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

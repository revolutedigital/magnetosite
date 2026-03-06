"use client";

import Link from "next/link";
import { ArrowRight, Tractor, Package, Printer, Building2, Bus } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const applications = [
  {
    icon: Tractor,
    title: "Agrícola",
    description: "Embreagens para plantadeiras, colheitadeiras e implementos agrícolas de alta performance.",
    href: "/aplicacoes/agricola",
  },
  {
    icon: Package,
    title: "Packaging",
    description: "Controle preciso de tensão e posicionamento em máquinas de embalagem e envase.",
    href: "/aplicacoes/packaging",
  },
  {
    icon: Printer,
    title: "Impressão",
    description: "Freios e embreagens para registro de cores e controle de bobinas em impressoras industriais.",
    href: "/aplicacoes/impressao",
  },
  {
    icon: Building2,
    title: "Elevadores",
    description: "Freios de segurança eletromagnéticos para elevadores de passageiros e carga.",
    href: "/aplicacoes/elevadores",
  },
  {
    icon: Bus,
    title: "Transporte",
    description: "Embreagens eletromagnéticas para compressores de A/C em ônibus e veículos pesados.",
    href: "/aplicacoes/transporte",
  },
];

export default function Applications() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Onde Atuamos
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-4 font-[family-name:var(--font-heading)]">
              Aplicações por Indústria
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Atendemos os mais diversos setores com soluções customizadas
              que garantem performance, durabilidade e segurança.
            </p>
          </div>
        </Reveal>

        {/* Applications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <Reveal key={app.title} delay={Math.min(index + 1, 4) as 1 | 2 | 3 | 4}>
                <Link
                  href={app.href}
                  className="group h-full flex flex-col relative rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm p-8 pb-6 hover:bg-white/[0.08] hover:border-primary-light/40 transition-all duration-300"
                >
                  {/* Accent line on hover */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-primary-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />

                  <div className="w-12 h-12 bg-white/[0.06] border border-white/[0.08] rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-light/15 group-hover:border-primary-light/25 transition-all duration-300">
                    <Icon size={24} className="text-slate-300 group-hover:text-primary-light transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-heading)] group-hover:text-primary-light transition-colors duration-300">
                    {app.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5 flex-1">
                    {app.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    Saiba mais
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

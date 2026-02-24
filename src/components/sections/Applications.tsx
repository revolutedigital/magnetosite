"use client";

import { ArrowRight, Tractor, Package, Printer, Building2, Bus } from "lucide-react";
import Container from "@/components/ui/Container";

const applications = [
  {
    icon: Tractor,
    title: "Agrícola",
    description: "Embreagens para plantadeiras, colheitadeiras e implementos agrícolas de alta performance.",
    href: "/aplicacoes/agricola",
    image: "bg-gradient-to-br from-green-100 to-green-50",
  },
  {
    icon: Package,
    title: "Packaging",
    description: "Controle preciso de tensão e posicionamento em máquinas de embalagem e envase.",
    href: "/aplicacoes/packaging",
    image: "bg-gradient-to-br from-blue-100 to-blue-50",
  },
  {
    icon: Printer,
    title: "Impressão",
    description: "Freios e embreagens para registro de cores e controle de bobinas em impressoras industriais.",
    href: "/aplicacoes/impressao",
    image: "bg-gradient-to-br from-purple-100 to-purple-50",
  },
  {
    icon: Building2,
    title: "Elevadores",
    description: "Freios de segurança eletromagnéticos para elevadores de passageiros e carga.",
    href: "/aplicacoes/elevadores",
    image: "bg-gradient-to-br from-amber-100 to-amber-50",
  },
  {
    icon: Bus,
    title: "Transporte",
    description: "Embreagens eletromagnéticas para compressores de A/C em ônibus e veículos pesados.",
    href: "/aplicacoes/transporte",
    image: "bg-gradient-to-br from-red-100 to-red-50",
  },
];

export default function Applications() {
  return (
    <section className="py-24">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
            Onde Atuamos
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-4 font-[family-name:var(--font-heading)]">
            Aplicações por Indústria
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Atendemos os mais diversos setores com soluções customizadas
            que garantem performance, durabilidade e segurança.
          </p>
        </div>

        {/* Applications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <a
                key={app.title}
                href={app.href}
                className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Background */}
                <div className={`${app.image} p-8 pb-6`}>
                  <Icon size={40} className="text-foreground/70 mb-4 group-hover:text-primary transition-colors" />
                  <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {app.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Saiba mais
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

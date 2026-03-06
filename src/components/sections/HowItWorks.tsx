"use client";

import { Zap, RotateCcw, Gauge } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    step: "01",
    icon: Zap,
    title: "Energizar",
    subtitle: "Corrente Ativa o Campo",
    description:
      "A corrente elétrica percorre a bobina, gerando um campo eletromagnético que atrai o disco de fricção.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    step: "02",
    icon: RotateCcw,
    title: "Acoplar",
    subtitle: "Disco de Fricção Conecta",
    description:
      "O campo magnético puxa a armadura contra o rotor, criando o acoplamento mecânico entre motor e carga.",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    step: "03",
    icon: Gauge,
    title: "Controlar",
    subtitle: "Torque Preciso Transmitido",
    description:
      "O torque é transmitido com precisão e resposta imediata, garantindo controle total da operação.",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 section-alt">
      <Container>
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Como Funciona
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-4 font-[family-name:var(--font-heading)]">
              Tecnologia Eletromagnética
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Entenda o princípio de funcionamento por trás dos nossos freios e embreagens
              eletromagnéticos em três passos simples.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={Math.min(index + 1, 3) as 1 | 2 | 3}>
                <div className="relative">
                  {/* Connector line (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-60px)] h-[2px] bg-gradient-to-r from-border to-transparent" aria-hidden="true" />
                  )}

                  {/* Connector line (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 bottom-0 translate-y-full w-[2px] h-8 bg-gradient-to-b from-border to-transparent -translate-x-1/2" aria-hidden="true" />
                  )}

                  <div className="text-center pb-8 lg:pb-0">
                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-32 h-32 rounded-3xl ${item.bgColor} border ${item.borderColor} mb-6 relative`}>
                      <Icon size={48} className={item.color} />
                      <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold ${item.color} font-[family-name:var(--font-heading)]`}>
                        {item.step}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className={`text-2xl font-bold mb-1 font-[family-name:var(--font-heading)] ${item.color}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-foreground mb-3">{item.subtitle}</p>
                    <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

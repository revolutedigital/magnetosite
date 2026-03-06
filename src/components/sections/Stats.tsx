"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Globe, Wrench, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { icon: Award, value: 15, suffix: "+", label: "Anos de Experiência" },
  { icon: Wrench, value: 500, suffix: "+", label: "Projetos Entregues" },
  { icon: Globe, value: 4, suffix: "", label: "Continentes Atendidos" },
  { icon: Users, value: 200, suffix: "+", label: "Clientes Ativos" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-heading)]">
      <span aria-hidden="true">{count}{suffix}</span>
      <span className="sr-only">{target}{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 section-alt" aria-labelledby="stats-heading">
      <Container>
        <h2 id="stats-heading" className="sr-only">Magneto Brasil em números</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={Math.min(index + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-3">
                    <Icon size={22} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

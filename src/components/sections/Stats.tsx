"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Globe, Wrench, Users } from "lucide-react";
import Container from "@/components/ui/Container";

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
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 section-alt">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

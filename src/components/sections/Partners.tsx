"use client";

import Container from "@/components/ui/Container";

const partners = [
  "FLUIDOMAT",
  "EUROFLEX",
  "Cliente A",
  "Cliente B",
  "Cliente C",
  "Cliente D",
  "Cliente E",
  "Cliente F",
];

export default function Partners() {
  return (
    <section className="py-12 border-y border-border" aria-label="Parceiros e representações">
      <Container>
        <p className="text-center text-xs uppercase tracking-widest text-muted mb-8 font-[family-name:var(--font-heading)]">
          Parceiros e Representações
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-lg font-bold text-muted font-[family-name:var(--font-heading)] hover:text-foreground transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

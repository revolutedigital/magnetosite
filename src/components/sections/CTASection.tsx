import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg_01_desktop_magneto.webp')", backgroundColor: "#0f1623" }}
    >
      {/* Color grading overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(15,22,35,0.6)", mixBlendMode: "multiply" }}
        aria-hidden="true"
      />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" aria-hidden="true" />

      <Container className="relative z-10 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-slate-300 mb-6">
          <Phone size={14} aria-hidden="true" />
          Pronto para começar?
        </span>

        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
          Encontre a solução perfeita para{" "}
          <span className="text-primary">sua aplicação</span>
        </h2>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          Nossa equipe de engenheiros está pronta para ajudá-lo a especificar
          o freio ou embreagem ideal. Entre em contato e receba uma proposta personalizada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" href="/contato">
            Solicitar Orçamento
            <ArrowRight size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="https://wa.me/5515997166881"
            className="border-white/30 text-white hover:bg-white hover:text-secondary"
          >
            <Phone size={20} />
            WhatsApp
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10 text-sm text-slate-300">
          <span>Resposta em até 24h</span>
          <span className="w-1 h-1 bg-slate-500 rounded-full" aria-hidden="true" />
          <span>Engenheiros especializados</span>
          <span className="w-1 h-1 bg-slate-500 rounded-full" aria-hidden="true" />
          <span>Atendimento nacional e internacional</span>
        </div>
      </Container>
    </section>
  );
}

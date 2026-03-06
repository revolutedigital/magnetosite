import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Package, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Aplicação Packaging",
  description: "Freios e embreagens para máquinas de embalagem, envase e packaging industrial.",
};

const benefits = [
  "Controle preciso de tensão de filmes e materiais",
  "Alta velocidade de resposta para ciclos rápidos",
  "Compatibilidade com CLPs e sistemas de automação",
  "Baixa geração de calor em operação contínua",
  "Ajuste fino de torque para materiais delicados",
  "Manutenção simplificada e longa vida útil",
];

const applications = [
  { title: "Máquinas de Embalagem", description: "Freios e embreagens para controle de bobinas e corte preciso de filmes." },
  { title: "Envasadoras", description: "Sistemas de posicionamento e indexação para linhas de envase." },
  { title: "Seladoras", description: "Controle de movimento em máquinas de selagem térmica e a vácuo." },
  { title: "Etiquetadoras", description: "Precisão no posicionamento e aplicação de etiquetas em alta velocidade." },
];

export default function PackagingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="py-24 section-dark hero-grid-pattern relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <Container className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Package size={28} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Aplicação <span className="text-primary">Packaging</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Controle preciso de tensão e posicionamento em máquinas de embalagem e envase,
              garantindo qualidade e produtividade em linhas de alta velocidade.
            </p>
          </Container>
        </section>

        {/* Applications */}
        <section className="py-24">
          <Container>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Onde Atuamos
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-heading)]">
                Aplicações em Packaging
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {applications.map((app) => (
                <Card key={app.title}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Zap size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">{app.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{app.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-24 section-alt">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                  Diferenciais
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-8 font-[family-name:var(--font-heading)]">
                  Por que escolher a Magneto?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <p className="text-muted">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 flex items-center justify-center">
                <Package size={120} className="text-blue-600/30" />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Precisa de soluções para packaging?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Fale com nossos engenheiros para especificação técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contato">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" href="/produtos" className="border-white/30 text-white hover:bg-white hover:text-secondary">
                Ver Produtos
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

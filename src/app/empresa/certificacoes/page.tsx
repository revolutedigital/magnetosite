import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Award, Shield, CheckCircle, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificações",
  description: "Certificações e padrões de qualidade Magneto Brasil. Compromisso com excelência e conformidade.",
};

const certifications = [
  {
    icon: Shield,
    title: "Gestão da Qualidade",
    description: "Sistema de gestão da qualidade implementado seguindo os mais rigorosos padrões internacionais, garantindo consistência e confiabilidade em todos os processos produtivos.",
  },
  {
    icon: FileCheck,
    title: "Conformidade de Produto",
    description: "Nossos produtos são projetados e fabricados em conformidade com normas técnicas nacionais e internacionais aplicáveis ao setor de transmissão eletromagnética.",
  },
  {
    icon: Award,
    title: "Controle de Processos",
    description: "Processos produtivos monitorados com instrumentação calibrada e rastreável, assegurando tolerâncias dimensionais e especificações técnicas precisas.",
  },
];

const qualityPractices = [
  "Inspeção de recebimento de matéria-prima",
  "Controle dimensional em todas as etapas de fabricação",
  "Testes elétricos e magnéticos em 100% dos produtos",
  "Ensaios de torque e performance antes da expedição",
  "Rastreabilidade completa por número de série",
  "Instrumentos calibrados com rastreabilidade RBC/Inmetro",
  "Auditorias internas periódicas de qualidade",
  "Melhoria contínua baseada em indicadores de desempenho",
];

export default function CertificacoesPage() {
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
                <Award size={28} className="text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              <span className="text-primary">Certificações</span> e Qualidade
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Compromisso com a excelência em cada etapa do processo produtivo,
              da matéria-prima ao produto final entregue ao cliente.
            </p>
          </Container>
        </section>

        {/* Certifications */}
        <section className="py-24">
          <Container>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Nossos Padrões
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-heading)]">
                Qualidade Garantida
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <Card key={cert.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">{cert.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{cert.description}</p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Quality practices */}
        <section className="py-24 section-alt">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                  Práticas de Qualidade
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-8 font-[family-name:var(--font-heading)]">
                  Nosso Compromisso
                </h2>
                <div className="space-y-4">
                  {qualityPractices.map((practice) => (
                    <div key={practice} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <p className="text-muted">{practice}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center">
                <Award size={120} className="text-primary/20" />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 section-dark">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Quer saber mais sobre nossos padrões?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Entre em contato para informações detalhadas sobre nossas certificações e processos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contato">
                Falar com a Equipe
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" href="/empresa" className="border-white/30 text-white hover:bg-white hover:text-secondary">
                Voltar para Empresa
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

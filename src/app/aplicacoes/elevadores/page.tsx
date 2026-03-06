import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Building2, CheckCircle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Aplicação Elevadores",
  description: "Freios de segurança eletromagnéticos para elevadores de passageiros e carga.",
};

const benefits = [
  "Frenagem de emergência instantânea e confiável",
  "Conformidade com normas de segurança NR-12 e EN 81",
  "Operação silenciosa para conforto dos passageiros",
  "Longa vida útil com mínimo desgaste",
  "Compatível com inversores de frequência",
  "Manutenção preditiva simplificada",
];

const applications = [
  { title: "Elevadores de Passageiros", description: "Freios de segurança para elevadores comerciais e residenciais com alto nível de confiabilidade." },
  { title: "Elevadores de Carga", description: "Sistemas de frenagem robustos para elevadores industriais com capacidades elevadas." },
  { title: "Portas de Elevador", description: "Freios eletromagnéticos compactos para controle preciso de abertura e fechamento de portas." },
  { title: "Escadas Rolantes", description: "Freios de segurança para parada de emergência em escadas e esteiras rolantes." },
];

export default function ElevadoresPage() {
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
                <Building2 size={28} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Aplicação <span className="text-primary">Elevadores</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Freios de segurança eletromagnéticos para elevadores de passageiros e carga,
              com confiabilidade e conformidade com as normas mais exigentes do setor.
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
                Aplicações em Elevadores
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {applications.map((app) => (
                <Card key={app.title}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Shield size={20} className="text-primary" />
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
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-12 flex items-center justify-center">
                <Building2 size={120} className="text-amber-600/30" />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Precisa de freios para elevadores?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Somos referência em freios para elevadores no Brasil. Fale com nossos especialistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contato">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" href="/produtos/freios" className="border-white/30 text-white hover:bg-white hover:text-secondary">
                Ver Freios
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

import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Bus, CheckCircle, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Aplicação Transporte",
  description: "Embreagens eletromagnéticas para compressores de A/C em ônibus e veículos pesados.",
};

const benefits = [
  "Alta durabilidade para operação em frota",
  "Resistência a vibrações e condições severas de rodagem",
  "Compatível com compressores dos principais fabricantes",
  "Operação em tensão 24V DC padrão veicular",
  "Fácil instalação e substituição em campo",
  "Suporte técnico especializado para frotas",
];

const applications = [
  { title: "Ônibus Urbanos", description: "Embreagens para compressores de ar-condicionado em ônibus de transporte urbano." },
  { title: "Ônibus Rodoviários", description: "Sistemas de acoplamento para A/C em veículos de longa distância com alta exigência." },
  { title: "Micro-ônibus", description: "Soluções compactas para sistemas de climatização em micro-ônibus e vans." },
  { title: "Veículos Pesados", description: "Embreagens para compressores em caminhões e veículos especiais com cabine climatizada." },
];

export default function TransportePage() {
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
                <Bus size={28} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Aplicação <span className="text-primary">Transporte</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Embreagens eletromagnéticas para compressores de ar-condicionado em ônibus
              e veículos pesados, com alta durabilidade e performance em frota.
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
                Aplicações em Transporte
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {applications.map((app) => (
                <Card key={app.title}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Wind size={20} className="text-primary" />
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
              <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-12 flex items-center justify-center">
                <Bus size={120} className="text-red-600/30" />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Precisa de embreagens para sua frota?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Atendemos frotas de ônibus e veículos pesados em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contato">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" href="/produtos/ar-condicionado" className="border-white/30 text-white hover:bg-white hover:text-secondary">
                Ver Embreagens A/C
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

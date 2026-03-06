import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Tractor, Package, Printer, Building2, Bus } from "lucide-react";

export const metadata: Metadata = {
  title: "Aplicações",
  description: "Conheça os setores atendidos pela Magneto Brasil: agrícola, packaging, impressão, elevadores e transporte.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://magnetobrasil.com.br" },
    { "@type": "ListItem", position: 2, name: "Aplicações", item: "https://magnetobrasil.com.br/aplicacoes" },
  ],
};

const applications = [
  {
    icon: Tractor,
    title: "Agrícola",
    description: "Embreagens para plantadeiras, colheitadeiras e implementos agrícolas de alta performance. Referência no setor desde 2012.",
    href: "/aplicacoes/agricola",
  },
  {
    icon: Package,
    title: "Packaging",
    description: "Controle preciso de tensão e posicionamento em máquinas de embalagem e envase com alta produtividade.",
    href: "/aplicacoes/packaging",
  },
  {
    icon: Printer,
    title: "Impressão",
    description: "Freios e embreagens para registro de cores e controle de bobinas em impressoras industriais.",
    href: "/aplicacoes/impressao",
  },
  {
    icon: Building2,
    title: "Elevadores",
    description: "Freios de segurança eletromagnéticos para elevadores de passageiros e carga com alta confiabilidade.",
    href: "/aplicacoes/elevadores",
  },
  {
    icon: Bus,
    title: "Ônibus / Transporte",
    description: "Embreagens eletromagnéticas para compressores de A/C em ônibus e veículos pesados.",
    href: "/aplicacoes/transporte",
  },
];

export default function AplicacoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="py-24 section-dark hero-grid-pattern relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          <Container className="relative z-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Onde Atuamos
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6 font-[family-name:var(--font-heading)]">
              Aplicações por <span className="text-primary">Indústria</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Atendemos os mais diversos setores com soluções customizadas que garantem
              performance, durabilidade e segurança.
            </p>
          </Container>
        </section>

        {/* Applications grid */}
        <section className="py-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app) => {
                const Icon = app.icon;
                return (
                  <Link
                    key={app.title}
                    href={app.href}
                    className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="bg-surface p-10">
                      <Icon size={48} className="text-foreground/70 mb-6 group-hover:text-primary transition-colors" />
                      <h2 className="text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                        {app.title}
                      </h2>
                      <p className="text-muted leading-relaxed mb-6">
                        {app.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Saiba mais
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Não encontrou sua aplicação?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Desenvolvemos soluções customizadas para qualquer setor. Fale com nossos engenheiros.
            </p>
            <Button size="lg" href="/contato">
              Falar com Engenheiro
              <ArrowRight size={20} />
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

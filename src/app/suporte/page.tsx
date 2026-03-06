import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, FileText, Phone, Mail, HelpCircle, Wrench, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Suporte Técnico",
  description: "Suporte técnico Magneto Brasil: assistência especializada, datasheets, manuais e orientação técnica.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://magnetobrasil.com.br" },
    { "@type": "ListItem", position: 2, name: "Suporte", item: "https://magnetobrasil.com.br/suporte" },
  ],
};

const supportOptions = [
  {
    icon: Phone,
    title: "Suporte por Telefone",
    description: "Ligue para nossa equipe técnica de segunda a sexta, das 8h às 17h.",
    action: "(15) 3202-1496",
    href: "tel:+551532021496",
  },
  {
    icon: Mail,
    title: "Suporte por E-mail",
    description: "Envie sua dúvida técnica e responderemos em até 24 horas úteis.",
    action: "magneto@magnetobrasil.com.br",
    href: "mailto:magneto@magnetobrasil.com.br",
  },
  {
    icon: Phone,
    title: "WhatsApp Técnico",
    description: "Atendimento rápido via WhatsApp para dúvidas e suporte técnico.",
    action: "15 99716-6881",
    href: "https://wa.me/5515997166881",
  },
];

const resources = [
  {
    icon: FileText,
    title: "Datasheets",
    description: "Fichas técnicas completas de todos os nossos produtos com especificações detalhadas.",
    href: "/suporte/datasheets",
  },
  {
    icon: Wrench,
    title: "Assistência Técnica",
    description: "Orientação para instalação, manutenção e troubleshooting de nossos produtos.",
    href: "/contato",
  },
  {
    icon: BookOpen,
    title: "Dimensionamento",
    description: "Auxílio no dimensionamento e seleção do produto ideal para sua aplicação.",
    href: "/contato",
  },
];

export default function SuportePage() {
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                <HelpCircle size={28} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              Suporte <span className="text-primary">Técnico</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Nossa equipe de engenheiros está pronta para ajudá-lo com dúvidas técnicas,
              dimensionamento, instalação e manutenção de nossos produtos.
            </p>
          </Container>
        </section>

        {/* Contact channels */}
        <section className="py-24">
          <Container>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Canais de Atendimento
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-heading)]">
                Fale com Nossa Equipe
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <a key={option.title} href={option.href} className="group">
                    <Card className="h-full text-center group-hover:border-primary/30">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">{option.title}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">{option.description}</p>
                      <p className="text-sm font-semibold text-primary">{option.action}</p>
                    </Card>
                  </a>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Resources */}
        <section className="py-24 section-alt">
          <Container>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Recursos
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-heading)]">
                Materiais de Apoio
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Link key={resource.title} href={resource.href} className="group">
                    <Card className="h-full group-hover:border-primary/30">
                      <Icon size={32} className="text-primary mb-4" />
                      <h3 className="text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">{resource.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Acessar <ArrowRight size={16} />
                      </span>
                    </Card>
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
              Não encontrou o que precisa?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Entre em contato diretamente com nosso time de engenharia.
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

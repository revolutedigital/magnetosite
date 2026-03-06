import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import { Target, Eye, Heart, Building2, Globe, Users, Shield } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Conheça a Magneto Brasil — líder em freios e embreagens eletromagnéticos desde 2009.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://magnetobrasil.com.br" },
    { "@type": "ListItem", position: 2, name: "Empresa", item: "https://magnetobrasil.com.br/empresa" },
  ],
};

const timeline = [
  { year: "2009", title: "Fundação", description: "Magneto Eletropneumática é fundada em Sorocaba/SP com foco em soluções eletromagnéticas." },
  { year: "2012", title: "Expansão Agrícola", description: "Início do fornecimento de embreagens para o setor agrícola, tornando-se referência no segmento." },
  { year: "2015", title: "Representação Internacional", description: "Parceria com FLUIDOMAT (acoplamentos hidráulicos) e EUROFLEX (acoplamentos de lâminas)." },
  { year: "2018", title: "Mercado Internacional", description: "Exportação para América Latina, Estados Unidos e Europa." },
  { year: "2022", title: "Inovação Contínua", description: "Ampliação do portfólio com novas linhas de freios para elevadores e embreagens para A/C." },
  { year: "2024", title: "Liderança de Mercado", description: "Consolidação como líder em embreagens agrícolas e freios para elevadores no Brasil." },
];

const values = [
  { icon: Target, title: "Missão", description: "Fornecer soluções de transmissão eletromagnética de alta performance, contribuindo para a eficiência e segurança das operações dos nossos clientes." },
  { icon: Eye, title: "Visão", description: "Ser reconhecida como a empresa mais inovadora e confiável em freios e embreagens eletromagnéticos na América Latina." },
  { icon: Heart, title: "Valores", description: "Qualidade, inovação, comprometimento, ética e sustentabilidade em todas as nossas ações e relações." },
];

export default function EmpresaPage() {
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
              Sobre Nós
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6 font-[family-name:var(--font-heading)]">
              Engenharia de Precisão{" "}
              <span className="text-primary">desde 2009</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              A Magneto Eletropneumática é especializada em projeto, fabricação e aplicação de
              freios e embreagens eletromagnéticos, além de equipamentos de transmissão mecânica.
              Sediada em Sorocaba/SP, atendemos fabricantes de máquinas e equipamentos no Brasil,
              América Latina, Estados Unidos e Europa.
            </p>
          </Container>
        </section>

        {/* Galeria da Fábrica */}
        <section className="py-24">
          <Container>
            <Reveal>
              <div className="text-center mb-12">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                  Nossa Estrutura
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-heading)]">
                  Conheça Nossa Fábrica
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: "/images/empresa/fabrica-1.jpg", alt: "Fábrica Magneto - Produção" },
                { src: "/images/empresa/fabrica-2.jpg", alt: "Fábrica Magneto - Equipamentos" },
                { src: "/images/empresa/fabrica-3.jpg", alt: "Fábrica Magneto - Montagem" },
                { src: "/images/empresa/fabrica-4.jpg", alt: "Fábrica Magneto - Qualidade" },
                { src: "/images/empresa/fabrica-5.jpg", alt: "Fábrica Magneto - Estoque" },
                { src: "/images/empresa/fabrica-6.jpg", alt: "Fábrica Magneto - Expedição" },
              ].map((photo) => (
                <div key={photo.src} className="relative aspect-3/2 rounded-2xl overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={Math.min(index + 1, 3) as 1 | 2 | 3}>
                  <div className="text-center p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Timeline */}
        <section className="py-24 section-alt">
          <Container>
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                  Nossa Trajetória
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-heading)]">
                  Linha do Tempo
                </h2>
              </div>
            </Reveal>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-border lg:-translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md -translate-x-1/2 mt-1 z-10" />

                    {/* Content */}
                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                      <span className="text-sm font-bold text-primary font-[family-name:var(--font-mono)]">{item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-1 mb-2 font-[family-name:var(--font-heading)]">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Differentials */}
        <section className="py-24">
          <Container>
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                  Por que a Magneto?
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "Fabricação Própria", desc: "Desenvolvimento e produção interna com tecnologia de ponta." },
                { icon: Globe, title: "Presença Global", desc: "Atendemos 4 continentes com programa just-in-time." },
                { icon: Users, title: "Equipe Técnica", desc: "Engenheiros especializados em transmissão eletromagnética." },
                { icon: Shield, title: "Qualidade Garantida", desc: "Altos padrões de qualidade, durabilidade e segurança." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-2xl bg-surface border border-border text-center">
                    <Icon size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="text-base font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Representations */}
        <section className="py-24 section-alt">
          <Container>
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                  Representações
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-heading)]">
                  Parceiros Internacionais
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">FLUIDOMAT</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Representação de acoplamentos hidráulicos FLUIDOMAT Ltd. para transmissão
                  suave de potência com proteção contra sobrecarga.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">EUROFLEX</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Representação EUROFLEX TRANSMISSIONS para acoplamentos de lâminas de alto
                  desempenho, ideais para turbinas a vapor e bombas de alta velocidade.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

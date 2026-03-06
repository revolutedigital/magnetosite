import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRight, ChevronRight, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Acoplamentos Hidráulicos",
  description: "Acoplamentos hidráulicos e de lâminas Magneto Brasil. Representação FLUIDOMAT e EUROFLEX.",
};

const products = [
  { name: "Acoplamento Hidráulico AH-110", torque: "\u2014", voltage: "\u2014", sku: "AH-110", image: "/images/produtos/produto-12.png", slug: "acoplamento-hidraulico-ah-110" },
  { name: "Acoplamento de Lâminas AL-200", torque: "\u2014", voltage: "\u2014", sku: "AL-200", image: "/images/produtos/produto-31b.png", slug: "acoplamento-de-laminas-al-200" },
];

export default function AcoplamentosPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="py-16 lg:py-20 section-dark hero-grid-pattern relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" aria-hidden="true" />
          <Container className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Droplets size={28} className="text-primary" />
              </div>
              <Badge>Acoplamentos</Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Acoplamentos <span className="text-primary">Hidráulicos</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Transmissão suave de potência com proteção contra sobrecarga.
              Representação exclusiva FLUIDOMAT e EUROFLEX no Brasil.
            </p>
          </Container>
        </section>

        {/* Breadcrumb */}
        <div className="bg-surface border-b border-border">
          <Container className="py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
              <Link href="/" className="shrink-0 hover:text-primary transition-colors">Início</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <Link href="/produtos" className="shrink-0 hover:text-primary transition-colors">Produtos</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <span className="text-foreground font-medium">Acoplamentos</span>
            </nav>
          </Container>
        </div>

        {/* Products */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {products.map((product) => (
                <Card key={product.sku} className="group relative">
                  <div className="w-full aspect-[3/2] bg-surface rounded-xl mb-4 flex items-center justify-center border border-border overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <Badge variant="secondary" className="mb-3">Acoplamento</Badge>
                  <h3 className="text-base font-bold text-foreground mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                    <Link href={`/produtos/acoplamentos/${product.slug}`} className="after:absolute after:inset-0">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="space-y-2 mb-4">
                    {product.torque !== "\u2014" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Torque</span>
                      <span className="font-semibold text-foreground font-[family-name:var(--font-mono)]">{product.torque}</span>
                    </div>
                    )}
                    {product.voltage !== "\u2014" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Tensão</span>
                      <span className="font-semibold text-foreground font-[family-name:var(--font-mono)]">{product.voltage}</span>
                    </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">SKU</span>
                      <span className="font-semibold text-foreground font-[family-name:var(--font-mono)]">{product.sku}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border flex gap-2 relative z-10">
                    <Button size="sm" className="flex-1 text-xs sm:text-sm whitespace-nowrap" href={`https://api.whatsapp.com/send?phone=5515997166881&text=${encodeURIComponent(`Olá, tudo bem? Vim do site e quero fazer um orçamento:\n\n*${product.name}*\n*URL:* https://magnetobrasil.com.br/produtos/acoplamentos\n\nObrigado!`)}`}>
                      Orçamento
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs sm:text-sm whitespace-nowrap" href={`/produtos/acoplamentos/${product.slug}`}>
                      Ver detalhes
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Representations */}
        <section className="py-12 lg:py-16 section-alt">
          <Container>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Representações Internacionais
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-heading)]">
                Parceiros de Classe Mundial
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-white border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">FLUIDOMAT</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Acoplamentos hidráulicos FLUIDOMAT Ltd. para transmissão suave de potência
                  com proteção contra sobrecarga em aplicações industriais.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">EUROFLEX</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Acoplamentos de lâminas EUROFLEX TRANSMISSIONS de alto desempenho,
                  ideais para turbinas a vapor e bombas de alta velocidade.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Precisa de um acoplamento para sua aplicação?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Entre em contato para especificação técnica e orçamento.
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

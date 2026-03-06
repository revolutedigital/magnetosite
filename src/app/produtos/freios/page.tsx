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
import { ArrowRight, ChevronRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Freios Eletromagnéticos",
  description: "Freios eletromagnéticos Magneto Brasil para elevadores, guindastes, máquinas-ferramenta e automação.",
};

const products = [
  { name: "Freio para Porta de Elevadores", torque: "\u2014", voltage: "220V AC", sku: "FPE-100", image: "/images/produtos/freio-elevador.png", slug: "freio-para-porta-de-elevadores" },
  { name: "Freio Eletromagnético FE-250", torque: "250 Nm", voltage: "220V AC", sku: "FE-250", image: "/images/produtos/produto-30.png", slug: "freio-eletromagnetico-fe-250" },
  { name: "Freio Industrial FI-300", torque: "300 Nm", voltage: "24V DC", sku: "FI-300", image: "/images/produtos/produto-31.png", slug: "freio-industrial-fi-300" },
  { name: "Freio de Segurança FS-500", torque: "500 Nm", voltage: "24V DC", sku: "FS-500", image: "/images/produtos/produto-32.png", slug: "freio-de-seguranca-fs-500" },
];

export default function FreiosPage() {
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
                <Shield size={28} className="text-primary" />
              </div>
              <Badge>Freios</Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Freios <span className="text-primary">Eletromagnéticos</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Frenagem segura e responsiva para elevadores, guindastes, máquinas-ferramenta
              e sistemas de automação industrial.
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
              <span className="text-foreground font-medium">Freios Eletromagnéticos</span>
            </nav>
          </Container>
        </div>

        {/* Products */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.sku} className="group relative">
                  <div className="w-full aspect-[3/2] bg-surface rounded-xl mb-4 flex items-center justify-center border border-border overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-contain p-2"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <Badge variant="secondary" className="mb-3">Freio</Badge>
                  <h3 className="text-base font-bold text-foreground mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                    <Link href={`/produtos/freios/${product.slug}`} className="after:absolute after:inset-0">
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
                    <Button size="sm" className="flex-1 text-xs sm:text-sm whitespace-nowrap" href={`https://api.whatsapp.com/send?phone=5515997166881&text=${encodeURIComponent(`Olá, tudo bem? Vim do site e quero fazer um orçamento:\n\n*${product.name}*\n*URL:* https://magnetobrasil.com.br/produtos/freios\n\nObrigado!`)}`}>
                      Orçamento
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs sm:text-sm whitespace-nowrap" href={`/produtos/freios/${product.slug}`}>
                      Ver detalhes
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Precisa de um freio para sua aplicação?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Nossos engenheiros podem dimensionar o freio ideal para seu projeto.
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

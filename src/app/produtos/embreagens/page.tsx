import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Embreagens Eletromagnéticas",
  description: "Embreagens eletromagnéticas Magneto Brasil para aplicações industriais, agrícolas e de transporte.",
};

const products = [
  { name: "Embreagem para Plantadeiras", torque: "500 Nm", voltage: "12V DC", sku: "EC-PLT-500", slug: "embreagem-para-plantadeiras", image: "/images/produtos/produto-14.png" },
  { name: "Embreagem para Colheitadeiras", torque: "2000 Nm", voltage: "12V DC", sku: "EC-CLH-2000", slug: "embreagem-para-colheitadeiras", image: "/images/produtos/produto-18.png" },
  { name: "Embreagem Industrial EI-400", torque: "400 Nm", voltage: "24V DC", sku: "EI-400", slug: "embreagem-industrial-ei-400", image: "/images/produtos/produto-23.png" },
  { name: "Embreagem de Alta Velocidade", torque: "150 Nm", voltage: "24V DC", sku: "EAV-150", slug: "embreagem-de-alta-velocidade", image: "/images/produtos/produto-11.png" },
];

export default function EmbreagensPage() {
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
                <Zap size={28} className="text-primary" />
              </div>
              <Badge>Embreagens</Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Embreagens <span className="text-primary">Eletromagnéticas</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Acoplamento preciso e confiável para transmissão de torque em aplicações
              industriais, agrícolas e de transporte. Projetos customizados para sua necessidade.
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
              <span className="text-foreground font-medium">Embreagens Eletromagnéticas</span>
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <Badge variant="secondary" className="mb-3">Embreagem</Badge>
                  <h3 className="text-base font-bold text-foreground mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                    <Link href={`/produtos/embreagens/${product.slug}`} className="after:absolute after:inset-0">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Torque</span>
                      <span className="font-semibold text-foreground font-[family-name:var(--font-mono)]">{product.torque}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Tensão</span>
                      <span className="font-semibold text-foreground font-[family-name:var(--font-mono)]">{product.voltage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">SKU</span>
                      <span className="font-semibold text-foreground font-[family-name:var(--font-mono)]">{product.sku}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border flex gap-2 relative z-10">
                    <Button size="sm" className="flex-1 text-xs sm:text-sm whitespace-nowrap" href={`https://api.whatsapp.com/send?phone=5515997166881&text=${encodeURIComponent(`Olá, tudo bem? Vim do site e quero fazer um orçamento:\n\n*${product.name}*\n*URL:* https://magnetobrasil.com.br/produtos/embreagens\n\nObrigado!`)}`}>
                      Orçamento
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs sm:text-sm whitespace-nowrap" href={`/produtos/embreagens/${product.slug}`}>
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
              Precisa de uma embreagem customizada?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Desenvolvemos projetos sob medida. Fale com nossos engenheiros.
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

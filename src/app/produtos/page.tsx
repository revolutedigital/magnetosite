import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, ChevronRight, Zap, Shield, Settings, Droplets, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Catálogo completo de freios e embreagens eletromagnéticos Magneto Brasil.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://magnetobrasil.com.br" },
    { "@type": "ListItem", position: 2, name: "Produtos", item: "https://magnetobrasil.com.br/produtos" },
  ],
};

const categoryNav = [
  { label: "Embreagens", slug: "embreagens" },
  { label: "Freios", slug: "freios" },
  { label: "Freio-Embreagem", slug: "freio-embreagem" },
  { label: "Acoplamentos", slug: "acoplamentos" },
  { label: "A/C Transporte", slug: "ac-transporte" },
];

const products = [
  {
    category: "Embreagem",
    slug: "embreagens",
    icon: Zap,
    detailSlug: "embreagens",
    items: [
      { name: "Embreagem para Plantadeiras", slug: "embreagem-para-plantadeiras", torque: "500 Nm", voltage: "12V DC", sku: "EC-PLT-500", image: "/images/produtos/produto-14.png" },
      { name: "Embreagem para Colheitadeiras", slug: "embreagem-para-colheitadeiras", torque: "2000 Nm", voltage: "12V DC", sku: "EC-CLH-2000", image: "/images/produtos/produto-18.png" },
      { name: "Embreagem Industrial EI-400", slug: "embreagem-industrial-ei-400", torque: "400 Nm", voltage: "24V DC", sku: "EI-400", image: "/images/produtos/produto-23.png" },
      { name: "Embreagem de Alta Velocidade", slug: "embreagem-de-alta-velocidade", torque: "150 Nm", voltage: "24V DC", sku: "EAV-150", image: "/images/produtos/produto-11.png" },
    ],
  },
  {
    category: "Freio",
    slug: "freios",
    icon: Shield,
    detailSlug: "freios",
    items: [
      { name: "Freio para Porta de Elevadores", slug: "freio-para-porta-de-elevadores", torque: "—", voltage: "220V AC", sku: "FPE-100", image: "/images/produtos/freio-elevador.png" },
      { name: "Freio Eletromagnético FE-250", slug: "freio-eletromagnetico-fe-250", torque: "250 Nm", voltage: "220V AC", sku: "FE-250", image: "/images/produtos/produto-30.png" },
      { name: "Freio Industrial FI-300", slug: "freio-industrial-fi-300", torque: "300 Nm", voltage: "24V DC", sku: "FI-300", image: "/images/produtos/produto-31.png" },
      { name: "Freio de Segurança FS-500", slug: "freio-de-seguranca-fs-500", torque: "500 Nm", voltage: "24V DC", sku: "FS-500", image: "/images/produtos/produto-32.png" },
    ],
  },
  {
    category: "Freio-Embreagem",
    slug: "freio-embreagem",
    icon: Settings,
    detailSlug: "freio-embreagem",
    items: [
      { name: "Unidade FE Compacta UFC-200", slug: "unidade-fe-compacta-ufc-200", torque: "200 Nm", voltage: "24V DC", sku: "UFC-200", image: "/images/produtos/produto-41.png" },
      { name: "Unidade FE Industrial UFI-400", slug: "unidade-fe-industrial-ufi-400", torque: "400 Nm", voltage: "24V DC", sku: "UFI-400", image: "/images/produtos/produto-43.png" },
    ],
  },
  {
    category: "Acoplamento",
    slug: "acoplamentos",
    icon: Droplets,
    detailSlug: "acoplamentos",
    items: [
      { name: "Acoplamento Hidráulico AH-110", slug: "acoplamento-hidraulico-ah-110", torque: "—", voltage: "—", sku: "AH-110", image: "/images/produtos/produto-12.png" },
      { name: "Acoplamento de Lâminas AL-200", slug: "acoplamento-de-laminas-al-200", torque: "—", voltage: "—", sku: "AL-200", image: "/images/produtos/produto-31b.png" },
    ],
  },
  {
    category: "A/C Transporte",
    slug: "ac-transporte",
    icon: Wind,
    detailSlug: "ar-condicionado",
    items: [
      { name: "Embreagem A/C Ônibus EAC-80", slug: "embreagem-ac-onibus-eac-80", torque: "80 Nm", voltage: "24V DC", sku: "EAC-80", image: "/images/produtos/produto-14.png" },
      { name: "Embreagem A/C Ônibus EAC-120", slug: "embreagem-ac-onibus-eac-120", torque: "120 Nm", voltage: "24V DC", sku: "EAC-120", image: "/images/produtos/produto-18.png" },
    ],
  },
];

export default function ProdutosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="py-16 lg:py-20 section-dark hero-grid-pattern relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" aria-hidden="true" />
          <Container className="relative z-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Catálogo
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-4 font-[family-name:var(--font-heading)]">
              Nossos <span className="text-primary">Produtos</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Soluções completas em freios e embreagens eletromagnéticos para as mais
              diversas aplicações industriais, agrícolas e de transporte.
            </p>
          </Container>
        </section>

        {/* Breadcrumb */}
        <div className="bg-surface border-b border-border">
          <Container className="py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
              <Link href="/" className="shrink-0 hover:text-primary transition-colors">Início</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <span className="text-foreground font-medium">Produtos</span>
            </nav>
          </Container>
        </div>

        {/* Category navigation */}
        <nav className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-border" aria-label="Categorias de produtos">
          <Container>
            <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
              {categoryNav.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="shrink-0 px-4 py-2.5 text-sm font-medium text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </Container>
        </nav>

        {/* Products by category */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="space-y-14">
              {products.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.category} id={cat.slug} className="scroll-mt-36">
                    {/* Category header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                          {cat.category === "Embreagem" && "Embreagens Eletromagnéticas"}
                          {cat.category === "Freio" && "Freios Eletromagnéticos"}
                          {cat.category === "Freio-Embreagem" && "Unidades Freio-Embreagem"}
                          {cat.category === "Acoplamento" && "Acoplamentos"}
                          {cat.category === "A/C Transporte" && "Embreagens para Ar-Condicionado"}
                        </h2>
                        <p className="text-sm text-muted">{cat.items.length} produtos</p>
                      </div>
                    </div>

                    {/* Products grid */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${cat.items.length > 2 ? "lg:grid-cols-4" : "lg:grid-cols-2"}`}>
                      {cat.items.map((product) => (
                        <Card key={product.sku} className="group relative">
                          {/* Product image */}
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

                          <Badge variant="secondary" className="mb-3">{cat.category}</Badge>

                          <h3 className="text-base font-bold text-foreground mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                            <Link href={`/produtos/${cat.detailSlug}/${product.slug}`} className="after:absolute after:inset-0">
                              {product.name}
                            </Link>
                          </h3>

                          {/* Specs */}
                          <div className="space-y-2 mb-4">
                            {product.torque !== "—" && (
                              <div className="flex justify-between text-sm">
                                <span className="text-muted">Torque</span>
                                <span className="font-semibold text-foreground font-[family-name:var(--font-mono)]">{product.torque}</span>
                              </div>
                            )}
                            {product.voltage !== "—" && (
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

                          {/* Actions */}
                          <div className="pt-4 border-t border-border flex gap-2 relative z-10">
                            <Button size="sm" className="flex-1 text-xs sm:text-sm whitespace-nowrap" href={`https://api.whatsapp.com/send?phone=5515997166881&text=${encodeURIComponent(`Olá, tudo bem? Vim do site e quero fazer um orçamento:\n\n*${product.name}*\n*URL:* https://magnetobrasil.com.br/produtos/${cat.slug}\n\nObrigado!`)}`}>
                              Orçamento
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 text-xs sm:text-sm whitespace-nowrap" href={`/produtos/${cat.detailSlug}/${product.slug}`}>
                              Ver detalhes
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Não encontrou o que procura?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Desenvolvemos soluções customizadas. Entre em contato com nossos engenheiros.
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

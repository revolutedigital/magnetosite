import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { products, categories, getProductBySlug, getProductsByCategory } from "@/data/products";
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Mail } from "lucide-react";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface PageProps {
  params: Promise<{ categoria: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    categoria: product.categorySlug,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };

  const description = product.shortDescription;

  return {
    title: product.name,
    description,
    alternates: {
      canonical: `https://magnetobrasil.com.br/produtos/${categoria}/${slug}`,
    },
    openGraph: {
      title: `${product.name} | Magneto Brasil`,
      description,
      images: [{ url: `https://magnetobrasil.com.br${product.image}`, width: 600, height: 600, alt: `Foto do produto ${product.name}` }],
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { categoria, slug } = await params;
  const product = getProductBySlug(slug);
  const category = categories.find((c) => c.slug === categoria);

  if (!product || !category || product.categorySlug !== categoria) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(categoria).filter((p) => p.slug !== slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://magnetobrasil.com.br" },
      { "@type": "ListItem", position: 2, name: "Produtos", item: "https://magnetobrasil.com.br/produtos" },
      { "@type": "ListItem", position: 3, name: category.name, item: `https://magnetobrasil.com.br/produtos/${categoria}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `https://magnetobrasil.com.br/produtos/${categoria}/${slug}` },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    image: `https://magnetobrasil.com.br${product.image}`,
    brand: { "@type": "Brand", name: "Magneto Brasil" },
    manufacturer: { "@type": "Organization", name: "Magneto Eletropneumática LTDA" },
    category: product.category,
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=5515997166881&text=${encodeURIComponent(`Olá, tudo bem? Vim do site e quero fazer um orçamento:\n\n*${product.name}*\n*SKU:* ${product.sku}\n*URL:* https://magnetobrasil.com.br/produtos/${categoria}/${slug}\n\nObrigado!`)}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <div className="bg-surface border-b border-border">
          <Container className="py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted overflow-x-auto scrollbar-hide">
              <Link href="/" className="shrink-0 hover:text-primary transition-colors">Início</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <Link href="/produtos" className="shrink-0 hover:text-primary transition-colors">Produtos</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <Link href={`/produtos/${categoria}`} className="shrink-0 hover:text-primary transition-colors">{category.name}</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <span className="text-foreground font-medium truncate">{product.name}</span>
            </nav>
          </Container>
        </div>

        {/* Product Detail */}
        <section className="py-12 lg:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Image */}
              <div>
                <div className="bg-white rounded-2xl border border-border p-6 lg:p-8 flex items-center justify-center aspect-[4/3] sticky top-24">
                  <Image
                    src={product.image}
                    alt={`Foto do produto ${product.name}`}
                    width={600}
                    height={450}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <Badge className="mb-3 self-start">{product.category}</Badge>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                  {product.name}
                </h1>

                <p className="text-base text-muted leading-relaxed mb-6">
                  {product.shortDescription}
                </p>

                {/* Quick Specs */}
                <h2 className="sr-only">Especificações rápidas</h2>
                <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {product.torque !== "\u2014" && (
                    <div className="bg-surface rounded-xl p-3.5 border border-border">
                      <dt className="text-xs text-muted uppercase tracking-wider mb-1 font-[family-name:var(--font-heading)]">Torque</dt>
                      <dd className="text-base lg:text-lg font-bold text-foreground font-[family-name:var(--font-mono)]">{product.torque}</dd>
                    </div>
                  )}
                  {product.voltage !== "\u2014" && (
                    <div className="bg-surface rounded-xl p-3.5 border border-border">
                      <dt className="text-xs text-muted uppercase tracking-wider mb-1 font-[family-name:var(--font-heading)]">Tensão</dt>
                      <dd className="text-base lg:text-lg font-bold text-foreground font-[family-name:var(--font-mono)]">{product.voltage}</dd>
                    </div>
                  )}
                  <div className="bg-surface rounded-xl p-3.5 border border-border">
                    <dt className="text-xs text-muted uppercase tracking-wider mb-1 font-[family-name:var(--font-heading)]">SKU</dt>
                    <dd className="text-base lg:text-lg font-bold text-foreground font-[family-name:var(--font-mono)]">{product.sku}</dd>
                  </div>
                </dl>

                {/* Features */}
                <h2 className="text-lg font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                  Características
                </h2>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons — desktop */}
                <div className="hidden sm:flex gap-3 mt-auto">
                  <Button size="lg" href={whatsappUrl} className="flex-1">
                    <WhatsAppIcon size={20} />
                    Solicitar Orçamento
                  </Button>
                  <Button size="lg" variant="outline" href="/contato" className="flex-1">
                    <Mail size={20} />
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Description + Specs */}
        <section className="py-12 lg:py-16 bg-surface">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10">
              {/* Description */}
              <div className="lg:col-span-2">
                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-5 font-[family-name:var(--font-heading)]">
                  Descrição
                </h2>
                <div className="space-y-4">
                  {product.description.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Applications */}
                <h3 className="text-lg font-bold text-foreground mt-8 mb-3 font-[family-name:var(--font-heading)]">
                  Aplicações
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <Badge key={i} variant="secondary">{app}</Badge>
                  ))}
                </div>
              </div>

              {/* Technical Specs sidebar */}
              <div>
                <div className="bg-card rounded-2xl border border-card-border p-5 lg:sticky lg:top-28">
                  <h3 className="text-base font-bold text-foreground mb-4 font-[family-name:var(--font-heading)]">
                    Especificações Técnicas
                  </h3>
                  <dl className="space-y-0">
                    {product.specs.map((spec, i) => (
                      <div
                        key={i}
                        className={`flex justify-between py-2.5 ${i !== product.specs.length - 1 ? "border-b border-border" : ""}`}
                      >
                        <dt className="text-sm text-muted">{spec.label}</dt>
                        <dd className="text-sm font-semibold text-foreground font-[family-name:var(--font-mono)] text-right">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-5">
                    <Button size="sm" href={whatsappUrl} className="w-full">
                      <WhatsAppIcon size={16} />
                      Solicitar Orçamento
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 lg:py-16">
            <Container>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                  Produtos Relacionados
                </h2>
                <Link
                  href={`/produtos/${categoria}`}
                  className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                >
                  Ver todos
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.slice(0, 3).map((related) => (
                  <Link
                    key={related.slug}
                    href={`/produtos/${related.categorySlug}/${related.slug}`}
                    className="group bg-card rounded-2xl border border-card-border p-5 card-hover"
                    aria-label={`Ver detalhes: ${related.name}`}
                  >
                    <div className="w-full aspect-[3/2] bg-surface rounded-xl mb-3 flex items-center justify-center border border-border overflow-hidden">
                      <Image
                        src={related.image}
                        alt={`Foto do produto ${related.name}`}
                        width={300}
                        height={200}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <Badge variant="secondary" className="mb-2">{related.category}</Badge>
                    <h3 className="text-sm font-bold text-foreground font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-xs text-muted mt-1.5 line-clamp-2">{related.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Back + CTA */}
        <section className="py-12 lg:py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Precisa de ajuda para escolher?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Nossos engenheiros estão prontos para ajudar na seleção do produto ideal para sua aplicação.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" href="/contato">
                Falar com Engenheiro
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" href={`/produtos/${categoria}`}>
                <ArrowLeft size={20} />
                Voltar para {category.name}
              </Button>
            </div>
          </Container>
        </section>

        {/* Sticky mobile CTA */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border p-3 flex gap-2">
          <Button size="sm" href={whatsappUrl} className="flex-1 text-sm">
            <WhatsAppIcon size={16} />
            Orçamento
          </Button>
          <Button size="sm" variant="outline" href="/contato" className="flex-1 text-sm">
            <Mail size={16} />
            Fale Conosco
          </Button>
        </div>
        {/* Spacer for sticky bar on mobile */}
        <div className="sm:hidden h-16" aria-hidden="true" />
      </main>
      <Footer />
      {/* Hide floating WhatsApp on mobile — sticky CTA already provides WhatsApp access */}
      <div className="hidden sm:block">
        <WhatsAppButton />
      </div>
    </>
  );
}

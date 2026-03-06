import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { blogPosts, blogCategories } from "@/data/blog";
import Button from "@/components/ui/Button";
import { ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos técnicos sobre freios e embreagens eletromagnéticos, manutenção industrial, aplicações e novidades da Magneto Brasil.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://magnetobrasil.com.br" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://magnetobrasil.com.br/blog" },
  ],
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

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
              Blog
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-4 font-[family-name:var(--font-heading)]">
              Conhecimento <span className="text-primary">Técnico</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Artigos sobre freios e embreagens eletromagnéticos, boas práticas de manutenção,
              aplicações industriais e novidades do setor.
            </p>
          </Container>
        </section>

        {/* Breadcrumb */}
        <div className="bg-surface border-b border-border">
          <Container className="py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
              <Link href="/" className="shrink-0 hover:text-primary transition-colors">Início</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <span className="text-foreground font-medium">Blog</span>
            </nav>
          </Container>
        </div>

        {/* Category filter */}
        <nav className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-border" aria-label="Categorias do blog">
          <Container>
            <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
              <Link
                href="/blog"
                className="shrink-0 px-4 py-2.5 text-sm font-medium text-primary bg-primary/5 rounded-lg transition-colors"
              >
                Todos
              </Link>
              {blogCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/categoria/${cat.slug}`}
                  className="shrink-0 px-4 py-2.5 text-sm font-medium text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </Container>
        </nav>

        {/* Featured Post */}
        <section className="py-12 lg:py-16">
          <Container>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl border border-card-border overflow-hidden card-hover">
                <div className="aspect-[16/10] bg-surface flex items-center justify-center overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={700}
                    height={440}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge>{featured.category}</Badge>
                    <span className="text-sm text-muted flex items-center gap-1">
                      <Clock size={14} aria-hidden="true" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted flex items-center gap-2">
                      <Calendar size={14} aria-hidden="true" />
                      {formatDate(featured.date)}
                    </span>
                    <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler artigo <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Container>
        </section>

        {/* Posts Grid */}
        <section className="pb-16">
          <Container>
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-8 font-[family-name:var(--font-heading)]">
              Últimos Artigos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-card rounded-2xl border border-card-border overflow-hidden card-hover h-full flex flex-col">
                    <div className="aspect-[16/10] bg-surface flex items-center justify-center overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted flex items-center gap-1">
                          <Clock size={12} aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-xs text-muted flex items-center gap-1">
                          <Calendar size={12} aria-hidden="true" />
                          {formatDate(post.date)}
                        </span>
                        <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                          Ler <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-dark-cta text-white">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Precisa de suporte técnico?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Nossa equipe de engenheiros está pronta para ajudar com sua aplicação.
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

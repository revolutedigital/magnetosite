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
import { blogCategories, getBlogPostsByCategory } from "@/data/blog";
import { ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) return { title: "Categoria não encontrada" };

  return {
    title: `Blog — ${category.name}`,
    description: `Artigos sobre ${category.name.toLowerCase()} em freios e embreagens eletromagnéticos.`,
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(slug);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="py-16 lg:py-20 section-dark hero-grid-pattern relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" aria-hidden="true" />
          <Container className="relative z-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Blog — {category.name}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-4 font-[family-name:var(--font-heading)]">
              {category.name}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Artigos sobre {category.name.toLowerCase()} em freios e embreagens eletromagnéticos.
            </p>
          </Container>
        </section>

        {/* Breadcrumb */}
        <div className="bg-surface border-b border-border">
          <Container className="py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
              <Link href="/" className="shrink-0 hover:text-primary transition-colors">Início</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <Link href="/blog" className="shrink-0 hover:text-primary transition-colors">Blog</Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
              <span className="text-foreground font-medium">{category.name}</span>
            </nav>
          </Container>
        </div>

        {/* Category filter */}
        <nav className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-border" aria-label="Categorias do blog">
          <Container>
            <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
              <Link
                href="/blog"
                className="shrink-0 px-4 py-2.5 text-sm font-medium text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Todos
              </Link>
              {blogCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/categoria/${cat.slug}`}
                  className={`shrink-0 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    cat.slug === slug
                      ? "text-primary bg-primary/5"
                      : "text-muted hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </Container>
        </nav>

        {/* Posts */}
        <section className="py-12 lg:py-16">
          <Container>
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-muted mb-4">Nenhum artigo encontrado nesta categoria.</p>
                <Link href="/blog" className="text-primary font-medium hover:text-primary-dark transition-colors">
                  Ver todos os artigos
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
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
            )}
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

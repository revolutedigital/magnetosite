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
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { ArrowLeft, ArrowRight, Calendar, Clock, ChevronRight, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Artigo não encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Blog Magneto Brasil`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function renderMarkdown(content: string) {
  const blocks: React.ReactNode[] = [];
  const lines = content.split("\n");
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headings
    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="text-2xl font-bold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={key++} className="text-xl font-bold text-foreground mt-8 mb-3 font-[family-name:var(--font-heading)]">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Table
    if (line.includes("|") && i + 1 < lines.length && lines[i + 1]?.includes("---")) {
      const headers = line.split("|").filter(Boolean).map((h) => h.trim());
      i += 2; // skip header and separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(lines[i].split("|").filter(Boolean).map((c) => c.trim()));
        i++;
      }
      blocks.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface">
                {headers.map((h, hi) => (
                  <th key={hi} className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border last:border-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-muted">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++} className="space-y-2 my-4 ml-1">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-2 text-muted">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2" aria-hidden="true" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push(
        <ol key={key++} className="space-y-2 my-4 ml-1">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-3 text-muted">
              <span className="text-sm font-bold text-primary shrink-0 mt-0.5">{ii + 1}.</span>
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    blocks.push(
      <p key={key++} className="text-muted leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
    );
    i++;
  }

  return blocks;
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://magnetobrasil.com.br" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://magnetobrasil.com.br/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://magnetobrasil.com.br/blog/${slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://magnetobrasil.com.br${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Magneto Brasil" },
    publisher: { "@type": "Organization", name: "Magneto Brasil", logo: { "@type": "ImageObject", url: "https://magnetobrasil.com.br/images/logo/logotipo_magneto.webp" } },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <div className="bg-surface border-b border-border">
          <Container className="py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
              <Link href="/" className="hover:text-primary transition-colors">Início</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
            </nav>
          </Container>
        </div>

        {/* Article */}
        <article className="py-10 lg:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge>{post.category}</Badge>
                  <span className="text-sm text-muted flex items-center gap-1">
                    <Clock size={14} aria-hidden="true" />
                    {post.readTime} de leitura
                  </span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)] leading-tight">
                  {post.title}
                </h1>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted pb-8 border-b border-border">
                  <span className="flex items-center gap-2">
                    <User size={14} aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} aria-hidden="true" />
                    {formatDate(post.date)}
                  </span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="bg-surface rounded-2xl border border-border p-6 mb-8 flex items-center justify-center">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={700}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="w-full max-h-80 object-contain"
                  priority
                />
              </div>

              {/* Content */}
              <div className="blog-content">
                {renderMarkdown(post.content)}
              </div>

              {/* Post navigation */}
              <div className="mt-12 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-surface transition-colors"
                  >
                    <span className="text-xs text-muted flex items-center gap-1 mb-2">
                      <ArrowLeft size={12} /> Anterior
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-surface transition-colors text-right"
                  >
                    <span className="text-xs text-muted flex items-center justify-end gap-1 mb-2">
                      Próximo <ArrowRight size={12} />
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </Container>
        </article>

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

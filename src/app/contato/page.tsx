"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import LazyMap from "@/components/ui/LazyMap";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://magnetobrasil.com.br" },
    { "@type": "ListItem", position: 2, name: "Contato", item: "https://magnetobrasil.com.br/contato" },
  ],
};

const contactLinks = [
  { icon: Phone, label: "Telefone", value: "(15) 3202-1496", href: "tel:+551532021496" },
  { icon: Phone, label: "WhatsApp", value: "15 99716-6881", href: "https://wa.me/5515997166881" },
  { icon: Mail, label: "E-mail", value: "magneto@magnetobrasil.com.br", href: "mailto:magneto@magnetobrasil.com.br" },
];

const contactDetails = [
  { icon: MapPin, label: "Localização", value: "Sorocaba/SP, Brasil" },
  { icon: Clock, label: "Horário", value: "Seg–Sex: 8h às 17h" },
];

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefone: (form.elements.namedItem("telefone") as HTMLInputElement).value,
      tipo: (form.elements.namedItem("tipo") as HTMLSelectElement).value,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Erro ao enviar mensagem.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="py-24 section-dark hero-grid-pattern relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" aria-hidden="true" />
          <Container className="relative z-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Contato
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6 font-[family-name:var(--font-heading)]">
              Fale com{" "}
              <span className="text-primary">nossos engenheiros</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Solicite um orçamento, tire dúvidas técnicas ou conheça nossas soluções.
              Estamos prontos para ajudá-lo.
            </p>
          </Container>
        </section>

        {/* Content */}
        <section className="py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Contact info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-8 font-[family-name:var(--font-heading)]">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  {contactLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon size={20} className="text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">{item.label}</p>
                          <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                          <Icon size={20} className="text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">{item.label}</p>
                          <p className="text-base font-semibold text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Google Maps */}
                <LazyMap
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.588459666709!2d-47.54597542174779!3d-23.511328324259722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f38b6c3fa67f%3A0x8e0254c17e5e7547!2sMagneto%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1772800628965!5m2!1spt-BR!2sbr"
                  title="Localização Magneto Brasil"
                />
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-surface rounded-2xl border border-border p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                    Solicitar Orçamento
                  </h2>
                  <p className="text-sm text-muted mb-8">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                  </p>

                  {submitted ? (
                    <div className="text-center py-16" role="status">
                      <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" aria-hidden="true" />
                      <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                        Mensagem Enviada!
                      </h3>
                      <p className="text-muted">
                        Obrigado pelo contato. Retornaremos em até 24 horas.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">Nome *</label>
                          <input
                            id="nome"
                            type="text"
                            required
                            autoComplete="name"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                          <input
                            id="empresa"
                            type="text"
                            autoComplete="organization"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Nome da empresa"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                          <input
                            id="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="seu@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                          <input
                            id="telefone"
                            type="tel"
                            autoComplete="tel"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="tipo" className="block text-sm font-medium text-foreground mb-2">Tipo de Contato</label>
                        <select
                          id="tipo"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <option value="">Selecione...</option>
                          <option value="orcamento">Solicitação de Orçamento</option>
                          <option value="suporte">Suporte Técnico</option>
                          <option value="comercial">Contato Comercial</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">Mensagem *</label>
                        <textarea
                          id="mensagem"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                          placeholder="Descreva sua necessidade, incluindo aplicação, especificações desejadas (torque, tensão, etc.) e quantidade estimada."
                        />
                      </div>

                      {error && (
                        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                          {error}
                        </p>
                      )}

                      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={sending}>
                        <Send size={18} />
                        {sending ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  )}
                </div>
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

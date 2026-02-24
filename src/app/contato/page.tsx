"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Telefone", value: "(15) 3202-1496", href: "tel:+551532021496" },
  { icon: Phone, label: "WhatsApp", value: "15 99716-6881", href: "https://wa.me/5515997166881" },
  { icon: Mail, label: "E-mail", value: "magneto@magnetobrasil.com.br", href: "mailto:magneto@magnetobrasil.com.br" },
  { icon: MapPin, label: "Localização", value: "Sorocaba/SP, Brasil", href: "#" },
  { icon: Clock, label: "Horário", value: "Seg–Sex: 8h às 17h", href: "#" },
];

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 section-dark">
          <Container>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Contato
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6 font-[family-name:var(--font-heading)]">
              Fale com{" "}
              <span className="text-primary">nossos engenheiros</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
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
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon size={20} className="text-primary" />
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
                </div>

                {/* Map placeholder */}
                <div className="mt-10 rounded-2xl overflow-hidden border border-border h-64 bg-surface flex items-center justify-center">
                  <div className="text-center text-muted">
                    <MapPin size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Sorocaba/SP, Brasil</p>
                  </div>
                </div>
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
                    <div className="text-center py-16">
                      <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
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
                          <label className="block text-sm font-medium text-foreground mb-2">Nome *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Nome da empresa"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="seu@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Tipo de Contato</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                          <option value="">Selecione...</option>
                          <option value="orcamento">Solicitação de Orçamento</option>
                          <option value="suporte">Suporte Técnico</option>
                          <option value="comercial">Contato Comercial</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Mensagem *</label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                          placeholder="Descreva sua necessidade, incluindo aplicação, especificações desejadas (torque, tensão, etc.) e quantidade estimada."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        <Send size={18} />
                        Enviar Mensagem
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

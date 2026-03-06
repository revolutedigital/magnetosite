import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRight, FileText, Download, Zap, Shield, Settings, Droplets, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Datasheets",
  description: "Download de fichas técnicas e datasheets dos produtos Magneto Brasil.",
};

const datasheets = [
  {
    category: "Embreagens Eletromagnéticas",
    icon: Zap,
    items: [
      { name: "Embreagem para Plantadeiras EC-PLT-500", sku: "EC-PLT-500" },
      { name: "Embreagem para Colheitadeiras EC-CLH-2000", sku: "EC-CLH-2000" },
      { name: "Embreagem Industrial EI-400", sku: "EI-400" },
      { name: "Embreagem de Alta Velocidade EAV-150", sku: "EAV-150" },
    ],
  },
  {
    category: "Freios Eletromagnéticos",
    icon: Shield,
    items: [
      { name: "Freio para Porta de Elevadores FPE-100", sku: "FPE-100" },
      { name: "Freio Eletromagnético FE-250", sku: "FE-250" },
      { name: "Freio Industrial FI-300", sku: "FI-300" },
      { name: "Freio de Segurança FS-500", sku: "FS-500" },
    ],
  },
  {
    category: "Unidades Freio-Embreagem",
    icon: Settings,
    items: [
      { name: "Unidade FE Compacta UFC-200", sku: "UFC-200" },
      { name: "Unidade FE Industrial UFI-400", sku: "UFI-400" },
    ],
  },
  {
    category: "Acoplamentos",
    icon: Droplets,
    items: [
      { name: "Acoplamento Hidráulico AH-110", sku: "AH-110" },
      { name: "Acoplamento de Lâminas AL-200", sku: "AL-200" },
    ],
  },
  {
    category: "Embreagens para A/C",
    icon: Wind,
    items: [
      { name: "Embreagem A/C Ônibus EAC-80", sku: "EAC-80" },
      { name: "Embreagem A/C Ônibus EAC-120", sku: "EAC-120" },
    ],
  },
];

export default function DatasheetsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="py-24 section-dark hero-grid-pattern relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <Container className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                <FileText size={28} className="text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
              <span className="text-primary">Datasheets</span> e Fichas Técnicas
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Acesse as fichas técnicas completas de nossos produtos. Para solicitar
              datasheets detalhados, entre em contato com nossa equipe.
            </p>
          </Container>
        </section>

        {/* Datasheets by category */}
        <section className="py-24">
          <Container>
            <div className="space-y-12">
              {datasheets.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.category}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                        {cat.category}
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {cat.items.map((item) => (
                        <Card key={item.sku} className="group">
                          <div className="flex items-start gap-3 mb-4">
                            <FileText size={20} className="text-primary shrink-0 mt-0.5" />
                            <div>
                              <h3 className="text-sm font-bold text-foreground font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                              <Badge variant="secondary" className="mt-2">{item.sku}</Badge>
                            </div>
                          </div>
                          <Button size="sm" className="w-full text-xs" href="/contato">
                            <Download size={14} />
                            Solicitar Datasheet
                          </Button>
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
        <section className="py-16 section-dark">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Precisa de informações técnicas adicionais?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Nossa equipe pode enviar datasheets detalhados e auxiliar no dimensionamento.
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

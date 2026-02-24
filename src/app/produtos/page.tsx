import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRight, Download, Zap, Shield, Settings, Droplets, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Catálogo completo de freios e embreagens eletromagnéticos Magneto Brasil.",
};

const products = [
  {
    category: "Embreagem",
    icon: Zap,
    items: [
      { name: "Embreagem para Plantadeiras", torque: "500 Nm", voltage: "12V DC", sku: "EC-PLT-500", image: "/images/produtos/produto-14.png" },
      { name: "Embreagem para Colheitadeiras", torque: "2000 Nm", voltage: "12V DC", sku: "EC-CLH-2000", image: "/images/produtos/produto-18.png" },
      { name: "Embreagem Industrial EI-400", torque: "400 Nm", voltage: "24V DC", sku: "EI-400", image: "/images/produtos/produto-23.png" },
      { name: "Embreagem de Alta Velocidade", torque: "150 Nm", voltage: "24V DC", sku: "EAV-150", image: "/images/produtos/produto-11.png" },
    ],
  },
  {
    category: "Freio",
    icon: Shield,
    items: [
      { name: "Freio para Porta de Elevadores", torque: "—", voltage: "220V AC", sku: "FPE-100", image: "/images/produtos/freio-elevador.png" },
      { name: "Freio Eletromagnético FE-250", torque: "250 Nm", voltage: "220V AC", sku: "FE-250", image: "/images/produtos/produto-30.png" },
      { name: "Freio Industrial FI-300", torque: "300 Nm", voltage: "24V DC", sku: "FI-300", image: "/images/produtos/produto-31.png" },
      { name: "Freio de Segurança FS-500", torque: "500 Nm", voltage: "24V DC", sku: "FS-500", image: "/images/produtos/produto-32.png" },
    ],
  },
  {
    category: "Freio-Embreagem",
    icon: Settings,
    items: [
      { name: "Unidade FE Compacta UFC-200", torque: "200 Nm", voltage: "24V DC", sku: "UFC-200", image: "/images/produtos/produto-41.png" },
      { name: "Unidade FE Industrial UFI-400", torque: "400 Nm", voltage: "24V DC", sku: "UFI-400", image: "/images/produtos/produto-43.png" },
    ],
  },
  {
    category: "Acoplamento",
    icon: Droplets,
    items: [
      { name: "Acoplamento Hidráulico AH-110", torque: "—", voltage: "—", sku: "AH-110", image: "/images/produtos/produto-12.png" },
      { name: "Acoplamento de Lâminas AL-200", torque: "—", voltage: "—", sku: "AL-200", image: "/images/produtos/produto-31b.png" },
    ],
  },
  {
    category: "A/C Transporte",
    icon: Wind,
    items: [
      { name: "Embreagem A/C Ônibus EAC-80", torque: "80 Nm", voltage: "24V DC", sku: "EAC-80", image: "/images/produtos/produto-14.png" },
      { name: "Embreagem A/C Ônibus EAC-120", torque: "120 Nm", voltage: "24V DC", sku: "EAC-120", image: "/images/produtos/produto-18.png" },
    ],
  },
];

export default function ProdutosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 section-dark">
          <Container>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Catálogo
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-3 mb-6 font-[family-name:var(--font-heading)]">
              Nossos <span className="text-primary">Produtos</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Soluções completas em freios e embreagens eletromagnéticos para as mais
              diversas aplicações industriais, agrícolas e de transporte.
            </p>
          </Container>
        </section>

        {/* Products by category */}
        <section className="py-24">
          <Container>
            <div className="space-y-20">
              {products.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.category}>
                    {/* Category header */}
                    <div className="flex items-center gap-4 mb-8">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {cat.items.map((product) => (
                        <Card key={product.sku} className="group">
                          {/* Product image */}
                          <div className="w-full h-40 bg-surface rounded-xl mb-4 flex items-center justify-center border border-border overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={300}
                              height={200}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>

                          <Badge variant="secondary" className="mb-3">{cat.category}</Badge>

                          <h3 className="text-base font-bold text-foreground mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>

                          {/* Specs */}
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

                          {/* Actions */}
                          <div className="flex gap-2 pt-4 border-t border-border">
                            <Button size="sm" className="flex-1 text-xs">
                              Orçamento
                            </Button>
                            <button className="p-2 rounded-lg border border-border hover:bg-surface transition-colors" title="Download datasheet">
                              <Download size={16} className="text-muted" />
                            </button>
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
        <section className="py-16 section-dark">
          <Container className="text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
              Não encontrou o que procura?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navigation = [
  {
    name: "Produtos",
    href: "/produtos",
    children: [
      { name: "Embreagens Eletromagnéticas", href: "/produtos/embreagens" },
      { name: "Freios Eletromagnéticos", href: "/produtos/freios" },
      { name: "Unidades Freio-Embreagem", href: "/produtos/freio-embreagem" },
      { name: "Acoplamentos Hidráulicos", href: "/produtos/acoplamentos" },
      { name: "Embreagens para Ar-Condicionado", href: "/produtos/ar-condicionado" },
    ],
  },
  {
    name: "Aplicações",
    href: "/aplicacoes",
    children: [
      { name: "Agrícola", href: "/aplicacoes/agricola" },
      { name: "Packaging", href: "/aplicacoes/packaging" },
      { name: "Impressão", href: "/aplicacoes/impressao" },
      { name: "Elevadores", href: "/aplicacoes/elevadores" },
      { name: "Ônibus / Transporte", href: "/aplicacoes/transporte" },
    ],
  },
  { name: "Empresa", href: "/empresa" },
  { name: "Suporte", href: "/suporte" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-secondary text-white text-sm">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+551532021496" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Phone size={14} />
              (15) 3202-1496
            </a>
            <a href="mailto:magneto@magnetobrasil.com.br" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Mail size={14} />
              magneto@magnetobrasil.com.br
            </a>
          </div>
          <p className="text-slate-400">Seg–Sex: 8h às 17h</p>
        </Container>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white"
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.jpg"
              alt="Magneto Brasil"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
                </a>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl shadow-black/10 border border-border p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-surface hover:text-primary rounded-lg transition-colors"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button size="sm" className="hidden lg:inline-flex">
              Solicitar Orçamento
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <Container className="py-4">
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-surface rounded-lg transition-colors"
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.children && (
                      <div className="ml-4 border-l-2 border-primary/20 pl-4">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted hover:text-primary transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border">
                <Button size="md" className="w-full">
                  Solicitar Orçamento
                </Button>
                <div className="flex flex-col gap-2 mt-4 text-sm text-muted">
                  <a href="tel:+551532021496" className="flex items-center gap-2">
                    <Phone size={14} /> (15) 3202-1496
                  </a>
                  <a href="mailto:magneto@magnetobrasil.com.br" className="flex items-center gap-2">
                    <Mail size={14} /> magneto@magnetobrasil.com.br
                  </a>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}

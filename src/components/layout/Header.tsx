"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { name: "Blog", href: "/blog" },
  { name: "Suporte", href: "/suporte" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const openDropdown = useCallback((name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-secondary text-white text-sm">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+551532021496" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Phone size={14} aria-hidden="true" />
              (15) 3202-1496
            </a>
            <a href="mailto:magneto@magnetobrasil.com.br" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Mail size={14} aria-hidden="true" />
              magneto@magnetobrasil.com.br
            </a>
          </div>
          <p className="text-slate-300">Seg–Sex: 8h às 17h</p>
        </Container>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white"
        }`}
        role="banner"
      >
        <Container className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logotipo_magneto.webp"
              alt="Magneto Brasil — Página inicial"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && openDropdown(item.name)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  {...(isActive(item.href) ? { "aria-current": "page" as const } : {})}
                  {...(item.children ? { "aria-expanded": activeDropdown === item.name, "aria-haspopup": true as const } : {})}
                  onKeyDown={(e) => {
                    if (!item.children) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      activeDropdown === item.name ? setActiveDropdown(null) : openDropdown(item.name);
                    }
                    if (e.key === "Escape") setActiveDropdown(null);
                  }}
                >
                  {item.name}
                  {item.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} aria-hidden="true" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-72" role="menu">
                    <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-border p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          role="menuitem"
                          className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                            isActive(child.href)
                              ? "text-primary bg-surface"
                              : "text-foreground hover:bg-surface hover:text-primary"
                          }`}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              setActiveDropdown(null);
                            }
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button size="sm" href="/contato" className="hidden lg:inline-flex">
              Solicitar Orçamento
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white fixed inset-x-0 top-20 bottom-0 z-50 overflow-y-auto">
            <Container className="py-4">
              <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive(item.href)
                          ? "text-primary bg-surface"
                          : "text-foreground hover:text-primary hover:bg-surface"
                      }`}
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 border-l-2 border-primary/20 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted hover:text-primary transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-col gap-2 text-sm text-muted">
                  <a href="tel:+551532021496" className="flex items-center gap-2">
                    <Phone size={14} aria-hidden="true" /> (15) 3202-1496
                  </a>
                  <a href="mailto:magneto@magnetobrasil.com.br" className="flex items-center gap-2">
                    <Mail size={14} aria-hidden="true" /> magneto@magnetobrasil.com.br
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

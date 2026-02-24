import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import Container from "@/components/ui/Container";

const productLinks = [
  { name: "Embreagens Eletromagnéticas", href: "/produtos/embreagens" },
  { name: "Freios Eletromagnéticos", href: "/produtos/freios" },
  { name: "Unidades Freio-Embreagem", href: "/produtos/freio-embreagem" },
  { name: "Acoplamentos Hidráulicos", href: "/produtos/acoplamentos" },
  { name: "Embreagens para A/C", href: "/produtos/ar-condicionado" },
];

const applicationLinks = [
  { name: "Agrícola", href: "/aplicacoes/agricola" },
  { name: "Packaging", href: "/aplicacoes/packaging" },
  { name: "Impressão", href: "/aplicacoes/impressao" },
  { name: "Elevadores", href: "/aplicacoes/elevadores" },
  { name: "Ônibus / Transporte", href: "/aplicacoes/transporte" },
];

const companyLinks = [
  { name: "Sobre Nós", href: "/empresa" },
  { name: "Certificações", href: "/empresa/certificacoes" },
  { name: "Suporte Técnico", href: "/suporte" },
  { name: "Downloads", href: "/suporte/datasheets" },
  { name: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo/logo.jpg"
                alt="Magneto Brasil"
                width={160}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Líder em projeto, fabricação e aplicação de freios e embreagens
              eletromagnéticos. Engenharia de precisão desde 2009.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/magnetobrasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 font-[family-name:var(--font-heading)]">
              Produtos
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications + Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 font-[family-name:var(--font-heading)]">
              Aplicações
            </h3>
            <ul className="space-y-3">
              {applicationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 font-[family-name:var(--font-heading)]">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+551532021496" className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>(15) 3202-1496</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5515997166881" className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>WhatsApp: 15 99716-6881</span>
                </a>
              </li>
              <li>
                <a href="mailto:magneto@magnetobrasil.com.br" className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>magneto@magnetobrasil.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Sorocaba/SP, Brasil</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Seg–Sex: 8h às 17h</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Magneto Eletropneumática LTDA. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="/empresa" className="hover:text-white transition-colors">Empresa</a>
            <a href="/contato" className="hover:text-white transition-colors">Contato</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

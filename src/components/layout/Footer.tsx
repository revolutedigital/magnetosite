import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Facebook } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="bg-dark-footer text-white" role="contentinfo">
      {/* Main footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo/logotipo_branco_magneto.webp"
                alt="Magneto Brasil"
                width={160}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Líder em projeto, fabricação e aplicação de freios e embreagens
              eletromagnéticos. Engenharia de precisão desde 2009.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/magnetobrasil/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Magneto Brasil"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC1kEeZC-uQRBeeFqY0cjafw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da Magneto Brasil"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/magnetobrasil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Magneto Brasil"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <Image
                src="/images/hero/selo_iso_9001.webp"
                alt="Certificado ISO 9001"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
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
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 font-[family-name:var(--font-heading)]">
              Aplicações
            </h3>
            <ul className="space-y-3">
              {applicationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
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
                <a href="tel:+551532021496" className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>(15) 3202-1496</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5515997166881" className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp: 15 99716-6881</span>
                </a>
              </li>
              <li>
                <a href="mailto:magneto@magnetobrasil.com.br" className="flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors">
                  <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>magneto@magnetobrasil.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>Sorocaba/SP, Brasil</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Clock size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>Seg–Sex: 8h às 17h</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300">
            &copy; {new Date().getFullYear()} Magneto Eletropneumática LTDA. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-300">
            <Link href="/empresa" className="hover:text-white transition-colors">Empresa</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

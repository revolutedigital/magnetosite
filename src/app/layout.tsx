import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL = "https://magnetobrasil.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Magneto Brasil | Soluções em Freios e Embreagens Eletromagnéticos",
    template: "%s | Magneto Brasil",
  },
  description:
    "Líder em projeto, fabricação e aplicação de freios e embreagens eletromagnéticos. Soluções de alta performance para indústria, agricultura, elevadores e transporte.",
  authors: [{ name: "Magneto Brasil" }],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Magneto Brasil",
    title: "Magneto Brasil | Soluções em Freios e Embreagens Eletromagnéticos",
    description:
      "Líder em projeto, fabricação e aplicação de freios e embreagens eletromagnéticos.",
    images: [
      {
        url: "/images/open_graph_magneto.webp",
        width: 1200,
        height: 630,
        alt: "Magneto Brasil — Freios e Embreagens Eletromagnéticos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magneto Brasil | Freios e Embreagens Eletromagnéticos",
    description:
      "Soluções de alta performance em freios e embreagens eletromagnéticos para indústria, agricultura e transporte.",
    images: ["/images/open_graph_magneto.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Magneto Brasil",
  legalName: "Magneto Eletropneumática LTDA",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logotipo_magneto.webp`,
  description:
    "Líder em projeto, fabricação e aplicação de freios e embreagens eletromagnéticos.",
  foundingDate: "2009",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-15-3202-1496",
    contactType: "sales",
    availableLanguage: ["Portuguese", "English"],
  },
  sameAs: [
    "https://www.instagram.com/magnetobrasil/",
    "https://www.youtube.com/channel/UC1kEeZC-uQRBeeFqY0cjafw",
    "https://www.facebook.com/magnetobrasil",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}

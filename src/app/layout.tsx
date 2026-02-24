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

export const metadata: Metadata = {
  title: {
    default: "Magneto Brasil | Soluções em Freios e Embreagens Eletromagnéticos",
    template: "%s | Magneto Brasil",
  },
  description:
    "Líder em projeto, fabricação e aplicação de freios e embreagens eletromagnéticos. Soluções de alta performance para indústria, agricultura, elevadores e transporte.",
  keywords: [
    "freios eletromagnéticos",
    "embreagens eletromagnéticas",
    "magneto brasil",
    "freios industriais",
    "embreagens industriais",
    "acoplamentos",
    "transmissão mecânica",
    "Sorocaba",
  ],
  authors: [{ name: "Magneto Brasil" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://magnetobrasil.com.br",
    siteName: "Magneto Brasil",
    title: "Magneto Brasil | Soluções em Freios e Embreagens Eletromagnéticos",
    description:
      "Líder em projeto, fabricação e aplicação de freios e embreagens eletromagnéticos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

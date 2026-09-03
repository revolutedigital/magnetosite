import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Magneto Brasil. Solicite orçamento, tire dúvidas técnicas ou conheça nossas soluções em freios e embreagens eletromagnéticos.",
  alternates: { canonical: "https://www.magnetobrasil.com.br/contato" },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}

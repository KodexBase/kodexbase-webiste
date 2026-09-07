import type { Metadata } from "next";
import Values from "../components/Values";

export const metadata: Metadata = {
  title: "Valores",
  description:
    "Conheça os princípios da KodexBase: transparência, escopo verificável, comunicação direta e simplicidade útil.",
  openGraph: {
    title: "Valores | KodexBase",
    description: "Transparência, critérios claros e responsabilidade em cada projeto.",
  },
  twitter: {
    title: "Valores | KodexBase",
    description: "Os valores que guiam cada entrega da KodexBase.",
  },
  alternates: { canonical: "/valores" },
};

export default function ValoresPage() {
  return <Values />;
}

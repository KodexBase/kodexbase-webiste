import type { Metadata } from "next";
import Values from "../components/Values";

export const metadata: Metadata = {
  title: "Valores",
  description:
    "Honestidade e entrega completa: prazos realistas, orçamento fixo, comunicação clara e o escopo combinado sempre 100% respeitado, sem cortes ou atalhos.",
  openGraph: {
    title: "Valores | KodexBase",
    description: "Transparência total e entrega completa em cada projeto.",
  },
  twitter: {
    title: "Valores | KodexBase",
    description: "Os valores que guiam cada entrega da KodexBase.",
  },
};

export default function ValoresPage() {
  return <Values />;
}

import type { Metadata } from "next";
import Process from "../components/Process";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Do briefing ao suporte pós-entrega: entendemos seu negócio, planejamos escopo e prazo, desenvolvemos com código limpo e entregamos com documentação e suporte dedicado.",
  openGraph: {
    title: "Processo | KodexBase",
    description:
      "Briefing, planejamento, desenvolvimento e entrega — sem surpresas de escopo ou custo.",
  },
  twitter: {
    title: "Processo | KodexBase",
    description: "Nosso processo, do briefing à entrega com suporte.",
  },
  alternates: { canonical: "/processo" },
};

export default function ProcessoPage() {
  return <Process />;
}

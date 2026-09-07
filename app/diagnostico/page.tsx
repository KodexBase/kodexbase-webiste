import type { Metadata } from "next";
import Diagnosis from "../components/Diagnosis";

export const metadata: Metadata = {
  title: "Diagnóstico digital",
  description:
    "Responda quatro perguntas e receba uma direção inicial para o principal gargalo digital da sua empresa.",
  openGraph: {
    title: "Diagnóstico digital | KodexBase",
    description: "Descubra qual solução digital faz mais sentido para o momento da sua empresa.",
  },
  twitter: {
    title: "Diagnóstico digital | KodexBase",
    description: "Uma direção inicial para o principal gargalo digital da sua empresa.",
  },
  alternates: { canonical: "/diagnostico" },
};

export default function DiagnosticoPage() {
  return <Diagnosis />;
}

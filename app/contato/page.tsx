import type { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a KodexBase por email ou WhatsApp e conte sobre o seu projeto — respondemos rápido e sem compromisso.",
  openGraph: {
    title: "Contato | KodexBase",
    description: "Fale com a KodexBase sobre o seu próximo projeto.",
  },
  twitter: {
    title: "Contato | KodexBase",
    description: "Entre em contato com a KodexBase.",
  },
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return <Contact />;
}

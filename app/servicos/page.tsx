import type { Metadata } from "next";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Criação de websites, aplicativos mobile (iOS e Android), apps desktop para Windows e macOS, e automações — desenvolvidos com Next.js, React Native e as melhores tecnologias do mercado.",
  openGraph: {
    title: "Serviços | KodexBase",
    description:
      "Websites, apps mobile, apps desktop e automações sob medida, com foco em resultado real.",
  },
  twitter: {
    title: "Serviços | KodexBase",
    description: "Websites, apps mobile, apps desktop e automações sob medida.",
  },
};

export default function ServicosPage() {
  return <Services />;
}

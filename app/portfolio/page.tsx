import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça projetos públicos da KodexBase, os problemas abordados, as soluções desenvolvidas e o código disponível para verificação.",
  openGraph: {
    title: "Portfólio | KodexBase",
    description: "Projetos e repositórios entregues pela KodexBase.",
  },
  twitter: {
    title: "Portfólio | KodexBase",
    description: "Veja o portfólio de projetos da KodexBase.",
  },
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <Portfolio />;
}

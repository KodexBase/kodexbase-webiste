import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça os projetos e repositórios da KodexBase — mais de 500 commits, 20 repositórios e 5 projetos ativos, majoritariamente em TypeScript.",
  openGraph: {
    title: "Portfólio | KodexBase",
    description: "Projetos e repositórios entregues pela KodexBase.",
  },
  twitter: {
    title: "Portfólio | KodexBase",
    description: "Veja o portfólio de projetos da KodexBase.",
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}

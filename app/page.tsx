import type { Metadata } from "next";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HomeSections from "./components/HomeSections";

export const metadata: Metadata = {
  title: "KodexBase — Software que transforma negócios",
  description:
    "Transformamos planilhas, tarefas manuais e informações espalhadas em websites, sistemas e automações simples de usar.",
  openGraph: {
    title: "KodexBase — Software que transforma negócios",
    description:
      "Transformamos processos manuais e informações espalhadas em soluções digitais simples de usar.",
  },
  twitter: {
    title: "KodexBase — Software que transforma negócios",
    description: "Sistemas, websites e automações construídos em torno da realidade de cada negócio.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HomeSections />
    </>
  );
}

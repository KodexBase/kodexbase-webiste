import type { Metadata } from "next";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

export const metadata: Metadata = {
  title: "KodexBase — Software que transforma negócios",
  description:
    "Desenvolvimento sob medida de software premium — websites, aplicativos mobile, desktop e automações. Do briefing ao produto final, com qualidade e transparência.",
  openGraph: {
    title: "KodexBase — Software que transforma negócios",
    description:
      "Desenvolvimento sob medida de software premium. Do briefing ao produto final com qualidade e transparência.",
  },
  twitter: {
    title: "KodexBase — Software que transforma negócios",
    description: "Desenvolvimento sob medida — do briefing ao produto final.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
    </>
  );
}

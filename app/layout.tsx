import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalBackground from "./components/BackgroundSystem";
import PageTransition from "./components/PageTransition";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kodexbase.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KodexBase — Software que transforma negócios",
    template: "%s | KodexBase",
  },
  description:
    "Transformamos planilhas, tarefas manuais e informações espalhadas em websites, sistemas e automações simples de usar.",
  keywords: [
    "desenvolvimento web", "full stack", "aplicativos mobile", "automação",
    "website profissional", "Next.js", "React", "TypeScript", "software sob medida",
    "agência de software", "desenvolvimento de sistemas", "app mobile",
  ],
  authors: [{ name: "KodexBase", url: siteUrl }],
  creator: "KodexBase",
  publisher: "KodexBase",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "KodexBase",
    title: "KodexBase — Software que transforma negócios",
    description: "Sistemas, websites e automações construídos em torno da realidade de cada negócio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KodexBase — Software que transforma negócios",
    description: "Sistemas, websites e automações construídos em torno da realidade de cada negócio.",
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KodexBase",
  description: "Sistemas, websites e automações construídos em torno da realidade de cada negócio.",
  url: siteUrl,
  email: "kodexBase@gmail.com",
  telephone: "+5527997644821",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "ES",
  },
  serviceType: ["Web Development", "Mobile App Development", "Desktop Software", "Automation"],
  priceRange: "$$",
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "Python", "React Native"],
  sameAs: ["https://github.com/KodexBase", "https://instagram.com/kodexbase/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: "#05020A", color: "#fff" }}>
        <GlobalBackground />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

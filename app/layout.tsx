import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kodexbase.dev"),
  title: {
    default: "KodexBase — Software que transforma negócios",
    template: "%s | KodexBase",
  },
  description:
    "Desenvolvimento sob medida de software premium — websites, aplicativos mobile, desktop e automações. Do briefing ao produto final, com qualidade e transparência.",
  keywords: [
    "desenvolvimento web", "full stack", "aplicativos mobile", "automação",
    "website profissional", "Next.js", "React", "TypeScript", "software sob medida",
    "agência de software", "desenvolvimento de sistemas", "app mobile",
  ],
  authors: [{ name: "KodexBase", url: "https://kodexbase.dev" }],
  creator: "KodexBase",
  publisher: "KodexBase",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kodexbase.dev",
    siteName: "KodexBase",
    title: "KodexBase — Software que transforma negócios",
    description: "Desenvolvimento sob medida de software premium. Do briefing ao produto final com qualidade e transparência.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KodexBase — Software Premium" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KodexBase — Software que transforma negócios",
    description: "Desenvolvimento sob medida — do briefing ao produto final.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KodexBase",
  description: "Desenvolvimento sob medida de software premium — websites, aplicativos mobile, desktop e automações.",
  url: "https://kodexbase.dev",
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
  sameAs: ["https://github.com/KodexBase"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
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
        {children}
      </body>
    </html>
  );
}

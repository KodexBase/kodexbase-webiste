import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KodexBase — Full Stack Development",
  description:
    "Soluções digitais para negócios reais. Desenvolvimento sob medida de websites, aplicativos mobile, desktop e automações de sistemas.",
  keywords:
    "desenvolvimento web, full stack, aplicativos mobile, automação, website, Next.js, React",
  authors: [{ name: "KodexBase" }],
  openGraph: {
    title: "KodexBase — Full Stack Development",
    description:
      "Soluções digitais para negócios reais. Desenvolvimento sob medida — do briefing ao produto final.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "KodexBase — Full Stack Development",
    description: "Soluções digitais para negócios reais.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

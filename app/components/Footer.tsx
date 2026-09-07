"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import KodexIcon from "./KodexIcon";

const footerLinks = [
  {
    title: "Serviços",
    links: [
      { label: "Websites", href: "/servicos" },
      { label: "Apps Mobile", href: "/servicos" },
      { label: "Apps Desktop", href: "/servicos" },
      { label: "Automações", href: "/servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Processo", href: "/processo" },
      { label: "Valores", href: "/valores" },
      { label: "Portfólio", href: "/portfolio" },
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/kodexbase/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
        <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/KodexBase",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5527997644821",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:kodexBase@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#0B0714" }}>
      {/* ── Section transition from Contact (#05020A) ── */}
      <div className="absolute top-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #05020A, transparent)" }} />

      {/* ── Layered glows ── */}
      <div className="ambient-safe absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(123,47,190,0.11) 0%, transparent 70%)", filter: "blur(70px)", animation: "glow-breathe 10s ease-in-out infinite", willChange: "transform, opacity" }} />
      <div className="ambient-safe absolute top-1/4 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)", filter: "blur(60px)", animation: "glow-breathe 14s ease-in-out infinite 3s", willChange: "transform, opacity" }} />
      <div className="ambient-safe absolute top-1/3 right-0 w-[280px] h-[280px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)", filter: "blur(55px)", animation: "glow-breathe 12s ease-in-out infinite 6s", willChange: "transform, opacity" }} />

      {/* ── Noise ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }} />

      {/* ── Grid ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 100%, black 10%, transparent 75%)",
        maskImage: "radial-gradient(ellipse 90% 90% at 50% 100%, black 10%, transparent 75%)",
      }} />

      {/* ── Floating particles (CSS) ── */}
      {[
        { x: "12%", y: "30%", d: "2.5s", dd: "0s"   },
        { x: "28%", y: "55%", d: "3.2s", dd: "0.8s"  },
        { x: "48%", y: "20%", d: "4.0s", dd: "1.4s"  },
        { x: "65%", y: "70%", d: "2.8s", dd: "0.3s"  },
        { x: "80%", y: "40%", d: "3.6s", dd: "1.1s"  },
        { x: "92%", y: "60%", d: "4.4s", dd: "0.6s"  },
        { x: "36%", y: "82%", d: "3.0s", dd: "1.9s"  },
        { x: "72%", y: "15%", d: "2.6s", dd: "0.4s"  },
      ].map((p, i) => (
        <div
          key={i}
          className="ambient-safe absolute rounded-full pointer-events-none"
          style={{
            left: p.x, top: p.y,
            width: "2px", height: "2px",
            background: "rgba(168,85,247,0.6)",
            boxShadow: "0 0 4px rgba(168,85,247,0.4)",
            animation: `particle-rise ${p.d} ease-in-out infinite ${p.dd}`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* ── Circuit decoration ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.8 }}>
        <path d="M0,40 L120,40 L120,80 L240,80 L240,40 L380,40" stroke="rgba(168,85,247,0.08)" strokeWidth="0.7" fill="none" />
        <path d="M1200,55 L1080,55 L1080,95 L960,95 L960,55 L820,55" stroke="rgba(168,85,247,0.07)" strokeWidth="0.7" fill="none" />
        <path d="M0,280 L80,280 L80,240 L180,240" stroke="rgba(139,92,246,0.07)" strokeWidth="0.6" fill="none" />
        <path d="M1200,260 L1120,260 L1120,300 L1020,300" stroke="rgba(139,92,246,0.06)" strokeWidth="0.6" fill="none" />
        <circle cx="120" cy="40" r="2" fill="rgba(168,85,247,0.16)" />
        <circle cx="240" cy="80" r="2" fill="rgba(168,85,247,0.14)" />
        <circle cx="1080" cy="55" r="2" fill="rgba(168,85,247,0.14)" />
        <circle cx="80"   cy="280" r="1.5" fill="rgba(139,92,246,0.13)" />
      </svg>

      {/* ── Top border ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(168,85,247,0.3)] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 focus:outline-none">
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
                <KodexIcon size={36} showBackground={false} className="opacity-80" />
                <div>
                  <div className="text-base font-bold tracking-tight">
                    <span className="text-white/90">Kodex</span>
                    <span className="text-purple-accent">Base</span>
                  </div>
                  <div className="text-[9px] tracking-[0.22em] text-text-muted/50 font-medium uppercase">Soluções digitais sob medida</div>
                </div>
              </motion.div>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-5">
              Transformamos processos manuais e informações espalhadas em soluções digitais simples, úteis e preparadas para evoluir.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-text-muted hover:text-white border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.08] hover:border-[rgba(170,120,255,0.3)] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-text-muted mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      prefetch
                      className="text-sm text-text-muted hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-flex transition-transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/[0.05]">
          <p className="text-xs text-text-muted/60">
            © {new Date().getFullYear()} KodexBase — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted/40">Feito com dedicação e código limpo.</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-medium text-emerald-400">Disponível para projetos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

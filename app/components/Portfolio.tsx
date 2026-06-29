"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const languages = [
  { name: "TypeScript", pct: 72, color: "#3178C6" },
  { name: "JavaScript", pct: 15, color: "#F7DF1E" },
  { name: "Python", pct: 8, color: "#FFD43B" },
  { name: "CSS/HTML", pct: 5, color: "#E44D26" },
];

const highlights = [
  { label: "Commits", value: "500+", icon: "⬡" },
  { label: "Repositórios", value: "20+", icon: "📦" },
  { label: "Projetos ativos", value: "5", icon: "🔥" },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-28 px-6 relative overflow-hidden">
      {/* ── Base ── */}
      <div className="absolute inset-0" style={{ backgroundColor: "#0B0714" }} />

      {/* ── Section transitions ── */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #05020A, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #05020A, transparent)" }} />

      {/* ── Glow orbs ── */}
      <div className="ambient-safe absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 70%)", filter: "blur(90px)", animation: "glow-breathe 11s ease-in-out infinite", willChange: "transform, opacity" }} />
      <div className="ambient-safe absolute right-0 top-1/3 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", filter: "blur(80px)", animation: "glow-breathe 14s ease-in-out infinite 4s", willChange: "transform, opacity" }} />
      <div className="ambient-safe absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(109,40,217,0.06) 0%, transparent 70%)", filter: "blur(60px)", animation: "glow-breathe 10s ease-in-out infinite 2s", willChange: "transform, opacity" }} />

      {/* ── Dot pattern ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(168,85,247,0.7) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.025,
        WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 75%)",
        maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 20%, transparent 75%)",
      }} />

      {/* ── Circuit code decoration — inline SVG ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.7 }}>
        {/* Left rail */}
        <path d="M40,80 L40,520" stroke="rgba(168,85,247,0.06)" strokeWidth="0.7" fill="none" />
        <path d="M40,130 L100,130 L100,200 L160,200" stroke="rgba(168,85,247,0.07)" strokeWidth="0.7" fill="none" />
        <path d="M40,280 L110,280 L110,340 L170,340" stroke="rgba(139,92,246,0.06)" strokeWidth="0.6" fill="none" />
        <path d="M40,420 L90,420 L90,480 L150,480" stroke="rgba(168,85,247,0.06)" strokeWidth="0.6" fill="none" />
        <circle cx="40" cy="130" r="2" fill="rgba(168,85,247,0.15)" />
        <circle cx="40" cy="280" r="2" fill="rgba(168,85,247,0.12)" />
        <circle cx="40" cy="420" r="1.5" fill="rgba(168,85,247,0.12)" />
        {/* Right rail */}
        <path d="M860,100 L860,500" stroke="rgba(168,85,247,0.05)" strokeWidth="0.7" fill="none" />
        <path d="M860,160 L800,160 L800,220 L740,220" stroke="rgba(139,92,246,0.06)" strokeWidth="0.6" fill="none" />
        <path d="M860,360 L790,360 L790,300 L730,300" stroke="rgba(168,85,247,0.06)" strokeWidth="0.6" fill="none" />
        <circle cx="860" cy="160" r="2" fill="rgba(139,92,246,0.13)" />
        <circle cx="860" cy="360" r="2" fill="rgba(168,85,247,0.13)" />
      </svg>

      {/* ── Noise ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.022,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }} />

      {/* ── Top border ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(168,85,247,0.2)] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-purple-accent mb-5">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-purple-accent" />
            Transparência em código
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-accent" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Portfólio /{" "}
            <span className="gradient-text">GitHub</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Acreditamos em transparência — veja o que construímos. Nosso GitHub é um reflexo direto da nossa qualidade técnica e dedicação ao código limpo.
          </p>
        </motion.div>

        {/* GitHub showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="group relative rounded-2xl overflow-hidden card-premium mb-6"
        >
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-brand via-purple-accent to-[#c77dff] opacity-80 group-hover:opacity-100 transition-opacity" />

          {/* Inner glow hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 60%)" }}
          />

          <div className="relative z-10 p-8">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              {/* GitHub logo */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">github.com/KodexBase</h3>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border border-[rgba(168,85,247,0.3)] text-purple-accent" style={{ background: "rgba(168,85,247,0.08)" }}>
                    PUBLIC
                  </span>
                </div>
                <p className="text-text-muted text-sm">Repositórios públicos, projetos reais, código de qualidade. Cada commit conta a nossa história.</p>
              </div>

              {/* Highlights */}
              <div className="flex gap-4 flex-shrink-0">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <div className="text-lg font-bold gradient-text">{h.value}</div>
                    <div className="text-[9px] text-text-muted">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-text-muted">Linguagens predominantes</span>
              </div>

              {/* Bar */}
              <div className="h-2 rounded-full overflow-hidden flex mb-3 bg-white/[0.05]">
                {languages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.pct}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    style={{ backgroundColor: lang.color }}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: lang.color }} />
                    <span className="text-xs text-text-muted">{lang.name}</span>
                    <span className="text-xs font-semibold text-white">{lang.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/KodexBase"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-base glass border border-[rgba(170,120,255,0.2)] hover:border-[rgba(170,120,255,0.5)] transition-all duration-300 hover:shadow-glow-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Ver nosso GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

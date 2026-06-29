"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import KodexIcon from "./KodexIcon";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Honestidade",
    tagline: "Sem surpresas, sem letras miúdas.",
    description: "Transparência total em cada etapa. Comunicamos prazos reais, desafios honestos e nunca prometemos o que não podemos entregar.",
    items: [
      { label: "Prazos realistas", icon: "⏱" },
      { label: "Orçamento fixo", icon: "💰" },
      { label: "Comunicação clara", icon: "💬" },
      { label: "Progresso visível", icon: "📊" },
    ],
    stat: { value: "0", label: "Surpresas não previstas" },
    gradient: "from-purple-brand to-purple-accent",
    accentColor: "#7B2FBE",
    glowColor: "rgba(123,47,190,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Entrega completa",
    tagline: "Do briefing ao produto, 100% do acordado.",
    description: "O produto que você pediu, sem cortes ou atalhos. O escopo combinado é exatamente o que vai para produção — nada a menos.",
    items: [
      { label: "Escopo respeitado", icon: "📋" },
      { label: "Documentação incluída", icon: "📄" },
      { label: "Sem 'meia entrega'", icon: "🚫" },
      { label: "Suporte pós-entrega", icon: "🛟" },
    ],
    stat: { value: "100%", label: "Taxa de entrega completa" },
    gradient: "from-purple-accent to-[#c77dff]",
    accentColor: "#A855F7",
    glowColor: "rgba(168,85,247,0.15)",
  },
];

export default function Values() {
  const ref = useRef(null);
  const brandRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const brandInView = useInView(brandRef, { once: true, margin: "-80px" });

  return (
    <section id="valores" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#05020A" }} />

      {/* ── Section transitions ── */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #07040D, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0B0714, transparent)" }} />

      {/* ── Orbs — larger and animated ── */}
      <div className="ambient-safe absolute right-0 top-[28%] w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 65%)", filter: "blur(90px)", animation: "glow-breathe 12s ease-in-out infinite", willChange: "transform, opacity" }} />
      <div className="ambient-safe absolute left-0 bottom-[28%] w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,47,190,0.08) 0%, transparent 65%)", filter: "blur(75px)", animation: "glow-breathe 15s ease-in-out infinite 5s", willChange: "transform, opacity" }} />
      {/* Centre top glow */}
      <div className="ambient-safe absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(109,40,217,0.06) 0%, transparent 70%)", filter: "blur(60px)", animation: "glow-breathe 9s ease-in-out infinite 2s", willChange: "transform, opacity" }} />

      {/* ── Noise ── */}
      <div className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-purple-accent mb-5">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-purple-accent" />
            Nossos valores
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-accent" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Os princípios que <span className="gradient-text">nos guiam</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg leading-relaxed">
            Os dois pilares que orientam cada decisão, cada linha de código e cada interação com nossos clientes.
          </p>
        </motion.div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden card-premium"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${value.gradient}`} />

              {/* Hover inner glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${value.glowColor} 0%, transparent 60%)` }}
              />

              <div className="relative z-10 p-8">
                {/* Top row: icon + stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} p-px`}>
                    <div className="w-full h-full rounded-2xl flex items-center justify-center text-white" style={{ background: "#120B1E" }}>
                      {value.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-black bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>{value.stat.value}</div>
                    <div className="text-[10px] text-text-muted mt-0.5 max-w-[120px] text-right">{value.stat.label}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{value.description}</p>

                {/* Items grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {value.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[rgba(170,120,255,0.2)] transition-colors duration-200">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-xs font-medium text-text-muted">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tagline */}
                <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r ${value.gradient} bg-opacity-10`}
                  style={{ background: `${value.accentColor}14` }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5 flex-shrink-0" style={{ color: value.accentColor }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className={`text-xs font-semibold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                    {value.tagline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand identity block */}
        <motion.div
          ref={brandRef}
          initial={{ opacity: 0, y: 30 }}
          animate={brandInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-[rgba(170,120,255,0.15)]"
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0B0714 0%, #120B1E 50%, #0B0714 100%)" }} />

          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(168,85,247,0.8) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Glow center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(123,47,190,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 sm:px-12 py-10">
            {/* Logo side */}
            <div className="flex items-center gap-5">
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <KodexIcon size={60} showBackground />
              </motion.div>
              <div>
                <div className="text-xs tracking-[0.25em] text-purple-accent/60 font-semibold uppercase mb-1.5">Nossa identidade</div>
                <div className="text-2xl font-bold text-white">
                  <span className="text-white/80">Kodex</span>
                  <span className="text-purple-accent">Base</span>
                </div>
                <div className="text-[10px] tracking-widest text-text-muted/60 font-medium uppercase mt-0.5">Soluções Digitais</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-[rgba(170,120,255,0.3)] to-transparent" />

            {/* Tagline */}
            <div className="flex-1 max-w-sm text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                Ideias · Código ·{" "}
                <span className="gradient-text">Soluções</span>
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                A KodexBase nasceu da crença de que tecnologia bem feita transforma negócios. Código limpo, honestidade total e comprometimento com o resultado do cliente.
              </p>
            </div>

            {/* Quote */}
            <div className="hidden xl:flex flex-col items-center flex-shrink-0 text-center max-w-[160px]">
              <div className="text-5xl text-purple-brand/30 font-serif leading-none mb-2">&ldquo;</div>
              <p className="text-xs text-text-muted italic leading-relaxed">
                Do briefing ao produto final, sem cortes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

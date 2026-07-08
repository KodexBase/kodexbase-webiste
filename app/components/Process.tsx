"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Entendemos profundamente seu negócio, objetivos e público. Nenhuma linha de código é escrita antes de termos clareza total sobre o que precisa ser construído.",
    tags: ["Entendimento", "Objetivos", "Documentação"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    color: "from-[#7B2FBE] to-[#9D4EDD]",
    glow: "#7B2FBE",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos escopo, tecnologias, prazo e fluxo de trabalho. Você aprova o plano antes de começarmos — sem surpresas de escopo ou custo no meio do caminho.",
    tags: ["Escopo", "Tecnologias", "Prazo"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    color: "from-[#9D4EDD] to-[#c77dff]",
    glow: "#9D4EDD",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Código limpo, incremental e com atualizações frequentes. Você acompanha o progresso em tempo real — melhorias ganham vida a cada sprint de avanço.",
    tags: ["Código limpo", "Revisões", "Atualizações"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: "from-[#c77dff] to-[#e0aaff]",
    glow: "#c77dff",
  },
  {
    number: "04",
    title: "Entrega & Suporte",
    description:
      "Deploy completo, documentação e suporte pós-lançamento. Garantimos que sua solução está 100% pronta para usar com suporte dedicado após a entrega.",
    tags: ["Deploy", "Documentação", "Suporte"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    color: "from-[#e0aaff] to-[#9D4EDD]",
    glow: "#e0aaff",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0" style={{ backgroundColor: "#07040D" }} />

      {/* ── Section transitions ── */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #05020A, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #05020A, transparent)" }} />

      {/* ── Extra depth orbs ── */}
      <div className="ambient-safe absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.07) 0%, transparent 70%)", filter: "blur(80px)", animation: "glow-breathe 14s ease-in-out infinite 2s", willChange: "transform, opacity" }} />
      <div className="ambient-safe absolute bottom-0 left-0 w-[350px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,28,135,0.06) 0%, transparent 70%)", filter: "blur(70px)", animation: "glow-breathe 11s ease-in-out infinite 7s", willChange: "transform, opacity" }} />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Large purple glow blob — from JSON: #7B2EFF, 18% opacity, 900px */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 900,
          height: 900,
          background: "radial-gradient(circle, rgba(123,46,255,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-neon text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            Nosso processo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Como <span className="gradient-text">trabalhamos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Um processo transparente do início ao fim. Cada etapa tem entregáveis
            claros e sua aprovação antes de avançar.
          </p>
        </motion.div>

        {/* Timeline connector — desktop only */}
        <div className="hidden lg:block relative mb-0">
          <div className="absolute top-[2.6rem] left-[12.5%] right-[12.5%] h-px pointer-events-none">
            {/* Base line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-neon/30 to-transparent" />
            {/* Glow line */}
            <div
              className="absolute inset-0 blur-sm"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(157,78,221,0.5) 50%, transparent 100%)",
              }}
            />
            {/* Animated progress overlay */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
              className="absolute inset-0 origin-left bg-gradient-to-r from-purple-brand via-purple-neon to-[#c77dff]"
              style={{ opacity: 0.6 }}
            />
          </div>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.13 }}
              className="group relative"
            >
              <div
                className="relative rounded-2xl p-6 h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${step.glow}18 0%, transparent 65%)`,
                  }}
                />

                {/* Step badge + icon row */}
                <div className="flex items-center justify-between mb-5">
                  {/* Icon badge */}
                  <div
                    className={`relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} p-px`}
                    style={{
                      boxShadow: isInView ? `0 0 16px ${step.glow}55` : "none",
                    }}
                  >
                    <div className="w-full h-full rounded-xl bg-[#07040D] flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step number */}
                  <span
                    className={`text-4xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-25 group-hover:opacity-50 transition-opacity duration-300 leading-none`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent border border-white/[0.08]`}
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <span className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {tag}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA — gradient style from JSON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-5">
            Pronto para começar? O primeiro passo é uma conversa.
          </p>
          <a
            href="https://wa.me/5527997644821"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-purple-brand to-purple-neon hover:from-purple-neon hover:to-purple-brand text-white font-bold rounded-xl transition-all duration-300 text-sm shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60"
          >
            Iniciar projeto
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

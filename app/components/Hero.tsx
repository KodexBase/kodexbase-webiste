"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";

const outcomes = [
  "Menos tarefas repetitivas",
  "Informações em um só lugar",
  "Atendimento mais organizado",
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-[68px]" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[#05020A]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      <div className="absolute -left-40 top-10 h-[620px] w-[620px] rounded-full bg-purple-brand/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-purple-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(92vh-68px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-accent/25 bg-purple-accent/[0.07] px-3.5 py-2 text-xs font-semibold text-purple-200">
            <Sparkles className="h-3.5 w-3.5" />
            Software sob medida para problemas reais
          </div>

          <h1 id="hero-title" className="max-w-3xl text-balance text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl xl:text-7xl">
            Sua empresa não precisa de mais uma ferramenta.
            <span className="gradient-text block">Precisa trabalhar melhor.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
            Transformamos planilhas, tarefas manuais e informações espalhadas em websites, sistemas e automações simples de usar — construídos para a realidade do seu negócio.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/5527997644821?text=Ol%C3%A1%2C%20quero%20um%20diagn%C3%B3stico%20inicial%20para%20minha%20empresa." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-brand to-purple-accent px-6 py-3.5 font-semibold text-white shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow-purple">
              <MessageCircle className="h-4 w-4" />
              Solicitar diagnóstico inicial
            </a>
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-purple-accent/40 hover:bg-white/[0.07]">
              Ver projetos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-5 text-xs text-text-muted">Conversa inicial sem compromisso · Retorno em até 24 horas úteis</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative">
          <div className="absolute inset-0 -m-8 rounded-full bg-purple-accent/10 blur-[90px]" />
          <div className="relative overflow-hidden rounded-3xl border border-purple-accent/20 bg-[#0B0714]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,.55)] sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-accent">Diagnóstico Kodex</p>
                <h2 className="mt-2 text-xl font-bold text-white">Do processo atual à solução certa</h2>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">INICIAL</span>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border border-red-400/15 bg-red-400/[0.05] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-red-300/80">Antes</p>
                <p className="mt-1 text-sm text-gray-300">Retrabalho, dados dispersos e atendimento dependente de tarefas manuais.</p>
              </div>
              <div className="flex justify-center text-purple-accent">↓</div>
              <div className="rounded-2xl border border-purple-accent/25 bg-purple-accent/[0.07] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-purple-300">Solução</p>
                <p className="mt-1 text-sm text-gray-200">Um sistema desenhado em torno do fluxo que a equipe realmente utiliza.</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300"><Check className="h-3.5 w-3.5" /></span>
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

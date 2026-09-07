"use client";

import Link from "next/link";
import { ArrowRight, Eye, FileCheck2, Gauge, MessageSquareText } from "lucide-react";

const values = [
  { icon: Eye, title: "Transparência", text: "Prazos, limites e riscos são apresentados com clareza. Quando algo muda, a conversa acontece antes da execução." },
  { icon: FileCheck2, title: "Escopo verificável", text: "O projeto começa com entregáveis definidos e critérios objetivos para saber quando cada etapa está pronta." },
  { icon: MessageSquareText, title: "Comunicação direta", text: "O cliente acompanha decisões importantes e fala diretamente com quem entende e desenvolve a solução." },
  { icon: Gauge, title: "Simplicidade útil", text: "Evitamos complexidade que não traz retorno. A melhor solução é a menor que resolve o problema com segurança." },
];

export default function Values() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05020A] px-6 pb-24 pt-32" aria-labelledby="values-title">
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-brand/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-accent">Princípios de trabalho</p>
          <h1 id="values-title" className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">Confiança não depende de promessas absolutas.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">Ela é construída com decisões explicadas, entregas demonstráveis e responsabilidade quando surgem imprevistos.</p>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-premium rounded-3xl p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-accent/25 bg-purple-accent/10 text-purple-300"><Icon className="h-5 w-5" /></div>
              <h2 className="mt-6 text-2xl font-bold text-white">{title}</h2>
              <p className="mt-3 text-base leading-relaxed text-text-muted">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-purple-accent/20 bg-gradient-to-r from-purple-brand/15 to-transparent p-8 sm:p-10">
          <p className="max-w-3xl text-2xl font-semibold leading-snug text-white">“Se uma solução pronta resolver melhor, diremos isso. Software sob medida só faz sentido quando realmente melhora a operação.”</p>
          <Link href="/processo" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-300">Conhecer o processo <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

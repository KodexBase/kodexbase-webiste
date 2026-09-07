import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Radio, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história, o fundador e a forma de trabalhar da KodexBase, empresa de desenvolvimento de software de Linhares, Espírito Santo.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05020A] px-6 pb-24 pt-32">
      <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-purple-brand/15 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-accent">Sobre a KodexBase</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">Tecnologia próxima, processo claro e responsabilidade na entrega.</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">A KodexBase nasceu em Linhares, Espírito Santo, para transformar problemas reais em produtos digitais úteis. Cada projeto começa com entendimento do negócio e avança com escopo, comunicação e entregas verificáveis.</p>
          </div>
          <div className="rounded-3xl border border-purple-accent/20 bg-[#0B0714] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">Fundador</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Murilo Miranda</h2>
            <p className="mt-4 leading-relaxed text-text-muted">Programador, empreendedor e integrante da robótica competitiva. A experiência com sistemas, controle e resolução de problemas técnicos influenciou uma empresa orientada a construir soluções funcionais, não apenas interfaces.</p>
            <a href="https://www.correiodoestadoonline.com.br/noticia/especial-/talento-linharense-aos-16-anos-murilo-ja-e-empresario-reconhecido-por-criar-empresa-de-sistemas-digitais" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-300">Ler reportagem sobre a trajetória <ExternalLink className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            { icon: Radio, title: "Comunicação direta", text: "Atualizações claras e contato com quem realmente desenvolve a solução." },
            { icon: ShieldCheck, title: "Escopo responsável", text: "Prazos e entregas definidos com transparência antes do desenvolvimento." },
            { icon: Users, title: "Construção conjunta", text: "O cliente participa das decisões e valida cada etapa relevante do produto." },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-premium rounded-2xl p-7"><Icon className="h-6 w-6 text-purple-300" /><h2 className="mt-5 text-xl font-bold text-white">{title}</h2><p className="mt-3 text-sm leading-relaxed text-text-muted">{text}</p></article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-purple-accent/20 bg-purple-accent/[0.06] p-8 sm:flex-row sm:items-center">
          <div><h2 className="text-2xl font-bold text-white">Tem um processo que poderia funcionar melhor?</h2><p className="mt-2 text-text-muted">Vamos entender o cenário antes de falar em tecnologia.</p></div>
          <Link href="/contato" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#0B0714]">Iniciar conversa <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

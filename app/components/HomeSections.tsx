"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, ExternalLink, LayoutDashboard, MonitorSmartphone, Quote, Workflow } from "lucide-react";

const offers = [
  {
    icon: MonitorSmartphone,
    eyebrow: "Presença que vende",
    title: "Websites que conduzem o cliente",
    description: "Uma presença rápida, clara e preparada para transformar visitas em conversas pelo WhatsApp ou formulário.",
    bullets: ["Website responsivo", "SEO técnico", "Métricas e conversão"],
  },
  {
    icon: LayoutDashboard,
    eyebrow: "Operação sem planilha",
    title: "Sistemas para organizar a rotina",
    description: "Centralize clientes, agenda, processos e indicadores em uma ferramenta feita para o seu fluxo de trabalho.",
    bullets: ["Painel administrativo", "Regras do negócio", "Acesso web, mobile ou desktop"],
  },
  {
    icon: Bot,
    eyebrow: "Fluxo automático",
    title: "Automações que devolvem tempo",
    description: "Conecte serviços e elimine tarefas repetitivas com integrações, alertas e rotinas automáticas.",
    bullets: ["Integração de APIs", "Relatórios automáticos", "Bots e notificações"],
  },
];

const projects = [
  {
    name: "Sakura Mobile Menu",
    category: "Aplicativo mobile",
    description: "Cardápio digital em Flutter com pedidos direcionados ao WhatsApp e arquitetura preparada para evolução.",
    tags: ["Flutter", "BLoC", "Mobile"],
    href: "https://github.com/KodexBase/Sakura_Mobile_Menu",
  },
  {
    name: "Lumiar",
    category: "Website para clínica",
    description: "Landing page responsiva e acessível para apresentar uma clínica odontológica e facilitar o contato.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/KodexBase/Lumiar_website",
  },
  {
    name: "PlantHealth AI",
    category: "Monitoramento e visão",
    description: "Aplicação para acompanhar uma plantação hidropônica e integrar sensores, dados e análise por imagem.",
    tags: ["Flutter", "Arduino", "IA"],
    href: "https://github.com/KodexBase/plantHealth_AI",
  },
];

export default function HomeSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05020A] px-6 py-24" aria-labelledby="solutions-title">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-accent">Soluções orientadas a resultado</p>
            <h2 id="solutions-title" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Começamos pelo problema, não pela tecnologia.</h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">A ferramenta é escolhida depois que entendemos onde sua empresa perde tempo, informação ou oportunidades.</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <motion.article key={offer.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.08 }} className="card-premium rounded-2xl p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-accent/25 bg-purple-accent/10 text-purple-300"><Icon className="h-5 w-5" /></div>
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-purple-accent">{offer.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{offer.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{offer.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                    {offer.bullets.map((bullet) => <li key={bullet} className="text-sm text-gray-300">— {bullet}</li>)}
                  </ul>
                </motion.article>
              );
            })}
          </div>
          <Link href="/servicos" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition hover:text-white">Entender todas as soluções <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B0714] px-6 py-24" aria-labelledby="work-title">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-accent">Trabalho verificável</p>
              <h2 id="work-title" className="mt-4 text-4xl font-bold text-white sm:text-5xl">Projetos públicos selecionados</h2>
              <p className="mt-4 text-text-muted">Não mostramos apenas a tecnologia: explicamos o uso e o problema que cada projeto se propõe a resolver.</p>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300">Ver portfólio completo <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="group flex min-h-[300px] flex-col rounded-2xl border border-white/[0.08] bg-[#05020A]/75 p-7 transition hover:-translate-y-1 hover:border-purple-accent/35">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-purple-accent/20 bg-purple-accent/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-300">{project.category}</span>
                  <Workflow className="h-5 w-5 text-white/25" />
                </div>
                <h3 className="mt-7 text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="text-xs text-gray-400">#{tag}</span>)}</div>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">Ver código público <ExternalLink className="h-3.5 w-3.5" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05020A] px-6 py-24" aria-labelledby="founder-title">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-3xl border border-purple-accent/20 bg-gradient-to-br from-purple-brand/15 to-transparent p-8">
            <Quote className="h-8 w-8 text-purple-accent" />
            <blockquote className="mt-6 text-2xl font-semibold leading-snug text-white">“Começar cedo me permite evoluir junto com a empresa e transformar boas ideias em produtos que resolvem problemas.”</blockquote>
            <p className="mt-6 text-sm text-text-muted">Murilo Miranda · Fundador da KodexBase</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-accent">Quem está por trás</p>
            <h2 id="founder-title" className="mt-4 text-4xl font-bold text-white sm:text-5xl">Experiência construída na prática.</h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">A KodexBase foi fundada em Linhares por Murilo Miranda, programador e integrante da robótica competitiva. A empresa combina desenvolvimento, visão de produto e acompanhamento direto em cada entrega.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/sobre" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white">Conhecer a KodexBase <ArrowRight className="h-4 w-4" /></Link>
              <a href="https://www.correiodoestadoonline.com.br/noticia/especial-/talento-linharense-aos-16-anos-murilo-ja-e-empresario-reconhecido-por-criar-empresa-de-sistemas-digitais" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-purple-300">Ler reportagem <ExternalLink className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0714] px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl border border-purple-accent/25 bg-gradient-to-r from-purple-brand/20 via-purple-accent/10 to-transparent p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">Primeiro passo</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Conte onde sua operação trava.</h2>
            <p className="mt-3 text-text-muted">Analisamos o cenário e indicamos uma primeira direção, mesmo que a melhor solução não seja construir um aplicativo completo.</p>
          </div>
          <Link href="/contato" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#0B0714] transition hover:-translate-y-0.5">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Leaf, Smartphone, Stethoscope, Zap } from "lucide-react";

const projects = [
  {
    name: "Sakura Mobile Menu",
    type: "Aplicativo mobile",
    icon: Smartphone,
    problem: "Tornar o cardápio acessível no celular e simplificar o início de pedidos pelo WhatsApp.",
    solution: "Aplicativo Flutter com arquitetura em camadas, navegação direta e funcionamento sem backend obrigatório.",
    stack: ["Flutter", "Dart", "BLoC"],
    href: "https://github.com/KodexBase/Sakura_Mobile_Menu",
  },
  {
    name: "Lumiar",
    type: "Website para clínica",
    icon: Stethoscope,
    problem: "Apresentar uma clínica odontológica com clareza e facilitar o contato em qualquer dispositivo.",
    solution: "Landing page leve, responsiva, acessível e construída sem dependências desnecessárias.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/KodexBase/Lumiar_website",
  },
  {
    name: "PlantHealth AI",
    type: "Monitoramento inteligente",
    icon: Leaf,
    problem: "Reunir dados de cultivo hidropônico e apoiar a identificação visual de alterações nas plantas.",
    solution: "Aplicação integrada a sensores, Arduino e análise por imagem para acompanhar o ambiente de cultivo.",
    stack: ["Flutter", "Arduino", "IA"],
    href: "https://github.com/KodexBase/plantHealth_AI",
  },
  {
    name: "EnergyMind",
    type: "Consumo de energia",
    icon: Zap,
    problem: "Tornar o impacto energético de aparelhos domésticos mais compreensível para o usuário.",
    solution: "Aplicação de acompanhamento e conscientização com foco em informação clara e tomada de decisão.",
    stack: ["Flutter", "Dart", "Mobile"],
    href: "https://github.com/KodexBase/EnergyMind",
  },
];

export default function Portfolio() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05020A] px-6 pb-24 pt-32" aria-labelledby="portfolio-title">
      <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-purple-brand/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.header initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-accent">Portfólio verificável</p>
          <h1 id="portfolio-title" className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">Problemas, soluções e código público.</h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">Uma seleção de projetos que mostra como pensamos produto e engenharia. Resultados comerciais só são publicados quando podem ser comprovados e autorizados pelo cliente.</p>
        </motion.header>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="group rounded-3xl border border-white/[0.08] bg-[#0B0714] p-7 transition hover:-translate-y-1 hover:border-purple-accent/35 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-accent/25 bg-purple-accent/10 text-purple-300"><Icon className="h-5 w-5" /></div>
                  <span className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-text-muted">{project.type}</span>
                </div>
                <h2 className="mt-7 text-2xl font-bold text-white">{project.name}</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div><p className="text-[10px] font-bold uppercase tracking-widest text-purple-300">Problema</p><p className="mt-2 text-sm leading-relaxed text-text-muted">{project.problem}</p></div>
                  <div><p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">Solução</p><p className="mt-2 text-sm leading-relaxed text-text-muted">{project.solution}</p></div>
                </div>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">{project.stack.map((item) => <span key={item} className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-gray-400">{item}</span>)}</div>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-purple-300"><Code2 className="h-4 w-4" /> Ver repositório <ArrowUpRight className="h-3.5 w-3.5" /></a>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-purple-accent/20 bg-purple-accent/[0.06] p-6 text-center">
          <p className="text-sm text-gray-300">Alguns trabalhos comerciais não aparecem publicamente por confidencialidade. Quer entender como uma solução semelhante se aplicaria à sua empresa?</p>
          <a href="https://wa.me/5527997644821?text=Ol%C3%A1%2C%20vi%20o%20portf%C3%B3lio%20da%20KodexBase%20e%20quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-purple-300">Conversar sobre uma ideia <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

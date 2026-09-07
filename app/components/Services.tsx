"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Check, LayoutDashboard, MonitorSmartphone, Smartphone } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Presença que vende",
    bestFor: "Empresas que precisam apresentar melhor seus serviços e facilitar o primeiro contato.",
    description: "Websites rápidos, responsivos e construídos para conduzir o visitante até uma ação clara.",
    items: ["Estratégia e estrutura das páginas", "Design responsivo", "SEO técnico e métricas", "Integração com WhatsApp e formulários"],
  },
  {
    icon: LayoutDashboard,
    title: "Operação sem planilha",
    bestFor: "Equipes que perderam controle entre planilhas, mensagens e tarefas manuais.",
    description: "Sistemas administrativos que centralizam informações e refletem as regras reais da operação.",
    items: ["Cadastros e permissões", "Agenda, processos ou estoque", "Dashboards e relatórios", "Acesso web ou desktop"],
  },
  {
    icon: Smartphone,
    title: "Aplicativo sob medida",
    bestFor: "Produtos e operações que realmente precisam estar no celular.",
    description: "Aplicativos Android e iOS com experiência adequada ao usuário e base preparada para evolução.",
    items: ["Descoberta e protótipo", "Aplicativo multiplataforma", "Notificações e modo offline", "Integração com serviços externos"],
  },
  {
    icon: Bot,
    title: "Fluxo automático",
    bestFor: "Negócios que repetem todos os dias tarefas previsíveis e demoradas.",
    description: "Automações e integrações para reduzir retrabalho e manter sistemas conversando entre si.",
    items: ["Integração de APIs", "Alertas e relatórios", "Bots e rotinas automáticas", "Fluxos de dados"],
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05020A] px-6 pb-24 pt-32" aria-labelledby="services-title">
      <div className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-purple-brand/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-accent">Soluções</p>
          <h1 id="services-title" className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">A tecnologia certa para o problema certo.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">Você não precisa escolher uma linguagem ou plataforma. Começamos entendendo o processo, quem usará a solução e qual resultado precisa mudar.</p>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="card-premium rounded-3xl p-7 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-accent/25 bg-purple-accent/10 text-purple-300"><Icon className="h-5 w-5" /></div>
                <h2 className="mt-6 text-2xl font-bold text-white">{service.title}</h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-purple-200">Ideal para: {service.bestFor}</p>
                <p className="mt-4 leading-relaxed text-text-muted">{service.description}</p>
                <ul className="mt-6 grid gap-3 border-t border-white/[0.06] pt-6 sm:grid-cols-2">
                  {service.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-gray-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />{item}</li>)}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-purple-accent/20 bg-purple-accent/[0.06] p-8 sm:flex-row sm:items-center">
          <div><h2 className="text-2xl font-bold text-white">Ainda não sabe qual solução pedir?</h2><p className="mt-2 text-text-muted">Isso é normal. Descreva o problema e nós organizamos o caminho técnico.</p></div>
          <Link href="/contato" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#0B0714]">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

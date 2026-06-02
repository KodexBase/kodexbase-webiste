"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Entendemos profundamente seu negócio, objetivos e público. Nenhuma linha de código é escrita antes de termos clareza total sobre o que precisa ser construído.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    color: "from-[#7B2FBE] to-[#9D4EDD]",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos escopo, tecnologias, prazo e fluxo de trabalho. Você aprova o plano antes de começarmos — sem surpresas de escopo ou custo no meio do projeto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    color: "from-[#9D4EDD] to-[#c77dff]",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Código limpo, incremental e com atualizações frequentes. Você acompanha o progresso em tempo real — revisamos juntos cada etapa antes de avançar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: "from-[#c77dff] to-[#e0aaff]",
  },
  {
    number: "04",
    title: "Entrega & Suporte",
    description:
      "Deploy completo, documentação e suporte pós-lançamento. O produto é 100% seu. Ficamos disponíveis para garantir que tudo funcione perfeitamente.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    color: "from-[#e0aaff] to-[#9D4EDD]",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="processo" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080015] to-black" />

      {/* Side decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-brand/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-neon text-sm font-semibold tracking-widest uppercase mb-3 block">
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

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-purple-brand/20 via-purple-neon/40 to-purple-brand/20 pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative group"
            >
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-purple-brand/40 hover:bg-white/[0.05] transition-all duration-300 h-full">
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${step.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />

                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-[#090014] flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  <span className={`text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}>
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA under process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            Pronto para começar? O primeiro passo é uma conversa.
          </p>
          <a
            href="https://wa.me/5527997644821"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-brand/40 hover:border-purple-brand text-purple-neon hover:bg-purple-brand/10 rounded-xl transition-all duration-300 text-sm font-semibold"
          >
            Iniciar projeto →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

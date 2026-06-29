"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LogoDark from "./LogoDark";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Honestidade",
    description:
      "Transparência total em cada etapa do projeto. Comunicamos prazos reais, desafios honestos e nunca prometemos o que não podemos entregar.",
    highlight: "Sem surpresas, sem letras miúdas.",
    gradient: "from-purple-brand to-purple-neon",
    items: ["Prazos realistas", "Orçamento fixo", "Comunicação clara", "Progresso visível"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Entrega completa",
    description:
      "O produto que você pediu, sem cortes ou atalhos. Não entregamos versões pela metade — o escopo combinado é exatamente o que vai para produção.",
    highlight: "Do briefing ao produto, 100% do que foi acordado.",
    gradient: "from-purple-neon to-[#c77dff]",
    items: ["Escopo respeitado", "Sem MVPs forçados", "Documentação incluída", "Suporte pós-entrega"],
  },
];

export default function Values() {
  const ref = useRef(null);
  const logoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const logoInView = useInView(logoRef, { once: true, margin: "-80px" });

  return (
    <section id="valores" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0030]/25 to-black" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-brand/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-neon text-sm font-semibold tracking-widest uppercase mb-3 block">
            Nossos valores
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Valores</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Os dois princípios que guiam cada decisão que tomamos em cada projeto.
          </p>
        </motion.div>

        {/* Values cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="relative group"
            >
              <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-purple-brand/40 transition-all duration-300 overflow-hidden h-full">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${value.gradient} rounded-t-2xl`} />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-brand/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-[#0d0020] flex items-center justify-center text-purple-neon">
                      {value.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-5">{value.description}</p>

                  {/* Feature list */}
                  <ul className="grid grid-cols-2 gap-2 mb-5">
                    {value.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5 text-purple-neon flex-shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className={`text-sm font-bold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                    {value.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dark logo brand block */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, y: 30 }}
          animate={logoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden border border-[#3d2d6e]/60"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a1f] via-[#130a2a] to-[#0a0018]" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7B6FBE]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7B6FBE]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-purple-brand/10 blur-[80px]" />
          </div>

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(157,78,221,0.8) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-10">
            {/* Left: logo */}
            <LogoDark animated className="w-full max-w-xs flex-shrink-0" />

            {/* Right: tagline */}
            <div className="text-center md:text-left flex-1 max-w-lg">
              <p className="text-xs tracking-[0.3em] text-[#6b5ea8] font-semibold uppercase mb-3">
                Nossa identidade
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                Ideias · Código · <span className="text-[#9d8edd]">Soluções</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A KodexBase nasceu da crença de que tecnologia bem feita transforma negócios.
                Cada projeto que entregamos carrega nossa identidade: código limpo, honestidade
                e comprometimento total com o resultado do cliente.
              </p>
            </div>

            {/* Right: quote */}
            <div className="hidden xl:flex flex-col items-center gap-2 flex-shrink-0">
              <div className="text-6xl text-[#3d2d6e] font-serif leading-none">"</div>
              <p className="text-[#7B6FBE] text-sm font-medium italic text-center max-w-[180px] leading-relaxed">
                Do briefing ao produto final, sem cortes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Criação de Websites",
    description:
      "Sites modernos, rápidos e 100% responsivos. Do portfólio institucional ao e-commerce completo, construídos com as melhores tecnologias do mercado.",
    features: ["Design responsivo", "Alta performance", "SEO otimizado", "CMS integrado"],
    tags: ["Next.js", "React", "Tailwind"],
    gradient: "from-purple-brand to-purple-neon",
    tag: "Web",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
    title: "Aplicativos Mobile",
    description:
      "Apps iOS e Android sob medida com experiências nativas e fluidas. Colocamos o seu negócio na palma da mão dos seus clientes.",
    features: ["iOS & Android", "UI nativa", "Notificações push", "Offline-first"],
    tags: ["React Native", "Flutter", "Expo"],
    gradient: "from-purple-neon to-[#c77dff]",
    tag: "Mobile",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Apps Desktop",
    description:
      "Sistemas desktop para Windows robustos e personalizados. Softwares que otimizam a operação interna do seu negócio com interface profissional.",
    features: ["Windows nativo", "Instalador próprio", "Atualizações OTA", "DB local"],
    tags: ["Electron", "Tauri", "WPF"],
    gradient: "from-[#c77dff] to-[#e0aaff]",
    tag: "Desktop",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automações",
    description:
      "Processos automáticos que economizam tempo e dinheiro. Bots, integrações entre ferramentas e fluxos inteligentes que trabalham enquanto você dorme.",
    features: ["Integração de APIs", "Bots & scripts", "Relatórios auto", "Redução de custos"],
    tags: ["Python", "Node.js", "n8n"],
    gradient: "from-[#e0aaff] to-purple-brand",
    tag: "Automação",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0018] to-black" />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-brand/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-neon text-sm font-semibold tracking-widest uppercase mb-3 block">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Cada projeto é único. Entregamos soluções completas, do design ao
            código, com foco em resultado real para o seu negócio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-purple-brand/40 transition-all duration-400 flex flex-col overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`inline-flex items-center justify-center w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-[#090014] flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-xs font-bold tracking-widest text-purple-neon/50 uppercase mt-1">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-gray-400 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Criação de Websites",
    tag: "Web",
    description: "Sites modernos, rápidos e 100% responsivos. Do portfólio institucional ao e-commerce completo, com as melhores tecnologias e foco em resultado real.",
    features: ["Design responsivo", "SEO orientado", "Velocidade máxima", "CMS integrado"],
    tags: ["Next.js", "React", "Tailwind"],
    gradient: "from-purple-brand to-purple-accent",
    glowColor: "rgba(123,47,190,0.2)",
    accentColor: "#7B2FBE",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
    title: "Aplicativos Mobile",
    tag: "Mobile",
    description: "Apps iOS e Android com experiências nativas e fluidas. Colocamos o seu negócio na palma da mão dos seus clientes com qualidade de ponta.",
    features: ["iOS & Android", "UI/UX nativo", "Push notifications", "Offline-ready"],
    tags: ["React Native", "Flutter", "Expo"],
    gradient: "from-purple-accent to-[#c77dff]",
    glowColor: "rgba(168,85,247,0.2)",
    accentColor: "#A855F7",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Apps Desktop",
    tag: "Desktop",
    description: "Sistemas desktop robustos e personalizados para Windows e macOS. Softwares que otimizam a operação interna com interface profissional.",
    features: ["Windows & macOS", "Instaladores nativos", "Integrações locais", "Alta performance"],
    tags: ["Electron", ".NET", "Tauri"],
    gradient: "from-[#c77dff] to-[#e0aaff]",
    glowColor: "rgba(199,125,255,0.2)",
    accentColor: "#c77dff",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automações",
    tag: "Automação",
    description: "Processos automáticos que economizam tempo e dinheiro. Bots, integrações e fluxos inteligentes que trabalham enquanto você foca no que importa.",
    features: ["Integração de APIs", "Bots & Crawlers", "Fluxos de dados", "Relatórios & alertas"],
    tags: ["Python", "Node.js", "Zapier"],
    gradient: "from-[#e0aaff] to-purple-brand",
    glowColor: "rgba(224,170,255,0.18)",
    accentColor: "#e0aaff",
  },
];

interface SpotlightState { x: number; y: number; active: boolean; }

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: typeof services[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<SpotlightState>({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  const handleMouseLeave = () => setSpotlight((p) => ({ ...p, active: false }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden flex flex-col cursor-default card-premium"
      style={{ minHeight: 400 }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(320px circle at ${spotlight.x}px ${spotlight.y}px, ${service.glowColor}, transparent 65%)`,
        }}
      />

      {/* Gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Inner glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${service.glowColor} 0%, transparent 60%)` }}
      />

      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-px`}>
            <div className="w-full h-full rounded-xl flex items-center justify-center text-white" style={{ background: "#120B1E" }}>
              {service.icon}
            </div>
          </div>
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border"
            style={{ color: service.accentColor, borderColor: `${service.accentColor}30`, background: `${service.accentColor}0D` }}>
            {service.tag}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-2.5">{service.title}</h3>
        <p className="text-sm text-text-muted leading-relaxed flex-1 mb-5">{service.description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {service.features.map((feat, j) => (
            <li key={j} className="flex items-center gap-2 text-xs text-text-muted">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${service.gradient}`} />
              {feat}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(255,255,255,0.05)]">
          {service.tags.map((tag) => (
            <span key={tag}
              className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold text-text-muted border border-[rgba(255,255,255,0.07)] bg-white/[0.03] hover:border-[rgba(170,120,255,0.3)] hover:text-white transition-all duration-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#05020A" }} />

      {/* ── Section transitions ── */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0B0714, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #07040D, transparent)" }} />

      {/* ── Animated orbs ── */}
      <div className="ambient-safe absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,47,190,0.09) 0%, transparent 70%)", filter: "blur(80px)", animation: "glow-breathe 13s ease-in-out infinite", willChange: "transform, opacity" }} />
      <div className="ambient-safe absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)", filter: "blur(70px)", animation: "glow-breathe 16s ease-in-out infinite 4s", willChange: "transform, opacity" }} />

      {/* ── Grid behind cards ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 60%, black 10%, transparent 80%)",
        maskImage: "radial-gradient(ellipse 75% 60% at 50% 60%, black 10%, transparent 80%)",
      }} />

      {/* ── Noise ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.02,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-purple-accent mb-5">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-purple-accent" />
            O que fazemos
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-accent" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto text-lg leading-relaxed">
            Cada projeto é único. Entregamos soluções completas, do design ao código, com foco total em resultado real.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

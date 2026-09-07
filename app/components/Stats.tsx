"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 5,
    suffix: "",
    label: "Projetos para clientes",
    sublabel: "concluídos e entregues",
    gradient: "from-purple-brand to-purple-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    value: 1,
    suffix: " a 1",
    label: "Acompanhamento direto",
    sublabel: "do briefing à entrega",
    gradient: "from-purple-accent to-[#c77dff]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    value: 4,
    suffix: "",
    label: "Frentes de solução",
    sublabel: "web · mobile · sistemas · automação",
    gradient: "from-[#c77dff] to-[#e0aaff]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    value: 24,
    suffix: "h",
    label: "Tempo de resposta",
    sublabel: "em dias úteis",
    gradient: "from-[#e0aaff] to-purple-brand",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame = 0;
    const totalFrames = 80;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const timer = setInterval(() => {
      frame++;
      const progress = easeOut(Math.min(frame / totalFrames, 1));
      setCount(Math.floor(progress * target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      {/* ── Base ── */}
      <div className="absolute inset-0" style={{ backgroundColor: "#0B0714" }} />

      {/* ── Section transition — fade from Hero (#05020A) ── */}
      <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #05020A, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #05020A, transparent)" }} />

      {/* ── Animated centre spotlight ── */}
      <div className="ambient-safe absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: "820px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(109,40,217,0.09) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "glow-breathe 9s ease-in-out infinite",
          willChange: "transform, opacity",
        }} />
      </div>

      {/* ── Fine inner grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(168,85,247,0.028) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.028) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 80%)",
        maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 80%)",
      }} />

      {/* ── Border lines ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(168,85,247,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(168,85,247,0.15)] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl p-6 overflow-hidden cursor-default card-premium"
            >
              {/* Gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} p-px mb-4`}>
                <div className="w-full h-full rounded-xl bg-bg-card flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 tabular-nums`}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
              <div className="text-[11px] text-text-muted">{stat.sublabel}</div>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-gradient-to-br ${stat.gradient}`} style={{ opacity: 0 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.03")}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

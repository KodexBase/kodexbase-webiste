"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number; y: number; vx: number; vy: number; size: number; opacity: number;
}

/* ─── Tech badges (lightweight) ─────────────────── */
const TechLogos = [
  { label: "Next.js",     color: "#ffffff",  abbr: "N·x" },
  { label: "React",       color: "#61DAFB",  abbr: "⚛" },
  { label: "TypeScript",  color: "#3178C6",  abbr: "TS" },
  { label: "Node.js",     color: "#68A063",  abbr: "⬡" },
  { label: "Tailwind",    color: "#38BDF8",  abbr: "~" },
  { label: "Python",      color: "#FFD43B",  abbr: "Py" },
  { label: "PostgreSQL",  color: "#336791",  abbr: "PG" },
];

/* ─── Code Editor mockup ───────────────────────── */
function CodeEditor() {
  const tabs = ["project.ts", "deploy.yml", "schema.sql"];
  const [activeTab, setActiveTab] = useState(0);

  const codeLines = [
    [
      { t: "import", c: "text-purple-400" },
      { t: " { KodexBase } ", c: "text-blue-200" },
      { t: "from", c: "text-purple-400" },
      { t: " './engine'", c: "text-emerald-400" },
    ],
    [],
    [
      { t: "const", c: "text-purple-400" },
      { t: " project ", c: "text-yellow-300" },
      { t: "= ", c: "text-white" },
      { t: "await ", c: "text-purple-400" },
      { t: "KodexBase", c: "text-yellow-300" },
      { t: ".build({", c: "text-white" },
    ],
    [{ t: "  type: ", c: "text-blue-300" }, { t: "'web'", c: "text-emerald-400" }, { t: ",", c: "text-white" }],
    [{ t: "  stack: ", c: "text-blue-300" }, { t: "'Next.js + TS'", c: "text-emerald-400" }, { t: ",", c: "text-white" }],
    [{ t: "  quality: ", c: "text-blue-300" }, { t: "'production'", c: "text-emerald-400" }, { t: ",", c: "text-white" }],
    [{ t: "  deadline: ", c: "text-blue-300" }, { t: "'on-time'", c: "text-emerald-400" }],
    [{ t: "})", c: "text-white" }],
    [],
    [{ t: "// ✓ Build successful — 0 errors", c: "text-gray-600" }],
    [
      { t: "console", c: "text-blue-400" },
      { t: ".log(", c: "text-white" },
      { t: "'🚀 Projeto entregue!'", c: "text-emerald-400" },
      { t: ")", c: "text-white" },
    ],
  ];

  return (
    <div className="relative">
      {/* Glow behind editor */}
      <div className="absolute inset-0 -m-8 bg-purple-glow/15 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative rounded-2xl overflow-hidden border border-[rgba(170,120,255,0.2)] shadow-[0_0_60px_rgba(143,79,255,0.2),0_0_120px_rgba(123,47,190,0.1)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0B0714] border-b border-[rgba(170,120,255,0.1)]">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <div className="flex gap-1 overflow-hidden">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-3 py-1 rounded-md text-[10px] font-mono transition-all duration-150 whitespace-nowrap ${
                  activeTab === i
                    ? "bg-[#120B1E] text-white border border-[rgba(170,120,255,0.2)]"
                    : "text-gray-600 hover:text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="ml-auto w-28 h-5 bg-[rgba(255,255,255,0.04)] rounded-md flex items-center justify-center">
            <span className="text-[9px] text-gray-600 font-mono">kodexbase.dev</span>
          </div>
        </div>

        {/* Editor body */}
        <div className="flex bg-[#070010]">
          {/* Line numbers */}
          <div className="flex flex-col pt-4 pb-4 pl-3 pr-3 select-none">
            {codeLines.map((_, i) => (
              <div key={i} className="text-[10px] font-mono text-gray-700 leading-[1.85] text-right">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code */}
          <div className="flex-1 pt-4 pb-4 pr-5 overflow-hidden">
            {codeLines.map((tokens, i) => (
              <div key={i} className="text-[11px] font-mono leading-[1.85] whitespace-nowrap">
                {tokens.map((tok, j) => (
                  <span key={j} className={tok.c}>{tok.t}</span>
                ))}
                {tokens.length === 0 && <span>&nbsp;</span>}
              </div>
            ))}
            {/* Blinking cursor */}
            <div className="flex items-center mt-1 text-[11px] font-mono">
              <span className="text-purple-400">▷ </span>
              <span className="inline-block w-[7px] h-[13px] bg-purple-400/80 rounded-[1px] ml-1" style={{ animation: "blink 1.2s step-end infinite" }} />
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0B0714] border-t border-[rgba(170,120,255,0.08)]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              Build OK
            </span>
            <span className="text-[9px] font-mono text-gray-600">TypeScript 5.0</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-gray-600">UTF-8</span>
            <span className="text-[9px] font-mono text-purple-accent">Next.js 14</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Floating cards ───────────────────────────── */
function FloatingCards() {
  return (
    <>
      {/* Deploy toast — top right */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 -top-6 z-20 glass rounded-2xl px-4 py-3 border border-[rgba(170,120,255,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-400/15 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5 text-emerald-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-white">Deploy successful</div>
            <div className="text-[9px] text-gray-500">prod · 2s ago</div>
          </div>
        </div>
      </motion.div>

      {/* Performance badge — bottom left */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -left-10 bottom-6 z-20 glass rounded-2xl px-4 py-3 border border-[rgba(170,120,255,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        <div className="text-[9px] text-gray-500 mb-1 font-medium">Entregas completas</div>
        <div className="flex items-end gap-1">
          <span className="text-2xl font-black bg-gradient-to-r from-purple-brand to-purple-accent bg-clip-text text-transparent leading-none">100%</span>
        </div>
      </motion.div>

      {/* Clients badge — right center */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -right-6 bottom-24 z-20 glass rounded-xl px-3 py-2 border border-[rgba(170,120,255,0.15)] shadow-card"
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["#7B2FBE", "#A855F7", "#c77dff"].map((c, i) => (
              <div key={i} className="w-5 h-5 rounded-full border-2 border-[#0B0714] flex items-center justify-center text-[7px] font-bold text-white" style={{ background: c }}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="text-[10px] font-semibold text-white">+15 clientes</div>
        </div>
      </motion.div>
    </>
  );
}

/* ─── Hero Section ─────────────────────────────── */
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.4 + 0.3,
      opacity: Math.random() * 0.35 + 0.05,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(143,79,255,${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[68px]"
      aria-label="Seção principal"
    >
      {/* ── Backgrounds ── */}
      <div className="absolute inset-0" style={{ backgroundColor: "#05020A" }} />

      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.18]"
          style={{ background: "radial-gradient(circle, #7B2FBE 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-1/3 -right-60 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #A855F7 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.1]"
          style={{ background: "radial-gradient(circle, #6d28d9 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 xl:gap-24 items-center">

          {/* Left column */}
          <div className="flex flex-col">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start mb-7"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-[rgba(168,85,247,0.25)] text-xs font-medium text-text-muted">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="#A855F7" className="w-2.5 h-2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </span>
                <span>15+ projetos entregues com qualidade premium</span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.04] tracking-tight mb-7"
            >
              <span className="text-white">Software que</span>
              <br />
              <span className="gradient-text">transforma</span>
              <br />
              <span className="text-white">negócios.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="text-lg text-text-muted leading-relaxed mb-10 max-w-[480px]"
            >
              Desenvolvemos com precisão técnica —{" "}
              <span className="text-white font-medium">do briefing ao produto final</span>.{" "}
              Websites, apps e automações que geram resultado real para o seu negócio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-3.5 mb-12"
            >
              <a
                href="https://wa.me/5527997644821"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-base overflow-hidden shimmer"
                style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #A855F7 100%)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #A855F7 0%, #c77dff 100%)" }} />
                <svg viewBox="0 0 24 24" fill="currentColor" className="relative z-10 w-4.5 h-4.5 flex-shrink-0 w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10">Iniciar projeto</span>
                <div className="relative z-10 flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full bg-white/10 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>Online</span>
                </div>
              </a>

              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base glass border border-[rgba(170,120,255,0.2)] hover:border-[rgba(170,120,255,0.45)] transition-all duration-300"
              >
                Ver portfólio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </motion.div>

            {/* Tech logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-[10px] text-gray-600 tracking-[0.2em] uppercase font-medium mb-3.5">
                Tecnologias que utilizamos
              </p>
              <div className="flex flex-wrap gap-2">
                {TechLogos.map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.65 + i * 0.07 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-[rgba(255,255,255,0.06)] hover:border-[rgba(170,120,255,0.3)] transition-all duration-200 group cursor-default"
                  >
                    <span style={{ color: tech.color }} className="text-[11px] font-bold flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity leading-none">
                      {tech.abbr}
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 group-hover:text-gray-200 transition-colors">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — editor + floating */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative px-10"
          >
            <CodeEditor />
            <FloatingCards />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] text-gray-600 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

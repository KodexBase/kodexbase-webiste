"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const techStack = [
  { label: "Next.js", color: "#ffffff" },
  { label: "React", color: "#61DAFB" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Node.js", color: "#68A063" },
  { label: "Tailwind", color: "#38BDF8" },
  { label: "Python", color: "#FFD43B" },
  { label: "PostgreSQL", color: "#336791" },
];

function DeviceMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Purple glow blobs behind device */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[360px] bg-purple-brand/25 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-neon/15 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-purple-brand/10 blur-[50px] rounded-full pointer-events-none" />

      {/* Floating badge — top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-6, 6, -6] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -right-4 top-4 z-20 bg-[#0d001e]/90 border border-purple-brand/40 rounded-xl px-4 py-3 backdrop-blur-sm shadow-lg shadow-purple-900/40"
      >
        <div className="text-[10px] text-gray-500 font-medium mb-0.5">Projetos entregues</div>
        <div className="text-2xl font-black bg-gradient-to-r from-purple-brand to-purple-neon bg-clip-text text-transparent">15+</div>
      </motion.div>

      {/* Laptop screen */}
      <div className="relative rounded-xl overflow-hidden border border-purple-brand/30 shadow-[0_0_60px_rgba(157,78,221,0.25),0_0_120px_rgba(123,47,190,0.12)]">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0a0018] border-b border-white/[0.05]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="ml-2 flex-1 bg-white/[0.04] rounded-md px-3 py-0.5 text-[10px] text-gray-600 font-mono text-center">
            kodexbase.dev
          </div>
        </div>

        {/* Code editor */}
        <div className="bg-[#070010] p-5 font-mono text-[11px] leading-[1.9]">
          <div>
            <span className="text-purple-400">import</span>{" "}
            <span className="text-blue-200">{"{ KodexBase }"}</span>{" "}
            <span className="text-purple-400">from</span>{" "}
            <span className="text-emerald-400">&apos;./solutions&apos;</span>
          </div>
          <div className="mt-1">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-yellow-300">project</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-purple-400">await</span>{" "}
            <span className="text-yellow-300">KodexBase</span>
            <span className="text-white">.create({"{"}</span>
          </div>
          <div className="pl-5">
            <div>
              <span className="text-blue-300">type</span>
              <span className="text-white">: </span>
              <span className="text-emerald-400">&apos;web&apos;</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-blue-300">stack</span>
              <span className="text-white">: </span>
              <span className="text-emerald-400">&apos;Next.js + TypeScript&apos;</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-blue-300">quality</span>
              <span className="text-white">: </span>
              <span className="text-emerald-400">&apos;production&apos;</span>
            </div>
          </div>
          <div>
            <span className="text-white">{"}"}</span>
            <span className="text-white">)</span>
          </div>
          <div className="mt-2 text-gray-600">{"// ✓ Deploy completo"}</div>
          <div>
            <span className="text-blue-400">console</span>
            <span className="text-white">.log(</span>
            <span className="text-emerald-400">&apos;Projeto entregue!&apos;</span>
            <span className="text-white">)</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-purple-400 text-xs">▷</span>
            <span className="inline-block w-1.5 h-3.5 bg-purple-400 rounded-sm animate-pulse opacity-80" />
          </div>
        </div>

        {/* Status bar */}
        <div className="bg-[#0a0018] border-t border-white/[0.05] px-4 py-1.5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          <span className="text-[9px] text-gray-600 font-mono">Build successful — 0 errors</span>
        </div>
      </div>

      {/* Laptop base */}
      <div className="h-2.5 bg-gradient-to-b from-[#1a1a2e] to-[#13131f] rounded-b-sm mx-6 shadow-md" />
      <div className="h-1 bg-[#0e0e18] rounded-sm mx-3" />

      {/* Floating badge — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [6, -6, 6] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.8, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -left-4 bottom-14 z-20 bg-[#0d001e]/90 border border-purple-brand/40 rounded-xl px-4 py-3 backdrop-blur-sm shadow-lg shadow-purple-900/40"
      >
        <div className="text-[10px] text-gray-500 font-medium mb-0.5">Tempo de resposta</div>
        <div className="text-2xl font-black bg-gradient-to-r from-purple-brand to-purple-neon bg-clip-text text-transparent">24h</div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(157, 78, 221, ${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(123, 47, 190, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0020] to-[#1a0030]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(157,78,221,1) 1px, transparent 1px), linear-gradient(90deg, rgba(157,78,221,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-brand/[0.08] blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-purple-neon/[0.05] blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-purple-brand/[0.05] blur-[80px]" />
      </div>

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: text content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight mb-6"
            >
              Soluções digitais
              <br />
              para{" "}
              <span className="gradient-text">negócios reais</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed"
            >
              Desenvolvimento sob medida —{" "}
              <span className="text-white font-medium">do briefing ao produto final</span>.{" "}
              Websites, apps mobile, desktop e automações.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a
                href="https://wa.me/5527997644821"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#7B2FBE] hover:bg-[#9D4EDD] text-white font-bold rounded-xl transition-all duration-300 text-base w-full sm:w-auto justify-center shadow-lg shadow-purple-900/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale no WhatsApp
              </a>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-[#7B2FBE] hover:bg-[#7B2FBE]/15 text-white font-bold rounded-xl transition-all duration-300 text-base w-full sm:w-auto justify-center"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar e-mail
              </button>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col gap-3"
            >
              <p className="text-xs text-gray-600 tracking-widest uppercase font-medium">
                Tecnologias que utilizamos
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.75 + i * 0.06 }}
                    className="px-3 py-1 rounded-full text-xs font-medium border bg-white/[0.03] border-white/10 hover:border-white/25 transition-colors"
                    style={{ color: tech.color }}
                  >
                    {tech.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: device illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <DeviceMockup />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

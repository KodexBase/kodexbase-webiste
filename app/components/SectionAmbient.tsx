"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type ShapeType = "diamond" | "circle" | "cross" | "square" | "hexagon";

/* ─── Ambient floating geometric shapes — outline only, irregular spread ── */
const shapes: { type: ShapeType; x: string; y: string; size: number; dur: string; delay: string }[] = [
  { type: "diamond", x: "6%",  y: "16%", size: 11, dur: "26s", delay: "0s" },
  { type: "circle",  x: "93%", y: "20%", size: 16, dur: "32s", delay: "3s" },
  { type: "cross",   x: "15%", y: "80%", size: 13, dur: "24s", delay: "6s" },
  { type: "square",  x: "88%", y: "70%", size: 9,  dur: "28s", delay: "1.5s" },
  { type: "diamond", x: "48%", y: "6%",  size: 8,  dur: "30s", delay: "4.5s" },
  { type: "hexagon", x: "97%", y: "48%", size: 15, dur: "36s", delay: "2s" },
  { type: "cross",   x: "32%", y: "92%", size: 10, dur: "22s", delay: "7s" },
  { type: "circle",  x: "3%",  y: "55%", size: 7,  dur: "20s", delay: "5s" },
  { type: "square",  x: "60%", y: "88%", size: 12, dur: "34s", delay: "0.8s" },
];

/* ─── Micro-particles — 2–6px, 3–10% opacity, glimmer + faint drift ── */
const microParticles = [
  { x: "10%", y: "22%", size: 3, glimmer: "18s", drift: "26s", delay: "0s" },
  { x: "24%", y: "62%", size: 2, glimmer: "22s", drift: "31s", delay: "2s" },
  { x: "38%", y: "12%", size: 4, glimmer: "20s", drift: "28s", delay: "4s" },
  { x: "52%", y: "80%", size: 3, glimmer: "24s", drift: "34s", delay: "1s" },
  { x: "66%", y: "34%", size: 5, glimmer: "19s", drift: "27s", delay: "5s" },
  { x: "74%", y: "60%", size: 2, glimmer: "23s", drift: "33s", delay: "3s" },
  { x: "82%", y: "18%", size: 6, glimmer: "21s", drift: "29s", delay: "6s" },
  { x: "90%", y: "76%", size: 3, glimmer: "25s", drift: "36s", delay: "2.5s" },
  { x: "18%", y: "88%", size: 4, glimmer: "17s", drift: "24s", delay: "3.5s" },
  { x: "56%", y: "10%", size: 2, glimmer: "26s", drift: "38s", delay: "1.5s" },
];

/* ─── Small, dark, localized bloom points (never large aurora washes) ── */
const bloomPoints = [
  { x: "50%", y: "34%", size: 260, dur: "24s", delay: "0s" },
  { x: "12.5%", y: "62%", size: 200, dur: "28s", delay: "3s" },
  { x: "87.5%", y: "62%", size: 200, dur: "26s", delay: "6s" },
  { x: "50%", y: "8%", size: 180, dur: "30s", delay: "1.5s" },
];

function ShapeGlyph({ type }: { type: ShapeType }) {
  switch (type) {
    case "circle":
      return <div className="w-full h-full rounded-full border" style={{ borderColor: "rgba(168,85,247,0.14)" }} />;
    case "square":
      return <div className="w-full h-full border" style={{ borderColor: "rgba(168,85,247,0.13)" }} />;
    case "diamond":
      return (
        <div className="w-full h-full" style={{ transform: "rotate(45deg)" }}>
          <div className="w-full h-full border" style={{ borderColor: "rgba(199,125,255,0.13)" }} />
        </div>
      );
    case "hexagon":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" style={{ opacity: 0.12 }}>
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="none" stroke="#c77dff" strokeWidth="1.2" />
        </svg>
      );
    case "cross":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" style={{ opacity: 0.13 }}>
          <path d="M12 3v18M3 12h18" stroke="#c77dff" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
  }
}

/* ─── Shared discreet section background — grid, noise, shapes, particles,
   localized bloom and vignette, with a very small mouse-parallax response.
   No Aurora, no large color washes. Used by every section except Hero. ── */
export default function SectionAmbient({ isInView, sectionEl }: { isInView: boolean; sectionEl: HTMLElement | null }) {
  const midRef = useRef<HTMLDivElement>(null);
  const nearRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!sectionEl) return;

    const handleMove = (e: MouseEvent) => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = sectionEl.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        if (midRef.current) midRef.current.style.transform = `translate3d(${mx * 6}px, ${my * 5}px, 0)`;
        if (nearRef.current) nearRef.current.style.transform = `translate3d(${mx * 14}px, ${my * 10}px, 0)`;
      });
    };

    const handleLeave = () => {
      if (midRef.current) midRef.current.style.transform = "translate3d(0, 0, 0)";
      if (nearRef.current) nearRef.current.style.transform = "translate3d(0, 0, 0)";
    };

    sectionEl.addEventListener("mousemove", handleMove);
    sectionEl.addEventListener("mouseleave", handleLeave);
    return () => {
      sectionEl.removeEventListener("mousemove", handleMove);
      sectionEl.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [sectionEl]);

  return (
    <>
      {/* ── Technological grid — barely visible texture, faded at the edges ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 45%, black 10%, transparent 78%)",
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 45%, black 10%, transparent 78%)",
      }} />

      {/* ── Localized bloom — small, dark-purple, diffuse points (not Aurora) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 pointer-events-none"
      >
        {bloomPoints.map((b, i) => (
          <div
            key={i}
            className="ambient-safe absolute rounded-full"
            style={{
              left: b.x,
              top: b.y,
              width: b.size,
              height: b.size,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(76,29,149,0.10) 0%, transparent 72%)",
              filter: "blur(46px)",
              animation: `glow-breathe ${b.dur} ease-in-out infinite ${b.delay}`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </motion.div>

      {/* ── Mid layer: outline shapes (small parallax) ── */}
      <div ref={midRef} className="absolute inset-0 pointer-events-none" style={{ transition: "transform 0.5s cubic-bezier(0.16,0.8,0.24,1)" }}>
        {shapes.map((s, i) => (
          <div
            key={i}
            className="ambient-safe absolute pointer-events-none"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              animation: `shape-drift ${s.dur} linear infinite ${s.delay}`,
              willChange: "transform",
            }}
          >
            <ShapeGlyph type={s.type} />
          </div>
        ))}
      </div>

      {/* ── Near layer: micro-particles (larger parallax) ── */}
      <div ref={nearRef} className="absolute inset-0 pointer-events-none" style={{ transition: "transform 0.5s cubic-bezier(0.16,0.8,0.24,1)" }}>
        {microParticles.map((p, i) => (
          <div
            key={i}
            className="ambient-safe absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: "#c77dff",
              boxShadow: "0 0 3px rgba(199,125,255,0.5)",
              animation: `particle-glimmer ${p.glimmer} ease-in-out infinite ${p.delay}, particle-drift ${p.drift} ease-in-out infinite ${p.delay}`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* ── Noise texture — near-imperceptible grain ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── Vignette — barely-there edge darkening for depth ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 78% 68% at 50% 48%, transparent 55%, rgba(0,0,0,0.3) 100%)" }}
      />
    </>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import KodexIcon from "./KodexIcon";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Valores", href: "#valores" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

function MagneticButton({ children, className, href }: { children: React.ReactNode; className: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#05020A]/80 backdrop-blur-2xl border-b border-[rgba(170,120,255,0.1)] shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 focus:outline-none group"
            aria-label="Ir ao topo"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-purple-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <KodexIcon size={34} showBackground={false} className="relative flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="leading-none">
              <span className="text-[15px] font-bold tracking-tight">
                <span className="text-white/90 group-hover:text-white transition-colors">Kodex</span>
                <span className="text-purple-accent">Base</span>
              </span>
            </div>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group"
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={`relative z-10 transition-colors duration-200 ${isActive ? "text-white" : "text-text-muted hover:text-white"}`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.05] transition-colors duration-200" />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton
              href="https://wa.me/5527997644821"
              className="relative overflow-hidden px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-brand to-purple-accent hover:from-purple-accent hover:to-purple-brand transition-all duration-300 shadow-glow-sm hover:shadow-glow-purple shimmer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Fale conosco
              </span>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-white origin-center"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-[1.5px] bg-white"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-white origin-center"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[68px] left-3 right-3 z-40 glass rounded-2xl border border-[rgba(170,120,255,0.15)] py-3 px-2 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3.5 text-sm font-medium text-text-muted hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-200"
              >
                {link.label}
              </motion.button>
            ))}
            <div className="px-2 pt-2 pb-1">
              <a
                href="https://wa.me/5527997644821"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-brand to-purple-accent text-white text-sm font-semibold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Fale conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

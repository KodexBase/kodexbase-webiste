"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KodexIcon from "./KodexIcon";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Valores", href: "#valores" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 focus:outline-none group"
            aria-label="Ir ao topo"
          >
            <KodexIcon size={36} showBackground={false} className="flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="text-base font-bold tracking-tight">
              <span className="text-[#c4b8f0] group-hover:text-white transition-colors">Kodex</span>
              <span className="text-[#9D4EDD]">Base</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5527997644821"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-brand to-purple-neon text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Fale conosco
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-4 flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/5527997644821"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-purple-brand to-purple-neon text-white text-sm font-bold rounded-xl text-center"
            >
              Fale conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

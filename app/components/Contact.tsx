"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FormData { name: string; email: string; subject: string; message: string; }
type Status = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "kodexBase@gmail.com",
    href: "mailto:kodexBase@gmail.com",
    color: "text-purple-accent",
    bg: "bg-purple-accent/10",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+55 (27) 99764-4821",
    href: "https://wa.me/5527997644821",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/KodexBase",
    href: "https://github.com/KodexBase",
    color: "text-gray-300",
    bg: "bg-white/5",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao enviar mensagem.");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro desconhecido. Tente novamente.");
    }
  };

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#05020A" }} />

      {/* ── Section transitions ── */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0B0714, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0B0714, transparent)" }} />

      {/* ── Split lighting ── */}
      {/* Purple — right side (form) */}
      <div className="ambient-safe absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 100% 50%, rgba(109,40,217,0.10) 0%, transparent 70%)", animation: "glow-breathe 11s ease-in-out infinite", willChange: "transform, opacity" }} />
      {/* Green — left side (WhatsApp) */}
      <div className="ambient-safe absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 0% 50%, rgba(16,185,129,0.06) 0%, transparent 70%)", animation: "glow-breathe 14s ease-in-out infinite 3s", willChange: "transform, opacity" }} />

      {/* Center glow — enhanced */}
      <div className="ambient-safe absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(123,47,190,0.09) 0%, transparent 70%)", filter: "blur(90px)", animation: "glow-breathe 9s ease-in-out infinite 1s", willChange: "transform, opacity" }}
        />
      </div>

      {/* ── Noise ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.02,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }} />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(168,85,247,0.25)] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
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
            Entre em contato
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-accent" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Vamos construir{" "}
            <span className="gradient-text">juntos</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg leading-relaxed">
            Conte-nos sobre seu projeto. Respondemos em até 24 horas com uma proposta clara e honesta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl p-8 card-premium">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-text-muted tracking-wide">Nome</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} required
                      placeholder="Seu nome"
                      className="input-premium w-full rounded-xl px-4 py-3 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-text-muted tracking-wide">Email</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} required
                      placeholder="seu@email.com"
                      className="input-premium w-full rounded-xl px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted tracking-wide">Assunto</label>
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange} required
                    placeholder="Ex: Desenvolvimento de website"
                    className="input-premium w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-muted tracking-wide">Mensagem</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} required rows={5}
                    placeholder="Descreva seu projeto ou dúvida..."
                    className="input-premium w-full rounded-xl px-4 py-3 text-sm resize-none"
                  />
                </div>

                {/* Feedback */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 text-red-400 text-sm bg-red-400/[0.08] border border-red-400/20 rounded-xl px-4 py-3"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {errorMsg}
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 text-emerald-400 text-sm bg-emerald-400/[0.08] border border-emerald-400/20 rounded-xl px-4 py-3"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mensagem enviada! Entraremos em contato em breve.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="relative w-full py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden shimmer disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-glow-purple"
                  style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #A855F7 100%)" }}
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, #A855F7 0%, #c77dff 100%)" }} />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        Enviar mensagem
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact info */}
            <div className="rounded-2xl p-6 card-premium">
              <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-purple-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
                Informações de contato
              </h3>
              <div className="flex flex-col gap-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 group"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${info.bg} ${info.color} group-hover:scale-110 transition-transform duration-200`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted font-medium">{info.label}</div>
                      <div className={`text-xs font-semibold ${info.color} group-hover:underline`}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5527997644821"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-2xl p-6 border border-emerald-500/20 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]"
              style={{ background: "rgba(22,101,52,0.12)" }}
            >
              <div className="flex items-center gap-2 text-xs text-emerald-400/70 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Prefere algo mais rápido?
              </div>
              <span className="text-sm text-text-muted">Fale direto pelo WhatsApp e receba resposta em minutos.</span>
              <div className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#25D366] group-hover:bg-[#22c55e] text-white font-bold text-sm transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Abrir WhatsApp
              </div>
            </a>

            {/* Response time */}
            <div className="rounded-2xl p-5 text-center card-premium">
              <div className="text-4xl font-black gradient-text mb-1">24h</div>
              <div className="text-sm font-semibold text-white mb-0.5">Tempo médio de resposta</div>
              <div className="text-xs text-text-muted">Garantido em dias úteis</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

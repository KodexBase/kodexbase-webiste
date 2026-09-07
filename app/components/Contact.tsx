"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Code2, Mail, MessageCircle, Send } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = { name: "", email: "", company: "", projectType: "", budget: "", message: "", website: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível enviar a mensagem.");
      setForm(initialForm);
      setStatus("success");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Não foi possível enviar a mensagem.");
      setStatus("error");
    }
  }

  function updateField(name: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05020A] px-6 pb-24 pt-32" aria-labelledby="contact-title">
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-brand/15 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-accent">Diagnóstico inicial</p>
          <h1 id="contact-title" className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">Conte onde sua empresa trava.</h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">Não precisa chegar com a solução pronta. Descreva o processo, o retrabalho ou a oportunidade; retornaremos com perguntas e uma primeira direção em até 24 horas úteis.</p>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/[0.08] bg-[#0B0714] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Seu nome"><input required maxLength={80} value={form.name} onChange={(e) => updateField("name", e.target.value)} className="input-premium w-full rounded-xl px-4 py-3" placeholder="Como podemos chamar você?" /></Field>
              <Field label="Email"><input required type="email" maxLength={160} value={form.email} onChange={(e) => updateField("email", e.target.value)} className="input-premium w-full rounded-xl px-4 py-3" placeholder="voce@empresa.com" /></Field>
              <Field label="Empresa"><input required maxLength={120} value={form.company} onChange={(e) => updateField("company", e.target.value)} className="input-premium w-full rounded-xl px-4 py-3" placeholder="Nome da empresa" /></Field>
              <Field label="Tipo de projeto"><select required value={form.projectType} onChange={(e) => updateField("projectType", e.target.value)} className="input-premium w-full rounded-xl px-4 py-3"><option value="">Selecione</option><option>Website profissional</option><option>Sistema empresarial</option><option>Aplicativo mobile</option><option>Automação e integração</option><option>Ainda não sei</option></select></Field>
              <Field label="Faixa de investimento"><select required value={form.budget} onChange={(e) => updateField("budget", e.target.value)} className="input-premium w-full rounded-xl px-4 py-3"><option value="">Selecione</option><option>Até R$ 3 mil</option><option>R$ 3 mil a R$ 8 mil</option><option>R$ 8 mil a R$ 15 mil</option><option>Acima de R$ 15 mil</option><option>Preciso de orientação</option></select></Field>
              <div className="hidden" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => updateField("website", e.target.value)} /></label></div>
            </div>
            <div className="mt-5"><Field label="O que precisa funcionar melhor?"><textarea required maxLength={3000} rows={6} value={form.message} onChange={(e) => updateField("message", e.target.value)} className="input-premium w-full resize-none rounded-xl px-4 py-3" placeholder="Explique como o processo funciona hoje, o principal problema e quem usaria a solução." /></Field></div>

            {status === "success" && <div role="status" className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-3 text-sm text-emerald-300"><CheckCircle2 className="h-4 w-4" /> Mensagem recebida. Retornaremos em até 24 horas úteis.</div>}
            {status === "error" && <div role="alert" className="mt-5 rounded-xl border border-red-400/20 bg-red-400/[0.07] px-4 py-3 text-sm text-red-300">{error}</div>}

            <button disabled={status === "loading"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-brand to-purple-accent px-6 py-3.5 font-bold text-white disabled:opacity-60"><Send className="h-4 w-4" />{status === "loading" ? "Enviando..." : "Enviar diagnóstico"}</button>
            <p className="mt-3 text-center text-xs text-text-muted">Seus dados serão usados somente para responder ao contato.</p>
          </form>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-purple-accent/20 bg-purple-accent/[0.06] p-7">
              <h2 className="text-xl font-bold text-white">O que acontece depois?</h2>
              <ol className="mt-6 space-y-5 text-sm text-text-muted">
                <li><span className="mr-3 font-bold text-purple-300">01</span>Analisamos o contexto enviado.</li>
                <li><span className="mr-3 font-bold text-purple-300">02</span>Fazemos perguntas para eliminar suposições.</li>
                <li><span className="mr-3 font-bold text-purple-300">03</span>Indicamos escopo, direção e próximo passo.</li>
              </ol>
            </div>
            <ContactLink icon={MessageCircle} label="WhatsApp" value="+55 (27) 99764-4821" href="https://wa.me/5527997644821" />
            <ContactLink icon={Mail} label="Email" value="kodexBase@gmail.com" href="mailto:kodexBase@gmail.com" />
            <ContactLink icon={Code2} label="GitHub" value="github.com/KodexBase" href="https://github.com/KodexBase" />
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="flex flex-col gap-2 text-xs font-semibold text-gray-300">{label}{children}</label>;
}

function ContactLink({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0B0714] p-5 transition hover:border-purple-accent/30"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-300"><Icon className="h-4 w-4" /></span><span><span className="block text-xs text-text-muted">{label}</span><span className="mt-1 block text-sm font-semibold text-white">{value}</span></span></a>;
}

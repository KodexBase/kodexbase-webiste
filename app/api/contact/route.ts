import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const limits = { name: 80, email: 160, company: 120, projectType: 80, budget: 80, message: 3000 } as const;

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character] || character));
}

export async function POST(request: NextRequest) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json({ error: "Formato de envio inválido." }, { status: 415 });
    }

    const body = await request.json();
    if (body.website) return NextResponse.json({ success: true });

    const fields = {
      name: clean(body.name, limits.name),
      email: clean(body.email, limits.email).toLowerCase(),
      company: clean(body.company, limits.company),
      projectType: clean(body.projectType, limits.projectType),
      budget: clean(body.budget, limits.budget),
      message: clean(body.message, limits.message),
    };

    if (Object.values(fields).some((value) => !value)) {
      return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return NextResponse.json({ error: "Informe um email válido." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const destination = process.env.CONTACT_EMAIL;
    if (!apiKey || !destination) {
      console.error("Contact form environment variables are missing.");
      return NextResponse.json({ error: "O formulário está temporariamente indisponível. Use o WhatsApp." }, { status: 503 });
    }

    const safe = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, escapeHtml(value)])) as typeof fields;
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "KodexBase Website <onboarding@resend.dev>",
      to: destination,
      replyTo: fields.email,
      subject: `[Novo diagnóstico] ${fields.company} — ${fields.projectType}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;padding:32px;background:#0b0714;color:#fff;border-radius:16px">
          <p style="color:#c77dff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px">Novo contato pelo site</p>
          <h1 style="font-size:24px;margin:10px 0 26px">Diagnóstico — ${safe.company}</h1>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px;color:#aaa">Nome</td><td style="padding:8px">${safe.name}</td></tr>
            <tr><td style="padding:8px;color:#aaa">Email</td><td style="padding:8px">${safe.email}</td></tr>
            <tr><td style="padding:8px;color:#aaa">Projeto</td><td style="padding:8px">${safe.projectType}</td></tr>
            <tr><td style="padding:8px;color:#aaa">Investimento</td><td style="padding:8px">${safe.budget}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#160d25;border-left:3px solid #a855f7;border-radius:8px">
            <p style="margin:0 0 8px;color:#aaa;font-size:12px">Contexto enviado</p>
            <p style="margin:0;white-space:pre-wrap;line-height:1.65">${safe.message}</p>
          </div>
        </div>`,
    });

    if (error) {
      console.error("Resend contact error:", error.name);
      return NextResponse.json({ error: "Não foi possível enviar agora. Use o WhatsApp ou tente novamente." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Não foi possível processar a mensagem." }, { status: 400 });
  }
}

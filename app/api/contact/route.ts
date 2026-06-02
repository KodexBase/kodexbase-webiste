import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const destination = process.env.CONTACT_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Configuração do servidor incompleta." },
        { status: 500 }
      );
    }

    if (!destination) {
      return NextResponse.json(
        { error: "Configuração de email ausente no servidor." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "KodexBase Website <onboarding@resend.dev>",
      to: destination,
      replyTo: email,
      subject: `[KodexBase] ${subject}`,
      html: `
        <div style="font-family: Inter, sans-serif; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <div style="border-bottom: 2px solid #7B2FBE; padding-bottom: 20px; margin-bottom: 28px;">
            <h1 style="color: #9D4EDD; font-size: 22px; margin: 0;">
              Nova mensagem — KodexBase
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #888; width: 100px; vertical-align: top; font-size: 14px;">Nome</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; font-size: 14px;">
                <a href="mailto:${email}" style="color: #9D4EDD; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top; font-size: 14px;">Assunto</td>
              <td style="padding: 10px 0; color: #fff; font-size: 14px;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; background: #1a0030; border-radius: 8px; padding: 20px; border-left: 3px solid #7B2FBE;">
            <p style="color: #888; font-size: 12px; margin: 0 0 8px;">Mensagem</p>
            <p style="color: #e0e0e0; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 28px; color: #555; font-size: 12px; text-align: center;">
            KodexBase — Full Stack Development
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Falha ao enviar o email. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

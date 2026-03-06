import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nome = String(body.nome ?? "").trim();
    const empresa = String(body.empresa ?? "").trim();
    const email = String(body.email ?? "").trim();
    const telefone = String(body.telefone ?? "").trim();
    const tipo = String(body.tipo ?? "").trim();
    const mensagem = String(body.mensagem ?? "").trim();

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios: nome, email e mensagem." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de e-mail inválido." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const tipoLabel: Record<string, string> = {
      orcamento: "Solicitação de Orçamento",
      suporte: "Suporte Técnico",
      comercial: "Contato Comercial",
      outro: "Outro",
    };

    await transporter.sendMail({
      from: `"Site Magneto Brasil" <${process.env.SMTP_USER}>`,
      to: "davidsrevolute@gmail.com",
      replyTo: email,
      subject: `[Site] ${tipoLabel[tipo] || "Contato"} - ${nome}`,
      html: `
        <h2>Nova mensagem via site</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Nome</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(nome)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Empresa</td><td style="padding:8px;border-bottom:1px solid #eee">${empresa ? escapeHtml(empresa) : "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">E-mail</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Telefone</td><td style="padding:8px;border-bottom:1px solid #eee">${telefone ? escapeHtml(telefone) : "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Tipo</td><td style="padding:8px;border-bottom:1px solid #eee">${tipoLabel[tipo] || "—"}</td></tr>
        </table>
        <h3 style="margin-top:24px">Mensagem</h3>
        <p style="white-space:pre-wrap;background:#f8f9fa;padding:16px;border-radius:8px">${escapeHtml(mensagem)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}

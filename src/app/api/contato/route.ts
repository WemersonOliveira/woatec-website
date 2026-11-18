
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Tecnologia e Engenharia Digital",
  "Marketing Digital e Performance",
  "Comunicação e Social Media",
  "Solução integrada",
  "Preciso de orientação",
]);

const clean = (value: unknown, limit: number) =>
  typeof value === "string" ? value.trim().slice(0, limit + 1) : "";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json(
      { error: "Origem não permitida." },
      { status: 403 }
    );
  }

  if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
    return NextResponse.json(
      { error: "Formato inválido." },
      { status: 415 }
    );
  }

  if (Number(request.headers.get("content-length") || 0) > 12000) {
    return NextResponse.json(
      { error: "Solicitação muito grande." },
      { status: 413 }
    );
  }

  let body: Record<string, unknown>;

  try {
    const value: unknown = await request.json();

    if (!value || typeof value !== "object" || Array.isArray(value)) {
      throw new Error("invalid");
    }

    body = value as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Dados inválidos." },
      { status: 400 }
    );
  }

  // Honeypot
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 254);
  const whatsapp = clean(body.phone, 24);
  const service = clean(body.service, 80);
  const message = clean(body.description, 3000);
  const accepted = body.privacyAccepted === true;

  if (
    name.length < 2 ||
    name.length > 120 ||
    company.length > 160 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    whatsapp.length > 24 ||
    (whatsapp.length > 0 &&
      (!/^\+?[\d\s().-]+$/.test(whatsapp) ||
        ![10, 11, 12, 13, 14, 15].includes(
          whatsapp.replace(/\D/g, "").length
        ))) ||
    !allowedServices.has(service) ||
    message.length < 20 ||
    message.length > 3000 ||
    !accepted
  ) {
    return NextResponse.json(
      {
        error:
          "Confira os campos obrigatórios e a ciência da política de privacidade.",
      },
      { status: 400 }
    );
  }

  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;

  if (
    !url ||
    !secret ||
    !/^https:\/\/[^/]+$/.test(url.replace(/\/$/, ""))
  ) {
    console.error("WOA TEC: variáveis do Supabase ausentes ou inválidas.");

    return NextResponse.json(
      { error: "Envio temporariamente indisponível." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(
      `${url.replace(/\/$/, "")}/rest/v1/woatec_contacts`,
      {
        method: "POST",
        headers: {
          apikey: secret,
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name,
          company: company || null,
          email,
          whatsapp: whatsapp || null,
          service,
          message,
          privacy_acknowledged: true,
          privacy_notice_version: "2026-11-12",
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.text();

      console.error("WOA TEC: erro ao gravar contato.", {
        status: response.status,
        details: errorDetails.slice(0, 1000),
      });

      return NextResponse.json(
        { error: "Não foi possível enviar agora. Tente novamente." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("WOA TEC: falha na comunicação com Supabase.", error);

    return NextResponse.json(
      { error: "Serviço indisponível. Tente novamente." },
      { status: 503 }
    );
  }
}

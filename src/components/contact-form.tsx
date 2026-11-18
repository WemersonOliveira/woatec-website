"use client";

import Link from "next/link";
import { useState } from "react";

type Fields = "name" | "company" | "email" | "phone" | "service" | "description";
const initial = { name: "", company: "", email: "", phone: "", service: "", description: "" };

export function ContactForm({ plan }: { plan?: string }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot invisible to real users

  const props = (key: Fields) => ({
    id: key,
    value: values[key],
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      setStatus("");
    },
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });
  const error = (key: Fields) => errors[key] ? <p id={`${key}-error`} className="field-error">{errors[key]}</p> : null;

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const next: Partial<Record<Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Informe seu nome com pelo menos 2 caracteres.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Informe um e-mail válido.";
    if (values.phone && (!/^\+?[\d\s().-]+$/.test(values.phone) ||
      values.phone.replace(/\D/g, "").length < 10 || values.phone.replace(/\D/g, "").length > 15)) next.phone = "Informe um telefone válido com DDD.";
    if (!values.service) next.service = "Selecione o tipo de serviço.";
    if (values.description.trim().length < 20) next.description = "Descreva o projeto com pelo menos 20 caracteres.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) { document.getElementById(first)?.focus(); return; }
    if (!privacyAccepted) { setStatus("Confirme que leu a política de privacidade para prosseguir."); return; }
    setBusy(true);
    setStatus("Enviando solicitação...");
    try {
      const response = await fetch("/api/contato", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, plan, privacyAccepted, website }),
      });
      const data: { ok?: boolean; error?: string } = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || "Não foi possível enviar sua solicitação.");
      setValues(initial);
      setPrivacyAccepted(false);
      setStatus("Solicitação enviada com sucesso! Nossa equipe poderá entrar em contato.");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Falha no envio. Tente novamente.");
    } finally { setBusy(false); }
  }

  return (
    <form noValidate onSubmit={submit} aria-describedby="form-notice">
      <div className="notice mb-8" id="form-notice">
        Seus dados serão utilizados para responder à sua solicitação comercial, conforme a política de privacidade.
      </div>
      {plan && <p className="selected-plan">Plano de interesse: <strong>{plan}</strong></p>}
      <p className="small mb-6">* Campos obrigatórios</p>
      <div className="form-grid">
        <div><label htmlFor="name">Nome *</label><input {...props("name")} autoComplete="name" required maxLength={120} placeholder="Como podemos chamar você?" />{error("name")}</div>
        <div><label htmlFor="company">Empresa ou instituição</label><input {...props("company")} autoComplete="organization" maxLength={160} placeholder="Nome da organização" /></div>
        <div><label htmlFor="email">E-mail *</label><input {...props("email")} type="email" autoComplete="email" required maxLength={254} placeholder="voce@empresa.com.br" />{error("email")}</div>
        <div><label htmlFor="phone">WhatsApp</label><input {...props("phone")} type="tel" autoComplete="tel" maxLength={24} placeholder="(00) 00000-0000" />{error("phone")}</div>
        <div className="full"><label htmlFor="service">Tipo de serviço *</label><select {...props("service")} required>
          <option value="">Selecione uma opção</option>
          <option>Tecnologia e Engenharia Digital</option><option>Marketing Digital e Performance</option><option>Comunicação e Social Media</option><option>Solução integrada</option><option>Preciso de orientação</option>
        </select>{error("service")}</div>
        <div className="full"><label htmlFor="description">Descrição do projeto *</label><textarea {...props("description")} rows={5} required minLength={20} maxLength={3000} placeholder="Conte sobre sua ideia, seus objetivos e suas necessidades." />{error("description")}</div>
      </div>
      <div style={{ position: "absolute", left: "-10000px" }} aria-hidden="true">
        <label htmlFor="website">Site</label><input tabIndex={-1} autoComplete="off" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <label style={{ display: "flex", alignItems: "start", gap: 8, marginTop: 20 }}>
        <input type="checkbox" checked={privacyAccepted} onChange={(e) => setPrivacyAccepted(e.target.checked)} required />
        <span>Li as informações de tratamento dos dados na <Link href="/privacidade">Política de Privacidade</Link> e estou ciente do uso para responder à minha solicitação. *</span>
      </label>
      <button disabled={busy} type="submit" className="button button-primary mt-7">
        {busy ? "Enviando..." : "Enviar solicitação"} <span aria-hidden="true">↗</span>
      </button>
      <p role="status" aria-live="polite" className="form-status">{status}</p>
    </form>
  );
}

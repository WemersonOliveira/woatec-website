"use client";
import { useState } from "react";
type Fields =
  "name" | "company" | "email" | "phone" | "service" | "description";
const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  description: "",
};
export function ContactForm({ plan }: { plan?: string }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [checked, setChecked] = useState(false);
  function validate() {
    const next: Partial<Record<Fields, string>> = {};
    if (values.name.trim().length < 2)
      next.name = "Informe seu nome com pelo menos 2 caracteres.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Informe um e-mail válido.";
    if (values.phone && !/^\+?[\d\s().-]+$/.test(values.phone))
      next.phone = "Use apenas números e sinais de telefone.";
    else if (
      values.phone &&
      (values.phone.replace(/\D/g, "").length < 10 ||
        values.phone.replace(/\D/g, "").length > 15)
    )
      next.phone = "Informe um telefone com DDD, entre 10 e 15 dígitos.";
    if (!values.service) next.service = "Selecione o tipo de serviço.";
    if (values.description.trim().length < 20)
      next.description = "Descreva o projeto com pelo menos 20 caracteres.";
    setErrors(next);
    setChecked(Object.keys(next).length === 0);
    const first = Object.keys(next)[0];
    if (first) document.getElementById(first)?.focus();
  }
  const props = (key: Fields) => ({
    id: key,
    value: values[key],
    onChange: (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setValues({ ...values, [key]: event.target.value });
      setChecked(false);
      setErrors({ ...errors, [key]: undefined });
    },
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });
  const error = (key: Fields) =>
    errors[key] ? (
      <p id={`${key}-error`} className="field-error">
        {errors[key]}
      </p>
    ) : null;
  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        validate();
      }}
      aria-describedby="form-notice"
    >
      <div className="notice mb-8" id="form-notice">
        O envio será habilitado na etapa de integração com o backend. Você pode
        conferir o preenchimento, mas nenhum dado será enviado ou armazenado por
        esta aplicação.
      </div>
      {plan && (
        <p className="selected-plan">
          Plano de interesse: <strong>{plan}</strong>
        </p>
      )}
      <p className="small mb-6">* Campos obrigatórios</p>
      <div className="form-grid">
        <div>
          <label htmlFor="name">Nome *</label>
          <input
            {...props("name")}
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Como podemos chamar você?"
          />
          {error("name")}
        </div>
        <div>
          <label htmlFor="company">Empresa ou instituição</label>
          <input
            {...props("company")}
            autoComplete="organization"
            maxLength={160}
            placeholder="Nome da organização"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail *</label>
          <input
            {...props("email")}
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="voce@empresa.com.br"
          />
          {error("email")}
        </div>
        <div>
          <label htmlFor="phone">WhatsApp</label>
          <input
            {...props("phone")}
            type="tel"
            autoComplete="tel"
            maxLength={24}
            placeholder="(00) 00000-0000"
          />
          {error("phone")}
        </div>
        <div className="full">
          <label htmlFor="service">Tipo de serviço *</label>
          <select {...props("service")} required>
            <option value="">Selecione uma opção</option>
            <option>Tecnologia e Engenharia Digital</option>
            <option>Marketing Digital e Performance</option>
            <option>Comunicação e Social Media</option>
            <option>Solução integrada</option>
            <option>Preciso de orientação</option>
          </select>
          {error("service")}
        </div>
        <div className="full">
          <label htmlFor="description">Descrição do projeto *</label>
          <textarea
            {...props("description")}
            rows={5}
            required
            minLength={20}
            maxLength={3000}
            placeholder="Conte sobre sua ideia, seus objetivos e suas necessidades."
          />
          {error("description")}
        </div>
      </div>
      <button type="submit" className="button button-primary mt-7">
        Conferir preenchimento <span aria-hidden="true">↗</span>
      </button>
      <p role="status" className="form-status">
        {checked
          ? "Preenchimento válido. Nenhum dado foi enviado. O envio ainda não está disponível."
          : Object.keys(errors).some((key) => errors[key as Fields])
            ? "Revise os campos indicados para conferir o preenchimento."
            : "Esta conferência acontece apenas nesta página."}
      </p>
    </form>
  );
}

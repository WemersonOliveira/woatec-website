import Image from "next/image";
import Link from "next/link";
import { site, specialties, getWhatsAppUrl } from "@/config/site";
import type { ReactNode } from "react";
import { ProjectPreview } from "@/components/project-preview";

export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" aria-label="WOA TEC — Início" className="logo">
      <Image
        src={site.logo}
        fill
        sizes="(max-width: 800px) 192px, 216px"
        alt="WOA TEC — Soluções Digitais"
        priority={priority}
      />
    </Link>
  );
}
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="intro-band">
      <div className="page-intro container">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="lead">{children}</p>
      </div>
    </section>
  );
}
export function SpecialtyCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div
      className={`specialty-grid${detailed ? " specialty-grid-detailed" : ""}`}
    >
      {specialties.map((item) => (
        <article
          className="specialty-card"
          key={item.number}
          id={
            detailed
              ? ["tecnologia", "marketing", "comunicacao"][
                  Number(item.number) - 1
                ]
              : undefined
          }
        >
          <div className="card-top">
            <span className="service-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                focusable="false"
              >
                {item.number === "01" ? (
                  <>
                    <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />
                  </>
                ) : item.number === "02" ? (
                  <>
                    <path d="M4 20h16M6 16v-4m6 4V8m6 8V4M4 8l6-5 5 2 5-3" />
                  </>
                ) : (
                  <>
                    <path d="M4 5h16v12H9l-5 4V5Z" />
                    <path d="M8 9h8m-8 4h5" />
                  </>
                )}
              </svg>
            </span>
            <span>{item.number} /</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="service-content">
            <ul className="service-list">
              {item.items.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          {!detailed && (
            <Link className="text-link" href="/solucoes">
              Explorar soluções <span aria-hidden="true">→</span>
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
export function ProjectCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[
        "Experiências e plataformas digitais",
        "Presença e comunicação digital",
      ].map((title, i) => (
        <article className="project-card" key={title}>
          <div className={`project-placeholder project-${i}`}>
            <span className="placeholder-tag">
              PLACEHOLDER · SEM PROJETO PUBLICADO
            </span>
            <ProjectPreview />
            <span className="placeholder-bottom">
              Espaço reservado para imagem autorizada
            </span>
          </div>
          <div className="project-caption">
            <h3>{title}</h3>
            <span aria-hidden="true">↗</span>
          </div>
          <p>Apresentação disponível após seleção e autorização do material.</p>
        </article>
      ))}
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="container">
      <div className="contact-cta">
        <div>
          <p className="eyebrow">O PRÓXIMO PASSO</p>
          <h2>Vamos construir o próximo passo do seu negócio?</h2>
          <p className="cta-description">
            Conte sua ideia, seus desafios e seus objetivos. Vamos entender sua
            necessidade e explorar a solução digital mais adequada para o seu
            projeto.
          </p>
        </div>
        <div className="cta-actions">
          <ButtonLink href="/contato">Solicitar uma proposta</ButtonLink>
          <WhatsAppButton label="Falar pelo WhatsApp" />
        </div>
      </div>
    </section>
  );
}
export function WhatsAppButton({
  label = "Conversar pelo WhatsApp",
}: {
  label?: string;
}) {
  const url = getWhatsAppUrl();
  return url ? (
    <a
      className="button button-secondary"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  ) : (
    <div>
      <button className="button button-secondary" disabled>
        {label}
      </button>
      <p className="small mt-3">Canal aguardando configuração oficial.</p>
    </div>
  );
}

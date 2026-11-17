import type { Metadata } from "next";
import { PageIntro, ContactCTA } from "@/components/ui";
import { process } from "@/config/site";
export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a WOA TEC — Soluções Digitais: tecnologia, marketing e comunicação para sua operação.",
  alternates: { canonical: "/sobre" },
};
export default function About() {
  return (
    <>
      <PageIntro
        label="SOBRE A WOA TEC"
        title="Conectamos ideias, pessoas e tecnologia."
      >
        A WOA TEC — Soluções Digitais é uma empresa brasileira que oferece
        tecnologia, marketing e comunicação para pequenas empresas,
        profissionais, instituições e organizações.
      </PageIntro>
      <section className="container about-grid section-bottom">
        <h2>
          Um olhar para o todo.
          <br />
          <span className="gold">Atenção a cada detalhe.</span>
        </h2>
        <div>
          <p className="lead">
            Uma presença digital envolve estratégia, experiência e continuidade.
            Nossa proposta é aproximar essas frentes para construir soluções
            alinhadas ao contexto de cada projeto.
          </p>
          <p className="mt-6 muted">
            O trabalho parte de uma conversa sobre necessidades e prioridades,
            com escopo definido antes da execução e espaço para planejar os
            próximos passos.
          </p>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container">
          <p className="eyebrow">NOSSO PROCESSO</p>
          <h2 className="mb-10">Da conversa à construção.</h2>
          <div className="process-grid">
            {process.map(([title, text], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

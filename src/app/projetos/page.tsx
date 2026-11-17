import type { Metadata } from "next";
import { PageIntro, ProjectCards, ContactCTA } from "@/components/ui";
export const metadata: Metadata = {
  title: "Projetos",
  description: "Espaço para o portfólio e os cases autorizados da WOA TEC.",
  alternates: { canonical: "/projetos" },
};
export default function Projects() {
  return (
    <>
      <PageIntro label="PORTFÓLIO & CASES" title="Experiência que ganha forma.">
        Este espaço está sendo preparado para apresentar trabalhos e
        experiências técnicas com contexto, escopo e materiais autorizados.
      </PageIntro>
      <section
        className="container section-bottom"
        aria-label="Portfólio em preparação"
      >
        <div className="notice mb-8">
          Portfólio em preparação. Os espaços abaixo são placeholders visuais e
          não representam projetos publicados, clientes ou resultados
          comprovados.
        </div>
        <ProjectCards />
      </section>
      <ContactCTA />
    </>
  );
}

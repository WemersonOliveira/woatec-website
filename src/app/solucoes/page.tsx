import type { Metadata } from "next";
import { PageIntro, SpecialtyCards, ContactCTA } from "@/components/ui";
export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Tecnologia, marketing e comunicação conectados às necessidades da sua operação.",
  alternates: { canonical: "/solucoes" },
};
export default function Solutions() {
  return (
    <>
      <PageIntro
        label="NOSSAS SOLUÇÕES"
        title="Três especialidades. Uma visão integrada."
      >
        Tecnologia, marketing e comunicação para pequenas empresas,
        profissionais, instituições e organizações.
      </PageIntro>
      <section className="container section-bottom" aria-label="Especialidades">
        <SpecialtyCards detailed />
        <p className="section-note">
          Cada projeto começa pela definição do escopo. As frentes podem ser
          contratadas de forma independente ou combinadas conforme a
          necessidade.
        </p>
      </section>
      <ContactCTA />
    </>
  );
}

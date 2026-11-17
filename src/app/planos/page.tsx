import type { Metadata } from "next";
import { PageIntro, ButtonLink } from "@/components/ui";
import { pricing, formatPrice } from "@/config/plans";
export const metadata: Metadata = {
  title: "Planos",
  description:
    "Conheça as referências de investimento para projetos fechados e planos mensais da WOA TEC.",
  alternates: { canonical: "/planos" },
};
export default function Plans() {
  return (
    <>
      <PageIntro
        label="FORMATOS DE CONTRATAÇÃO"
        title="O formato certo para o seu momento."
      >
        Projetos com escopo definido ou serviços contínuos. Duas categorias
        independentes para diferentes necessidades.
      </PageIntro>
      <div className="container section-bottom">
        <p className="notice mb-12">
          Valores de referência, sujeitos à definição de escopo. Entregas,
          prazos e condições serão estabelecidos em proposta personalizada.
        </p>
        {[
          {
            title: "Projetos fechados",
            text: "Para uma entrega com escopo, etapas e conclusão definidos.",
            plans: pricing.projects,
            monthly: false,
          },
          {
            title: "Planos mensais",
            text: "Para serviços recorrentes, com atividades e prioridades acordadas.",
            plans: pricing.monthly,
            monthly: true,
          },
        ].map((group) => (
          <section className="pricing-section" key={group.title}>
            <h2>{group.title}</h2>
            <p className="muted mt-3 mb-7">{group.text}</p>
            <div
              className={`grid gap-4 md:grid-cols-2 ${group.monthly ? "xl:grid-cols-4" : "xl:grid-cols-3"}`}
            >
              {group.plans.map((plan) => (
                <article className="price-card" key={plan.name}>
                  <p className="eyebrow">
                    {group.monthly ? "CONTINUIDADE" : "PROJETO"}
                  </p>
                  <h3>{plan.name}</h3>
                  <div className="price">
                    {pricing.visible ? (
                      <>
                        {"startingAt" in plan && plan.startingAt && (
                          <small>A partir de</small>
                        )}
                        {formatPrice(plan.price)}
                        {group.monthly && <span>/mês</span>}
                      </>
                    ) : (
                      "Sob consulta"
                    )}
                  </div>
                  <p>
                    Escopo e entregas definidos conforme as necessidades do seu
                    projeto.
                  </p>
                  <ButtonLink
                    href={`/contato?plano=${encodeURIComponent(plan.name)}`}
                    secondary
                  >
                    Consultar escopo
                  </ButtonLink>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

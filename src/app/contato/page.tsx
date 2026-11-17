import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, WhatsAppButton } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { pricing } from "@/config/plans";
export const metadata: Metadata = {
  title: "Contato",
  description:
    "Prepare sua solicitação de proposta para a WOA TEC. Formulário em fase de integração.",
  alternates: { canonical: "/contato" },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ plano?: string }>;
}) {
  const { plano } = await searchParams;
  const plan = [...pricing.projects, ...pricing.monthly].find(
    (item) => item.name === plano,
  )?.name;
  return (
    <>
      <PageIntro label="VAMOS CONVERSAR" title="O que você quer construir?">
        Compartilhe o contexto do seu projeto. O primeiro passo é entender o que
        faz sentido para sua operação.
      </PageIntro>
      <section
        className="container contact-grid section-bottom"
        aria-label="Solicitação de proposta"
      >
        <ContactForm plan={plan} />
        <aside className="contact-aside">
          <p className="eyebrow">CONEXÕES QUE IMPORTAM</p>
          <h2>Uma boa solução começa com escuta.</h2>
          <p>
            Conte o que você precisa, em que momento está e quais desafios
            deseja resolver.
          </p>
          <div className="aside-divider" />
          <WhatsAppButton />
          <Link className="text-link mt-8" href="/privacidade">
            Informações de privacidade →
          </Link>
        </aside>
      </section>
    </>
  );
}

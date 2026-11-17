import { PageIntro, ButtonLink } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageIntro
        label="404 — PÁGINA NÃO ENCONTRADA"
        title="Vamos encontrar outro caminho."
      >
        O endereço acessado não corresponde a uma página disponível.
      </PageIntro>
      <div className="container section-bottom">
        <ButtonLink href="/">Voltar ao início</ButtonLink>
      </div>
    </>
  );
}

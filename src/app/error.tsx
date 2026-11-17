"use client";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container page-intro">
      <p className="eyebrow">ALGO NÃO SAIU COMO ESPERADO</p>
      <h1>Não foi possível carregar esta página.</h1>
      <p className="lead">Tente novamente para continuar a navegação.</p>
      <button className="button button-primary mt-8" onClick={reset}>
        Tentar novamente
      </button>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink, SpecialtyCards, ContactCTA } from "@/components/ui";
import { site, process } from "@/config/site";
import { DigitalGlobe } from "@/components/digital-globe";
import {
  InstitutionalSection,
  InstagramSection,
  BrandStrip,
} from "@/components/institutional-sections";
import { HomeCases } from "@/components/home-cases";
import "./woa-home.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero-band woa-hero-band">
        <div className="hero container woa-home-hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> ESTRATÉGIA. TECNOLOGIA. CONEXÃO.
            </p>
            <h1>
              Transformamos<br />
              projetos em<br />
              <span>operações digitais.</span>
            </h1>
            <p className="lead">
              Tecnologia, marketing e comunicação integrados para gerar
              presença, engajamento e resultados reais.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contato">Solicitar uma proposta</ButtonLink>
              <ButtonLink href="/solucoes" secondary>
                Conhecer nossas soluções
              </ButtonLink>
            </div>
            <p className="hero-audience">
              Para pequenas empresas, profissionais e organizações.
            </p>
          </div>
          <div className="woa-hero-art">
            <div className="woa-globe-glow" aria-hidden="true" />
            {site.globe ? (
              <div className="woa-globe-illustration">
                <Image
                  src={site.globe}
                  alt="Globo digital dourado da WOA TEC, símbolo de conexão e tecnologia"
                  fill
                  priority
                  sizes="(max-width: 900px) 95vw, 46vw"
                  className="woa-globe-transparent"
                />
              </div>
            ) : (
              <DigitalGlobe />
            )}
            <span className="woa-hero-caption" aria-hidden="true">
              TECNOLOGIA · ESTRATÉGIA · CONEXÃO
            </span>
          </div>
        </div>
      </section>

      <div className="expertise-strip">
        <div className="container">
          <span>Tecnologia &amp; engenharia</span>
          <span aria-hidden="true">✳</span>
          <span>Marketing &amp; performance</span>
          <span aria-hidden="true">✳</span>
          <span>Comunicação &amp; social media</span>
        </div>
      </div>

      <section className="section container solutions-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 — NOSSAS SOLUÇÕES</p>
            <h2>
              Seu negócio tem um próximo passo.<br />
              Nós ajudamos a construir.
            </h2>
          </div>
          <p>
            Uma visão integrada para transformar
            <br className="hidden md:block" /> necessidades em soluções digitais.
          </p>
        </div>
        <SpecialtyCards />
      </section>

      <section className="section section-tinted woa-cases-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 — PROJETOS</p>
              <h2>Projetos reais. Soluções com propósito.</h2>
            </div>
            <Link className="text-link" href="/projetos">
              Conhecer o portfólio <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <HomeCases />
        </div>
      </section>

      <InstitutionalSection />

      {/* A águia é símbolo da WOA TEC, não fotografia de nenhum case. */}
      <section className="woa-eagle-band" aria-labelledby="woa-eagle-title">
        <div className="container woa-eagle-grid">
          <div className="woa-eagle-copy">
            <p className="eyebrow">VISÃO ESTRATÉGICA</p>
            <h2 id="woa-eagle-title">
              Uma visão ampla.<br />
              <span>Atenção a cada detalhe.</span>
            </h2>
            <p>
              Transformamos desafios digitais em caminhos claros, combinando
              estratégia, tecnologia e comunicação para cada projeto.
            </p>
            <Link href="/sobre" className="woa-eagle-link">
              Conheça a WOA TEC <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="woa-eagle-art">
            <Image
              src={site.eagle}
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
              alt="Águia tecnológica da identidade visual WOA TEC"
              className="woa-eagle-image"
            />
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 — COMO TRABALHAMOS</p>
            <h2>Clareza em cada etapa.</h2>
          </div>
          <p>
            Do primeiro entendimento<br />à evolução do projeto.
          </p>
        </div>
        <div className="process-grid">
          {process.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <InstagramSection />
      <BrandStrip />
      <ContactCTA />
    </>
  );
}

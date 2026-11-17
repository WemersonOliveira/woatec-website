import Link from "next/link";
import { getInstagramProfile } from "@/config/site";

export function InstitutionalSection() {
  return (
    <section
      className="institutional-section"
      aria-labelledby="institutional-title"
    >
      <div className="container institutional-grid">
        <div>
          <p className="eyebrow">03 — ESTRUTURA PARA CRESCER</p>
          <h2 id="institutional-title">
            Sua presença digital precisa de estrutura,{" "}
            <span>não de improviso.</span>
          </h2>
        </div>
        <div className="institutional-copy">
          <p>
            Na WOA TEC, conectamos tecnologia, marketing e comunicação para
            transformar necessidades em soluções digitais bem planejadas.
          </p>
          <p>
            Cada projeto é desenvolvido com atenção à estratégia, à experiência
            do usuário e aos objetivos de quem deseja construir ou fortalecer
            sua presença digital.
          </p>
          <Link href="/sobre" className="text-link">
            Conheça a WOA TEC <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="connection-diagram" aria-hidden="true">
          <span>TECNOLOGIA</span>
          <i />
          <span>ESTRATÉGIA</span>
          <i />
          <span>COMUNICAÇÃO</span>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5ZM12 6.85a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3Zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Zm5.35-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  );
}

export function InstagramSection() {
  const profile = getInstagramProfile();
  return (
    <section className="social-section" aria-labelledby="social-title">
      <div className="container social-grid">
        <div className="social-copy">
          <p className="eyebrow">05 — PRESENÇA DIGITAL</p>
          <h2 id="social-title">
            Continue conectado
            <br />à WOA TEC.
          </h2>
          <p>
            Acompanhe nossos conteúdos, bastidores, novidades e a evolução dos
            projetos que conectam tecnologia, estratégia e comunicação.
          </p>
        </div>
        <article className="instagram-card">
          <div className="instagram-heading">
            <span className="instagram-icon">
              <InstagramIcon />
            </span>
            <div>
              <h3>WOA TEC</h3>
              <p>{profile?.handle ?? "Perfil oficial a confirmar"}</p>
            </div>
            <span className="social-platform">INSTAGRAM</span>
          </div>
          <p>
            Tecnologia, estratégia e comunicação. Um espaço para acompanhar a
            WOA TEC mais de perto.
          </p>
          <div className="instagram-action">
            {profile ? (
              <a
                className="button button-primary"
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acessar Instagram <span aria-hidden="true">↗</span>
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            ) : (
              <>
                <button
                  className="button button-secondary"
                  type="button"
                  disabled
                  aria-describedby="instagram-pending"
                >
                  Acessar Instagram <span aria-hidden="true">↗</span>
                </button>
                <p id="instagram-pending">
                  O link será disponibilizado após a confirmação do perfil
                  oficial.
                </p>
              </>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

export function BrandStrip() {
  return (
    <div className="brand-strip">
      <div className="container">
        <p>
          Tecnologia <span>com estratégia.</span>
        </p>
        <p>
          Comunicação <span>com clareza.</span>
        </p>
        <p>
          Presença digital <span>com propósito.</span>
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";

const cases = [
  {
    number: "01",
    type: "SITE INSTITUCIONAL",
    title: "WOA Talk — Site Institucional",
    description: "Apresentação institucional, organização de conteúdo e experiência digital para uma escola de idiomas.",
    image: "/images/woatalk.png",
    width: 1352,
    height: 633,
    cropTop: 79,
    cropWidth: 1344,
    community: "WOA Talk",
    communityDescription: "Avisos, conteúdos e acesso",
    href: "https://woatalk.com",
    link: "Visitar o site",
  },
  {
    number: "02",
    type: "CAMPANHA DIGITAL",
    title: "Black November — Campanha Digital",
    description: "Página promocional com apresentação da campanha Black November e informações de inscrição.",
    image: "/images/blacknovember.png",
    width: 1313,
    height: 589,
    cropTop: 78,
    cropWidth: 1313,
    community: "Black November",
    communityDescription: "Aulas, avisos e acesso",
    href: "https://woatalk.com.br/blacknovember",
    link: "Conhecer a campanha",
  },
] as const;

export function HomeCases() {
  return (
    <div className="woa-cases-grid">
      {cases.map((project) => (
        <article className="woa-case-card" key={project.number}>
          <div className="woa-case-media">
            {/* Recorte apenas visual: exclui o navegador e a barra de rolagem. */}
            <div className="woa-case-crop" style={{ aspectRatio: `${project.cropWidth} / ${project.height - project.cropTop}` }}>
              <Image
                src={project.image}
                alt={`Captura real: ${project.title}`}
                width={project.width}
                height={project.height}
                sizes="(max-width: 900px) 90vw, 43vw"
                className="woa-case-screenshot"
                style={{ width: `${project.width / project.cropWidth * 100}%`, top: `${-project.cropTop / (project.height - project.cropTop) * 100}%` }}
              />
            </div>
            <figure className="woa-community-preview">
              <div className="woa-community-phone" aria-hidden="true">
                <span className="woa-community-speaker" />
                <div className="woa-community-screen">
                  <div className="woa-community-platform">
                    <span>WhatsApp</span><span>⋮</span>
                  </div>
                  <div className="woa-community-details">
                    <span className="woa-community-avatar">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 11.5a8 8 0 0 1-12 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
                        <path d="M8 8c1 4 3 6 7 7l1-2-3-1-1 1-1-1 1-1-2-3H8Z" />
                      </svg>
                    </span>
                    <strong>{project.community}</strong>
                    <span className="woa-community-label">Comunidade</span>
                    <span className="woa-community-note">{project.communityDescription}</span>
                    <span className="woa-community-access">Acessar conteúdo</span>
                    <span className="woa-community-disclaimer">Preview ilustrativo</span>
                  </div>
                </div>
              </div>
              <figcaption className="sr-only">Comunidade {project.community} no WhatsApp. {project.communityDescription}. Preview ilustrativo, sem interação.</figcaption>
            </figure>
          </div>
          <div className="woa-case-info">
            <p className="eyebrow">{project.number} — {project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
              {project.link} <span aria-hidden="true">↗</span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

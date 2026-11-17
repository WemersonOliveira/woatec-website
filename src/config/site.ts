

export const site = {
  name: "WOA TEC",
  url: "https://woatec.com.br",

  description:
    "Integramos tecnologia, marketing e comunicação para desenvolver soluções digitais que geram presença, oportunidades e resultados.",

  logo: "/brand/woa-tec-logo.png",

  globe: "/images/globo-woatec-transparente.png",

  eagle: "/images/aguia-woatec.png",

  whatsapp: "556181176884" as string | null,
  whatsappMessage:
    "Olá, Oliver! Conheci a WOA TEC pelo site e gostaria de saber mais sobre as soluções digitais.",

  instagramUrl: null as string | null,
};

// Retorna somente perfis oficiais válidos do Instagram.
// URLs vazias ou inválidas mantêm os links inativos.
export function getInstagramProfile(
  value: string | null = site.instagramUrl
) {
  if (!value) return null;

  try {
    const url = new URL(value);

    const match = url.pathname.match(
      /^\/([a-zA-Z0-9._]{1,30})\/?$/
    );

    const invalidPaths = [
      "p",
      "reel",
      "reels",
      "stories",
      "explore",
      "accounts",
      "direct",
    ];

    if (
      url.protocol !== "https:" ||
      !["instagram.com", "www.instagram.com"].includes(
        url.hostname
      ) ||
      url.username ||
      url.password ||
      url.port ||
      url.search ||
      url.hash ||
      !match ||
      invalidPaths.includes(match[1].toLowerCase())
    ) {
      return null;
    }

    const handle = match[1];

    return {
      url: `https://www.instagram.com/${handle}/`,
      handle: `@${handle}`,
    };
  } catch {
    return null;
  }
}

// Gera o link do WhatsApp somente quando
// o número estiver em formato internacional válido.
export function getWhatsAppUrl(
  value: string | null = site.whatsapp
) {
  if (!value) return null;

  const phone = value.trim();

  if (!/^\d{10,15}$/.test(phone)) {
    return null;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

// Navegação principal da WOA TEC.
export const navigation = [
  ["/", "Início"],
  ["/solucoes", "Soluções"],
  ["/projetos", "Projetos"],
  ["/sobre", "Sobre"],
  ["/planos", "Planos"],
  ["/contato", "Contato"],
] as const;

// Especialidades e serviços.
export const specialties = [
  {
    number: "01",
    title: "Tecnologia e Engenharia Digital",
    short: "Tecnologia",

    description:
      "Apresente sua empresa com um site profissional e simplifique a rotina com sistemas e integrações feitos para sua operação.",

    items: [
      "Sites e experiências web",
      "Sistemas e plataformas",
      "Integrações e automações",
    ],
  },

  {
    number: "02",
    title: "Marketing Digital e Performance",
    short: "Marketing",

    description:
      "Organize sua presença digital, planeje campanhas e acompanhe os resultados para orientar as próximas decisões do negócio.",

    items: [
      "Planejamento digital",
      "Campanhas e mídia",
      "Análise e acompanhamento",
    ],
  },

  {
    number: "03",
    title: "Comunicação e Social Media",
    short: "Comunicação",

    description:
      "Mantenha uma presença consistente nas redes sociais, com conteúdo planejado e uma comunicação que explica o valor do seu trabalho.",

    items: [
      "Estratégia de conteúdo",
      "Presença nas redes sociais",
      "Comunicação de marca",
    ],
  },
];

// Etapas do processo de trabalho.
export const process = [
  [
    "Escutar",
    "Entendemos o contexto, os desafios e o que seu projeto precisa alcançar.",
  ],

  [
    "Planejar",
    "Definimos prioridades, escopo e um caminho claro para a execução.",
  ],

  [
    "Construir",
    "Conectamos estratégia, design e tecnologia em entregas alinhadas.",
  ],

  [
    "Evoluir",
    "Avaliamos os próximos passos conforme a necessidade da operação.",
  ],
] as const;

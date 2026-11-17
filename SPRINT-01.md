# WOA TEC — Sprint 01

Implementação local na branch `feature/frontend-institucional`, no repositório
`aliceagcs2062-beep/woa-tec`. Nenhum push, merge, Pull Request ou deploy realizado.
README.md e .gitignore originais preservados integralmente. Nenhum projeto externo,
banco de dados, credencial ou variável de ambiente foi utilizado.

## Executar localmente

No PowerShell, dentro deste repositório:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abrir http://localhost:3000. Usar `npm.cmd` evita a restrição de execução de scripts
PowerShell desta máquina. Em outros terminais, `npm` também funciona.

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

As fontes Inter e Space Grotesk são otimizadas com `next/font/google`, baixadas
durante o build e servidas pela própria aplicação. O primeiro build requer acesso
ao Google Fonts. Não há dependência de fontes de terceiros durante a navegação.

## Estrutura e arquivos criados

```text
woa-tec/
├── README.md                       # original, preservado
├── .gitignore                      # original, preservado
├── SPRINT-01.md                     # este relatório
├── package.json
├── package-lock.json
├── tsconfig.json
├── next-env.d.ts
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── src/
    ├── app/
    │   ├── layout.tsx              # fontes, SEO, header e footer
    │   ├── globals.css             # Tailwind e identidade visual
    │   ├── page.tsx                # início
    │   ├── solucoes/page.tsx
    │   ├── projetos/page.tsx
    │   ├── sobre/page.tsx
    │   ├── planos/page.tsx
    │   ├── contato/page.tsx
    │   ├── privacidade/page.tsx
    │   ├── error.tsx
    │   ├── not-found.tsx
    │   ├── robots.ts
    │   └── sitemap.ts
    ├── components/
    │   ├── navigation.tsx          # navegação ativa e menu mobile
    │   ├── contact-form.tsx        # validação local, sem envio
    │   └── ui.tsx                  # logo, cards, CTAs e WhatsApp
    └── config/
        ├── site.ts                 # identidade, canais e conteúdo
        └── plans.ts                # preços e controle de exibição
```

Todos os arquivos de implementação são novos. Os arquivos preexistentes não foram
alterados. `.next/`, `node_modules/` e `.cache/` contêm somente artefatos locais
ignorados pelo Git. Capturas da verificação estão em `.cache/qa/`.

## Páginas e comportamento

| Rota | Conteúdo |
| --- | --- |
| `/` | Hero, especialidades, prévia do portfólio, processo e CTA |
| `/solucoes` | Tecnologia, marketing e comunicação |
| `/projetos` | Cards reutilizáveis identificados como placeholders |
| `/sobre` | Apresentação institucional e processo |
| `/planos` | Três projetos fechados e quatro planos mensais |
| `/contato` | Formulário e canal WhatsApp aguardando configuração |
| `/privacidade` | Informações iniciais correspondentes a esta versão |

Cada página possui metadados e URL canônica. Sitemap, robots, página 404 e estado
de erro foram incluídos. Navegação tem indicação da página atual, menu mobile,
link para pular ao conteúdo e foco visível. O CSS respeita redução de movimento.

Os CTAs de planos levam o nome selecionado ao formulário, validado contra a
configuração. A ação do formulário é **Conferir preenchimento**. Nome, e-mail,
serviço e descrição são obrigatórios; WhatsApp, quando informado, é validado.
Erros são associados aos campos, o primeiro campo inválido recebe foco e o status
usa uma região acessível. Não há API, gravação, envio, analytics ou simulação de
sucesso. Empresa e WhatsApp são opcionais.

## Configuração

- Alterar valores em `src/config/plans.ts`. `pricing.visible = false` oculta os
  preços em todas as categorias e apresenta “Sob consulta”. Os preços continuam
  sendo referências, sem promessa de entregas ou prazos não definidos.
- Adicionar os arquivos oficiais da marca em `public/` e apontar `site.logo` e
  `site.globe` para seus caminhos em `src/config/site.ts`. O componente de logo
  usa identificação textual provisória, sem redesenhar a marca oficial.
- Configurar `site.whatsapp` somente com o número oficial autorizado, incluindo
  código do país e DDD, apenas dígitos. Enquanto for `null`, não existe link falso.
- Substituir os placeholders de portfólio somente por material autorizado. WOA
  Talk, Black November e Super Aulas não foram acessados ou integrados, nem
  apresentados como cases publicados. Eventual uso depende de autorização.

## Validação executada

Ambiente: Windows, Node.js 26.13.0. Dependências resolvidas no lockfile: Next.js
16.4.6, React/React DOM 19.3.1, Tailwind 4.3.5, TypeScript 5.9.3 e ESLint 9.39.5.
Estrutura baseada na [instalação oficial do Next.js](https://nextjs.org/docs/app/getting-started/installation)
e no [guia oficial do Tailwind para Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs).

| Verificação | Resultado |
| --- | --- |
| Instalação e lockfile | Concluídos |
| `npm.cmd run lint` | Sem erros ou avisos |
| `npm.cmd run typecheck` | Aprovado |
| `npm.cmd run build` | Aprovado, sem avisos no build final |
| HTTP das sete páginas, sitemap e robots | 200 |
| Rota inexistente | 404 |
| Edge headless: sete páginas em 320, 390, 768 e 1440 px | Sem overflow horizontal; um h1 por página |
| Menu mobile | Abertura, navegação e fechamento aprovados |
| Plano selecionado → contato | Contexto preservado |
| Formulário vazio | Quatro erros esperados e foco no nome |
| Formulário preenchido | Validação local, aviso explícito de nenhum envio |
| Armazenamento do navegador | localStorage e sessionStorage vazios |
| Exceções JavaScript durante os testes | Nenhuma |
| Revisão visual | Capturas da home em desktop e celular inspecionadas |
| `npm.cmd audit --omit=dev` | Zero vulnerabilidades |
| `git diff --check` | Aprovado |

O teste de navegador foi executado com Edge instalado, via Chrome DevTools
Protocol e módulos nativos do Node, sem adicionar biblioteca de testes ao projeto.
As verificações não constituem certificação de acessibilidade nem substituem testes
manuais com leitores de tela e outros navegadores.

## Pendências

1. Receber logotipo e globo oficiais e aprovar a aplicação da identidade visual.
2. Receber materiais e autorizações para portfólio; aprovar textos e escopos comerciais.
3. Configurar o WhatsApp oficial.
4. Implementar backend de contato e política completa de privacidade antes de
   habilitar o envio de informações.
5. Acompanhar a atualização da cadeia de lint: o audit completo registra sete
   avisos moderados associados ao `minimatch` transitivo do TypeScript ESLint.
   `npm audit fix` não resolveu com as versões disponíveis. ESLint 9.39.5 foi
   mantido pela compatibilidade declarada dos plugins de React, importação e
   acessibilidade do Next.js; o npm o sinaliza como fora de suporte. ESLint 10
   gerou conflitos de peer dependencies. Não foi aplicado override de major
   transitiva ou `--force`. Não há avisos nas dependências de produção.

Nenhuma publicação está incluída nesta entrega.

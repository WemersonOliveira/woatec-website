# WOA TEC — Sprint 02

Refinamento realizado exclusivamente no repositório local `woa-tec`, na branch
`feature/frontend-institucional`. Arquitetura, sete páginas, navegação, headline,
CTAs, planos e validação local do formulário preservados. Nenhuma dependência
adicionada; nenhum commit, push, merge, deploy ou configuração externa realizado.

## Arquivos alterados nesta sprint

- `src/config/site.ts`: caminho do logotipo oficial.
- `src/components/ui.tsx`: logo exclusivamente com `next/image`, proporção 3:2,
  tamanhos responsivos e ícones SVG decorativos nos três serviços.
- `src/app/layout.tsx`: prioridade de carregamento somente no logo do header;
  footer mantém carregamento sob demanda.
- `src/app/page.tsx`: dois detalhes decorativos na composição temporária do hero.
- `src/app/globals.css`: integração azul-marinho do header/footer, proporções do
  logo, espaçamento do hero, linhas douradas, cards, mockups e ajustes responsivos.
- `SPRINT-02.md`: relatório desta entrega.

O PNG `public/brand/woa-tec-logo.png` foi utilizado integralmente, sem edição,
recorte, filtro ou distorção. Seu SHA-256 permaneceu:
`0960A006CDEDB80D6C166C9031BFF7F8D921674AB5F969C5623D027031D0B84B`.

## Ajustes visuais

- Logo oficial no cabeçalho e rodapé: 216 × 144 px em desktop e 192 × 128 px
  em telas menores, preservando inclusive as margens da imagem original.
- Hero com distribuição equilibrada, grade discreta em CSS, linhas e pontos
  champagne estáticos. `site.globe` continua preparado para receber a futura arte
  aprovada; a composição atual permanece identificada como espaço reservado.
- Serviços com ícones vetoriais leves, hierarquia e espaçamentos consistentes,
  links alinhados, bordas discretas em hover e foco. Layout empilhado até 800 px
  para evitar cards estreitos em tablets.
- Portfólio com molduras unificadas, mockups discretos e rótulos de placeholder
  mais legíveis. Nenhuma imagem de terceiro ou resultado fictício foi incluído.
- Foco visível, tamanho mínimo de 44 px no botão do menu e regras existentes de
  redução de movimento preservadas. Elementos decorativos não são anunciados
  por leitores de tela.

## Verificação

| Verificação | Resultado |
| --- | --- |
| ESLint | Aprovado, sem avisos |
| TypeScript | Aprovado |
| Build de produção | Aprovado |
| Sete rotas, sitemap e robots | HTTP 200 |
| Página inexistente | HTTP 404 |
| Layout em 320, 390, 768, 1024 e 1440 px | Sem rolagem horizontal nas sete páginas |
| Logos no navegador | Carregamento, proporção 3:2 e texto alternativo aprovados |
| Teclado | Tab alcança o link de pular conteúdo; Escape fecha o menu e retorna o foco |
| Menu mobile | Abre, navega e fecha |
| `prefers-reduced-motion` | Transições dos cards desativadas |
| Plano selecionado e formulário | Testes existentes aprovados, sem envio ou gravação |
| Exceções JavaScript nos testes | Nenhuma |
| Revisão visual | Home completa em desktop e captura mobile inspecionadas |
| Integridade do PNG | Hash inalterado |
| `git diff --check` | Aprovado |

Foi reaproveitado o script local `.cache/smoke.mjs`, ampliando a conferência para
logo, teclado e redução de movimento. Esse script e as capturas em `.cache/qa/`
são artefatos locais ignorados pelo Git. Não há suíte de testes versionada nem
script `test` no package.json. A verificação utilizou Edge headless e o build local
na porta 3100, pois a porta 3000 estava indisponível. Não houve alteração no servidor
que já ocupava essa porta.

## Pendências

- Receber arte aprovada do globo e imagens autorizadas do portfólio.
- Permanecem as pendências funcionais da Sprint 01: WhatsApp oficial, integração
  do formulário e política completa de privacidade, fora do escopo desta sprint.
- As dependências não foram alteradas; os avisos de desenvolvimento documentados
  na Sprint 01 permanecem como acompanhamento técnico.

## Visualização local

```powershell
npm.cmd run dev
```

Abrir a URL indicada pelo terminal, normalmente http://localhost:3000. Para
escolher uma porta livre explicitamente:

```powershell
npm.cmd run dev -- --port 3100
```

Nesse caso, abrir http://localhost:3100.

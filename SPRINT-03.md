# WOA TEC — Sprint 03

Redesign local na branch `feature/frontend-institucional`, preservando Next.js,
as sete rotas, metadados, navegação, preços, seleção de plano e formulário sem
envio. Não houve commit, push, merge, deploy ou alteração em outros repositórios,
serviços ou ambientes. `package.json` e lockfile não foram alterados.

## Arquivos

Alterados:

- `src/app/globals.css`: sistema visual com superfícies claras e escuras,
  tipografia, espaçamento, contrastes, dispositivos CSS, responsividade e foco.
  Estilos obsoletos dos círculos e wireframes anteriores foram removidos.
- `src/app/page.tsx`: nova composição do hero, CTA secundário com contorno,
  identificação do público, globo vetorial e apresentação das soluções.
- `src/components/ui.tsx`: logo com `fill` em contêiner de proporção fixa,
  cabeçalhos internos, serviços com exemplos concretos e novos previews.
- `src/config/site.ts`: descrições comerciais mais concretas dos serviços.
- `next-env.d.ts`: atualização automática do Next.js ao gerar tipos/build.

Criados:

- `src/components/digital-globe.tsx`: ilustração vetorial original, estática,
  com continentes estilizados, meridianos e conexões discretas. Não é um asset
  oficial nem um mapa geográfico de precisão. Não utiliza imagens externas.
- `src/components/project-preview.tsx`: molduras de desktop e celular,
  preparadas para receber capturas autorizadas por meio das props `desktop`,
  `mobile` e `alt`. Enquanto vazias, apresentam apenas formas de placeholder.
- `SPRINT-03.md`: este relatório.

Os scripts locais de verificação em `.cache/` foram reaproveitados e ampliados;
continuam ignorados pelo Git, assim como as capturas em `.cache/qa/`.

## Resultado visual

O hero mantém a headline solicitada, a proposta comercial e os dois destinos de
conversão. A ilustração ocupa uma área de proporção reservada e não depende de
canvas, WebGL, bibliotecas ou JavaScript no cliente. `site.globe` continua sendo
o ponto de configuração para substituir a ilustração por uma futura arte aprovada.

As seções alternam azul-marinho, off-white e branco. A home apresenta as três
especialidades lado a lado; a página Soluções usa linhas editoriais com ícone,
título, descrição e entregas possíveis. Planos e formulário usam superfícies
claras, enquanto processo, CTAs e portfólio têm hierarquia e tratamentos próprios.
Não foram acrescentadas seções à home nem removidas páginas.

O portfólio permanece explicitamente identificado como placeholder. Os mockups
não representam trabalhos, clientes ou resultados publicados.

O logo oficial é exibido inteiro, com `object-fit: contain`, contêiner 3:2 e `sizes`
responsivo. O PNG não foi alterado. Seu SHA-256 permanece
`0960A006CDEDB80D6C166C9031BFF7F8D921674AB5F969C5623D027031D0B84B`.

## Verificações

| Verificação | Resultado |
| --- | --- |
| ESLint | Aprovado, sem avisos |
| TypeScript | Aprovado |
| Build de produção final | Aprovado |
| Sete páginas, robots e sitemap | HTTP 200 |
| Endereço inexistente | HTTP 404 |
| Sete páginas em 320, 390, 768, 1024 e 1440 px | Sem overflow horizontal; um h1 por página |
| Logo | Carregamento, texto alternativo e proporção 3:2 aprovados |
| Aviso Next Image em desenvolvimento | Ausente em 1440 e 390 px; console sem avisos |
| Navegação | Menu abre, navega e fecha; Tab alcança o link de pular conteúdo |
| Escape | Fecha o menu e retorna o foco ao botão |
| Movimento reduzido | Transições dos cards desativadas |
| Plano e formulário | Contexto, erros, foco e preenchimento válido aprovados; nenhum envio |
| JavaScript no navegador | Sem exceções nos testes |
| Contraste | Nove pares principais medidos acima de 4,5:1; mínimo 5,23:1 |
| Estabilidade | CLS observado na home: 0 nas cinco larguras testadas |
| Revisão visual | Home desktop/mobile, composição completa e páginas Soluções e Contato inspecionadas |
| `git diff --check` | Aprovado |

O teste local de produção com cache do navegador desabilitado registrou 25
sub-recursos, aproximadamente 252 KB transferidos e 649 KB descomprimidos.
Esses números excluem o documento HTML e são uma observação local, não um score
Lighthouse nem uma medição em rede móvel. Não houve aumento de dependências ou
introdução de componentes de cliente para as novas ilustrações.

Os testes de contraste cobrem texto principal, secundário, acentos sobre claro,
texto do hero, dourado sobre azul, rótulos do portfólio, placeholders do formulário,
mensagens de erro e legenda do globo. Não constituem auditoria completa WCAG.

Foi usado Edge headless com perfil isolado no repositório. O build foi servido
temporariamente na porta 3200. A conferência do aviso Next Image usou o servidor
de desenvolvimento já existente deste mesmo repositório na porta 3000, sem
encerrá-lo. Não existe script `test` versionado; os testes locais existentes da
Sprint 02 foram executados e ampliados.

## Pendências

- Revisão visual da ilustração conceitual do globo; eventual substituição por
  arte final aprovada via `site.globe`.
- Capturas reais e autorização de publicação para o portfólio.
- Permanecem fora do escopo: WhatsApp oficial, backend do formulário e política
  completa de privacidade, conforme as sprints anteriores.

## Visualização

O servidor de desenvolvimento existente pode ser acessado em
http://localhost:3000. Se não estiver em execução:

```powershell
npm.cmd run dev
```

Para validar novamente:

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

Nenhuma publicação foi realizada.

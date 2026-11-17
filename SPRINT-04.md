# WOA TEC — Sprint 04

## Resumo e escopo

Implementação local na branch `feature/frontend-institucional`, com reaproveitamento
da arquitetura e das sete páginas. Os relatórios das Sprints 01–03 foram lidos antes
da implementação. As alterações da Sprint 03 ainda presentes foram preservadas.

Durante a retomada, a home, a configuração e as imagens haviam sido atualizadas
pelo usuário. Essa versão foi preservada e usada na validação final, incluindo o
globo PNG transparente, a seção da águia e os cards de candidatos a cases. Nenhum
arquivo da pasta Downloads ou de outro repositório foi acessado.

Não foram executados commit, push, merge, PR, deploy, configuração de serviços ou
credenciais. Não foram adicionadas dependências ao projeto.

## Diagnóstico visual anterior

A Sprint 03 já tinha alternância de superfícies e uma base funcional. Faltavam
posicionamento institucional explícito, apresentação do Instagram, fechamento com
dois canais, jornada conectada no mobile e organização mais completa do rodapé.
Os serviços ainda formavam uma superfície contínua, com pouca distinção visual.

## Melhorias por seção

- **Identidade:** tokens reutilizáveis para a paleta proposta; azuis complementares,
  superfícies claras, bordas discretas e sombras suaves. Logo original preservado.
- **Hero:** texto de apoio solicitado, botões existentes e iluminação controlada.
  O SVG da Sprint 03 continua disponível como fallback; a configuração atual usa
  o PNG fornecido pelo usuário. Não houve alteração dos arquivos de imagem.
- **Soluções:** cards separados, superfícies brancas e azuladas, ícones coerentes,
  hover e foco moderados. As categorias e serviços existentes foram mantidos.
- **Projetos:** estrutura de mockups e placeholders preservada. A home atual usa
  os cards inseridos pelo usuário, com `portfolioImagesApproved = false`; nenhuma
  captura de case é carregada. `/projetos` mantém os previews reutilizáveis de
  desktop e celular da implementação anterior.
- **Institucional:** novo bloco editorial com o título e os dois parágrafos
  solicitados, detalhe de conexão e link para `/sobre`.
- **Jornada:** Escutar, Planejar, Construir e Evoluir conectados visualmente;
  sequência vertical nas telas menores.
- **Planos:** composição refinada, sem alteração de preços ou condições. Os
  valores continuam sendo as referências expressamente fornecidas na Sprint 01,
  sujeitas ao escopo e controladas por `src/config/plans.ts`.
- **Instagram:** card institucional com ícone SVG monocromático, espaço para o
  usuário oficial e botão inativo enquanto `instagramUrl` estiver vazio/inválido.
  Nenhum feed, API, token ou perfil fictício foi introduzido.
- **Faixa institucional:** as três mensagens solicitadas, com divisores discretos
  e reorganização vertical no mobile, sem animação contínua.
- **CTA final:** novo título, descrição, proposta e WhatsApp. Sem número oficial,
  o WhatsApp fica desabilitado, com explicação visível.
- **Footer:** quatro colunas — marca, navegação, soluções e presença digital —,
  copyright, domínio e Política de Privacidade. Nenhum dado empresarial inventado.
- **Ajuste na versão recebida:** a seção da águia agora usa destaque dourado sobre
  o fundo escuro, corrigindo o contraste da legenda e do foco sem substituir o layout.

## Paleta

| Token | Cor |
| --- | --- |
| `--navy` | `#071426` |
| `--petrol` | `#0D223A` |
| `--blue-mid` | `#163B63` |
| `--blue-soft` | `#3E6E9E` |
| `--blue-ice` | `#D9E7F2` |
| `--gold` | `#D9AD62` |
| `--gold-soft` | `#E7C98A` |
| `--off-white` | `#F5F4EF` |
| `--white` | `#FFFFFF` |
| `--graphite` | `#1A2330` |

Cores funcionais auxiliares foram mantidas para texto secundário, bordas e erros
de formulário. O `woa-home.css` recebido do usuário conserva seus próprios tons
de azul e dourado; sua harmonização completa com os tokens pode ser revisada após
a aprovação estética.

## Arquivos e reaproveitamento

Criados nesta sprint: `src/components/institutional-sections.tsx`,
`src/components/footer.tsx` e `SPRINT-04.md`.

Modificados na implementação: `src/app/globals.css`, `src/app/page.tsx`,
`src/app/layout.tsx`, `src/components/ui.tsx` e `src/config/site.ts`.
`next-env.d.ts` é atualizado automaticamente pelo Next.js.

Correção do erro relatado: `tsconfig.json`, `eslint.config.mjs` e `.gitignore`.
Na retomada, foi feito apenas o ajuste de contraste descrito em
`src/app/woa-home.css`; as demais mudanças recentes do usuário foram mantidas.

Reutilizados: `Logo`, `Navigation`, `ButtonLink`, `SpecialtyCards`, `ProjectCards`,
`ProjectPreview`, `ContactCTA`, `WhatsAppButton`, `DigitalGlobe`, formulário e
configuração de planos. Os scripts locais em `.cache/` foram ampliados sem
adicionar biblioteca de testes; permanecem ignorados pelo Git.

## Erro TS1005 / TS1351 — diagnóstico e correção

O log apontava 410 erros em
`backup-woatec-20261112-054903/src/config/site.ts`. Esse arquivo contém CSS, não
TypeScript, e tem o mesmo SHA-256 do `src/app/woa-home.css`:
`8403D564FFD0912087ECDBB0FD5355E1C7B5CDC572CF7C39B9FCC9B48250844C`.

O `include` amplo do TypeScript (`**/*.ts`, `**/*.tsx`) incluía também a pasta de
backup. Portanto, propriedades como `font-size: .73rem` eram interpretadas como
TypeScript. Os erros em cascata não eram resolvidos inserindo pontos e vírgulas.

Foi adicionada a exclusão `backup-woatec-*/**` no TypeScript e no ESLint, e
`/backup-woatec-*/` no `.gitignore`. A pasta e seus conteúdos foram preservados.
O arquivo ativo `src/config/site.ts` já continha TypeScript válido e não precisou
ser substituído. Estilos devem permanecer nos arquivos `.css`.

## Testes executados

| Verificação | Resultado |
| --- | --- |
| `npm.cmd run lint` | Aprovado |
| `npm.cmd run typecheck` | Aprovado |
| `npx.cmd tsc --noEmit` | Aprovado, sem os 410 erros |
| `npm.cmd run build` | Aprovado |
| Sete páginas, sitemap e robots | HTTP 200 |
| Rota inexistente | HTTP 404 |
| 360, 390, 768, 1024 e 1440 px, nas sete páginas | Sem overflow horizontal; um h1 por página |
| Logo | Carregamento, alt e proporção 3:2 aprovados |
| Imagens da home | Decodificação aprovada, incluindo globo e águia |
| Menu mobile e teclado | Navegação, link de pular conteúdo, Escape e retorno de foco aprovados |
| Movimento reduzido | Transições dos cards desativadas |
| Jornada mobile | Uma coluna, sequência vertical |
| Institucional, Instagram e faixa | Elementos presentes |
| Canais não configurados | Botão desabilitado, sem links para Instagram/WhatsApp |
| Configuração de canais | URLs vazias/inválidas rejeitadas; fixtures válidas aceitas sem chamadas externas |
| Formulário e plano | Contexto, erros, foco e validação local aprovados; sem envio |
| Links internos e âncoras do footer | Destinos existentes |
| Console em produção | Sem avisos ou exceções nos testes |
| Logo em desenvolvimento, 1440 e 390 px | Sem avisos de proporção; console sem avisos |
| Contraste de nove pares principais | Aprovado; mínimo 4,85:1 |
| Estabilidade observada | CLS da home igual a 0 nas cinco larguras |
| `git diff --check` | Aprovado |

Testes de navegador via Edge headless, perfil isolado, build local na porta 3400.
Capturas disponíveis em `.cache/qa/`, incluindo `sprint-04-full.png`. A home
completa e a captura mobile foram inspecionadas visualmente. Não existe script
`test` versionado; foi executado o smoke test local das sprints anteriores.

O teste direto das funções TypeScript pelo Node emitiu apenas o aviso de detecção
automática de módulo (`MODULE_TYPELESS_PACKAGE_JSON`); as asserções passaram.
Não foi alterado o tipo do pacote para suprimir um aviso exclusivo desse teste.

Com cache do navegador desativado, a medição local registrou 27 sub-recursos,
aproximadamente 330 KB transferidos e 740 KB descomprimidos, sem contar o documento
HTML. Não é uma medição Lighthouse nem um teste sob condições reais de rede móvel.

## Pendências, riscos e próxima sprint

- **Aprovação estética final:** pendente da responsável pelo projeto.
- **Instagram e WhatsApp:** componentes concluídos, ativação pendente dos dados
  oficiais. Nenhum canal está sendo simulado.
- **Portfólio:** capturas e autorizações ainda pendentes. A versão recebida usa
  o título “Projetos reais” e nomes de candidatos; confirmar a aprovação editorial
  desses textos antes de publicar. Eles não foram criados nesta retomada.
- **Conteúdo recente:** imagens e seção da águia fornecidas pelo usuário foram
  preservadas; aprovação da composição final permanece necessária.
- **Backup:** o snapshot continua contendo CSS em um `.ts`; foi excluído do projeto
  ativo, não reparado como aplicação independente. Não importar arquivos dele.
- **Formulário/backend e privacidade completa:** permanecem fora do escopo.
- **Performance:** imagens atuais têm arquivos de origem maiores que o SVG;
  `next/image` mantém otimização e carregamento sob demanda. Validar Web Vitals
  em dispositivo e rede reais antes da publicação; CLS local não é certificação.
- **Acessibilidade:** validação básica não substitui auditoria com leitores de tela.
- **Dependências:** sem alteração; acompanhar as pendências de lint da Sprint 01.

Próxima sprint: aprovar o visual e os textos, confirmar canais, selecionar capturas
autorizadas e então definir a integração de contato. Nenhuma funcionalidade de
envio ou integração externa foi declarada concluída nesta entrega.

## Visualização local

```powershell
npm.cmd run dev
```

Abrir a URL indicada pelo terminal, normalmente http://localhost:3000. Se já
existir servidor desse repositório em execução, usar essa URL sem iniciar outro.
Nenhuma autorização de publicação foi solicitada ou presumida.

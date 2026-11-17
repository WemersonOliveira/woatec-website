# Sprint 05 — Identidade institucional e apresentação dos cases

Implementação local na branch `feature/frontend-institucional`, em 12/11/2026.

## Melhorias

- Home preservada: headline, CTAs, soluções, globo transparente, águia, conteúdo institucional e demais seções.
- Dois cases com capturas reais autorizadas, descrições curtas e links oficiais. O segundo foi identificado exclusivamente como **Black November — Campanha Digital**.
- Links abrem em nova aba com `noopener noreferrer` e aviso acessível.
- Celulares pequenos em HTML/CSS, sem JavaScript adicional, dados pessoais, conversas, números de membros ou métricas inventadas. A legenda informa que são representações ilustrativas das comunidades no WhatsApp.
- Nenhuma captura dos grupos foi encontrada em `public`; por isso os mockups usam texto neutro e um símbolo vetorial de comunicação.
- Componentes de servidor, navegação, SEO, formulário e dependências preservados.

## Arquivos desta sprint

| Arquivo | Alteração |
| --- | --- |
| `src/components/home-cases.tsx` | Novo componente de servidor com dados dos dois cases, imagens, celulares e links. |
| `src/app/page.tsx` | Reutiliza o novo componente; remove a condição e o markup de placeholders já substituídos pelas imagens autorizadas. |
| `src/app/woa-home.css` | Recortes, composição dos cases, celulares responsivos, foco e contraste do destaque da águia. Remove estilos dos placeholders antigos da home. |
| `src/app/globals.css` | Suavização das margens vazias da logo compartilhada no header e rodapé. |
| `SPRINT-05.md` | Este relatório. |

Scripts e capturas auxiliares de verificação ficaram em `.cache`, ignorada pelo Git. As imagens fornecidas e as alterações locais anteriores permanecem preservadas, inclusive os backups. `site.ts`, configurações de validação e arquivos de outras sprints não foram reescritos nesta implementação.

## Logo

A imagem original continua em `public/brand/woa-tec-logo.png`, renderizada por `next/image`, sem recorte geométrico ou mudança de proporção. Uma máscara CSS suaviza apenas as margens externas vazias, mantendo letras, globo, dourado e assinatura integralmente opacos. A máscara não afeta o contorno de foco do link. Não há `mix-blend-mode` nem alteração do bitmap.

SHA-256 do original preservado: `0960A006CDEDB80D6C166C9031BFF7F8D921674AB5F969C5623D027031D0B84B`.

## Recortes e celulares

As imagens originais permanecem intactas. Cada captura tem um quadro com proporção baseada na área útil e `overflow: hidden`; o deslocamento vertical esconde as barras do navegador. A imagem mantém largura proporcional e altura automática.

- WOA Talk: captura 1352 × 633, início útil em y=79, largura útil 1344 para excluir também a barra lateral de rolagem.
- Black November: captura 1313 × 589, início útil em y=78, largura útil 1313.

Os celulares se sobrepõem apenas 24 px ao canto inferior direito em telas maiores. Até 520 px ficam abaixo da captura, evitando encobrir o conteúdo. Não são controles interativos nem capturas reais. O desenho decorativo fica oculto de leitores de tela; a legenda acessível identifica a comunidade e o caráter ilustrativo.

## Verificações executadas

| Verificação | Resultado |
| --- | --- |
| `npx.cmd tsc --noEmit` | Aprovado, saída 0. Também passou antes das alterações; o código atual não reproduziu o erro antigo. |
| `npm.cmd run lint` | Aprovado, saída 0. |
| `npm.cmd run build` | Aprovado, compilação e geração das rotas concluídas. |
| `node .cache/sprint-05-smoke.mjs` | Aprovado no Edge headless contra o build local na porta 3500. |
| Responsividade | Sete páginas verificadas em 320, 375, 768, 1024 e 1440 px, sem overflow horizontal e com um h1 por página. |
| Navegação | Rotas, sitemap e robots com HTTP 200; rota inexistente com 404; links internos e âncoras válidos. |
| Teclado e menu | Skip link, abertura, Escape com retorno do foco e fechamento após navegação aprovados. |
| Imagens | Imagens da home carregadas; logo com proporção 3:2 e texto alternativo. Inspeção visual das capturas nos cinco tamanhos e da home completa. |
| Movimento reduzido | Transições dos cards e animação do globo desativadas conforme preferência do navegador. |
| Cases | Dois celulares presentes; destinos oficiais, nova aba e atributos `rel` conferidos. Sites externos não foram navegados nem alterados. |
| Estabilidade | CLS observado da home = 0 nos cinco tamanhos; console sem avisos e sem exceções de runtime. |
| Regressão do formulário | Plano selecionado, campos inválidos, foco no primeiro erro e preenchimento válido verificados; nenhum envio ou armazenamento. |
| `node .cache/check-channels.mjs` | Aprovado: canais ausentes/inválidos inativos e fixtures válidas geram URLs seguras, sem requisições externas. Node emitiu apenas aviso de detecção do tipo de módulo do script auxiliar. |
| Contraste dos elementos tratados | Telefone/legenda 11,75:1; ícone 6,29:1; link 10,36:1; descrição 12,38:1; destaque da águia 6,91:1. |
| `git diff --check` | Aprovado, sem erros de whitespace. Git apenas informa a política local de conversão LF/CRLF. |

O projeto não possui script `test` no `package.json`. Foram reutilizados os verificadores locais existentes, com extensão para os requisitos desta sprint. A revisão React confirmou que o novo componente permanece no servidor, sem hooks, bibliotecas ou dependências de rede.

Evidências locais: `.cache/qa/home-{largura}.png`, `.cache/qa/cases-{largura}.png` e `.cache/qa/sprint-05-full.png`. As verificações não equivalem a uma auditoria completa de acessibilidade nem a uma pontuação Lighthouse.

## Pendências e visualização

Nenhuma pendência bloqueante desta sprint. Permanecem as configurações oficiais de Instagram/WhatsApp da WOA TEC já pendentes anteriormente. Os mockups das comunidades são ilustrativos por decisão de escopo. A página independente `/projetos` conserva sua apresentação anterior; esta sprint refinou os cases da home.

Para desenvolvimento, na raiz do repositório:

```powershell
npm.cmd run dev
```

Acesse `http://localhost:3000` (ou a porta informada pelo Next.js). Para reproduzir a visualização do build:

```powershell
npm.cmd run build
npm.cmd run start -- --hostname 127.0.0.1 --port 3500
```

O servidor local de conferência foi iniciado em `http://127.0.0.1:3500`. Se a porta já estiver em uso por ele, basta abrir esse endereço.

Nenhum commit, push, merge, deploy, alteração de domínio, ambiente, banco ou projeto externo foi realizado.

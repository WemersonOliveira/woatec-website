# Sprint 06 — WhatsApp comercial

Implementação local na branch `feature/frontend-institucional`.

## Arquivos

- `src/config/site.ts`: número autorizado centralizado (`556181176884`), mensagem inicial e geração da URL com `encodeURIComponent`.
- `src/components/floating-whatsapp.tsx`: novo Server Component `FloatingWhatsApp`, com link acessível e SVG local da marca WhatsApp.
- `src/app/layout.tsx`: uma única instância compartilhada do botão, inclusive nas seis páginas institucionais solicitadas e na página de privacidade.
- `src/app/globals.css`: círculo verde, dimensões, foco, hover, safe area, espaço no rodapé e proteção durante menu aberto/edição do formulário.
- `SPRINT-06.md`: este registro.

Os componentes `WhatsAppButton` e `Footer` já utilizavam `getWhatsAppUrl`; passaram a usar automaticamente o canal oficial, sem duplicar o número ou modificar seus arquivos. O cabeçalho mantém seu CTA para contato. O formulário permanece intacto.

## Canal e comportamento

Número: **+55 61 8117-6884**.

Mensagem: “Olá, Oliver! Conheci a WOA TEC pelo site e gostaria de saber mais sobre as soluções digitais.”

A função gera `https://wa.me/556181176884?text=…`, codificando a mensagem com `encodeURIComponent`. Os links usam `target="_blank"` e `rel="noopener noreferrer"`. A mensagem é apenas preenchida; cabe ao visitante confirmar seu envio no WhatsApp.

O botão tem 58 px no desktop e 56 px no mobile, fundo `#25D366`, símbolo branco, borda circular, sombra discreta e foco de duas cores. O nome acessível é “Conversar com a WOA TEC pelo WhatsApp”; a descrição avisa sobre a nova aba e a confirmação do envio. O SVG foi obtido do [repositório Simple Icons](https://github.com/simple-icons/simple-icons/blob/develop/icons/whatsapp.svg), distribuído sob CC0, e incorporado localmente, sem biblioteca ou requisição ao fornecedor no navegador.

Foi reservado espaço inferior no rodapé. O botão respeita safe areas e fica temporariamente oculto enquanto o menu está aberto ou o formulário contém foco. Não há animação automática, pop-up, API, rastreamento, armazenamento, credenciais ou envio automatizado. Logo, globo, águia, cases e mockups permanecem intactos.

## Validação

- `npx.cmd tsc --noEmit`: aprovado.
- `npm.cmd run lint`: aprovado.
- `npm.cmd run build`: aprovado, incluindo geração das rotas.
- Script local `.cache/sprint-06-smoke.mjs`: verificação do build no Edge headless em 320, 375, 768, 1024 e 1440 px. Sete páginas sem overflow, com uma instância do botão, dimensões circulares, verde e ícone branco. Conferidos destino, mensagem decodificada, nova aba e `rel` de todos os links comerciais.
- Capturas locais da home e dos cases em `.cache/qa`; inspeção visual desktop/mobile.
- Validação direta de `getWhatsAppUrl`: número configurado, mensagem codificada e retorno nulo para entradas ausentes/inválidas aprovados. O Node emite somente aviso de detecção do tipo de módulo ao importar TypeScript diretamente no script auxiliar.
- `git diff --check`: aprovado. Avisos LF/CRLF correspondem à política local do Git.

Uma primeira execução do script de navegador falhou porque o PowerShell havia substituído os acentos da mensagem esperada no teste por `?`. Corrigida a codificação do script, os links da aplicação foram validados com a mensagem acentuada original.

## Visualização e pendências

Build local de conferência disponível em `http://127.0.0.1:3800`.

Para desenvolvimento, execute `npm.cmd run dev` na raiz e abra a porta indicada pelo Next.js, normalmente `http://localhost:3000`.

Conferência manual pendente: clicar no botão em um navegador/dispositivo com WhatsApp disponível e confirmar destinatário e mensagem. A abertura externa e a disponibilidade da conta não foram testadas; nenhuma mensagem foi enviada.

Sem commit, push, merge, deploy, alteração de banco, variáveis de ambiente, domínio ou projetos externos. Alterações locais anteriores e backups preservados.

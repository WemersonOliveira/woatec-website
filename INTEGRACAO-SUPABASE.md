# Integração Supabase — WOA TEC (pré-implantação)

Este pacote foi preparado para ser **copiado sobre** o repositório `WemersonOliveira/woatec-website`, em uma **branch separada**. Não altera os projetos WOA Talk/Black November.

## Arquivos
- `src/app/api/contato/route.ts`: rota POST de servidor do Next.js para gravar solicitações.
- `src/components/contact-form.tsx`: substitui o formulário que só validava o preenchimento pelo envio real.
- `supabase/sql/contact_requests.sql`: script SQL proposto para tabela de solicitações e RLS, sem leitura pública.
- `.env.example`: nomes das variáveis, sem segredos.

## Para colocar em funcionamento
1. Criar um **projeto Supabase novo, exclusivo da WOA TEC**. Não reutilizar chaves ou bases da WOA Talk.
2. Aplicar o SQL do arquivo de migração ao projeto novo, após revisão, e conferir no painel que a tabela e RLS existem.
3. Na Vercel, configurar `SUPABASE_URL` e `SUPABASE_SECRET_KEY` como **variáveis server-side**. Usar a chave secreta nova (`sb_secret_...`) no backend; nunca adicionar `NEXT_PUBLIC_` ao segredo. Se usar chave legada, rever autenticação REST antes da ativação.
4. Testar no Deploy Preview: validação de campos, envio válido, gravação no banco, erros de rede, consentimento e ausência de exposição da chave no navegador.
5. Validar a Política de Privacidade para refletir o armazenamento efetivo, o fornecedor Supabase, prazo de retenção e atendimento a direitos LGPD. Nenhum anúncio/marketing adicional é autorizado pelo envio de proposta.
6. Implementar proteção adicional antiabuso **antes de produção**: rate limiting durável no endpoint (ou WAF), CAPTCHA/Turnstile quando pertinente, e monitoração de spam. O honeypot e a verificação de Origin existentes são medidas auxiliares e não bastam.
7. Revisar retenção, exclusão segura de dados e permissões de operadores; não dar acesso anônimo a `SELECT`.

## Verificações antes do merge
- `npm ci`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Enviar registro de teste **fictício** e verificar uma única linha na tabela `contact_requests`.
- Conferir se a chave nunca aparece no código frontend nem no histórico Git.

**Status:** código preparado; ainda sem projeto Supabase, sem chaves reais, sem testes end-to-end e sem deploy. Não realizar merge em produção até as verificações e aprovação do Oliver.

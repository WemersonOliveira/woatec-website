-- Executar apenas no projeto Supabase EXCLUSIVO da WOA TEC.
-- Dados pessoais: acesso somente por backend privilegiado; nunca abrir SELECT público.
create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  company text check (company is null or char_length(company) <= 160),
  email text not null check (char_length(email) <= 254),
  phone text check (phone is null or char_length(phone) <= 24),
  service text not null check (service in (
    'Tecnologia e Engenharia Digital', 'Marketing Digital e Performance',
    'Comunicação e Social Media', 'Solução integrada', 'Preciso de orientação'
  )),
  description text not null check (char_length(description) between 20 and 3000),
  plan text check (plan is null or char_length(plan) <= 160),
  privacy_acknowledged boolean not null check (privacy_acknowledged = true),
  privacy_notice_version text not null
);

alter table public.contact_requests enable row level security;
revoke all on table public.contact_requests from anon, authenticated;
-- Sem políticas públicas. Inserções via servidor com chave secreta somente.
create index if not exists contact_requests_created_at_idx
  on public.contact_requests (created_at desc);

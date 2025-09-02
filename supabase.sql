-- Supabase schema placeholder
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  role text default 'user'
);
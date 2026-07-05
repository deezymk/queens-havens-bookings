-- Run this once in Supabase: Dashboard > SQL Editor > New query > Run.

-- 1. Table to store every booking submitted from the site
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  service text not null,
  preferred_date date not null,
  preferred_time time not null,
  payment_method text not null,
  notes text,
  inspo_url text
);

-- 2. Lock the table down, then explicitly allow the public site to INSERT
--    only (not read/update/delete other people's bookings).
alter table public.bookings enable row level security;

create policy "Public can submit bookings"
on public.bookings
for insert
to anon
with check (true);

-- Note: without a SELECT policy, only you (via the Supabase dashboard,
-- which uses your service role) can view submitted bookings. That's
-- intentional — clients can't see each other's data.

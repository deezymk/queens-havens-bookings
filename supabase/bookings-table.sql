
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


alter table public.bookings enable row level security;

create policy "Public can submit bookings"
on public.bookings
for insert
to anon
with check (true);

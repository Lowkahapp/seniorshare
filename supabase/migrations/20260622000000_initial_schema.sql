-- SenoShare initial schema
-- Run in Supabase SQL editor or via: supabase db push

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null,
  role text check (role in ('provider', 'seeker')),
  city text,
  state text,
  preferences text,
  verification_status text not null default 'pending'
    check (verification_status in ('pending', 'verified', 'rejected')),
  created_at timestamptz not null default now()
);

create table if not exists public.match_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.profiles (id) on delete cascade,
  provider_id uuid references public.profiles (id) on delete set null,
  seeker_id uuid references public.profiles (id) on delete set null,
  status text not null default 'pending'
    check (status in ('pending', 'intro_scheduled', 'accepted', 'declined')),
  intro_scheduled_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.match_requests enable row level security;

create policy "Profiles are viewable by verified members"
  on public.profiles for select using (verification_status = 'verified' or auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert with check (auth.uid() = id);

create policy "Users can view own match requests"
  on public.match_requests for select
  using (auth.uid() = requester_id or auth.uid() = provider_id or auth.uid() = seeker_id);

create policy "Users can create match requests"
  on public.match_requests for insert with check (auth.uid() = requester_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

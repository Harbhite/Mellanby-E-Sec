
-- Enable RLS
alter table if exists public.events enable row level security;
alter table if exists public.news enable row level security;
alter table if exists public.documents enable row level security;
alter table if exists public.maintenance_requests enable row level security;
alter table if exists public.profiles enable row level security;

-- Create tables

-- Events Table
create table if not exists public.events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  date date not null,
  start_time time,
  end_time time,
  location text,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- News Table
create table if not exists public.news (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  summary text,
  content text,
  date date default current_date,
  author text,
  category text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Documents Table
create table if not exists public.documents (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  size text,
  date date default current_date,
  type text,
  url text not null,
  restricted boolean default false,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Maintenance Requests Table
create table if not exists public.maintenance_requests (
  id uuid default gen_random_uuid() primary key,
  block text not null,
  urgency text not null,
  nature text not null,
  description text not null,
  status text default 'Pending', -- Pending, In Progress, Completed
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Profiles Table (for admin role management)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  role text default 'user', -- 'admin', 'user'
  email text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies

-- Events: Public read, Admin write
create policy "Public events are viewable by everyone."
  on events for select
  using ( true );

create policy "Admins can insert events."
  on events for insert
  with check ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can update events."
  on events for update
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can delete events."
  on events for delete
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

-- News: Public read, Admin write
create policy "Public news are viewable by everyone."
  on news for select
  using ( true );

create policy "Admins can insert news."
  on news for insert
  with check ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can update news."
  on news for update
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can delete news."
  on news for delete
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

-- Documents: Public read (if not restricted), Admin read all, Admin write
create policy "Public documents are viewable by everyone if not restricted."
  on documents for select
  using ( restricted = false or exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can insert documents."
  on documents for insert
  with check ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can update documents."
  on documents for update
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Admins can delete documents."
  on documents for delete
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

-- Maintenance Requests: Admin read/write, Public insert (anyone can report)
create policy "Admins can view all maintenance requests."
  on maintenance_requests for select
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Anyone can insert maintenance requests."
  on maintenance_requests for insert
  with check ( true );

create policy "Admins can update maintenance requests."
  on maintenance_requests for update
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

-- Profiles: Users can view own profile, Admins can view all
create policy "Users can view own profile."
  on profiles for select
  using ( auth.uid() = id );

create policy "Admins can view all profiles."
  on profiles for select
  using ( exists ( select 1 from profiles where id = auth.uid() and role = 'admin' ) );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'user');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on signup
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Storage Buckets (Optional: create if needed via dashboard, but here is SQL if extensions are enabled)
-- insert into storage.buckets (id, name, public) values ('images', 'images', true);
-- insert into storage.buckets (id, name, public) values ('documents', 'documents', true);

-- Policies for storage would go here

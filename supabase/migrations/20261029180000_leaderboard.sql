-- Global leaderboard for Country Road Simulator (Supabase project "country-road-simulator").
-- Applied 2026-10-29. Players never touch the table directly: they post through submit_score
-- (which checks the run is plausible, the name is acceptable and the sender isn't flooding) and
-- read through top_scores. Keep name_ok in step with nameProblem() in src/leaderboard.js.

create table public.scores (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 16),
  route text not null check (route in ('england', 'wales', 'scotland')),
  vehicle text not null check (vehicle in ('hatch', 'estate', 'suv', 'tractor')),
  score integer not null check (score > 0),
  time_s integer not null check (time_s > 0),
  condition integer not null check (condition between 0 and 100),
  version text,
  sender text -- hashed IP, only for rate limiting
);
create index scores_route_score on public.scores (route, score desc);
create index scores_sender_time on public.scores (sender, created_at);

alter table public.scores enable row level security;
revoke all on public.scores from anon, authenticated;

-- Limits from the game's own scoring (src/scoring.js): the three standard routes are fixed,
-- so each route+vehicle has a known par; nobody legitimately reaches twice it. And no run can be
-- faster than 1.4x the time to drive the whole route flat out.
create table public.score_limits (
  route text not null,
  vehicle text not null,
  max_score integer not null,
  min_time_s integer not null,
  primary key (route, vehicle)
);
alter table public.score_limits enable row level security;
revoke all on public.score_limits from anon, authenticated;
insert into public.score_limits (route, vehicle, max_score, min_time_s) values
  ('england', 'hatch', 7128, 140), ('england', 'estate', 7766, 135), ('england', 'suv', 8614, 130), ('england', 'tractor', 9252, 304),
  ('wales', 'hatch', 6260, 151), ('wales', 'estate', 6756, 146), ('wales', 'suv', 7416, 140), ('wales', 'tractor', 7910, 327),
  ('scotland', 'hatch', 6536, 167), ('scotland', 'estate', 7054, 161), ('scotland', 'suv', 7746, 155), ('scotland', 'tractor', 8264, 362);

create or replace function public.name_ok(p_name text)
returns boolean
language sql
immutable
set search_path = ''
as $$
  select p_name ~ '^[A-Za-z0-9][A-Za-z0-9 _.''-]{0,14}[A-Za-z0-9.]$'
     and regexp_replace(translate(lower(p_name), '013457@$', 'oieastas'), '[^a-z]', '', 'g')
         !~ '(fuck|shit|cunt|bitch|wank|twat|pussy|nigg|fagg|slut|whore|rapist|nazi|hitler|retard|spastic|kike|bellend|tosser|bollock|asshole|dildo|porn)';
$$;

create or replace function public.submit_score(
  p_name text, p_route text, p_vehicle text, p_score integer, p_time_s integer, p_condition integer, p_version text default null
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_name text := btrim(regexp_replace(coalesce(p_name, ''), '\s+', ' ', 'g'));
  v_limit public.score_limits;
  v_ip text := split_part(coalesce(current_setting('request.headers', true)::json ->> 'x-forwarded-for', ''), ',', 1);
  v_sender text := case when v_ip = '' then null else md5('crs:' || v_ip) end;
  v_rank integer;
begin
  if not public.name_ok(v_name) then
    return jsonb_build_object('ok', false, 'reason', 'name');
  end if;
  select * into v_limit from public.score_limits where route = p_route and vehicle = p_vehicle;
  if not found or p_score is null or p_score <= 0 or p_score > v_limit.max_score
     or p_time_s is null or p_time_s < v_limit.min_time_s or p_time_s > 7200
     or p_condition is null or p_condition not between 0 and 100 then
    return jsonb_build_object('ok', false, 'reason', 'invalid');
  end if;
  if v_sender is not null and (
    select count(*) from public.scores where sender = v_sender and created_at > now() - interval '1 hour'
  ) >= 12 then
    return jsonb_build_object('ok', false, 'reason', 'busy');
  end if;

  insert into public.scores (name, route, vehicle, score, time_s, condition, version, sender)
  values (v_name, p_route, p_vehicle, p_score, p_time_s, p_condition, left(p_version, 20), v_sender);

  -- rank among each name's best on this route
  select 1 + count(*) into v_rank
  from (select lower(name) as n, max(score) as best from public.scores where route = p_route group by lower(name)) b
  where b.best > p_score;
  return jsonb_build_object('ok', true, 'rank', v_rank);
end;
$$;

-- each name's best run on a route, highest first
create or replace function public.top_scores(p_route text, p_limit integer default 10)
returns table (name text, vehicle text, score integer, time_s integer, created_at timestamptz)
language sql
stable
security definer
set search_path = ''
as $$
  select name, vehicle, score, time_s, created_at
  from (
    select distinct on (lower(s.name)) s.name, s.vehicle, s.score, s.time_s, s.created_at
    from public.scores s
    where s.route = p_route
    order by lower(s.name), s.score desc, s.created_at
  ) best
  order by score desc, created_at
  limit least(greatest(coalesce(p_limit, 10), 1), 50);
$$;

revoke all on function public.submit_score(text, text, text, integer, integer, integer, text) from public;
revoke all on function public.top_scores(text, integer) from public;
revoke all on function public.name_ok(text) from public;
grant execute on function public.submit_score(text, text, text, integer, integer, integer, text) to anon, authenticated;
grant execute on function public.top_scores(text, integer) to anon, authenticated;

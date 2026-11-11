-- The daily lane: one generated route per region per UTC day (src/leaderboard.js dailyKey/dailySeed),
-- stored as route 'daily-<region>-<yyyymmdd>'. Its par changes with the day, so each region+vehicle gets
-- a limit of 2x the highest par over 2026-2029, rounded up (tests/leaderboard.test.mjs checks this).
-- Only yesterday, today and tomorrow (UTC) are accepted, so time zones work but old days can't be farmed.

alter table public.scores drop constraint scores_route_check;
alter table public.scores add constraint scores_route_check
  check (route in ('england', 'wales', 'scotland') or route ~ '^daily-(england|wales|scotland)-[0-9]{8}$');

insert into public.score_limits (route, vehicle, max_score, min_time_s) values
  ('daily-england', 'hatch', 8400, 140), ('daily-england', 'estate', 9200, 135), ('daily-england', 'suv', 10300, 130), ('daily-england', 'tractor', 11200, 304),
  ('daily-wales', 'hatch', 7400, 151), ('daily-wales', 'estate', 8000, 146), ('daily-wales', 'suv', 8900, 140), ('daily-wales', 'tractor', 9500, 327),
  ('daily-scotland', 'hatch', 8200, 167), ('daily-scotland', 'estate', 9000, 161), ('daily-scotland', 'suv', 10000, 155), ('daily-scotland', 'tractor', 10700, 362);

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
  v_ip text := coalesce(current_setting('request.headers', true)::json ->> 'cf-connecting-ip', '');
  v_sender text := case when v_ip = '' then null else md5('crs:' || v_ip) end;
  v_rank integer;
begin
  if not public.name_ok(v_name) then
    return jsonb_build_object('ok', false, 'reason', 'name');
  end if;
  if p_route ~ '^daily-' and right(p_route, 8) not in (
    to_char(now() at time zone 'utc' - interval '1 day', 'YYYYMMDD'),
    to_char(now() at time zone 'utc', 'YYYYMMDD'),
    to_char(now() at time zone 'utc' + interval '1 day', 'YYYYMMDD')
  ) then
    return jsonb_build_object('ok', false, 'reason', 'invalid');
  end if;
  select * into v_limit from public.score_limits
  where route = regexp_replace(p_route, '^(daily-[a-z]+)-[0-9]{8}$', '\1') and vehicle = p_vehicle;
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

  -- rank of this name's best on this route (the board shows each name's best, not every run)
  select 1 + count(*) into v_rank
  from (select lower(name) as n, max(score) as best from public.scores where route = p_route group by lower(name)) b
  where b.best > (select max(score) from public.scores where route = p_route and lower(name) = lower(v_name));
  return jsonb_build_object('ok', true, 'rank', v_rank);
end;
$$;

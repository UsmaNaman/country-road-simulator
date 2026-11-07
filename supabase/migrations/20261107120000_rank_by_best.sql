-- "You're #N" after posting now ranks the player's best run on the route, not the run just posted,
-- so it matches the board (which shows each name's best). Only the rank query changed.

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

  -- rank of this name's best on this route (the board shows each name's best, not every run)
  select 1 + count(*) into v_rank
  from (select lower(name) as n, max(score) as best from public.scores where route = p_route group by lower(name)) b
  where b.best > (select max(score) from public.scores where route = p_route and lower(name) = lower(v_name));
  return jsonb_build_object('ok', true, 'rank', v_rank);
end;
$$;

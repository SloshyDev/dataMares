import { API_URL } from '@/app/contants/url';

export default async function getAboutContentGraphQL(localeParam) {
  // prefer explicit param (from page). If not provided, try to read NEXT_LOCALE cookie safely.
  let locale = localeParam;
  if (!locale) {
    try {
      const cookieStore = cookies();
      if (typeof cookieStore.get === 'function') {
        locale = cookieStore.get('NEXT_LOCALE')?.value;
      } else if (typeof cookieStore.getAll === 'function') {
        const found = cookieStore.getAll().find((c) => c.name === 'NEXT_LOCALE');
        locale = found?.value;
      } else if (cookieStore?.NEXT_LOCALE) {
        locale = cookieStore.NEXT_LOCALE?.value ?? cookieStore.NEXT_LOCALE;
      }
    } catch (e) {
      // ignore and fallback
    }
  }
  locale = locale ?? 'en';

  // return cached response for this locale when valid
  // Always fetch fresh data
  const query = `
    query ABOUT_CONTENT {
    about(locale: "${locale}") {
    Mission
    Vision
    Dm_team {
      width
      url
      height
      caption
    }
    Founding_group {
      width
      url
      caption
      height
    }
    Advisory_board {
      width
      url
      height
      caption
    }
    Banner {
      width
      url
      height
    }
    Dm_team_icon {
      width
      url
      height
    }
    Advisory_team_icon {
      width
      url
      height
    }
    Founding_team_icon {
      width
      url
      height
    }
}}`;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  const data = json.data || {};

  const result = {
    Banner: data.about?.Banner || null,
    Mission: data.about?.Mission || null,
    Vision: data.about?.Vision || null,
    Dm_team: data.about?.Dm_team || null,
    Founding_group: data.about?.Founding_group || null,
    Advisory_board: data.about?.Advisory_board || null,
    Dm_team_icon: data.about?.Dm_team_icon || null,
    Advisory_team_icon: data.about?.Advisory_team_icon || null,
    Founding_team_icon: data.about?.Founding_team_icon || null,
  };

  return result;
}

import { API_URL } from '@/app/contants/url';

export default async function getNewsDataGraphQL(localeParam) {
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
    query NEWS_CONTENT {
    newsGallery(locale: "${locale}") {
    Banners {
      Title
      Link
      TypeOfLink
        Image {
            width
            url
            height
            }
        }
      }
    }
  `;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  const data = json.data || {};

  const result = {
    Banners: data.newsGallery?.Banners || null,
  };

  return result;
}

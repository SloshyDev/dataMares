import { API_URL } from '@/app/contants/url';
import { cookies } from 'next/headers';

// cache keyed by locale so different locales don't share the same cached response
let cachedData = {};
let lastFetch = {};
const CACHE_TIME = 24 * 60 * 60 * 1000; // 24 horas

export default async function getHomeContentsGraphQL(localeParam) {
  const isDev = process.env.NODE_ENV === 'development';
  const now = Date.now();

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
  if (!isDev && cachedData[locale] && now - (lastFetch[locale] ?? 0) < CACHE_TIME) {
    return cachedData[locale];
  }

  const query = `
    query HOME_CONTENTS {
      home(locale: "${locale}") {
        Carrousel {
          ... on ComponentImageWithLinkImageWithLink {
            Image {
              width
              url
              height
            }
            Link
            Title
            TypeOfLink
          }
          ... on ComponentDataContentDataContent {
            data_contents {
              Banner {
                width
                url
                height
              }
              Slug
              Title
            }
          }
        }
        Promos {
          ... on ComponentImageWithLinkImageWithLink {
            Image {
              width
              url
              height
            }
            Link
            Title
            TypeOfLink
          }
          ... on ComponentDataContentDataContent {
            data_contents {
              Promo {
                width
                url
                height
              }
              Title
              Slug
            }
          }
        }
        latest_news {
          Link
          Title
          TypeOfLink
          Image {
            width
            url
            height
          }
        }
        dm_graphic {
          TypeOfLink
          Title
          Link
          Image {
            url
            width
            height
          }
        }
        do_not_miss_it {
          TypeOfLink
          Title
          Link
          Image {
            width
            url
            height
          }
        }
        reading_recommendations {
          TypeOfLink
          Title
          Link
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

  const { data } = await res.json();

  const result = {
    latest_news_data: data?.home?.latest_news ?? [],
    reading_recommendations_data: data?.home?.reading_recommendations ?? [],
    do_not_miss_it_data: data?.home?.do_not_miss_it ?? [],
    dm_graphic_data: data?.home?.dm_graphic ?? null,
    carrousel_data: data?.home?.Carrousel ?? [],
    promos_data: data?.home?.Promos ?? [],
  };
  if (!isDev) {
    cachedData = result;
    lastFetch = now;
  }
  return result;
}

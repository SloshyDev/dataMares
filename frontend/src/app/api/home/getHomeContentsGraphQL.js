import { API_URL } from '@/app/contants/url';
import { cookies } from 'next/headers';

let cachedData = null;
let lastFetch = 0;
const CACHE_TIME = 24 * 60 * 60 * 1000; // 24 horas

export default async function getHomeContentsGraphQL(localeParam) {
  const isDev = process.env.NODE_ENV === 'development';
  const now = Date.now();
  if (!isDev && cachedData && now - lastFetch < CACHE_TIME) {
    return cachedData;
  }
  // prefer explicit param (from page). If not provided, try to read NEXT_LOCALE cookie safely.
  let locale = localeParam;
  const query = `
    query HOME_CONTENTS {
      home(locale: "${locale}") {
          latest_news{
          Link
          Title
          Image {
            caption
            url
            width
            height
          }
        }
        data_contents {
          Title
          Banner {
            height
            width
            url  
          }
          Promo {
            height
            width
            url  
          }
        }
        reading_recommendations {
          Image {
            width
            url
            height
          }
          Title
          Link
        }
        do_not_miss_it {
          Image {
            width
            url
            height
          }
          Title
          Link
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
    data_contents_data: data?.home?.data_contents ?? [],
    reading_recommendations_data: data?.home?.reading_recommendations ?? [],
    do_not_miss_it_data: data?.home?.do_not_miss_it ?? [],
  };
  if (!isDev) {
    cachedData = result;
    lastFetch = now;
  }
  return result;
}

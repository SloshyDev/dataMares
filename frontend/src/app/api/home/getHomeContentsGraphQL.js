import { API_URL } from "@/app/contants/url";

let cachedData = null;
let lastFetch = 0;
const CACHE_TIME = 24 * 60 * 60 * 1000; // 24 horas

export default async function getHomeContentsGraphQL() {
  const isDev = process.env.NODE_ENV === 'development';
  const now = Date.now();
  if (!isDev && cachedData && (now - lastFetch < CACHE_TIME)) {
    return cachedData;
  }
  const query = `
    query HOME_CONTENTS {
      home {
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
  };
  if (!isDev) {
    cachedData = result;
    lastFetch = now;
  }
  return result;
}

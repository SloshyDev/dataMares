import { API_URL } from '@/app/contants/url';
let cachedData = {};
let lastFetch = {};

export default async function getDataContentGraphQL(localeParam) {
  const query = `
  query DATA_CONTENT {
    dataContents {
      Slug
      Title
      locale
      Banner {
        url
        width
        height
      }
      PDF {
        url
      }
      Poster {
        width
        url
        hash
      }
      localizations {
        Slug
        Title
        locale
        Banner {
          url
          width
          height
        }
        PDF {
          url
        }
        Poster {
          width
          url
          hash
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

  const { data } = json;

  // Combinar contenido principal con sus localizaciones
  const allContents = [];
  data?.dataContents?.forEach((content) => {
    // Agregar el contenido principal
    allContents.push(content);
    // Agregar todas sus localizaciones
    if (content.localizations) {
      allContents.push(...content.localizations);
    }
  });

  const result = {
    dataContents: allContents,
  };
  return result;
}

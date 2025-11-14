import { API_URL } from '@/app/contants/url';

export default async function getDataContentGraphQL() {
  const query = `
  query DATA_CONTENT {
    dataContents {
      Slug
      Title
      Caption
      ScientificName
      locale
      PDF {
        url
      }
      Poster {
        width
        url
        height
        formats
      }
      localizations {
        Slug
        Title
        Caption
        ScientificName
        locale
        PDF {
          url
        }
        Poster {
          width
          height
          url
        }
        SharingContent {
          width
          height
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

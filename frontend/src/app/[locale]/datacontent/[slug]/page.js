import getDataContentGraphQL from '@/app/api/datacontent/getDataContentGraphQL';
import DataContent from '@/app/components/dataContent/DataContent';

export async function generateStaticParams() {
  // Obtener todos los contenidos de todos los idiomas
  const { dataContents } = await getDataContentGraphQL();

  // Generar combinaciones de locale + slug
  const params = [];
  const locales = ['en', 'es'];

  // Obtener slugs únicos
  const uniqueSlugs = [...new Set(dataContents.map((dc) => dc.Slug))];

  // Generar params para cada combinación de locale y slug
  locales.forEach((locale) => {
    uniqueSlugs.forEach((slug) => {
      params.push({ locale, slug });
    });
  });

  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const { dataContents } = await getDataContentGraphQL(locale);

  const content = dataContents.find((item) => item.Slug === slug && item.locale === locale);

  if (!content) {
    return {
      title: 'Content Not Found',
    };
  }

  const otherLocale = locale === 'en' ? 'es' : 'en';
  const alternateContent = dataContents.find((item) => item.Slug === slug && item.locale === otherLocale);

  return {
    title: content.Title,
    description: `${content.Title} - dataMares`,
    openGraph: {
      title: content.Title,
      description: `${content.Title} - dataMares`,
      images: content.Banner
        ? [
            {
              url: content.Banner.url,
              width: content.Banner.width,
              height: content.Banner.height,
              alt: content.Title,
            },
          ]
        : [],
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: locale === 'en' ? 'es_ES' : 'en_US',
    },
    alternates: {
      canonical: `/${locale}/datacontent/${slug}`,
      languages: {
        en: `/datacontent/${slug}`,
        es: `/es/datacontent/${slug}`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: content.Title,
      description: `${content.Title} - dataMares`,
      images: content.Banner ? [content.Banner.url] : [],
    },
  };
}

export default async function DataContentPage({ params }) {
  const { locale, slug } = await params;
  const { dataContents } = await getDataContentGraphQL(locale);

  // Buscar el contenido que coincida con el slug Y el locale
  const content = dataContents.find((item) => item.Slug === slug && item.locale === locale);

  if (!content) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Content not found</h1>
        <p className="mt-4">
          Slug: {slug}, Locale: {locale}
        </p>
      </div>
    );
  }

  return <DataContent content={content} />;
}

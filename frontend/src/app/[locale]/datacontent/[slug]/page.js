import getDataContentGraphQL from '@/app/api/datacontent/getDataContentGraphQL';
import DataContent from '@/app/components/dataContent/DataContent';
import { getImageUrl } from '@/app/contants/url';

export async function generateStaticParams() {
  const { dataContents } = await getDataContentGraphQL();
  const params = [];

  dataContents.forEach((item) => {
    // Param para el idioma principal
    if (typeof item.Slug === 'string' && typeof item.locale === 'string') {
      params.push({ locale: item.locale, slug: item.Slug });
    }
    // Param para cada localización
    if (Array.isArray(item.localizations)) {
      item.localizations.forEach((loc) => {
        if (typeof loc.Slug === 'string' && typeof loc.locale === 'string') {
          params.push({ locale: loc.locale, slug: loc.Slug });
        }
      });
    }
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
      description: `${content.Caption} - dataMares`,
      images: getImageUrl(content.SharingContent?.url) ? [getImageUrl(content.SharingContent.url)] : [],
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
      card: 'summary',
      site: '@dataMares_',
      title: content.Title,
      description: `${content.Caption}`,
      image: getImageUrl(content.SharingContent?.url),
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

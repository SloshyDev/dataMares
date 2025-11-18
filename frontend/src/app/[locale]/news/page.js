import getNewsDataGraphQL from '@/app/api/news/getNewsDataGrapQL';
import ImageWithLink from '@/app/components/Common/ImageWithLink';
import TranslationsProvider from '@/app/components/TranslationsProvides';
import initTranslations from '@/app/i18n';
import React from 'react';

export default async function page({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['about']);
  const i18nNamespace = ['about'];

  const { Banners } = await getNewsDataGraphQL(locale);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>
      <main className="mx-auto mb-5 min-h-screen max-w-[2048px]">
        {Banners.map((banner, index) => (
          <div key={index} className="">
            <ImageWithLink link={banner.Link} image={banner.Image} altText={banner.Title} />
          </div>
        ))}
      </main>
    </TranslationsProvider>
  );
}

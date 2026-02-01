import getNewsDataGraphQL from '@/app/api/news/getNewsDataGrapQL';
import BannersSection from '@/app/components/News/Banners';
import LeftSide from '@/app/components/News/LeftSide';
import RightSide from '@/app/components/News/RightSide';
import TranslationsProvider from '@/app/components/TranslationsProvides';
import initTranslations from '@/app/i18n';
import React from 'react';

export default async function page({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['news']);
  const i18nNamespace = ['news'];

  const { Banners, News_vault, Dispatch, PublicationsPromo } = await getNewsDataGraphQL(locale);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>
      <main className="mx-auto mb-5 min-h-screen max-w-[2048px]">
        <BannersSection Banners={Banners} />
        <section className="justify-center px-2 lg:flex lg:px-0">
          <LeftSide News_vault={News_vault} Dispatch={Dispatch} PublicationsPromo={PublicationsPromo} />
          <div className="mx-2 w-2 bg-[#00302e]"></div>
          <RightSide />
        </section>
      </main>
    </TranslationsProvider>
  );
}

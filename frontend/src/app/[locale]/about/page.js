import React from 'react';
import TranslationsProvider from '../../components/TranslationsProvides';
import initTranslations from '../../i18n';

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['common']);
  const i18nNamespace = ['common'];

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>
      <main className="mx-auto min-h-screen max-w-[2048px]">
        <div>About Page</div>
      </main>
    </TranslationsProvider>
  );
}

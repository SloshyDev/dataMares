import ExampleClientComponent from '../components/ExampleClientComponent';
import LanguageChanger from '../components/LanguageChanger';
import TranslationsProvider from '../components/TranslationsProvides';
import initTranslations from '../i18n';

export default async function Home({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['home']);
  const i18nNamespace = ['home'];

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>

      <main className='min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900'>
        {/* <h1>{t('home_title')}</h1>
        <ExampleClientComponent />
        <LanguageChanger /> */}
      </main>
    </TranslationsProvider>
  );
}
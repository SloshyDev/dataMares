import BannersCarrousel from '../components/Home/BannersCarrousel';
import TranslationsProvider from '../components/TranslationsProvides';
import initTranslations from '../i18n';
import getHomeContentsGraphQL from '../api/home/getHomeContentsGraphQL';
import LatestNews from '../components/Home/LatestNews';


export default async function Home({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['home']);
  const i18nNamespace = ['home'];

  const { latest_news_data, data_contents_data } = await getHomeContentsGraphQL();

  console.log(latest_news_data);
  console.log(data_contents_data);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>
      <main className='min-h-screen max-w-[2048px] mx-auto'>
        <section className='flex flex-col items-center lg:flex-row gap-8 mx-5 justify-between'>
          <BannersCarrousel className="w-full lg:w-[73%]" contents={data_contents_data} />
          <LatestNews className="w-full lg:w-[25%] lg:h-[-webkit-fill-available] flex flex-col justify-between" contents={latest_news_data} />
        </section>
      </main>
    </TranslationsProvider>
  );
}

{/* <h1>{t('home_title')}</h1>
        <ExampleClientComponent />
        <LanguageChanger /> */}
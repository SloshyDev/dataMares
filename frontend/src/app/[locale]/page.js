import BannersCarrousel from '../components/Home/BannersCarrousel';
import TranslationsProvider from '../components/TranslationsProvides';
import initTranslations from '../i18n';
import getHomeContentsGraphQL from '../api/home/getHomeContentsGraphQL';
import LatestNews from '../components/Home/LatestNews';
import PromosCarrousel from '../components/Home/PromosCarrousel';
import ReadingRecommendations from '../components/Home/ReadingRecommendations';

export default async function Home({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['home']);
  const i18nNamespace = ['home'];

  const { latest_news_data, data_contents_data, reading_recommendations_data } = await getHomeContentsGraphQL();
  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>
      <main className="mx-auto min-h-screen max-w-[2048px]">
        <section className="mx-5 flex flex-col items-center justify-between gap-8 lg:flex-row">
          <BannersCarrousel className="w-full lg:w-[73%]" contents={data_contents_data} />
          <LatestNews className="flex w-full flex-col justify-between lg:w-[25%]" contents={latest_news_data} />
        </section>
        <PromosCarrousel contents={data_contents_data} />
        <ReadingRecommendations contents={reading_recommendations_data} />
      </main>
    </TranslationsProvider>
  );
}

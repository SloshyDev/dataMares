import BannersCarrousel from '../components/Home/BannersCarrousel';
import TranslationsProvider from '../components/TranslationsProvides';
import initTranslations from '../i18n';
import getHomeContentsGraphQL from '../api/home/getHomeContentsGraphQL';
import LatestNews from '../components/Home/LatestNews';
import PromosCarrousel from '../components/Home/PromosCarrousel';
import ReadingRecommendations from '../components/Home/ReadingRecommendations';
import DoNotMissIt from '../components/Home/DoNotMissIt';
import HowDataMaresWorks from '../components/Home/HowDataMaresWorks';

export default async function Home({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['home']);
  const i18nNamespace = ['home'];

  const { carrousel_data, latest_news_data, promos_data, reading_recommendations_data, do_not_miss_it_data, dm_graphic_data } =
    await getHomeContentsGraphQL(locale);

  console.log(promos_data);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>
      <main className="mx-auto min-h-screen max-w-[2048px]">
        <section className="mx-5 flex flex-col items-center justify-between gap-8 lg:flex-row">
          <BannersCarrousel className="w-full lg:w-[73%]" contents={carrousel_data} />
          <LatestNews className="flex w-full flex-col justify-between lg:w-[25%]" contents={latest_news_data} />
        </section>
        <PromosCarrousel contents={promos_data} />
        <ReadingRecommendations contents={reading_recommendations_data} />
        <DoNotMissIt contents={do_not_miss_it_data} />
        <HowDataMaresWorks contents={dm_graphic_data} />
      </main>
    </TranslationsProvider>
  );
}

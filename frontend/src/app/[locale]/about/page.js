export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  // Puedes personalizar estos textos o hacerlos dinámicos con traducción si lo deseas
  return {
    title: locale === 'es' ? 'Sobre DataMares' : 'About DataMares',
    description:
      locale === 'es'
        ? 'Conoce la misión, visión y el equipo detrás de DataMares.'
        : 'Learn about the mission, vision, and the team behind DataMares.',
    openGraph: {
      title: locale === 'es' ? 'Sobre DataMares' : 'About DataMares',
      description:
        locale === 'es'
          ? 'Conoce la misión, visión y el equipo detrás de DataMares.'
          : 'Learn about the mission, vision, and the team behind DataMares.',
      url: `https://yokaicdmx.com/${locale}/about`,
      siteName: 'DataMares',
      images: [
        {
          url: '/public/Logos/dm_full.svg',
          width: 1200,
          height: 630,
          alt: 'DataMares',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'es' ? 'Sobre DataMares' : 'About DataMares',
      description:
        locale === 'es'
          ? 'Conoce la misión, visión y el equipo detrás de DataMares.'
          : 'Learn about the mission, vision, and the team behind DataMares.',
      images: ['/public/Logos/dm_full.svg'],
    },
  };
}
import React from 'react';
import TranslationsProvider from '../../components/TranslationsProvides';
import initTranslations from '../../i18n';
import getAboutContentGraphQL from '@/app/api/about/getAboutContentGraphQL';
import Image from 'next/image';
import { getImageUrl } from '@/app/contants/url';
import TeamGrid from '@/app/components/About/TeamGrid';
import TeamSectionToggle from '@/app/components/About/TeamSectionToggle';
import Link from 'next/link';

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['about']);
  const i18nNamespace = ['about'];

  const {
    Banner,
    Mission,
    Vision,
    Dm_team,
    Founding_group,
    Advisory_board,
    Dm_team_icon,
    Advisory_team_icon,
    Founding_team_icon,
  } = await getAboutContentGraphQL(locale);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>
      <main className="mx-auto min-h-screen max-w-[2048px]">
        <Image
          src={getImageUrl(Banner.url)}
          alt="About Banner"
          width={Banner.width}
          height={Banner.height}
          className="w-[2048px]"
        />

        <section className="mx-4 mt-10 lg:mx-auto lg:mb-30 lg:w-3/5">
          <h1 className="mb-10 text-center text-2xl leading-7 font-bold text-[#125451] uppercase lg:text-[2.5vw] screen:text-[3rem] dark:text-[#1e7470]">
            {t('mission')}
          </h1>
          <p className="mb-16 text-center text-xl leading-7 text-[#333333] lg:text-[1vw] screen:text-[1.25rem] dark:text-[#dddddd]">
            {Mission}
          </p>
        </section>
        <section className="mx-4 mt-10 mb-20 lg:mx-auto lg:w-3/5">
          <h1 className="mb-10 text-center text-2xl leading-7 font-bold text-[#125451] uppercase lg:text-[2.5vw] screen:text-[3rem] dark:text-[#1e7470]">
            {t('vision')}
          </h1>
          <p className="mb-16 text-center text-xl leading-7 text-[#333333] lg:text-[1vw] screen:text-[1.25rem] dark:text-[#dddddd]">
            {Vision}
          </p>
        </section>
        <section>
          <div className="mb-8 flex items-center justify-center gap-2">
            <Image
              src={getImageUrl(Dm_team_icon.url)}
              alt={Dm_team_icon.caption || 'DataMares Team'}
              width={Dm_team_icon.width}
              height={Dm_team_icon.height}
              className="h-[3.12vw] w-[3.12vw]"
            />
            <h1 className="text-2xl font-bold text-[#125451] lg:text-[1.25vw] screen:text-[1.5rem] dark:text-[#1e7470]">
              DATAMARES
            </h1>
          </div>
          <TeamGrid members={Dm_team} />
        </section>

        <TeamSectionToggle
          icon={getImageUrl(Advisory_team_icon.url)}
          iconAlt={Advisory_team_icon.caption || 'Advisory Board'}
          iconCaption={Advisory_team_icon.caption}
          iconWidth={Advisory_team_icon.width}
          iconHeight={Advisory_team_icon.height}
          title={t('advisory_board')}
          widthSection={'w-3/5'}
          widthPerImage={'lg:w-[12.68vw] screen:w-[15.68rem]'}
          members={Advisory_board}
          labelId="advisory-board-grid"
        />
        <TeamSectionToggle
          icon={getImageUrl(Founding_team_icon.url)}
          iconAlt={Founding_team_icon.caption || 'Founding Group'}
          iconCaption={Founding_team_icon.caption}
          iconWidth={Founding_team_icon.width}
          iconHeight={Founding_team_icon.height}
          widthSection={'w-4/5'}
          widthPerImage={'lg:w-[12.68vw] screen:w-[15.68rem]'}
          title={t('founding_group')}
          members={Founding_group}
          labelId="founding-group-grid"
        />

        <section>
          <Link href="/partners_&_collaborators">
            <h2 className="mx-auto mb-20 w-11/12 rounded-lg bg-[#699b46] py-2 text-center text-2xl font-bold text-white transition-colors duration-300 hover:bg-[#5a8a3d] lg:w-1/5 dark:bg-[#1e7470] hover:dark:bg-[#175a56]">
              {t('partner_and_collaborators')}
            </h2>
          </Link>
        </section>
      </main>
    </TranslationsProvider>
  );
}

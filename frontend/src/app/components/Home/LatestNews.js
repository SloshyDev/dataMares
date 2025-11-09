'use client';
import ImageWithLink from '../Common/ImageWithLink';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function LatestNews({ contents, ...props }) {
  const { t } = useTranslation();
  return (
    <div className={`${props.className || ''}`}>
      <div className={`overflow-hidden rounded-lg border-x-4 border-t-4 border-b-4 border-[#00302e] 2xl:border-t-0`}>
        <h2 className="block bg-[#00302e] py-1 text-center font-myriad-condensed text-3xl font-black text-[#c4cc2d] uppercase lg:hidden 2xl:block">
          {t('latest_news')}
        </h2>
        <ImageWithLink
          unoptimized={true}
          className="w-full"
          link={contents?.Link}
          image={contents?.Image}
          altText={contents?.Title}
        />
      </div>
      <Link
        href="/news"
        className="mt-4 block rounded-lg border-4 border-[#00302e] bg-linear-to-b from-[#1b685f] from-18% to-[#c4cc2d] py-1.5 text-center font-myriad-condensed text-2xl text-white uppercase transition-all duration-300 hover:scale-105"
      >
        {t('see_all_news')}
      </Link>
    </div>
  );
}

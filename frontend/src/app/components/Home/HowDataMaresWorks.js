'use client';
import { getImageUrl } from '@/app/contants/url';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HowDataMaresWorks({ contents }) {
  const { t } = useTranslation();
  return (
    <div className="my-8">
      <h1 className="text-center font-myriad-condensed text-7xl font-black text-[#18736f]">{t('how_data_mares_works')}</h1>
      <h2 className="text-center font-myriad-condensed text-5xl font-black text-[#669841]">
        {t('who_collaborates_with_datamares')}
      </h2>
      <Link
        href="/about"
        className="mx-auto mt-5 block w-80 rounded-full border-8 border-[#143330] bg-[#ccc103] px-4 py-2 text-center font-myriad-condensed text-2xl font-black text-black transition-all duration-300 hover:scale-105 hover:border-[#ccc103] hover:bg-[#143330]"
      >
        <Image
          unoptimized
          src="/dataPoster_icon.svg"
          alt="Learn more about dataMares"
          width={72}
          height={72}
          className="mx-auto w-11/12"
        />
      </Link>
      <Image
        unoptimized
        src={getImageUrl(contents[0]?.Image?.url || '')}
        alt={contents[0]?.Title || 'Placeholder Title'}
        width={contents[0]?.Image?.width || 300}
        height={contents[0]?.Image?.height || 200}
        className="mx-auto mt-4 w-4/5"
      />
    </div>
  );
}

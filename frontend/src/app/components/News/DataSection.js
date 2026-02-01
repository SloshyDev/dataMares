'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLink from '../Common/ImageWithLink';

export default function DataSection({ dataPromo }) {
  const { t } = useTranslation();
  return (
    <div className="mx-2 lg:mx-0">
      <h1 className="text-center font-myriad-condensed text-3xl leading-none font-black text-[#648c4d] uppercase lg:text-[3.12vw] screen:text-6xl">
        {t('dive_into_new_section')}
      </h1>
      <h2 className="text-center font-myriad-condensed text-8xl leading-none font-black text-[#237570] uppercase lg:text-[8.33vw] lg:leading-[5.5vw] screen:text-[10rem]">
        {t('data')}
      </h2>
      <ImageWithLink
        className="mx-auto mt-8 w-full rounded-2xl transition-transform duration-300 hover:scale-105"
        altText={dataPromo.Title}
        image={dataPromo.Image}
        isExternal={true}
        link={dataPromo.Link}
        type={dataPromo.TypeOfLink}
        unoptimized={true}
      />
    </div>
  );
}

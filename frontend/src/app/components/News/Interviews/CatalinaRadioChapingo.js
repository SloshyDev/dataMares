'use client';
import MicIconV2 from '@/assets/Icons/MicIconV2';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MediaButton from '../../Common/MediaButton';

export default function CatalinaRadioChapingo() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full items-center justify-between px-2 lg:px-0">
      <div className="group mx-auto flex flex-col items-center">
        <a href="https://www.youtube.com/watch?v=BuPTrRV5jJM" className="" target="_blank" rel="noopener noreferrer">
          <MicIconV2 className="mx-auto mb-2 w-28 fill-[#c4cc2d] transition-colors duration-300 group-hover:fill-[#166561] lg:w-[8.3vw] screen:w-40" />
        </a>
        <MediaButton type="listen" href="https://www.youtube.com/watch?v=BuPTrRV5jJM" />
      </div>
      <div className="mx-2 text-white lg:mx-12">
        <h1 className="font-myriad-condensed text-3xl leading-none font-black lg:text-[1.88vw] screen:text-4xl">
          {t('radio_chapingo_title')}:
        </h1>
        <p className="font-myriad-condensed text-xl leading-none font-bold lg:text-[1.56vw] screen:text-3xl">
          {t('radio_chapingo_sub_title')}
        </p>
      </div>
    </section>
  );
}

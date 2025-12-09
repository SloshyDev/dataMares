'use client';
import MicIcon from '@/assets/Icons/MicIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CatalinaRadioChapingo from './Interviews/CatalinaRadioChapingo';
import Habitare from './Interviews/Habitare';

export default function Interviews() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto overflow-hidden rounded-2xl border-8 border-[#166561] bg-[#00302e] py-4">
      <div className="h-40 w-full py-6">
        <h1 className="mx-4 rounded-xl bg-linear-to-b from-[#b9b532] to-[#267571] py-4 text-center font-myriad-condensed text-5xl leading-14 font-black text-white uppercase xl:text-6xl 2xl:text-7xl">
          {t('interviews')}
        </h1>
        <MicIcon className="relative -top-30 left-8 w-25" />
      </div>
      <section className="mx-10">
        <CatalinaRadioChapingo />
        <Habitare />
      </section>
    </div>
  );
}

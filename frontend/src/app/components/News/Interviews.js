'use client';
import MicIcon from '@/assets/Icons/MicIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CatalinaRadioChapingo from './Interviews/CatalinaRadioChapingo';
import Habitare from './Interviews/Habitare';
import BasicCardNew from './Interviews/BasicCardNew';

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
      <section className="md:mx-10">
        <CatalinaRadioChapingo />
        <Habitare />
        <BasicCardNew
          title="LOS NIÑOS PREGUNTAN"
          content="¿Qué hay en las profunidades del océano?,¿cómo es que el cambio climatico está afectando a los mares y océanos?"
          link="https://example.com"
          image="https://datamares.org/wp-content/uploads/2024/09/Los-nin%CC%83os-pregunta.webp"
          textLink="VIDEO"
        />
        <BasicCardNew
          title="DATAMARES EN LA UNAM"
          content="La directora de dataMares en conversación con la comunidad universitaria."
          link="https://example.com"
          image="https://datamares.org/wp-content/uploads/2024/09/datamares-en-la-unam.webp"
          textLink="VIDEO"
        />
        <BasicCardNew
          className="bg-linear-to-b from-[#9ea521] to-[#166561] py-4"
          title="LA CIENCIA QUE SOMOS"
          subTitle="CONOCE LOS OCÉANOS. 07 DE JUNIO DE 2024"
          content="La directora de dataMares en conversación con la comunidad universitaria."
          link="https://example.com"
          image="https://datamares.org/wp-content/uploads/2024/09/La-ciencia-que-somos.webp"
          textLink="VIDEO"
        />
      </section>
    </div>
  );
}

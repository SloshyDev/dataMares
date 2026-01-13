import MicIconV2 from '@/assets/Icons/MicIconV2';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CatalinaRadioChapingo() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full items-center justify-between">
      <div className="group mx-auto flex flex-col items-center">
        <a href="https://www.youtube.com/watch?v=BuPTrRV5jJM" className="" target="_blank" rel="noopener noreferrer">
          <MicIconV2 className="mx-auto mb-2 w-40 fill-[#c4cc2d] transition-colors duration-300 group-hover:fill-[#166561]" />
          <h1 className="overflow-hidden rounded-2xl border-4 border-[#00302e] bg-linear-to-b from-[#267571] to-[#b9b532] px-8 py-0.5 text-center font-myriad-condensed font-bold text-white transition-colors duration-300 group-hover:from-[#b9b532] group-hover:to-[#267571] wide:text-[1.5rem] wide-screen:text-4xl">
            {t('listen')}
          </h1>
        </a>
      </div>
      <div className="mx-12 text-white">
        <h1 className="font-myriad-condensed text-4xl leading-none font-black screen:text-[2.2rem]">
          Entrevista Radio Chapingo:
        </h1>
        <p className="font-myriad-condensed text-2xl leading-none font-bold screen:text-3xl">
          Catalina López-Sagástegui platica sobre los orígenes de dataMares y el quehacer de su labor en la divulgación de la
          ciencia.
        </p>
      </div>
    </section>
  );
}

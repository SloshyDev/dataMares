import MicIconV2 from '@/assets/Icons/MicIconV2';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CatalinaRadioChapingo() {
  const { t } = useTranslation();
  return (
    <section className="flex items-center">
      <div className="group mx-auto flex flex-col items-center">
        <a href="https://www.youtube.com/watch?v=BuPTrRV5jJM" className="" target="_blank" rel="noopener noreferrer">
          <MicIconV2 className="mb-2 w-40 fill-[#c4cc2d] transition-colors duration-300 group-hover:fill-[#166561]" />
          <h1 className="scree:text-4xl overflow-hidden rounded-2xl border-4 border-[#00302e] bg-linear-to-b from-[#267571] to-[#b9b532] px-10 py-2 font-myriad-condensed text-3xl font-bold text-white transition-colors duration-300 group-hover:from-[#b9b532] group-hover:to-[#267571]">
            {t('listen')}
          </h1>
        </a>
      </div>
      <div className="ml-4 text-white">
        <h1 className="font-myriad-condensed text-4xl leading-none font-black screen:text-5xl">Entrevista Radio Chapingo:</h1>
        <p className="font-myriad-condensed text-2xl leading-none font-bold screen:text-3xl">
          Catalina López-Sagástegui platica sobre los orígenes de dataMares y el quehacer de su labor en la divulgación de la
          ciencia.
        </p>
      </div>
    </section>
  );
}

'use client';
import { useTranslation } from 'react-i18next';
import MicIcon from '@/assets/Icons/MicIcon';
import React from 'react';

export default function Habitare() {
  const { t } = useTranslation();
  return (
    <section className="my-4 rounded-2xl bg-linear-to-b from-[#19716e] to-[#12524f] text-white">
      <div
        style={{ backgroundImage: `url(/Graficos/FondoCDMX.svg)` }}
        className="flex h-full w-full items-center bg-cover bg-bottom pt-8"
      >
        <div className="mx-auto flex w-11/12">
          <MicIcon className="hidden w-40 2xl:block" />
          <div className="ml-8">
            <img src="https://api.yokaicdmx.com/uploads/Habitare_Icon_79672c44ff.png" alt="Habitare Logo" className="mb-4 w-65" />
            <div className="w-full">
              <h1 className="font-myriad-condensed text-3xl leading-none font-black wide:text-[1.6rem] screen:text-[2.3rem]">
                CREATIVIDAD EN UNA INFOGRAFÍA
              </h1>
              <p className="mt-2 flex items-center justify-between pb-4 font-myriad-condensed text-[2rem] leading-none font-black text-[#d0d001] xl:pb-4 wide:pb-0">
                ENTREVISTAS CON
                <br />
                dataMares
                <a href="https://www.youtube.com/watch?v=BuPTrRV5jJM" className="group" target="_blank" rel="noopener noreferrer">
                  <span className="w-fit overflow-hidden rounded-2xl border-4 border-[#00302e] bg-linear-to-b from-[#267571] to-[#b9b532] px-6 py-1 font-myriad-condensed text-2xl font-bold text-white transition-colors duration-300 group-hover:from-[#b9b532] group-hover:to-[#267571] wide:text-[1.5rem] wide-screen:text-4xl">
                    {t('listen')}
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import ArrowIcon from '@/assets/Icons/ArrowIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NewsVault({ News_vault }) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex overflow-hidden rounded-2xl border-8 border-[#166561] bg-[#00302e]">
      <img
        className="absolute z-10 -ml-6 hidden w-36 lg:block lg:w-[7.5vw] screen:w-36"
        src="https://datamares.org/wp-content/uploads/2024/09/newsVaulltIcon.webp"
        alt=""
      />
      <div className="hidden min-h-120 w-15 bg-[#c4cc2d] lg:block lg:w-[3.12vw] screen:w-15"></div>
      <div className="mx-2 w-11/12 pb-4 md:mx-auto screen:px-6">
        <h1 className="my-8 px-20 text-center font-myriad-condensed text-5xl leading-12 font-bold text-[#c4cc2d] uppercase transition-transform lg:my-[1.67vw] lg:text-[2.5vw] xl:text-[3rem] screen:my-8">
          {t('news_vault')}
        </h1>
        <section className="NewsVaultScrollBar max-h-115 overflow-y-scroll px-8 lg:pl-0">
          {News_vault.map((newsItem, index) => (
            <div key={index} className="group mx-2 mb-6 grid grid-cols-8 md:mx-0">
              <ArrowIcon className="z-10 m-auto mr-4 w-8 transition-transform group-hover:scale-105 md:z-auto lg:w-[1.88vw] screen:w-9" />
              <div className="group col-span-7">
                <a
                  href={newsItem.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-myriad-condensed text-2xl font-normal text-white decoration-[#c4cc2d] group-hover:underline lg:text-[1.25vw] screen:text-[1.5rem]"
                >
                  {newsItem.Tittle}
                </a>
                <p className="font-myriad-condensed text-xl text-[#c4cc2d] lg:text-[1vw] screen:text-[1.25rem]">
                  {newsItem.Source}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

'use client';
import ArrowIcon from '@/assets/Icons/ArrowIcon';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NewsVault({ News_vault }) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex overflow-hidden rounded-2xl border-8 border-[#166561] bg-[#00302e]">
      <img
        className="absolute z-10 -ml-6 hidden h-fit w-36 xl:block"
        src="https://datamares.org/wp-content/uploads/2024/09/newsVaulltIcon.webp"
        alt=""
      />
      <div className="hidden min-h-[25vw] w-15 bg-[#c4cc2d] xl:block"></div>
      <div className="mx-auto w-11/12 pb-4 xl:px-6 2xl:px-12">
        <h1 className="my-5 px-8 text-center font-myriad-condensed text-6xl leading-12 font-bold text-[#c4cc2d] uppercase transition-transform lg:text-5xl xl:text-6xl">
          {t('news_vault')}
        </h1>
        <section className="NewsVaultScrollBar max-h-115 overflow-y-scroll md:pr-2">
          {News_vault.map((newsItem, index) => (
            <div key={index} className="group mb-6 grid grid-cols-8">
              <ArrowIcon className="xl:10 z-10 m-auto mr-4 w-8 transition-transform group-hover:scale-105 md:z-auto lg:w-9 2xl:w-12" />
              <div className="group col-span-7">
                <a
                  href={newsItem.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-myriad-condensed text-2xl font-normal text-white decoration-[#c4cc2d] group-hover:underline"
                >
                  {newsItem.Tittle}
                </a>
                <p className="font-myriad-condensed text-xl text-[#c4cc2d]">{newsItem.Source}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

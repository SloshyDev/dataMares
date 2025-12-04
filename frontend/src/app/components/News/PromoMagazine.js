'use client';
import { getImageUrl } from '@/app/contants/url';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PromoMagazine({ PublicationsPromo }) {
  const { t } = useTranslation();
  return (
    <section className="mt-9 overflow-hidden rounded-2xl bg-[#00302e] pt-4">
      <div className="">
        <h1 className="mx-4 rounded-xl bg-linear-to-b from-[#b9b532] to-[#267571] py-4 text-center font-myriad-condensed text-5xl leading-none font-black text-white uppercase lg:text-3xl xl:text-4xl 2xl:text-5xl">
          {t('promo_magazine')}
        </h1>
        <div className="font-myriad-pro my-4 text-center text-4xl leading-none font-black text-white md:mx-4 lg:text-3xl xl:text-4xl 2xl:text-5xl">
          <a href={PublicationsPromo.Link} className="group font-myriad-condensed" target="_blank" rel="noopener noreferrer">
            <h1 className="text-6xl text-[#c3cc2e] uppercase transition-transform group-hover:scale-105 lg:text-6xl xl:text-7xl">
              {t('learn_more')}
            </h1>
            <h2 className="px-4 decoration-[#c3cc2e] decoration-2 group-hover:underline md:px-12">{PublicationsPromo.Title}</h2>
          </a>
        </div>
        <div className="bg-[#669740]">
          <p className="p-4 text-center font-myriad-condensed text-3xl font-light text-white md:px-12 md:py-8 lg:text-2xl lg:leading-6 xl:text-3xl xl:leading-8">
            {PublicationsPromo.Content}
          </p>
          <a href={PublicationsPromo.Link} className="group" target="_blank" rel="noopener noreferrer">
            <Image
              className="transition-transform duration-300 group-hover:scale-105"
              unoptimized={true}
              width={PublicationsPromo.Image.width}
              height={PublicationsPromo.Image.height}
              src={getImageUrl(PublicationsPromo.Image.url)}
              alt={PublicationsPromo.Title}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';
import { getImageUrl } from '@/app/contants/url';
import BlueWaves from '@/assets/Icons/BlueWaves';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PromoMagazine({ PublicationsPromo }) {
  const { t } = useTranslation();
  return (
    <section className="mt-9 rounded-2xl bg-linear-to-b from-[#054372] to-[#1b75bb] p-3.5">
      <div className="rounded-lg bg-linear-to-b from-[#001234] to-[#033689] pt-8">
        <div className="font-myriad-pro mb-4 text-center text-4xl leading-none font-black text-white md:mx-4 lg:text-3xl xl:text-4xl 2xl:text-5xl">
          <a href={PublicationsPromo.Link} className="group font-myriad-condensed" target="_blank" rel="noopener noreferrer">
            <h1 className="mt-4 text-5xl text-white uppercase transition-transform duration-300 group-hover:scale-105 lg:text-[2.5vw] screen:text-[3rem]">
              {t('new_section')}
            </h1>
            <h2 className="pb-8 text-7xl leading-20 font-black text-[#1b75bb] decoration-white decoration-2 group-hover:underline wide:text-8xl screen:px-5 screen:text-9xl screen:leading-25">
              {PublicationsPromo.Title}
            </h2>
          </a>
        </div>
        <div className="relative">
          <a
            href={PublicationsPromo.Link}
            className="group relative z-10 mx-auto flex w-4/5 justify-center rounded-full pb-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow-2xl"
              unoptimized={true}
              width={PublicationsPromo.Image.width}
              height={PublicationsPromo.Image.height}
              src={getImageUrl(PublicationsPromo.Image.url)}
              alt={PublicationsPromo.Title}
            />
          </a>
          <div className="absolute right-0 bottom-0 left-0">
            <BlueWaves className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

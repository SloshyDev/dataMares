'use client';
import React, { useRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { getImageUrl } from '@/app/contants/url';
import ImageWithLink from '../Common/ImageWithLink';
export default function PromosCarrousel({ contents }) {
  const { t } = useTranslation();

  const splideRef = useRef(null);
  const SplideOptions = {
    perPage: 4,
    pagination: false,
    gap: '4rem',
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    breakpoints: {
      1024: {
        autoplay: true,
        pagination: true,
        rewind: true,
        interval: 4000,
        perPage: 3,
      },
      768: {
        autoplay: true,
        pagination: true,
        rewind: true,
        interval: 4000,
        perPage: 2,
      },
      640: {
        autoplay: true,
        pagination: true,
        rewind: true,
        interval: 4000,
        perPage: 1,
      },
    },
  };

  return (
    <section className="mt-8 bg-[#00302e] px-5 pb-8">
      <h1 className="py-4 text-center font-myriad-condensed text-4xl font-black text-white uppercase">{t('most_recent')}</h1>
      <Splide options={SplideOptions} ref={splideRef} hasTrack={false} aria-label="My Favorite Images">
        <SplideTrack>
          {(Array.isArray(contents) ? contents.slice(0, 4) : []).map((content, index) => (
            <SplideSlide key={content.documentId || index}>
              <ImageWithLink
                unoptimized={true}
                className="w-full rounded-2xl"
                link={content.Link}
                image={content.Promo}
                altText={content.Title}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </section>
  );
}

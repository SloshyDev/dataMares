'use client';
import { BASE_URL } from '@/app/contants/url';
import { SplideSlide, SplideTrack, Splide } from '@splidejs/react-splide';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function ReadingRecommendations({ contents }) {
  const { t } = useTranslation();
  console.log(contents);

  const splideRef = useRef(null);
  const SplideOptions = {
    perPage: 2,
    pagination: false,
    gap: '4rem',
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    breakpoints: {
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
    <div className="mt-8 px-5">
      <h2 className="mb-8 text-center font-myriad-condensed text-4xl font-black text-[#166561] uppercase">
        {t('reading_recommendations')}...
      </h2>
      <Splide options={SplideOptions} ref={splideRef} hasTrack={false} aria-label="My Favorite Images">
        <SplideTrack>
          {(Array.isArray(contents) ? contents.slice(0, 4) : []).map((content, index) => (
            <SplideSlide key={content.documentId || index}>
              <Image
                unoptimized
                className="w-full rounded-2xl"
                width={content.Image.width}
                height={content.Image.height}
                src={BASE_URL + content.Image.url}
                alt={content.Title}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
}

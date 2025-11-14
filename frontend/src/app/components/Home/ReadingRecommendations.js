'use client';
import { getImageUrl } from '@/app/contants/url';
import { SplideSlide, SplideTrack, Splide } from '@splidejs/react-splide';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLink from '../Common/ImageWithLink';

export default function ReadingRecommendations({ contents }) {
  const { t } = useTranslation();

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
    <div className="px-5 py-8">
      <h2 className="mb-8 text-center font-myriad-condensed text-3xl font-black text-[#166561] uppercase dark:text-white">
        {t('reading_recommendations')}...
      </h2>
      <Splide options={SplideOptions} ref={splideRef} hasTrack={false} aria-label="My Favorite Images">
        <SplideTrack>
          {(Array.isArray(contents) ? contents.slice(0, 4) : []).map((content, index) => (
            <SplideSlide key={content.documentId || index}>
              <ImageWithLink
                unoptimized={true}
                className="w-full rounded-2xl"
                link={content.Link}
                image={content.Image}
                altText={content.Title}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
}

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
      <h1 className="py-4 text-center font-myriad-condensed text-3xl font-black text-white uppercase">{t('most_recent')}</h1>
      <Splide options={SplideOptions} ref={splideRef} hasTrack={false} aria-label="My Favorite Images">
        <SplideTrack>
          {(Array.isArray(contents) ? contents : []).flatMap((content, index) => {
            // Caso 1: ComponentDataContentDataContent (tiene data_contents array)
            if (content.data_contents && Array.isArray(content.data_contents)) {
              return content.data_contents.map((dataContent, subIndex) => (
                <SplideSlide key={`${index}-${subIndex}`}>
                  <ImageWithLink
                    slug={dataContent.Slug}
                    type="datacontent"
                    unoptimized={true}
                    className="w-full rounded-2xl"
                    image={dataContent.Promo}
                    altText={dataContent.Title}
                  />
                </SplideSlide>
              ));
            }

            // Caso 2: ComponentImageWithLinkLatestNews (tiene Image, Link, Title directamente)
            if (content.Image) {
              let linkProps = {};

              // Determinar el tipo de link según TypeOfLink
              switch (content.TypeOfLink) {
                case 'dataContent':
                  linkProps = {
                    slug: content.Slug,
                    type: 'datacontent',
                  };
                  break;
                case 'Page':
                  linkProps = {
                    link: content.Link,
                    isExternal: false,
                  };
                  break;
                case 'ExternalLink':
                  linkProps = {
                    link: content.Link,
                    isExternal: true,
                  };
                  break;
                default:
                  linkProps = {};
              }

              return (
                <SplideSlide key={index}>
                  <ImageWithLink
                    {...linkProps}
                    unoptimized={true}
                    className="w-full rounded-2xl"
                    image={content.Image}
                    altText={content.Title}
                  />
                </SplideSlide>
              );
            }

            return null;
          })}
        </SplideTrack>
      </Splide>
    </section>
  );
}

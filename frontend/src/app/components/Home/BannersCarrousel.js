'use client';
import React, { useRef } from 'react';
import styles from './BannersCarrousel.module.css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import ImageWithLink from '../Common/ImageWithLink';
import { useTranslation } from 'react-i18next';

export default function BannersCarrousel({ contents, ...props }) {
  const splideRef = useRef(null);

  console.log(useTranslation());

  const handlePrev = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go('<');
    }
  };

  const handleNext = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go('>');
    }
  };

  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 4000,
        pagination: false,
        arrows: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        direction: 'top',
        breakpoints: {
          768: {
            pagination: true,
          },
        },
      }}
      ref={splideRef}
      {...props}
      hasTrack={false}
      aria-label="My Favorite Images"
    >
      <SplideTrack>
        {(Array.isArray(contents) ? contents : []).map((content, index) => (
          <SplideSlide key={content.documentId || index}>
            <ImageWithLink link={content.Link} unoptimized={true} image={content.Banner} altText={content.Title} />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className={`${styles.splide__arrows} hidden md:block`}>
        <button className={`${styles.splide__arrow} group ${styles['splide__arrow--prev']}`} onClick={handlePrev}>
          <svg
            className="h-12 w-12 stroke-white transition-all duration-300 group-hover:stroke-[#1e7571] hover:scale-125"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.6758 1.1123L2.17578 10.6123L12.6758 21.1123" strokeWidth="3" />
            <path d="M21.6758 1.1123L11.1758 10.6123L21.6758 21.1123" strokeWidth="3" />
          </svg>
        </button>
        <button className={`${styles.splide__arrow} group ${styles['splide__arrow--next']}`} onClick={handleNext}>
          <svg
            className="h-12 w-12 rotate-180 stroke-white transition-all duration-300 group-hover:stroke-[#1e7571] hover:scale-125"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.6758 1.1123L2.17578 10.6123L12.6758 21.1123" strokeWidth="3" />
            <path d="M21.6758 1.1123L11.1758 10.6123L21.6758 21.1123" strokeWidth="3" />
          </svg>
        </button>
      </div>
    </Splide>
  );
}

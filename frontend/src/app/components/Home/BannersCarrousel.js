'use client';
import React, { useRef } from 'react';
import { BASE_URL } from '@/app/contants/url';
import styles from './BannersCarrousel.module.css';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';
import Image from 'next/image';

export default function BannersCarrousel({ contents, ...props }) {
    const splideRef = useRef(null);

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
            }}
            ref={splideRef}
            {...props}
            hasTrack={false}
            aria-label="My Favorite Images">
            <SplideTrack>
                {(Array.isArray(contents) ? contents : []).map((content, index) => (
                    <SplideSlide key={content.documentId || index}>
                        <Image unoptimized className='w-full rounded-2xl' width={content.Banner.width} height={content.Banner.height} src={BASE_URL + content.Banner.url} alt={content.Title} />
                    </SplideSlide>
                ))}
            </SplideTrack>
            <div className={styles.splide__arrows}>
                <button className={`${styles.splide__arrow} group ${styles['splide__arrow--prev']}`} onClick={handlePrev}>
                    <svg className='w-12 h-12 group-hover:stroke-[#1e7571] stroke-white transition-all duration-300 hover:scale-125' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6758 1.1123L2.17578 10.6123L12.6758 21.1123" strokeWidth="3" />
                        <path d="M21.6758 1.1123L11.1758 10.6123L21.6758 21.1123" strokeWidth="3" />
                    </svg>
                </button>
                <button className={`${styles.splide__arrow} group ${styles['splide__arrow--next']}`} onClick={handleNext}>
                    <svg className='w-12 h-12 group-hover:stroke-[#1e7571] stroke-white rotate-180 transition-all duration-300 hover:scale-125' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6758 1.1123L2.17578 10.6123L12.6758 21.1123" strokeWidth="3" />
                        <path d="M21.6758 1.1123L11.1758 10.6123L21.6758 21.1123" strokeWidth="3" />
                    </svg>
                </button>
            </div>
        </Splide>
    )
}

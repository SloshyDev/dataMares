'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageMagnifier from './ImageMagnifier';
import { getImageUrl } from '@/app/contants/url';
import FacebookIcon from '@/assets/socialIcons/fb_icon';
import InstagramIcon from '@/assets/socialIcons/ig_icon';
import XIcon from '@/assets/socialIcons/x_icon';

import DownloadPDFButton from './DownloadPDFButton';
import SharedIcons from './SharedIcons';

export default function DataContent({ content, locale }) {
  const dataContent = content;
  const router = useRouter();

  const originalUrl = getImageUrl(dataContent.Poster?.url) ? getImageUrl(dataContent.Poster?.url) : undefined;
  const largeUrl = getImageUrl(dataContent.Poster?.formats?.large?.url)
    ? getImageUrl(dataContent.Poster?.formats?.large?.url)
    : originalUrl;

  // URL de la página actual para compartir (solo en cliente)
  const [shareUrl, setShareUrl] = useState('');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  // Redirección automática si no hay PDF
  useEffect(() => {
    if (!dataContent.PDF?.url && typeof window !== 'undefined') {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Cambiar idioma usando router de Next.js (fuera del render con setTimeout)
            setTimeout(() => {
              const otherLocale = locale === 'en' ? 'es' : 'en';
              const slug = dataContent.Slug;
              const newPath = `/${otherLocale}/datacontent/${slug}`;
              console.log('Redirigiendo a', newPath);
              router.push(newPath);
            }, 0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`mx-auto mb-5 grid w-11/12 max-w-[2048px] grid-cols-1 gap-8 lg:w-auto ${dataContent.PDF?.url ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}
    >
      <div className={`px-8 ${dataContent.PDF?.url ? 'lg:order-1' : ''}`}>
        <h1 className="text-center font-myriad-condensed text-5xl font-black text-[#125451]">{dataContent.Title}</h1>
        <h2 className="mb-4 text-center text-3xl text-[#6a9a4a] italic dark:text-[#c5cf2e]">({dataContent.ScientificName})</h2>
        {dataContent.PDF?.url && (
          <>
            <p className="mb-8 text-center text-lg">{dataContent.Caption}</p>
            <SharedIcons dataContent={dataContent} locale={locale} shareUrl={shareUrl} />
          </>
        )}
      </div>
      <div className={`mx-auto ${dataContent.PDF?.url ? '' : 'flex h-120 w-200 items-center justify-center'}`}>
        {dataContent.PDF?.url ? (
          <ImageMagnifier
            src={largeUrl}
            zoomSrc={originalUrl}
            alt={dataContent.Title || 'Data Poster'}
            magnifierSize={250}
            zoomLevel={3}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-200 p-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-700">
              {locale === 'en'
                ? 'This dataContent is not ready yet in English.'
                : 'Este contenido aún no está disponible en español.'}
            </h2>
            <div className="text-5xl font-bold text-[#125451]">{countdown}</div>
          </div>
        )}
      </div>
    </div>
  );
}

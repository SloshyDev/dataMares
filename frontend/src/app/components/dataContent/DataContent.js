'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageMagnifier from './ImageMagnifier';
import { getImageUrl } from '@/app/contants/url';
import SharedIcons from './SharedIcons';
import OtherLocaleLink from './OtherLocaleLink';

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
  const [itsLargePoster, setItsLargePoster] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    const width = dataContent.Poster?.formats?.large?.width;
    if (typeof width === 'number') {
      setItsLargePoster(width > 700);
    }
    // Si no es número, no cambies el estado (mantén el valor anterior)
  }, [dataContent.Poster]);

  return (
    <div
      className={`mx-auto mb-5 grid w-11/12 max-w-[2048px] grid-cols-1 gap-8 lg:w-auto ${dataContent.PDF?.url ? (itsLargePoster ? 'lg:grid-cols-1' : 'lg:grid-cols-2') : 'lg:grid-cols-1'}`}
    >
      <div className={` ${!dataContent.PDF?.url || itsLargePoster ? 'mx-auto lg:w-3/4' : 'lg:order-1 lg:px-8'}`}>
        <h1 className="text-center font-myriad-condensed text-3xl font-black text-[#125451] lg:text-5xl dark:text-[#1e7470]">
          {dataContent.Title}
        </h1>
        <h2 className="mb-4 text-center text-xl text-[#6a9a4a] lg:text-3xl dark:text-[#c5cf2e]">
          (<span className="italic">{dataContent.ScientificName}</span>)
        </h2>
        {dataContent.PDF?.url && (
          <>
            <p className="mb-8 text-center lg:text-lg">{dataContent.Caption}</p>
            <SharedIcons
              className={`hidden ${itsLargePoster ? 'flex-row-reverse items-center justify-center gap-4 lg:flex' : 'flex-col gap-8 lg:flex'} `}
              dataContent={dataContent}
              locale={locale}
              shareUrl={shareUrl}
            />
          </>
        )}
      </div>
      <div className={`mx-auto ${dataContent.PDF?.url ? '' : 'flex w-200 items-center justify-center lg:h-120'}`}>
        {dataContent.PDF?.url ? (
          <ImageMagnifier
            locale={locale}
            src={largeUrl}
            zoomSrc={originalUrl}
            alt={dataContent.Title || 'Data Poster'}
            magnifierSize={250}
            zoomLevel={3}
            posterWidth={dataContent.Poster?.formats?.large?.width}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-200 p-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-700">
              {locale === 'en'
                ? 'This dataContent is not ready yet in English.'
                : 'Este contenido aún no está disponible en español.'}
            </h2>
            <OtherLocaleLink dataContent={dataContent} locale={locale} />
          </div>
        )}
      </div>
      {dataContent.PDF?.url && (
        <>
          <SharedIcons
            className="flex flex-col gap-4 lg:hidden"
            dataContent={dataContent}
            locale={locale}
            shareUrl={shareUrl}
            largePoster={itsLargePoster}
          />
        </>
      )}
    </div>
  );
}

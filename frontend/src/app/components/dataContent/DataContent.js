'use client';
import React, { useEffect, useState } from 'react';
import ImageMagnifier from './ImageMagnifier';
import { getImageUrl } from '@/app/contants/url';
import FacebookIcon from '@/assets/socialIcons/fb_icon';
import InstagramIcon from '@/assets/socialIcons/ig_icon';
import XIcon from '@/assets/socialIcons/x_icon';

export default function DataContent(content) {
  const dataContent = content.content;

  console.log(dataContent);

  const originalUrl = getImageUrl(dataContent.Poster?.url) ? getImageUrl(dataContent.Poster?.url) : undefined;
  const largeUrl = getImageUrl(dataContent.Poster?.formats?.large?.url)
    ? getImageUrl(dataContent.Poster?.formats?.large?.url)
    : originalUrl;

  // URL de la página actual para compartir (solo en cliente)
  const [shareUrl, setShareUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const title = dataContent.Title;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const instagramShare = 'https://www.instagram.com/'; // Instagram no permite compartir directo, solo redirige
  const xShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;

  return (
    <div className="mx-auto mb-5 grid w-11/12 max-w-[2048px] grid-cols-1 gap-8 lg:w-auto lg:grid-cols-2">
      <div className="px-8 lg:order-1">
        <h1 className="text-center font-myriad-condensed text-5xl font-black text-[#125451]">{dataContent.Title}</h1>
        <h2 className="mb-4 text-center text-3xl text-[#6a9a4a] italic dark:text-[#c5cf2e]">({dataContent.ScientificName})</h2>
        <p className="mb-8 text-center text-lg">{dataContent.Caption}</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" title="Compartir en Facebook">
            <FacebookIcon style={{ width: 32, height: 32 }} />
          </a>
          <a href={instagramShare} target="_blank" rel="noopener noreferrer" title="Compartir en Instagram">
            <InstagramIcon style={{ width: 32, height: 32 }} />
          </a>
          <a href={xShare} target="_blank" rel="noopener noreferrer" title="Compartir en X">
            <XIcon style={{ width: 32, height: 32 }} />
          </a>
        </div>
      </div>
      <div className="mx-auto">
        <ImageMagnifier
          src={largeUrl}
          zoomSrc={originalUrl}
          alt={dataContent.Title || 'Data Poster'}
          magnifierSize={250}
          zoomLevel={3}
        />
      </div>
    </div>
  );
}

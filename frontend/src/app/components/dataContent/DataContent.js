import React from 'react';
import ImageMagnifier from './ImageMagnifier';
import { getImageUrl } from '@/app/contants/url';

export default function DataContent(content) {
  const dataContent = content.content;

  console.log(dataContent);

  const originalUrl = getImageUrl(dataContent.Poster?.url) ? getImageUrl(dataContent.Poster?.url) : undefined;
  const largeUrl = getImageUrl(dataContent.Poster?.formats?.large?.url)
    ? getImageUrl(dataContent.Poster?.formats?.large?.url)
    : originalUrl;

  return (
    <div className="mx-auto mb-5 grid w-11/12 max-w-[2048px] grid-cols-1 gap-8 lg:w-auto lg:grid-cols-2">
      <div className="lg:order-1">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#125451]">{dataContent.Title}</h1>
      </div>
      <div className="mx-4">
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

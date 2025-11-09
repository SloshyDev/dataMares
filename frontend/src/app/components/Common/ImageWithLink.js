import { getImageUrl } from '@/app/contants/url';
import Image from 'next/image';
import React from 'react';

const isProduction = process.env.NODE_ENV === 'production';

export default function ImageWithLink({ link, image, altText, unoptimized, ...props }) {
  // If caller provided `unoptimized` use it; otherwise keep previous behavior:
  // unoptimized in non-production (helps dev). In production images are optimized by default.
  const shouldUnopt = typeof unoptimized !== 'undefined' ? unoptimized : !isProduction;
  // Defensive: if image is missing or has no URL, avoid rendering <Image> to prevent runtime errors
  if (!image || !image.url) {
    if (!isProduction) {
      // helpful dev warning in console so you can trace missing images
      // eslint-disable-next-line no-console
      console.warn('ImageWithLink: missing image or image.url', { image, props, altText });
    }
    return <div aria-hidden="true" />;
  }

  const src = getImageUrl(image.url);

  return (
    <div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            className={`${props.className} transition-transform duration-300 ease-in-out hover:scale-[1.02]`}
            {...(shouldUnopt && { unoptimized: true })}
            width={image.width}
            height={image.height}
            src={src}
            alt={altText}
          />
        </a>
      ) : (
        <Image
          {...props}
          {...(shouldUnopt && { unoptimized: true })}
          width={image.width}
          height={image.height}
          src={src}
          alt={altText}
        />
      )}
    </div>
  );
}

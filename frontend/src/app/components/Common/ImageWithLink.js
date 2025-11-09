import { getImageUrl } from '@/app/contants/url';
import Image from 'next/image';
import React from 'react';

const isProduction = process.env.NODE_ENV === 'production';

export default function ImageWithLink({ link, image, altText, ...props }) {
  return (
    <div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            className={`${props.className} transition-transform duration-300 ease-in-out hover:scale-[1.02]`}
            {...(!isProduction && { unoptimized: true })}
            width={image.width}
            height={image.height}
            src={getImageUrl(image.url)}
            alt={altText}
          />
        </a>
      ) : (
        <Image
          {...props}
          {...(!isProduction && { unoptimized: true })}
          width={image.width}
          height={image.height}
          src={getImageUrl(image.url)}
          alt={altText}
        />
      )}
    </div>
  );
}

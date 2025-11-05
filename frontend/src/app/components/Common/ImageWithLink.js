import { BASE_URL } from '@/app/contants/url';
import Image from 'next/image'
import React from 'react'

export default function ImageWithLink({ link, image, altText, ...props }) {
    return (
        <div>
            {link && isSafeUrl(link) ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image {...props} unoptimized width={image.width} height={image.height} src={image.url} alt={altText} />
                </a>
            ) : (
                <Image {...props} unoptimized width={image.width} height={image.height} src={`${BASE_URL}${image.url}`} alt={altText} />
            )}
        </div>
    )
}

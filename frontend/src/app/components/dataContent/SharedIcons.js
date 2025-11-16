import FacebookIcon from '@/assets/socialIcons/fb_icon';
import InstagramIcon from '@/assets/socialIcons/ig_icon';
import React from 'react';
import DownloadPDFButton from './DownloadPDFButton';
import XIcon from '@/assets/socialIcons/x_icon';

export default function SharedIcons({ dataContent, locale, shareUrl, ...props }) {
  const title = dataContent.Title;

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const instagramShare = 'https://www.instagram.com/'; // Instagram no permite compartir directo, solo redirige
  const xShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
  return (
    <div className={`${props.className}`}>
      <div className="flex justify-center gap-4">
        <a href={facebookShare} target="_blank" rel="noopener noreferrer" title="Compartir en Facebook">
          <FacebookIcon className="group h-10 w-10" />
        </a>
        <a href={instagramShare} target="_blank" rel="noopener noreferrer" title="Compartir en Instagram">
          <InstagramIcon className="group h-10 w-10" />
        </a>
        <a href={xShare} target="_blank" rel="noopener noreferrer" title="Compartir en X">
          <XIcon className="group h-10 w-10" />
        </a>
      </div>
      <DownloadPDFButton
        pdf={dataContent.PDF}
        downloads={dataContent.downloads}
        documentId={dataContent.documentId}
        locale={locale}
      />
    </div>
  );
}

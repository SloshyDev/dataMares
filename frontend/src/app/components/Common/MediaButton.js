import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AudioModal from './AudioModal';

export default function MediaButton({ type = 'listen', href, image, ...props }) {
  const { t } = useTranslation();
  const translationKey = type === 'video' ? 'Video' : 'listen';
  const [open, setOpen] = useState(false);

  const isMp3 = href && href.toLowerCase().endsWith('.mp3');

  const handleClick = (e) => {
    if (isMp3) {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex flex-col ${props.className || 'items-center'}`}
        onClick={handleClick}
      >
        <span className="button-media">{t(translationKey)}</span>
      </a>
      {isMp3 && <AudioModal src={href} open={open} onClose={() => setOpen(false)} image={image} />}
    </>
  );
}

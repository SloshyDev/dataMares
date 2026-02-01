import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MediaButton({ type = 'listen', href, ...props }) {
  const { t } = useTranslation();
  const translationKey = type === 'video' ? 'Video' : 'listen';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col ${props.className || 'items-center'}`}
    >
      <span className="button-media">{t(translationKey)}</span>
    </a>
  );
}

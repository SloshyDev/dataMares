'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ReadingRecommendations({ contents }) {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('reading_recommendations')}</h2>
    </div>
  );
}

'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function BiodiversityStudies() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-[96%] rounded-2xl border-8 border-[#00302e] bg-zinc-300 py-4">
      <h2 className="text-center font-myriad-condensed text-5xl font-bold text-zinc-700">{t(`biodiversity_title`)}</h2>
      <h1 className="mb-4 text-center font-myriad-condensed text-7xl font-bold text-zinc-700">{t(`biodiversity_sub_title`)}</h1>
      <p className="mx-auto w-4/5 text-center text-2xl text-zinc-700">{t(`biodiversity_content`)}</p>
    </div>
  );
}

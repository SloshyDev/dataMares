'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLink from '../Common/ImageWithLink';

export default function DoNotMissIt({ contents }) {
  const { t } = useTranslation();

  return (
    <div className="px-5">
      <h2 className="mb-8 text-center font-myriad-condensed text-3xl font-black text-[#166561] uppercase lg:text-[1.56vw] screen:text-[1.88rem] dark:text-white">
        {t('do_not_miss')}
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="">
          {contents[0]?.Image && (
            <ImageWithLink
              className="hover:scale-[.98]"
              unoptimized={true}
              image={contents[0].Image}
              link={contents[0].Link}
              altText={contents[0].Title}
            />
          )}
        </div>
        <div className="flex flex-col justify-between gap-4 lg:gap-0 lg:pl-6">
          {contents[1]?.Image && (
            <ImageWithLink
              className="hover:scale-[.98]"
              unoptimized={true}
              image={contents[1].Image}
              link={contents[1].Link}
              altText={contents[1].Title}
            />
          )}
          {contents[2]?.Image && (
            <ImageWithLink
              className="hover:scale-[.98]"
              unoptimized={true}
              image={contents[2].Image}
              link={contents[2].Link}
              altText={contents[2].Title}
            />
          )}
        </div>
      </div>
    </div>
  );
}

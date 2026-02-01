'use client';
import { useTranslation } from 'react-i18next';
import React from 'react';
import MediaButton from '../../Common/MediaButton';

export default function BasicCardNew({ title, subTitle, content, link, image, className = '', textLink = '' }) {
  const { t } = useTranslation();
  return (
    <section className={`my-4 flex items-center gap-2 rounded-2xl px-4 lg:gap-4 lg:p-4 ${className}`}>
      <div className="">
        <a href={link} target="_blank" className="" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-52 rounded-2xl lg:w-[12vw] screen:w-58" />
        </a>
      </div>
      <div className="ml-2 w-[85%] text-white lg:ml-7">
        <h1 className="font-myriad-condensed text-xl leading-none font-bold lg:text-[1.88vw] screen:text-4xl">{title}</h1>
        {subTitle && (
          <h2 className="mt-1 block font-myriad-condensed text-lg leading-none font-bold text-[#00302e] lg:text-[1.56vw] screen:text-3xl">
            {subTitle}
          </h2>
        )}
        <p className="fon mt-2 block font-myriad-condensed text-lg leading-none lg:text-[1.56vw] wide:block screen:text-3xl">
          {content}
        </p>
        <MediaButton className="mt-4 items-end" type="video" href={link} />
      </div>
    </section>
  );
}

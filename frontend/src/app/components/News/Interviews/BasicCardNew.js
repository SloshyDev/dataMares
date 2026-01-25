'use client';
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function BasicCardNew({ title, subTitle, content, link, image, className = '', textLink = '' }) {
  const { t } = useTranslation();
  return (
    <section className={`my-8 flex items-center gap-4 rounded-2xl p-4 ${className}`}>
      <div className="">
        <a href={link} target="_blank" className="" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-48 rounded-2xl" />
        </a>
      </div>
      <div className="ml-7 w-[85%] text-white">
        <h1 className="font-myriad-condensed text-4xl leading-none font-bold screen:text-[2.2rem]">{title}</h1>
        {subTitle && (
          <h2 className="mt-1 block font-myriad-condensed text-lg leading-none font-bold text-[#00302e] wide:block screen:text-3xl">
            {subTitle}
          </h2>
        )}
        <p className="fon mt-2 block font-myriad-condensed text-xl leading-none wide:block screen:text-3xl">{content}</p>
        <a
          href="https://www.youtube.com/watch?v=BuPTrRV5jJM"
          className="group mt-4 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-fit overflow-hidden rounded-2xl border-4 border-[#00302e] bg-linear-to-b from-[#267571] to-[#b9b532] px-6 py-1 font-myriad-condensed text-xl font-bold text-white transition-colors duration-300 group-hover:from-[#b9b532] group-hover:to-[#267571] wide:text-[1.5rem] screen:text-2xl wide-screen:text-4xl">
            {t(textLink || 'Listen')}
          </span>
        </a>
      </div>
    </section>
  );
}

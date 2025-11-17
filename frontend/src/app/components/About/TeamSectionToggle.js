'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TeamGrid from './TeamGrid';

export default function TeamSectionToggle({
  icon,
  iconAlt,
  iconWidth = 60,
  iconHeight = 60,
  title,
  members,
  widthSection,
  widthPerImage,
  labelId,
  initiallyOpen = false,
}) {
  const [open, setOpen] = useState(initiallyOpen);
  return (
    <section>
      <div className="">
        <button
          type="button"
          className="mx-auto flex items-center gap-2 pb-8 focus:outline-none"
          aria-expanded={open}
          aria-controls={labelId}
          onClick={() => setOpen((v) => !v)}
        >
          <Image src={icon} alt={iconAlt || title} width={iconWidth} height={iconHeight} className="h-15 w-15" />
          <h1 className="text-2xl font-bold text-[#125451] dark:text-[#1e7470]">{title}</h1>
        </button>
        <div
          id={labelId}
          className={`transition-all duration-500 ${open ? 'pointer-events-auto h-auto opacity-100' : 'pointer-events-none h-0 opacity-0'} overflow-hidden`}
        >
          <TeamGrid members={members} width={widthSection} widthPerImage={widthPerImage} />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import LanguageChanger from '../LanguageChanger';
import ThemeToggle from './ThemeToggle';
import SocialIcons from './SocialIcons';
import Image from 'next/image';

export default function NavIcons({ isFooter }) {
  return (
    <div className="items-center gap-3 md:flex">
      {!isFooter && (
        <a
          href="https://public.tableau.com/app/profile/datamares"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Visualizaciones en Tableau Public"
          title="Tableau Public"
        >
          <Image
            width={208}
            height={28}
            src="/TableuIcon.svg"
            alt="Tableau Public"
            loading="eager"
            className="md group my-2 w-64 transition-transform duration-200 hover:scale-105"
          />
        </a>
      )}
      <div className="flex items-center gap-3">
        <SocialIcons />
        {!isFooter && (
          <>
            <ThemeToggle />
            <LanguageChanger />
          </>
        )}
      </div>
    </div>
  );
}

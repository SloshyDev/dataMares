import React from 'react'
import LanguageChanger from '../LanguageChanger'
import ThemeToggle from './ThemeToggle'
import SocialIcons from './SocialIcons'
import Image from 'next/image'

export default function NavIcons({ isFooter }) {
    return (
        <div className="md:flex items-center gap-3">
            {!isFooter && (
                <a
                    href="https://public.tableau.com/app/profile/datamares"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Visualizaciones en Tableau Public"
                    title="Tableau Public"
                >
                    <Image width={208} height={28} src="/TableuIcon.svg" alt="Tableau Public" loading="eager" className="w-64 my-2 md hover:scale-105 transition-transform duration-200 group" />
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
    )
}

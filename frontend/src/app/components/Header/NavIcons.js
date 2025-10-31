import React from 'react'
import LanguageChanger from '../LanguageChanger'
import ThemeToggle from './ThemeToggle'
import SocialIcons from './SocialIcons'

export default function NavIcons() {
    return (
        <div className="flex items-center gap-2">
            <LanguageChanger />
            <ThemeToggle />
            <SocialIcons />
        </div>
    )
}

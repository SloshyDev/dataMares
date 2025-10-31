'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid"

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    const cycleTheme = () => {
        // Determine system preference
        const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const oppositeOfSystem = prefersDark ? 'light' : 'dark'

        // Behavior:
        // - If currently following system, switch to the opposite of the system preference.
        // - If currently equal to that opposite, go back to 'system'.
        // - Otherwise toggle between 'dark' and 'light'.
        if (theme === 'system') {
            setTheme(oppositeOfSystem)
        } else if (theme === oppositeOfSystem) {
            setTheme('system')
        } else if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    if (!mounted) return (
        <div className="w-8 h-8 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
    )

    const getIcon = () => {
        if (theme === 'dark') return { Icon: MoonIcon, color: 'text-gray-50', label: 'Dark' }
        if (theme === 'system') return { Icon: ComputerDesktopIcon, color: 'text-gray-50', label: 'System' }
        return { Icon: SunIcon, color: 'text-gray-50', label: 'Light' }
    }

    const { Icon, color, label } = getIcon()

    return (
        <button
            onClick={cycleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#265852] dark:bg-[#265852] hover:bg-[#1e7571] dark:hover:bg-[#1e7571] hover:scale-105 transition-all duration-200 shadow-sm"
            aria-label={`Current theme: ${label}. Click to cycle`}
            title={`Current: ${label}`}
        >
            <Icon className={`w-5 h-5 ${color}`} />
        </button>
    )
}
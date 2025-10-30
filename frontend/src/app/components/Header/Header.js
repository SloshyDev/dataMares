'use client';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import MobileMenuButton from './MobileMenuButton';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useMenuData } from './useMenuData';
import { useMobileMenuNavigation } from './useMobileMenuNavigation';

export default function Header() {
    const menuData = useMenuData();
    const {
        isMenuOpen,
        breadcrumb,
        displayMenu,
        handleMenuClick,
        handleBackClick,
        resetMenu,
        toggleMenu
    } = useMobileMenuNavigation(menuData);

    return (
        <header className="bg-zinc-100 dark:bg-zinc-800 border-b-2 border-gray-300 dark:border-gray-700">
            <nav className="w-full px-4 py-3 flex justify-between items-center">
                <MobileMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />

                <DesktopMenu menuData={menuData} />

                <ThemeToggle />
            </nav>

            <MobileMenu
                isMenuOpen={isMenuOpen}
                breadcrumb={breadcrumb}
                displayMenu={displayMenu}
                handleBackClick={handleBackClick}
                handleMenuClick={handleMenuClick}
                resetMenu={resetMenu}
            />
        </header>
    );
}

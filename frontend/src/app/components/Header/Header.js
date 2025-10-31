'use client';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import MobileMenuButton from './MobileMenuButton';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useMenuData } from './useMenuData';
import { useMobileMenuNavigation } from './useMobileMenuNavigation';
import DmFullLogo from '@/assets/logos/dm_full';
import DmMinLogo from '@/assets/logos/dm_min';
import NavIcons from './NavIcons';

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
        <header className="bg-zinc-100 dark:bg-zinc-800 transition-colors duration-300 border-b-2 border-gray-300 dark:border-gray-700">
            <nav className="w-full px-4 py-2 flex justify-between items-center">
                <MobileMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
                <div className="flex items-center w-full lg:w-auto justify-center lg:justify-start gap-4">
                    <span className="block lg:block xl:hidden 2xl:block h-8 w-auto">
                        <DmFullLogo className="h-8 w-auto" />
                    </span>
                    <span className="hidden lg:hidden xl:block 2xl:hidden h-8 w-auto">
                        <DmMinLogo className="h-8 w-auto" />
                    </span>
                    <div className="block lg:hidden xl:block">
                        <DesktopMenu menuData={menuData} />
                    </div>
                </div>


                <div className="hidden lg:block">
                    <NavIcons />
                </div>
            </nav>
            <div className="hidden lg:block xl:hidden">
                <DesktopMenu menuData={menuData} />
            </div>

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

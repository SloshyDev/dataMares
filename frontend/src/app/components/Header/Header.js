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
import Link from 'next/link';

export default function Header() {
  const menuData = useMenuData();
  const { isMenuOpen, breadcrumb, displayMenu, handleMenuClick, handleBackClick, resetMenu, toggleMenu } =
    useMobileMenuNavigation(menuData);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-300 bg-zinc-100 transition-colors duration-300 dark:border-gray-700 dark:bg-zinc-800">
      <div className="mx-auto max-w-[2048px]">
        <nav className="flex w-full items-center justify-between px-4 py-2">
          <MobileMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
          <div className="flex w-full items-center justify-center gap-4 lg:w-auto lg:justify-start">
            <Link href="/" aria-label="Link to home" className="block">
              <span className="block h-8 w-auto lg:block xl:hidden 2xl:block">
                <DmFullLogo className="h-8 w-auto" />
              </span>
              <span className="hidden h-8 w-auto lg:hidden xl:block 2xl:hidden">
                <DmMinLogo className="h-8 w-auto" />
              </span>
            </Link>
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

'use client';
import React from 'react';
import MobileMenuButton from './MobileMenuButton';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useMenuData } from './useMenuData';
import { useMobileMenuNavigation } from './useMobileMenuNavigation';
import DmFullLogo from '@/assets/logos/dm_full';
import NavIcons from './NavIcons';
import Link from 'next/link';

export default function Header() {
  const menuData = useMenuData();
  const { isMenuOpen, breadcrumb, displayMenu, handleMenuClick, handleBackClick, resetMenu, toggleMenu } =
    useMobileMenuNavigation(menuData);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-300 bg-zinc-100 pt-2 transition-colors duration-300 lg:pt-0 dark:border-gray-700 dark:bg-zinc-800">
      <div className="mx-auto max-w-[2048px]">
        <nav className="flex w-full items-center justify-between px-4">
          <MobileMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
          <div className="flex w-full items-center justify-center gap-4 lg:w-auto lg:justify-start">
            <Link href="/" aria-label="Link to home" className="block">
              <span className="block w-auto">
                <DmFullLogo className="h-8 w-auto" />
              </span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <NavIcons />
          </div>
        </nav>
        <div className="pb-2">
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

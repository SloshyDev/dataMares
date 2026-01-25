'use client';
import React from 'react';
import MenuItem from './MenuItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import NavIcons from './NavIcons';

export default function MobileMenu({ isMenuOpen, breadcrumb, displayMenu, handleBackClick, handleMenuClick, resetMenu }) {
  if (!isMenuOpen) return null;

  return (
    <div className="border-t border-gray-300 bg-zinc-50 lg:hidden dark:border-gray-700 dark:bg-zinc-900">
      {/* Breadcrumb Navigation */}
      {breadcrumb.length > 0 && (
        <div className="flex items-center gap-2 border-b border-gray-300 px-4 py-3 dark:border-gray-700">
          <button onClick={handleBackClick} className="flex items-center gap-1 text-[#265852] hover:underline">
            <ChevronLeftIcon className="h-4 w-4 text-[#265852]" />
          </button>
          <span className="text-sm text-gray-500 dark:text-gray-400">/ {breadcrumb.join(' / ')}</span>
        </div>
      )}

      {/* Menu Items */}
      <ul className="flex flex-col space-y-2 px-4 py-4">
        {displayMenu.map((menu, index) => {
          const hasSubMenu = menu.items || menu.subSubMenu;

          return (
            <li key={menu.label || index}>
              {menu.href ? (
                <MenuItem href={menu.href} onClick={resetMenu}>
                  {menu.label}
                </MenuItem>
              ) : (
                <button
                  onClick={() => handleMenuClick(menu)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-gray-800 hover:bg-zinc-200 hover:text-[#265852] dark:text-gray-200 dark:hover:bg-zinc-800"
                >
                  <span className="text-gray-800 dark:text-gray-200">{menu.label}</span>
                  {hasSubMenu && <ChevronRightIcon className="h-4 w-4" />}
                </button>
              )}
            </li>
          );
        })}
        <div className="flex w-full justify-center">
          <NavIcons />
        </div>
      </ul>
    </div>
  );
}

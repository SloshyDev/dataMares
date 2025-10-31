'use client';
import React from 'react';
import MenuItem from './MenuItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import NavIcons from './NavIcons';

export default function MobileMenu({
    isMenuOpen,
    breadcrumb,
    displayMenu,
    handleBackClick,
    handleMenuClick,
    resetMenu
}) {
    if (!isMenuOpen) return null;

    return (
        <div className="lg:hidden bg-zinc-50 dark:bg-zinc-900 border-t border-gray-300 dark:border-gray-700">
            {/* Breadcrumb Navigation */}
            {breadcrumb.length > 0 && (
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-300 dark:border-gray-700">
                    <button
                        onClick={handleBackClick}
                        className="flex items-center gap-1 text-[#265852] hover:underline"
                    >
                        <ChevronLeftIcon className="w-4 h-4 text-[#265852]" />
                    </button>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        / {breadcrumb.join(' / ')}
                    </span>
                </div>
            )}

            {/* Menu Items */}
            <ul className="flex flex-col py-4 px-4 space-y-2">
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
                                    className="w-full flex items-center justify-between px-4 py-2 text-gray-800 hover:text-[#265852] dark:text-gray-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                                >
                                    <span>{menu.label}</span>
                                    {hasSubMenu && <ChevronRightIcon className="w-4 h-4" />}
                                </button>
                            )}
                        </li>
                    );
                })}
                <div className="flex justify-center w-full">
                    <NavIcons />
                </div>
            </ul>
        </div>
    );
}

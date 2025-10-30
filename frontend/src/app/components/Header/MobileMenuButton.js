'use client';
import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MobileMenuButton({ isMenuOpen, onClick }) {
    return (
        <button
            onClick={onClick}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Toggle menu"
        >
            {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            ) : (
                <Bars3Icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            )}
        </button>
    );
}

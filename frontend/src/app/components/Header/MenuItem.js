import React from 'react';
import Link from 'next/link';

export default function MenuItem({ href, children, external }) {
    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block px-4 rounded-lg py-2 hover:bg-gray-300 hover:dark:bg-zinc-700 hover:text-[#1d7470] dark:text-gray-200 whitespace-nowrap w-full">
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className="block px-4 py-2 hover:bg-gray-200 rounded-lg hover:text-[#1d7470] dark:hover:bg-zinc-700 dark:text-gray-200 whitespace-nowrap w-full">
            {children}
        </Link>
    );
}

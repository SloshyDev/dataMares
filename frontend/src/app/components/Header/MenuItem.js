import React from 'react';
import Link from 'next/link';

export default function MenuItem({ href, children, external, onClick }) {
    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className="block px-4 rounded-lg py-2 hover:bg-gray-300 hover:dark:bg-zinc-700 hover:text-[#265852] text-gray-800 dark:text-gray-200 whitespace-nowrap w-full">
                {children}
            </a>
        );
    }
    return (
        <Link href={href} onClick={onClick} className="block px-4 py-2 hover:bg-gray-200 rounded-lg hover:text-[#265852] dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 whitespace-nowrap w-full">
            {children}
        </Link>
    );
}

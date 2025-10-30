import React from 'react';
import Link from 'next/link';

export default function MenuItem({ href, children, external }) {
    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block px-4 rounded-lg py-2 hover:bg-gray-300 hover:text-[#1d7470] whitespace-nowrap w-full">
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className="block px-4 py-2 hover:bg-gray-200 rounded-lg hover:text-[#1d7470] whitespace-nowrap w-full">
            {children}
        </Link>
    );
}

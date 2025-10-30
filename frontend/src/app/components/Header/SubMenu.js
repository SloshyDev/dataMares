'use client';
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function SubMenu({ label, items }) {
    const [openSubSubMenu, setOpenSubSubMenu] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <li className="relative">
            <button
                className="px-4 py-2 hover:bg-gray-200 rounded w-full text-left whitespace-nowrap flex items-center"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => { setOpen(false); setOpenSubSubMenu(null); }}
            >
                <span>{label}</span>
                <ChevronDownIcon className={`h-4 w-4 ml-2 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`} />
            </button>
            {open && (
                <ul
                    className="absolute left-0 top-full bg-gray-100 dark:bg-gray-800 shadow-lg min-w-40 z-20"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => { setOpen(false); setOpenSubSubMenu(null); }}
                >
                    {items.map((item) => (
                        <li key={item.label} className="relative">
                            {item.subSubMenu ? (
                                <>
                                    <button
                                        className="w-full text-left px-4 py-2 hover:bg-blue-100 whitespace-nowrap flex items-center"
                                        onMouseEnter={() => setOpenSubSubMenu(item.label)}
                                        onMouseLeave={() => setOpenSubSubMenu(null)}
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDownIcon className={`h-4 w-4 ml-2 transition-transform duration-200 ${openSubSubMenu === item.label ? 'transform rotate-180' : ''}`} />
                                    </button>
                                    {openSubSubMenu === item.label && (
                                        <ul
                                            className="absolute left-full top-0 bg-gray-100 dark:bg-gray-800 rounded shadow-lg min-w-[320px] z-30 flex flex-col"
                                            onMouseEnter={() => setOpenSubSubMenu(item.label)}
                                            onMouseLeave={() => setOpenSubSubMenu(null)}
                                        >
                                            {item.subSubMenu.map((subItem) => (
                                                <li key={subItem.label}>
                                                    <MenuItem href={subItem.href} external={subItem.external}>{subItem.label}</MenuItem>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <MenuItem href={item.href} external={item.external}>{item.label}</MenuItem>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

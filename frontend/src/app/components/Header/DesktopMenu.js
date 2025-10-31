'use client';
import React from 'react';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';

export default function DesktopMenu({ menuData }) {
    return (
        <ul className="hidden lg:flex ">
            {menuData.map((menu) => (
                menu.items ? (
                    <SubMenu key={menu.label} label={menu.label} items={menu.items} />
                ) : (
                    <li key={menu.label}>
                        <MenuItem href={menu.href}>{menu.label}</MenuItem>
                    </li>
                )
            ))}
        </ul>
    );
}

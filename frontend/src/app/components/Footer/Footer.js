'use client';
import React from 'react'
import NavIcons from '../Header/NavIcons'
import { useTranslation } from 'react-i18next';
import DmFullLogo from '@/assets/logos/dm_full';
import Link from 'next/link';
import DmMinLogo from '@/assets/logos/dm_min';

export default function Footer() {
    const { t } = useTranslation('footer');
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 py-4 text-center items-center bg-zinc-100 dark:bg-zinc-800 transition-colors duration-300 border-t-2 border-gray-300 dark:border-gray-700 w-full'>
            <div className="flex flex-col items-center my-2 lg:my-0 order-3 lg:order-1">
                <NavIcons isFooter={true} />
                <p className="text-sm mt-2 md:text-base">{t('copyright')}</p>
            </div>
            <Link href="/" className="block lg:order-2 my-2 lg:my-0">
                <DmFullLogo className="block lg:hidden 2xl:block h-8 lg:h-10 w-auto mx-auto hover:scale-105 transition-transform duration-300" />
                <DmMinLogo className="hidden lg:block 2xl:hidden h-12 w-auto mx-auto hover:scale-105 transition-transform duration-300" />
            </Link>
            <Link href="/partners" className="block order-1 lg:order-3 my-2 lg:my-0">
                <p className='bg-[#6a9a4a] dark:bg-[#265852] hover:dark:bg-[#1e7470] w-fit mx-auto hover:bg-[#1e7470] transition-colors duration-300 p-3 lg:p-4 text-lg lg:text-2xl text-white rounded-2xl'>{t('partners')}</p>
            </Link>
        </div>
    )
}

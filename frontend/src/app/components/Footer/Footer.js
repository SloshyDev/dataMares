'use client';
import React from 'react';
import NavIcons from '../Header/NavIcons';
import { useTranslation } from 'react-i18next';
import DmFullLogo from '@/assets/logos/dm_full';
import Link from 'next/link';
import DmMinLogo from '@/assets/logos/dm_min';
import MailIcon from '@/assets/socialIcons/mail_icon';

export default function Footer() {
  const { t } = useTranslation('footer');
  return (
    <div className="grid w-full grid-cols-1 items-center border-t-2 border-gray-300 bg-zinc-100 py-4 text-center transition-colors duration-300 lg:grid-cols-3 dark:border-gray-700 dark:bg-zinc-800">
      <div className="order-3 my-2 flex flex-col items-center lg:order-1 lg:my-0">
        <NavIcons isFooter={true} />
        <p className="mt-2 text-sm md:text-base">{t('copyright')}</p>
      </div>
      <Link href="/" prefetch={true} aria-label="Ir a la página principal de dataMares" className="my-2 block lg:order-2 lg:my-0">
        <DmFullLogo className="mx-auto block h-8 w-auto transition-transform duration-300 hover:scale-105 lg:hidden lg:h-10 2xl:block" />
        <DmMinLogo className="mx-auto hidden h-12 w-auto transition-transform duration-300 hover:scale-105 lg:block 2xl:hidden" />
      </Link>
      <Link
        href="/mailto:catalina@gocmarineprogram.org"
        prefetch={true}
        aria-label="Ver nuestros partners y colaboradores"
        className="order-1 mx-auto my-2 flex w-fit items-center justify-center rounded-full bg-[#64984c] py-1 pr-4 pl-1 transition-colors hover:bg-[#175a56] lg:order-3 lg:my-0"
      >
        <MailIcon className="h-12 w-12 rounded-full border-2 border-white" />
        <p className="ml-2 text-3xl leading-none font-black text-white uppercase">{t('contactUs')}</p>
      </Link>
    </div>
  );
}

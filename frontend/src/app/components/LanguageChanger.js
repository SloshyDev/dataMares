
'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';
import Image from 'next/image';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const otherLocale = currentLocale === 'es' ? 'en' : 'es';
    const flagSrc = otherLocale === 'es'
        ? '/Flags/flag_es.svg'
        : '/Flags/flag_en.svg';
    const flagAlt = otherLocale === 'es' ? 'Español' : 'English';

    const handleClick = () => {
        const newLocale = otherLocale;
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }
        router.refresh();
    };

    return (
        <button onClick={handleClick} title={flagAlt} className="rounded-full block p-1 hover:scale-110 transition">
            <Image src={flagSrc} alt={flagAlt} width={40} height={40} className='w-8 h-8' />
        </button>
    );
}
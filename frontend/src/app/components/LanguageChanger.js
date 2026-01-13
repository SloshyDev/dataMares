'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';
import Image from 'next/image';

const LANGUAGES = [
  { code: 'es', flag: '/Flags/flag_es.svg', label: 'Español' },
  { code: 'en', flag: '/Flags/flag_en.svg', label: 'English' },
];

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = () => {
    const newLocale = currentLocale === 'es' ? 'en' : 'es';
    if (newLocale === currentLocale) return;
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    localStorage.setItem('preferredLocale', newLocale);

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }
    router.refresh();
  };

  // Switch UI
  const isSpanish = currentLocale === 'es';
  const activeLang = LANGUAGES.find((l) => l.code === currentLocale);
  const inactiveLang = LANGUAGES.find((l) => l.code !== currentLocale);

  return (
    <button
      onClick={handleChange}
      aria-label={`Cambiar idioma a ${inactiveLang.label}`}
      className="relative flex h-10 w-20 items-center rounded-full bg-gray-200 transition-colors focus:ring-2 focus:ring-[#1e7571] focus:outline-none dark:bg-zinc-900"
      style={{ minWidth: 80 }}
    >
      {/* Bandera izquierda (es) */}
      <span className="absolute top-1/2 left-2 -translate-y-1/2">
        <Image src={LANGUAGES[0].flag} alt={LANGUAGES[0].label} width={24} height={24} className="h-6 w-6" />
      </span>
      {/* Bandera derecha (en) */}
      <span className="absolute top-1/2 right-2 -translate-y-1/2">
        <Image src={LANGUAGES[1].flag} alt={LANGUAGES[1].label} width={24} height={24} className="h-6 w-6" />
      </span>
      {/* Círculo del switch con bandera activa */}
      <span
        className="absolute top-1/2 -translate-y-1/2 transition-all"
        style={{
          left: isSpanish ? 4 : 44,
          width: 32,
          height: 32,
        }}
      >
        <Image src={activeLang.flag} alt={activeLang.label} width={32} height={32} className="h-8 w-8 rounded-full shadow" />
      </span>
    </button>
  );
}

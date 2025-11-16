import React from 'react';
import { useRouter } from 'next/navigation';

export default function OtherLocaleLink({ dataContent, locale }) {
  const router = useRouter();
  const otherLocale = locale === 'en' ? 'es' : 'en';
  const generateSlugFromScientificName = (name) => (typeof name === 'string' ? name.toLowerCase().replace(/ /g, '_') : '');
  const slug = generateSlugFromScientificName(dataContent.ScientificName);
  const newPath = `/${otherLocale}/datacontent/${slug}`;

  return (
    <button
      onClick={() => router.push(newPath)}
      className="mt-6 rounded bg-[#125451] px-6 py-2 text-lg font-bold text-white transition hover:bg-[#6a9a4a]"
    >
      {locale === 'en' ? 'View in Spanish' : 'Ver en Inglés'}
    </button>
  );
}

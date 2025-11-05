'use client';
import ImageWithLink from '../Common/ImageWithLink'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

export default function LatestNews({ contents, ...props }) {
    const { t } = useTranslation();
    return (
        <div className={`${props.className || ''}`}>
            <div className={` rounded-lg overflow-hidden border-t-4 2xl:border-t-0 border-x-4 border-[#00302e] border-b-4`}>
                <h2 className='bg-[#00302e] block lg:hidden 2xl:block text-2xl uppercase text-center font-black py-1 text-[#c4cc2d]'>{t('latest_news')}</h2>
                <ImageWithLink className="w-full" link={contents?.Link} image={contents?.Image} altText={contents?.Title} />
            </div>
            <Link href="/news" className='bg-linear-to-b border-4 border-[#00302e] from-[#1b685f] from-18% py-1.5 rounded-lg to-[#c4cc2d] block text-center mt-4 text-xl font-semibold text-white hover:scale-105 transition-all duration-300'>
                {t('see_all_news')}
            </Link>
        </div>
    )
}

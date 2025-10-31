'use client';

import { useTranslation } from 'react-i18next';

export default function NotFound() {
    const { t } = useTranslation('not-found');

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
            <h1 className="text-6xl font-bold text-red-600 dark:text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">{t('title')}</p>
            <a
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                {t('back_to_home')}
            </a>
        </main>
    );
}

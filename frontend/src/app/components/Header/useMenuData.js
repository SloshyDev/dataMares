import { useTranslation } from 'react-i18next';

const protectedAreasKeys = [
    'cabopulmo',
    'espiritusanto',
    'balandra',
    'loreto',
    'revillagigedo',
    'wanha'
];

const dataPediaSubMenuKeys = [
    'dataGrams',
    'dataGraphic',
    'dataPics',
    'dataPoster',
    'stories'
];

export function useMenuData() {
    const { t } = useTranslation('header');

    const protectedAreas = protectedAreasKeys.map(key => ({ label: t(key), href: `/${key}` }));
    const dataPediaSubMenu = dataPediaSubMenuKeys.map(key => ({ label: t(key), href: `/${key}` }));

    const menuData = [
        {
            label: t('about'),
            href: '/about'
        },
        {
            label: t('news'),
            href: '/news'
        },
        {
            label: t('dataPedia'),
            items: dataPediaSubMenu
        },
        {
            label: t('dataKids'),
            href: '/dataKids'
        },
        {
            label: t('biodiversity'),
            items: [
                {
                    label: t('aDayForTheOceans'),
                    subSubMenu: [
                        { label: t('aDayForTheOceans2024'), href: '/a-day-for-the-oceans-2024' },
                        { label: t('aDayForTheOceans2023'), href: '/a-day-for-the-oceans-2023' }
                    ]
                },
                { label: t('diveAtlas'), href: '/dive-atlasZ' },
                {
                    label: t('naturalProtectedAreas'),
                    subSubMenu: protectedAreas
                }
            ]
        },
        {
            label: t('resources'),
            items: [
                { label: t('globalData'), href: '/global-data' },
                { label: t('ucsdDigitalCollection'), href: 'https://library.ucsd.edu/dc', external: true }
            ]
        }
    ];

    return menuData;
}

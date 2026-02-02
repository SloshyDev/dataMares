import '@/app/globals.css';
import Script from 'next/script';
import Header from '../components/Header/Header';
import TranslationsProvider from '../components/TranslationsProvides';
import initTranslations from '../i18n';
import { Providers } from '../Providers';
import { notFound } from 'next/navigation';
import Footer from '../components/Footer/Footer';
import { Analytics } from '@vercel/analytics/next';
import BreakpointIndicator from '../components/Common/BreakpointIndicator';

const validLocales = ['en', 'es'];

export async function generateStaticParams() {
  return validLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    en: 'dataMares - Work · Publish · Share',
    es: 'dataMares - Trabaja · Publica · Difunde',
  };

  const descriptions = {
    en: 'dataMares promotes transparency and free access to data, bringing science closer to the public with graphic and interactive material.',
    es: 'dataMares promueve transparencia y acceso libre a datos, acercando la ciencia al público con material gráfico e interactivo.',
  };

  return {
    title: {
      default: titles[locale] || titles.es,
      template: '%s | dataMares',
    },
    description: descriptions[locale] || descriptions.es,
    keywords:
      locale === 'en'
        ? ['scientific data', 'transparency', 'science', 'data visualization', 'research', 'open data', 'dataMares']
        : [
            'datos científicos',
            'transparencia',
            'ciencia',
            'visualización de datos',
            'investigación',
            'datos abiertos',
            'dataMares',
          ],
    authors: [{ name: 'dataMares Team' }],
    creator: 'dataMares',
    publisher: 'dataMares',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://www.yokaicdmx.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en-US': '/en',
        'es-ES': '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: locale === 'en' ? 'es_ES' : 'en_US',
      url: `https://www.yokaicdmx.com/${locale}`,
      siteName: 'dataMares',
      title: titles[locale] || titles.es,
      description: descriptions[locale] || descriptions.es,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 169,
          alt: 'dataMares - Trabaja · Publica · Difunde',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.es,
      description: descriptions[locale] || descriptions.es,
      images: ['/og-image.jpg'],
      creator: '@datamares',
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({ children, params }) {
  // Pre-resolve params para evitar warnings de Next.js 16
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!validLocales.includes(locale)) {
    notFound();
  }

  const { resources } = await initTranslations(locale, ['header', 'not-found', 'footer']);

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5KPNFHQP');
          `}
        </Script>
        <link rel="stylesheet" href="https://use.typekit.net/fix5wnb.css"></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'dataMares',
              url: `https://www.yokaicdmx.com/${locale}`,
              logo: 'https://www.yokaicdmx.com/logo.svg',
              description:
                locale === 'en'
                  ? 'dataMares promotes transparency and free access to data, bringing science closer to the public with graphic and interactive material.'
                  : 'dataMares promueve transparencia y acceso libre a datos, acercando la ciencia al público con material gráfico e interactivo.',
              sameAs: ['https://facebook.com/datamares', 'https://instagram.com/datamares_/', 'https://x.com/datamares'],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'contact@datamares.org',
                contactType: 'customer service',
              },
              foundingDate: '2024',
              knowsAbout: ['Scientific Data', 'Data Transparency', 'Data Visualization', 'Research'],
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KPNFHQP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Providers>
          <TranslationsProvider resources={resources} locale={locale} namespaces={['header', 'not-found']}>
            <section className="mx-auto flex min-h-screen flex-col justify-between">
              <Header />
              {children}
              <Footer />
            </section>
            <Analytics />
            <BreakpointIndicator />
          </TranslationsProvider>
        </Providers>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import TranslationsProvider from "../components/TranslationsProvides";
import initTranslations from "../i18n";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import Footer from "../components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const validLocales = ["en", "es"];

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    en: "dataMares - Scientific Data Transparency",
    es: "dataMares - Transparencia y Datos Científicos"
  };

  const descriptions = {
    en: "dataMares promotes transparency and free access to data, bringing science closer to the public with graphic and interactive material.",
    es: "dataMares promueve transparencia y acceso libre a datos, acercando la ciencia al público con material gráfico e interactivo."
  };

  return {
    title: {
      default: titles[locale] || titles.es,
      template: "%s | dataMares"
    },
    description: descriptions[locale] || descriptions.es,
    keywords: locale === 'en'
      ? ["scientific data", "transparency", "science", "data visualization", "research", "open data", "dataMares"]
      : ["datos científicos", "transparencia", "ciencia", "visualización de datos", "investigación", "datos abiertos", "dataMares"],
    authors: [{ name: "dataMares Team" }],
    creator: "dataMares",
    publisher: "dataMares",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://datamares.org'),
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
      url: `https://datamares.org/${locale}`,
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
  const { locale } = await params;

  if (!validLocales.includes(locale)) {
    notFound();
  }

  const { resources } = await initTranslations(locale, ["header", "not-found", "footer"]);

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TranslationsProvider resources={resources} locale={locale} namespaces={["header", "not-found"]}>
            <section className="min-h-screen flex flex-col justify-between">
              <Header />
              {children}
              <Footer />
            </section>
          </TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
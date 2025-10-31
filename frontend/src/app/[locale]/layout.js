import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import TranslationsProvider from "../components/TranslationsProvides";
import initTranslations from "../i18n";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "dataMares",
  description: "dataMares promueve transparencia y acceso libre a datos, acercando la ciencia al público con material gráfico e interactivo.",
};

const validLocales = ["en", "es"];

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!validLocales.includes(locale)) {
    notFound();
  }

  const { resources } = await initTranslations(locale, ["header", "not-found"]);

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TranslationsProvider resources={resources} locale={locale} namespaces={["header", "not-found"]}>
            <Header />
            {children}
          </TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import TranslationsProvider from "../components/TranslationsProvides";
import initTranslations from "../i18n";
import { ThemeProvider } from "next-themes";

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

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale || "en", ["header"]);

  return (
    <html suppressHydrationWarning lang={locale || "en"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TranslationsProvider resources={resources} locale={locale || "en"} namespaces={["header"]}>
            <Header />
          </TranslationsProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
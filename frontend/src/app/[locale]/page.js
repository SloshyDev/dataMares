import BannersCarrousel from '../components/Home/BannersCarrousel';
import TranslationsProvider from '../components/TranslationsProvides';
import initTranslations from '../i18n';


export default async function Home({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ['home']);
  const i18nNamespace = ['home'];

  // Llamada a la API de Strapi para obtener home con data_contents y banners
  const res = await fetch('http://localhost:1337/api/home?populate[data_contents][populate]=Banner');
  const data = await res.json();

  // Corrige la ruta: accede correctamente a los data_contents
  const contents = data.data.data_contents;

  console.log('Contents:', contents);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={[i18nNamespace]}>
      <main className='min-h-screen max-w-[2048px] mx-auto'>
        <section className='flex mx-5'>
          <BannersCarrousel className="w-[70%]" contents={contents} />
          <div className="w-[30%]">

          </div>
        </section>

        {/* <h1>{t('home_title')}</h1>
        <ExampleClientComponent />
        <LanguageChanger /> */}
      </main>
    </TranslationsProvider>
  );
}
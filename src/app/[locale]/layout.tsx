import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Script from 'next/script';
import { Providers } from '../providers';
import { Navbar } from '@/src/components/Navbar/Navbar';
import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';

const locales = ['en', 'fr'];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      url: 'https://focusedshares.com',
      site_name: t('title'),
      images: [
        {
          url: 'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/mut3m9pdjxuzlc3z6jxn',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: 'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/mut3m9pdjxuzlc3z6jxn',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    robots: 'index, follow',
    manifest: '/manifest.json',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <Script
          src='https://eu.umami.is/script.js'
          data-website-id='05b1b74c-1c34-418a-871b-5f04df643156'
          strategy='worker'
        />
      </head>
      <body>
        <Providers>
          <Header lang={locale} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Navbar } from '@/src/components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Focused Shares',
  description:
    'Discover a world combining focus and music, featuring lo-fi hip hop to rain sounds. Share your favorite YouTube videos in our diverse musical community.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/mut3m9pdjxuzlc3z6jxn',
    title: 'Focused Shares',
    countryName: 'United States',
    description:
      'Discover a world combining focus and music, featuring lo-fi hip hop to rain sounds. Share your favorite YouTube videos in our diverse musical community.',
    siteName: 'Focused Shares',
    images: [
      {
        url: 'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/mut3m9pdjxuzlc3z6jxn',
        width: 1200,
        height: 630,
        alt: 'Focused Shares',
      },
    ],
  },
  twitter: {
    title: 'Focused Shares',
    description:
      'Discover a world combining focus and music, featuring lo-fi hip hop to rain sounds. Share your favorite YouTube videos in our diverse musical community.',
    images: [
      {
        url: 'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/mut3m9pdjxuzlc3z6jxn',
        width: 1200,
        height: 630,
        alt: 'Focused Shares',
      },
    ],
  },
  robots: 'index, follow',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <Script
          src='https://eu.umami.is/script.js'
          data-website-id='05b1b74c-1c34-418a-871b-5f04df643156'
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
                  (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3804812,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

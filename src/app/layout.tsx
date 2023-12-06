import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Navbar } from '../stories/navbar/navbar';
import { Footer } from '../components/Footer/Footer';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
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

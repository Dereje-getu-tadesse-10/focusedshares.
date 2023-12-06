import { Metadata } from 'next';
import { ContainerSongs } from '@/src/components/Song/Song';
import { getSongs } from '@/src/server/youtubeSong';
import { css } from '@/styled-system/css';

export const metadata: Metadata = {
  title: 'Songs',
  description: 'A collection of songs to help you focus on your work.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/bhkwbkrl9ofas4zp8z4v',
    title: 'Focused Shares - Songs',
    countryName: 'United States',
    description: 'A collection of songs to help you focus on your work.',
    siteName: 'Focused Shares - Songs',
    images: [
      {
        url: 'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/bhkwbkrl9ofas4zp8z4v',
        width: 1200,
        height: 630,
        alt: 'Focused Shares - Songs',
      },
    ],
  },
  twitter: {
    title: 'Focused Shares - Songs',
    description: 'A collection of songs to help you focus on your work.',
    images: [
      {
        url: 'https://res.cloudinary.com/ddugf28mx/image/upload/f_auto,q_auto/v1/focusedshares/bhkwbkrl9ofas4zp8z4v',
        width: 1200,
        height: 630,
        alt: 'Focused Shares - Songs',
      },
    ],
  },
  robots: 'index, follow',
};

const SongsPage = async () => {
  const songs = await getSongs();

  return (
    <main>
      <section
        className={css({
          my: 7,
        })}
      >
        <div
          className={css({
            mx: 4,
            mb: 7,
          })}
        >
          <h1
            className={css({
              fontSize: '2xl',
              fontWeight: '600',
              color: 'var(--colors-text)',
            })}
          >
            Songs
          </h1>
          <p
            className={css({
              color: 'var(--colors-text-muted)',
            })}
          >
            Here you can find all the songs that are currently available on
            Focused Shares and you can sign up to add your own songs.
          </p>
        </div>

        <ContainerSongs songs={songs} />
      </section>
    </main>
  );
};

export default SongsPage;

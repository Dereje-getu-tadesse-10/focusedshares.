import { Metadata } from 'next';
import { ContainerSongs } from '@/src/components/Song/Song';
import { allYoutubeSongs } from '@/src/server/requests';
import { css } from '@/styled-system/css';
import { SongHero } from '@/src/components/Heros/SongHero';
import { allSpotifyPlaylists } from '@/src/server/requests';

export const runtime = 'edge';
export const revalidate = 0;

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
  const songs = await allYoutubeSongs();
  const playlists = await allSpotifyPlaylists();
  return (
    <main className={css({ my: 7 })}>
      <SongHero />
      <ContainerSongs songs={songs} playlists={playlists} />
    </main>
  );
};

export default SongsPage;

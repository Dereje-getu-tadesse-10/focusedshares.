import { Metadata } from 'next';
import { ContainerSongs } from '@/src/components/Song/Song';
import { getSongs } from '@/src/server/youtube.server';
import { css } from '@/styled-system/css';
import { SongHero } from '@/src/components/Heros/SongHero';

export const runtime = 'edge';

const SongsPage = async ({ params }: { params: { locale: string } }) => {
  const songs = await getSongs();

  return (
    <main className={css({ my: 7 })}>
      <SongHero />
      <ContainerSongs songs={songs} lang={params.locale} />
    </main>
  );
};

export default SongsPage;

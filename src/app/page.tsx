import { Hero } from '@/src/components/Heros/Hero';
import { ContainerSongs } from '../components/Song/Song';
import { MinimalSong, getSongs } from '../server/youtube.server';

export const runtime = 'edge';
export const revalidate = 0;

export default async function Home() {
  const songs: MinimalSong[] = await getSongs(9);

  return (
    <main>
      <Hero />
      <ContainerSongs songs={songs} />
    </main>
  );
}

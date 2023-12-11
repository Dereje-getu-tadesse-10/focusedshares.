import { Hero } from '@/src/components/Heros/Hero';
import { ContainerSongs } from '../components/Song/Song';
import { MinimalSong, getSongs } from '../server/youtube.server';
import { Features } from '../components/Heros/Features';
import { Preview } from '../components/Heros/Preview';

export const runtime = 'edge';

export default async function Home() {
  const songs: MinimalSong[] = await getSongs(6);

  return (
    <main>
      <Hero />
      <Features />
      <Preview songs={songs} />
    </main>
  );
}

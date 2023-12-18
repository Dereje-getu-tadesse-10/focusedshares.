import { Hero } from '@/src/components/Heros/Hero';
import { MinimalSong, getSongs } from '../server/youtube.server';
import { Features } from '../components/Heros/Features';
import { Preview } from '../components/Heros/Preview';

export const runtime = 'edge';

export default async function Home() {
  const songs: MinimalSong[] = await getSongs(3);

  return (
    <main>
      <Hero />
      <Features />
      <Preview songs={songs} />
    </main>
  );
}

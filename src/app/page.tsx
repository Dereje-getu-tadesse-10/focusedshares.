import { Hero } from '../components/Hero';
// import { ContainerSongs } from '../components/Song/Song';
import { MinimalSong, getSongs } from '../server/youtubeSong';
import dynamic from 'next/dynamic';

const ContainerSongs = dynamic(() => import('../components/Song/Song'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

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

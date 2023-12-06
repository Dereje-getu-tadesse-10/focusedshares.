import { Hero } from '../components/Hero';
import { ContainerSongs } from '../components/Song/Song';
import { MinimalSong, getSongs } from '../server/youtubeSong';

export default async function Home() {
  const songs: MinimalSong[] = await getSongs(10);
  console.log(songs);
  return (
    <main>
      <Hero />
      <ContainerSongs songs={songs} />
    </main>
  );
}

import { Hero } from '../components/Hero';
import { getSongs } from '../server/youtubeSong';

export default async function Home() {
  const songs = await getSongs(10);

  return (
    <main>
      <Hero />
    </main>
  );
}

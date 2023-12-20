import { Hero } from '@/src/components/Heros/Hero';
import { MinimalSong, getSongs } from '../server/youtube.server';
import { Features } from '../components/Heros/Features';
import { Preview } from '../components/Heros/Preview';
import { SpotifyPlaylist } from '@prisma/client';
import { getAllPlaylistSpotify } from '../server/spotify.server';

export const runtime = 'edge';
export const revalidate = 86400;

export default async function Home() {
  const songs: MinimalSong[] = await getSongs(3);
  const playlists: SpotifyPlaylist[] = await getAllPlaylistSpotify(3);

  return (
    <main>
      <Hero />
      <Preview songs={songs} playlists={playlists} />
      <Features />
    </main>
  );
}

import { Hero } from '@/src/components/Heros/Hero';
import { MinimalSong, youtubeSongWithLimit } from '../server/youtube.server';
import { Features } from '../components/Heros/Features';
import { Preview } from '../components/Heros/Preview';
import { SpotifyPlaylist } from '@prisma/client';
import { playlistSpotifyWithLimit } from '../server/spotify.server';

export const runtime = 'edge';
export const revalidate = 86400;

export default async function Home() {
  const songs: MinimalSong[] = await youtubeSongWithLimit(3);
  const playlists: SpotifyPlaylist[] = await playlistSpotifyWithLimit(3);

  return (
    <main>
      <Hero />
      <Preview songs={songs} playlists={playlists} />
      <Features />
    </main>
  );
}

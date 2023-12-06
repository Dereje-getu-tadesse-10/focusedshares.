import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { getSong, getSongs } from '@/src/server/youtubeSong';
import { css } from '@/styled-system/css';
import { YoutubeEmbed } from '@/src/components/YoutubeEmbed/YoutubeEmbed';
import { WrapperSong } from '@/src/components/WrapperSong/WrapperSong';
import { RelatedSong } from '@/src/components/RelatedSong/RelatedSong';

export async function generateMetadata(
  { params }: { params: { song: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.song;

  const song = await getSong(id);

  if (!song) {
    notFound();
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: song.title,
    openGraph: {
      images: [song.thumb, ...previousImages],
    },
    description: `${song.channelTitle} - ${song.title}`,
    metadataBase: new URL('https://www.focusedshares.com/'),
  };
}

export default async function SongPage({
  params,
}: {
  params: { song: string };
}) {
  const id = params.song;

  const songData = await getSong(id);
  const songsData = await getSongs(5);

  const [song, songs] = await Promise.all([songData, songsData]);

  if (!song) {
    notFound();
  }

  console.log(songs, 'hello');
  return (
    <main
      className={css({
        mx: '1rem',
      })}
    >
      <WrapperSong>
        <YoutubeEmbed id={id} title={song.title} song={song} />
        <RelatedSong song={songs} />
      </WrapperSong>
    </main>
  );
}

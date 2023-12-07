import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { css } from '@/styled-system/css';
import { getSong, getSongs } from '@/src/server/youtube.server';
import { YoutubeEmbed } from '@/src/components/YoutubeEmbed/YoutubeEmbed';
import { WrapperSong } from '@/src/components/WrapperSong/WrapperSong';
import { RelatedSong } from '@/src/components/RelatedSong/RelatedSong';
import { prisma } from '@/src/lib/prisma';

export const runtime = 'edge';

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

  await prisma.youtubeSong.update({
    where: {
      youtubeId: song.youtubeId,
    },
    data: {
      localViews: +1,
    },
  });

  return (
    <main className={css({ mx: '1rem' })}>
      <WrapperSong>
        <YoutubeEmbed id={id} title={song.title} song={song} />
        <RelatedSong song={songs} />
      </WrapperSong>
    </main>
  );
}

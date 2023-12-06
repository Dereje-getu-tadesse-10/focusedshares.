import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { getSong } from '@/src/server/youtubeSong';

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

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

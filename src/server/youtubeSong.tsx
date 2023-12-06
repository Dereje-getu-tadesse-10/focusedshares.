import { YoutubeSong } from '@prisma/client';
import { prisma } from '@/src/lib/prisma';

export type Song = YoutubeSong;

export type MinimalSong = Pick<
  Song,
  'title' | 'thumb' | 'youtubeId' | 'category' | 'duration'
>;

export const getSongs = async (limit?: number) => {
  const res: MinimalSong[] = await prisma.youtubeSong.findMany({
    take: limit ? limit : undefined,
    orderBy: {
      title: 'desc',
    },
    select: {
      title: true,
      thumb: true,
      youtubeId: true,
      category: true,
      duration: true,
    },
  });
  return res;
};

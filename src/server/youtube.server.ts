import { YoutubeSong } from '@prisma/client';
import { prisma } from '@/src/lib/prisma';

export type Song = YoutubeSong

export type MinimalSong = Pick<
  Song,
  'title' | 'thumb' | 'youtubeId' | 'category' | 'duration'
>;

// Get songs from data with limit or not 
export const getSongs = async (limit?: number) => {
  const res: MinimalSong[] = await prisma.youtubeSong.findMany({
    take: limit ? limit : undefined,
    orderBy: {
      localViews: 'desc',
    },
    select: {
      title: true,
      thumb: true,
      youtubeId: true,
      category: true,
      duration: true,
    }
  });
  return res;
};

// Get song by id 
export const getSong = async (id: string) => {
  const res: Song | null = await prisma.youtubeSong.findUnique({
    where: {
      youtubeId: id
    },
  });
  return res;
};

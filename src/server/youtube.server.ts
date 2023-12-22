import { cache } from 'react';
import { YoutubeSong } from '@prisma/client';
import { prisma } from '@/src/lib/prisma';

export type Song = YoutubeSong;

export type MinimalSong = Pick<
  Song,
  'title' | 'thumb' | 'youtubeId' | 'category' | 'duration'
>;

// Get songs from data with limit or not
export const allYoutubeSongs = async () => {
  const res: MinimalSong[] = await prisma.youtubeSong.findMany({
    orderBy: {
      localViews: 'asc',
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

// Get songs from data with limit or not
export const youtubeSongWithLimit = cache(async (limit: number) => {
  const res: MinimalSong[] = await prisma.youtubeSong.findMany({
    take: limit,
    orderBy: {
      localViews: 'asc',
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
});

// Get song by id
export const youtubeSong = async (id: string) => {
  const res: Song | null = await prisma.youtubeSong.findUnique({
    where: {
      youtubeId: id,
    },
  });
  return res;
};

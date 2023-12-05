import { prisma } from '@/src/lib/prisma';

export const getSongs = async (limit?: number) => {
  const res = await prisma.youtubeSong.findMany({
    take: limit ? limit : undefined,
    orderBy: {
      title: 'desc',
    },
    select: {
      title: true,
      thumb: true,
      youtubeId: true,
      category: true,
    },
  });
  return res;
};

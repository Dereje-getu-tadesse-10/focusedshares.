import { cache } from 'react';
import { prisma } from '../lib/prisma';

export const getAllPlaylistSpotify = cache(async (limit?: number) => {
  return await prisma.spotifyPlaylist.findMany({
    take: limit ? limit : undefined,
  });
});

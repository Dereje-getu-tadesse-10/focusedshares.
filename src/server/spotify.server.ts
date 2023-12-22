import { cache } from 'react';
import { prisma } from '../lib/prisma';

export const playlistSpotifyWithLimit = cache(async (limit: number) => {
  return await prisma.spotifyPlaylist.findMany({
    take: limit,
  });
});

export const allSpotifyPlaylists = async () => {
  return await prisma.spotifyPlaylist.findMany();
};

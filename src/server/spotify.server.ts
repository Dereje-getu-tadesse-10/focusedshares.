'use server';
import { auth } from '@/src/lib/auth';
import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { GENRES } from '@/src/components/Forms/Youtube/genres';
import { prisma } from '../lib/prisma';
import { Category, Prisma } from '@prisma/client';
import { getPlaylist, isValidSpotifyPlaylistUrl, playlistId } from '../lib/spotify';

export const action = createSafeActionClient();

// add song form data schema
const FormSchemaSpotify = zfd.formData({
  url: zfd.text(
    z.string().url().min(1).refine(isValidSpotifyPlaylistUrl, {
      message: 'Invalid spotify playlist url',
    })
  ),
  category: zfd.text(
    z.string().refine(
      (value) => {
        return GENRES.some((genre) => genre.id === value);
      },
      { message: 'Select a genre' }
    )
  ),
});

export const addSpotifyPlaylist = action(
  FormSchemaSpotify,
  async ({ url, category }) => {
    // get session
    const session = await auth();

    // if no session
    if (!session) {
      throw new Error('You must be logged in');
    }

    const playlistIdFromUrl = playlistId({ url });
    const playlist = await getPlaylist(playlistIdFromUrl);

    const playlistExist = await prisma.spotifyPlaylist.findUnique({
      where: {
        playlist_id: playlistIdFromUrl,
      },
    });

    // if song already exists return error
    if (playlistExist) {
      return {
        success: false,
        message: 'Playlist already exists',
      };
    }

    const playlistData: Prisma.SpotifyPlaylistCreateInput = {
      playlist_image: playlist.images[0].url,
      playlist_title: playlist.name,
      playlist_description: playlist.description,
      playlist_total_tracks: playlist.tracks.total,
      playlist_external_urls: playlist.external_urls.spotify,
      category: category as Category,
      playlist_id: playlistIdFromUrl,
    };

    await prisma.spotifyPlaylist.create({
      data: playlistData,
    });

    return {
      success: true,
      message: 'Playlist added successfully!',
    };
  }
);

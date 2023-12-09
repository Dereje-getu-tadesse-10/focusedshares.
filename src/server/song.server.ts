'use server';
import { auth } from '@/src/lib/auth';
import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';
import { zfd } from 'zod-form-data';
import {
  formatDuration,
  getSongYt,
  isValidYouTubeUrl,
  videoId,
} from '@/src/lib/youtube';
import { GENRES } from '@/src/components/Forms/Youtube/genres';
import { prisma } from '../lib/prisma';
import { Category } from '@prisma/client';

export const action = createSafeActionClient();

const youtubeFormSchema = z.object({
  url: z.string().url().min(1).refine(isValidYouTubeUrl, {
    message: 'Invalid youtube url',
  }),
  category: z.string().refine(
    (value) => {
      return GENRES.some((genre) => genre.id === value);
    },
    { message: 'Select a genre' }
  ),
});

const FormSchema = zfd.formData({
  url: zfd.text(),
  category: zfd.text(),
});

export const addSong = action(FormSchema, async ({ url, category }) => {
  const session = await auth();

  if (!session) {
    throw new Error('You must be logged in');
  }

  const body = youtubeFormSchema.safeParse({ url, category });

  if (!body.success) {
    throw new Error('Oops, something went wrong');
  }

  const videoIdFromUrl = videoId({ url: url });
  const response = await getSongYt({ videoId: videoIdFromUrl });

  const exists = await prisma.youtubeSong.findUnique({
    where: {
      youtubeId: videoIdFromUrl,
    },
  });

  if (exists) {
    return {
      success: false,
      message: 'Song already exists',
    };
  }

  const data = {
    title: response.items[0].snippet.title,
    thumb: response.items[0].snippet.thumbnails.medium.url,
    channelTitle: response.items[0].snippet.channelTitle,
    viewCount: response.items[0].statistics.viewCount,
    youtubeId: body.data.url,
    duration: formatDuration(response.items[0].contentDetails.duration),
  };

  await prisma.youtubeSong.create({
    data: {
      category: body.data.category as Category,
      title: response.items[0].snippet.title,
      channelTitle: data.channelTitle,
      thumb: data.thumb,
      viewCount: data.viewCount,
      youtubeId: videoIdFromUrl,
      duration: data.duration,
    },
  });

  return {
    success: true,
    message: 'Song added successfully!',
  };
});


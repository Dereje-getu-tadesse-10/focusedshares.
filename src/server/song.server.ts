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

// add song form data schema
const FormSchema = zfd.formData({
  url: zfd.text(
    z.string().url().min(1).refine(isValidYouTubeUrl, {
      message: 'Invalid youtube url',
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

// add song action
export const addSong = action(FormSchema, async ({ url, category }) => {
  // get session
  const session = await auth();

  // if no session
  if (!session) {
    throw new Error('You must be logged in');
  }

  const videoIdFromUrl = videoId({ url: url });
  const response = await getSongYt({ videoId: videoIdFromUrl });

  // check if song already exists
  const exists = await prisma.youtubeSong.findUnique({
    where: {
      youtubeId: videoIdFromUrl,
    },
  });

  // if song already exists return error
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
    youtubeId: url,
    duration: formatDuration(response.items[0].contentDetails.duration),
  };

  // add song to database
  await prisma.youtubeSong.create({
    data: {
      category: category as Category,
      title: response.items[0].snippet.title,
      channelTitle: data.channelTitle,
      thumb: data.thumb,
      viewCount: data.viewCount,
      youtubeId: videoIdFromUrl,
      duration: data.duration,
    },
  });

  // return success
  return {
    success: true,
    message: 'Song added successfully!',
  };
});
